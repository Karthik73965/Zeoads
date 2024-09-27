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
import React, { useEffect, useState, useCallback } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout,
} from "@stripe/react-stripe-js";
import { ErrorToast, SucessToast } from "@/utils/ToastFucntion";

// Stripe integration
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string
);

export default function MainRecharge({ id }: { id: string }) {
  const [walletData, setWalletData] = useState<CreditAccount | null>(null);
  const userInfo = useUserInfo() || { id: "" }; // Default value to prevent null errors
  const [paymentMethod, setPaymentMethod] = useState<string>("");

  useEffect(() => {
    if (id) {
      const fetchWalletInfo = async () => {
        try {
          const data = await getWalletInfo(id || "");
          if (data) {
            setWalletData(data);
            console.log(data);
          } else {
            ErrorToast("Invalid ID");
          }
        } catch (error) {
          ErrorToast("Something went wrong")
          console.error(error);
        }
      };

      fetchWalletInfo();
    }
  }, [id]);

  const PaymentComponent: React.FC = () => {
    const [step, setStep] = useState(1);
    const [amount, setAmount] = useState<number>(0);

    // Razorpay logic
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
                const analyticsRes = await AnalyticsFunc(null, amount, false);
                console.log("Transaction recorded successfully.", analyticsRes);
              } catch (error) {
                console.log("Error logging analytics:", error);
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

    // Stripe logic
// Stripe logic
const fetchClientSecret = useCallback(async () => {
  try {
    const response = await fetch("/api/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount: amount * 100, // amount in smallest unit (e.g., cents or paise)
        currency: walletData?.currency || "INR",
      }),
    });
    const data = await response.json();
    return data.clientSecret;
  } catch (error) {
    console.error("Error fetching Stripe client secret:", error);
  }
}, [amount]);

const stripeOptions = {
  clientSecret: fetchClientSecret(),
};


    const processStripePayment = () => {
      // Opens the Stripe Embedded Checkout
      const stripeOptions = { fetchClientSecret };
      return (
        <EmbeddedCheckoutProvider
          stripe={stripePromise}
          options={stripeOptions}
        >
          <EmbeddedCheckout />
        </EmbeddedCheckoutProvider>
      );
    };

    const handleContinue = async () => {
      if (step === 1 && amount > 0) {
        setStep(2);
      } else if (step === 2) {
        if (paymentMethod === "Razorpay") {
          await processRazorpayPayment();
        } else if (paymentMethod === "Stripe") {
          processStripePayment();
        }
      }
    };

    return (
      <div className="flex bg-white h-[75vh] p-6 rounded-lg shadow-lg">
        <Script
          id="razorpay-checkout-js"
          src="https://checkout.razorpay.com/v1/checkout.js"
        />
        {/* Left side: Stepper */}
        <div className="w-1/4 p-4 bg-[#E4E7EC] rounded-md">
          <div className="flex flex-col">
            {/* Amount Step */}
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
            {/* Payment Method Step */}
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
                className="w-[364px] p-3 bg-blue-500 text-white ml-5 rounded"
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
              <div className="flex flex-col space-y-4 mb-4">
                <button
                  className={`flex items-center p-3 border rounded ${
                    paymentMethod === "Razorpay" ? "bg-blue-100" : ""
                  }`}
                  onClick={() => setPaymentMethod("Razorpay")}
                >
                  <img
                    src="/razorpay-logo.svg"
                    alt="Razorpay"
                    className="w-6 h-6 mr-2"
                  />
                  Razorpay
                </button>
                <button
                  className={`flex items-center p-3 border rounded ${
                    paymentMethod === "Stripe" ? "bg-blue-100" : ""
                  }`}
                  onClick={() => setPaymentMethod("Stripe")}
                >
                  <img
                    src="/stripe-logo.svg"
                    alt="Stripe"
                    className="w-6 h-6 mr-2"
                  />
                  Stripe
                </button>
              </div>
              <button
                className="w-full p-3 bg-blue-500 text-white rounded"
                onClick={handleContinue}
              >
                Continue
              </button>
            </div>
          )}
        </div>
      </div>
    );  
  };

  return (
    <main className="w-full">
      <MainNav />
      <PaymentComponent />
    </main>
  );
}
