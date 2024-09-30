"use client";
import { AnalyticsFunc } from "@/actions/admin/AnalyticsActions";
import Script from "next/script";
import {
  addBalanceTowallet,
  getWalletInfo,
} from "@/actions/Dashboard/CreditActions";
import MainNav from "@/components/(userdash)/MainNav";
import { useUserInfo } from "@/hooks/useUserInfo";
import { CreditAccount } from "@prisma/client";
import React, { useEffect, useState, useCallback, useMemo } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout,
} from "@stripe/react-stripe-js";
import { ErrorToast, SucessToast, WarnToast } from "@/utils/ToastFucntion";

// Stripe integration
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string
);

export default function MainRecharge({ id }: { id: string }) {
  const [walletData, setWalletData] = useState<CreditAccount | null>(null);
  const userInfo = useUserInfo() || { id: "" }; // Default value to prevent null errors
  const [paymentMethod, setPaymentMethod] = useState<string>("");
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [amount, setAmount] = useState<number>(0);
  const [step, setStep] = useState<number>(1);
  const [showModal, setShowModal] = useState<boolean>(false); // New state for showing modal

  useEffect(() => {
    const fetchWalletInfo = async () => {
      if (!id) return;
      try {
        const data = await getWalletInfo(id);
        if (data) {
          setWalletData(data);
          console.log(data);
        } else {
          ErrorToast("Invalid ID");
        }
      } catch (error) {
        ErrorToast("Something went wrong");
        console.error(error);
      }
    };

    fetchWalletInfo();
  }, [id , userInfo?.id]);

  const createOrderId = async () => {
    try {
      const response = await fetch("/api/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: amount * 100, // amount in paisa for Razorpay
          currency: walletData?.currency || "INR",
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to create order");
      }

      const data = await response.json();
      return data.orderId;
    } catch (error) {
      console.error("Error creating order:", error);
    }
  };

  const processRazorpayPayment = async () => {
    try {
      const orderId = await createOrderId();

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!,
        amount: amount,
        currency: walletData?.currency || "INR",
        name: userInfo?.name || "User",
        description: "Add funds to wallet",
        order_id: orderId,
        handler: async function (response: any) {
          const paymentResponse = await addBalanceTowallet(
            id,
            userInfo.id,
            amount,
            "Razorpay"
          );
          if (paymentResponse) {
            try {
              await AnalyticsFunc(null, amount, false);
              SucessToast("Transaction successfully.");
            } catch (error) {
              ErrorToast("Something went wrong ");
              WarnToast("Please contact Support");
            }
            SucessToast("Payment Successful!");
          }
        },
        prefill: {
          name: userInfo?.name || "",
          email: userInfo?.email || "",
        },
        theme: {
          color: "#3399cc",
        },
      };

      const rzp = new (window as any).Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error("Error processing Razorpay payment:", error);
    }
  };

  const fetchClientSecret = useCallback(async () => {
    if (!amount || paymentMethod !== "Stripe") return;
  
    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: amount * 100, // Stripe expects amount in smallest unit (e.g., cents or paise)
          currency: walletData?.currency || "INR",
          userId: userInfo.id, // Include userId
          walletId: walletData?.id, // Include walletId if available
        }),
      });
  
      const data = await response.json();
      setClientSecret(data.clientSecret);
      setShowModal(true); // Show the modal once clientSecret is set
    } catch (error) {
      console.error("Error fetching Stripe client secret:", error);
    }
  }, [amount, paymentMethod, userInfo?.id ,  walletData]);
  

  const handleContinue = async () => {
    if (step === 1 && amount > 0) {
      setStep(2);
    } else if (step === 2) {
      if (paymentMethod === "Razorpay") {
        await processRazorpayPayment();
      } else if (paymentMethod === "Stripe") {
        await fetchClientSecret(); // Fetch the client secret before proceeding with Stripe payment
      }
    }
  };

  return (
    <div className="w-full grid">
      <MainNav />
      <div className="flex bg-white h-[75vh] p-6 rounded-lg shadow-lg">
        <Script
          id="razorpay-checkout-js"
          src="https://checkout.razorpay.com/v1/checkout.js"
        />
        {/* Left side: Stepper */}
        <div className="w-1/4 p-4 bg-[#E4E7EC] rounded-md">
          <div className="flex flex-col">
            {/* Step indicators */}
            <div className="flex items-center space-x-4">
              <div
                className={`w-5 h-5 -mt-2 -mb-2 rounded-full ${
                  step >= 1 ? "bg-blue-500" : "bg-gray-300"
                }`}
              />
              <span
                className={`mt-2 ${
                  step >= 1 ? "text-black font-semibold" : "text-gray-500"
                }`}
              >
                Amount
                <p className="text-[#3E4C59] text-[14px]">
                  Amount you want to add
                </p>
              </span>
            </div>
            <div className="h-20 -my-3 w-1 bg-gray-300 ml-2" />
            <div className="flex items-center space-x-4">
              <div
                className={`w-7 -mt-2 h-5 rounded-full ${
                  step >= 2 ? "bg-blue-500" : "bg-gray-300"
                }`}
              />
              <span
                className={`${
                  step >= 2 ? "text-black font-semibold" : "text-gray-500"
                }`}
              >
                Payment Method
                <p className="text-[#3E4C59] text-[14px]">
                  Choose payment method for your payment
                </p>
              </span>
            </div>
            <div className="h-20 -my-5 w-1 bg-gray-300 ml-2" />
          </div>
        </div>

        {/* Right side: Form */}
        <div className="w-3/4 p-4">
          {step === 1 && (
            <div>
              <h2 className="text-2xl font-semibold mb-4">
                How much do you want to pay?
              </h2>
              <div className="mb-4 w-[364px] ml-4">
                <select
                  className="w-full border p-3 rounded"
                  defaultValue="Main Wallet"
                >
                  <option>{walletData?.name || ""}</option>
                </select>
              </div>
              <div className="flex items-center mb-4">
                <span className="mr-2">{walletData?.currency || ""}</span>
                <input
                  type="number"
                  className="outline-none border-[1px] p-3 w-[364px] rounded"
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                />
              </div>
              <div className="text-sm ml-5 text-gray-500 mb-4">
                Current Balance: {walletData?.balance || ""}
              </div>
              <button
                className="w-[364px] p-3 bg-blue-500 text-white ml-4 rounded-md"
                onClick={handleContinue}
              >
                Continue
              </button>
            </div>
          )}

          {step === 2 && (
            <div>
              <h2 className="text-2xl font-semibold mb-4">
                Choose Payment Method
              </h2>
              <div className="space-y-3">
                <div className="border-[1px] w-[364px] p-3 rounded-md">
                  <label>
                    <input
                      type="radio"
                      name="payment-method"
                      value="Razorpay"
                      className="mr-2"
                      onChange={() => setPaymentMethod("Razorpay")}
                    />
                    Razorpay
                  </label>
                </div>
                <div className="border-[1px] w-[364px] p-3 rounded-md">
                  <label>
                    <input
                      type="radio"
                      name="payment-method"
                      value="Stripe"
                      className="mr-2"
                      onChange={() => setPaymentMethod("Stripe")}
                    />
                    Stripe
                  </label>
                </div>
              </div>
              <button
                className="w-[364px] p-3 mt-5 bg-blue-500 text-white ml-4 rounded-md"
                onClick={handleContinue}
              >
                Continue
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Modal for Stripe payment */}
      {showModal && clientSecret && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white w-[90%] md:w-[60%] lg:w-[50%] xl:w-[40%] p-5 rounded-lg shadow-lg relative">
            <button
              className="absolute top-2 right-2 text-xl text-gray-500"
              onClick={() => setShowModal(false)} // Close modal on click
            >
              &times;
            </button>

            <EmbeddedCheckoutProvider
              stripe={stripePromise}
              options={{ clientSecret }}
            >
              <EmbeddedCheckout className="h-[80vh] overflow-scroll thin-scroll" />
            </EmbeddedCheckoutProvider>
          </div>
        </div>
      )}
    </div>
  );
}
