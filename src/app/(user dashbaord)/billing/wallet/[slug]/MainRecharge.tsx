"use client";
import {
  addBalanceTowallet,
  getWalletInfo,
} from "@/actions/Dashboard/CreditActions";
import MainNav from "@/components/(userdash)/MainNav";
import { useUserInfo } from "@/hooks/useUserInfo";
import { CreditAccount } from "@prisma/client";
import React, { useEffect, useState } from "react";

type Props = {};

export default function MainRecharge({ id }: { id: string }) {
  const [walletData, setWalletData] = useState<CreditAccount | null>(null);
  const userInfo = useUserInfo() || ""

  useEffect(() => {
    if (id) {
      const fetchWalletInfo = async () => {
        try {
          const data = await getWalletInfo(id || "");
          if (data) {
            setWalletData(data);
            console.log(data);
          } else {
            alert("Invalid ID");
          }
        } catch (error) {
          console.error(error);
        }
      };

      fetchWalletInfo();
    }
  }, [id]);

  const PaymentComponent: React.FC = () => {
    const [step, setStep] = useState(1);
    const [amount, setAmount] = useState<number>(0);
    const [paymentMethod, setPaymentMethod] = useState("");

    const handleContinue = async () => {
      if (step === 1 && amount) {
        setStep(2);
      } else if (step === 2 && paymentMethod) {
        // Proceed to payment handling
        const handleSubmit = await addBalanceTowallet(
          id,
          userInfo?.id || "",
          amount,
          paymentMethod
        );
        console.log(handleSubmit);
        alert(JSON.stringify(handleSubmit));
      }
    };

    return (
      <div className="flex bg-white h-[75vh] p-6 rounded-lg shadow-lg">
        {/* Left side: Stepper */}
        <div className="w-1/4 p-4 bg-[#E4E7EC] rounded-md">
          <div className="flex flex-col ">
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
            <div className="flex items-center space-x-4">
              <div className="w-5 h-5 rounded-full bg-gray-300" />
              <span className="text-black font-semibold">
                Payment
                <p className="text-[#3E4C59] text-[14px]">Payment details</p>
              </span>
            </div>
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
                <button
                  className={`flex items-center p-3 border rounded ${
                    paymentMethod === "Cryptomus" ? "bg-blue-100" : ""
                  }`}
                  onClick={() => setPaymentMethod("Cryptomus")}
                >
                  <img
                    src="/cryptomus-logo.svg"
                    alt="Cryptomus"
                    className="w-6 h-6 mr-2"
                  />
                  Cryptomus
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
      <section className="mx-5 rounded-md my-10 bg-white ">
        <PaymentComponent />
      </section>
    </main>
  );
}
