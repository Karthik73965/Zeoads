"use client";
import { getAllTxns, purchase5999 } from "@/actions/Dashboard/BillingActions";
import { useUserInfo } from "@/hooks/useUserInfo";
import DashNav from "@/components/(userdash)/DashNav";
import MainNav from "@/components/(userdash)/MainNav";
import PricingChild from "@/components/Pricing/PricingChild";
import React, { useCallback, useEffect, useState } from "react";
import { ErrorToast, SucessToast } from "@/utils/ToastFucntion";

// Razorpay integration
import Script from "next/script";

export default function Page() {
  const [transactions, setTransactions] = useState<any>(null);
  const userinfo = useUserInfo();
  const [loading, setLoading] = useState<boolean>(false);
  const [status, setStatus] = useState<string>("");

  // Fetch transactions and evaluate status
  const fetchTxns = useCallback(async () => {
    try {
      if (userinfo?.id) {
        const data = await getAllTxns(userinfo.id);
        console.log(data);
        setTransactions(data);
        if (data) {
          evaluateStatus(data);
        }
      }
    } catch (error) {
      console.log("Error fetching transactions:", error);
    }
  }, [userinfo?.id]);

  // Evaluate the user's current status based on their transaction history
  const evaluateStatus = (txns: any[]) => {
    if (txns.length > 0) {
      const now = new Date();
      const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
      const txnThisMonth = txns.find(
        (txn) => new Date(txn.createdAt) >= startOfMonth
      );

      if (txnThisMonth) {
        setStatus("enjoy");
      } else {
        setStatus("continue");
      }
    } else {
      setStatus("purchase");
    }
  };

  // Handle payment and trigger purchase process using Razorpay
  const handlePay = async () => {
    try {
      const createOrderId = async () => {
        try {
          const response = await fetch("/api/order", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              amount: 5999 * 100, // amount in paisa (Razorpay expects smallest unit)
              currency: "INR", // Razorpay currency
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
            amount: 5999 * 100, // Razorpay expects amount in the smallest unit
            currency: "INR",
            name: userinfo?.name || "User",
            description: "Purchase Plan",
            order_id: orderId,
            handler: async function (response: any) {
              try {
                // Call purchase5999 function once payment is successful
                const purchaseResponse = await purchase5999(
                  5999,
                  "INR",
                  userinfo?.id
                );
                if (purchaseResponse) {
                  SucessToast("Transaction successful");
                  fetchTxns(); // Fetch the latest transactions to update the status
                } else {
                  ErrorToast("Purchase failed, please contact support");
                }
              } catch (error) {
                console.error("Error during purchase:", error);
                ErrorToast("Something went wrong");
              }
            },
            prefill: {
              name: userinfo?.name || "",
              email: userinfo?.email || "",
            },
            theme: {
              color: "#3399cc",
            },
          };

          const rzp = new (window as any).Razorpay(options);
          rzp.open();
        } catch (error) {
          console.error("Error processing Razorpay payment:", error);
          ErrorToast("Payment failed");
        }
      };

      setLoading(true);
      await processRazorpayPayment(); // Trigger Razorpay payment process
      setLoading(false);
    } catch (error) {
      setLoading(false);
      ErrorToast("Payment failed");
      console.error("Error processing payment:", error);
    }
  };

  useEffect(() => {
    if (userinfo?.id) {
      fetchTxns();
    }
  }, [userinfo?.id, fetchTxns]);

  return (
    <main className="flex w-full">
      <DashNav route="Plans" />

      <section className="dh-bg w-[calc(100vw-252px)]">
        <MainNav />
        <Script
          id="razorpay-checkout-js"
          src="https://checkout.razorpay.com/v1/checkout.js"
        />
        <section className="gap-[24px] mt-5 border-[1px] border-[#E4E7EC] p-[16px] flex justify-between rounded-[8px]">
          <div className="w-[500px] bg-[#131516] h-[117px] p-[24px] text-white border-[1px] border-[#E4E7EC] rounded-[8px] text-center">
            <h3 className="font-medium mt-3 text-[24px]">Plans</h3>
          </div>
          <div className="w-[500px] bg-[#131516] h-[117px] p-[24px] text-white border-[1px] border-[#E4E7EC] rounded-[8px] text-center">
            <h3 className="font-medium text-[24px]">
              Recharge Via Self
              <p className="text-center text-[14px] text-[#E4E7EC]">
                {`(Non Commission Model)`}
              </p>
            </h3>
          </div>
        </section>
        <section className="flex gap-[16px]">
          <PricingChild
            image1={"/pricing/img1.png"}
            text1="Spending Limit"
            image2={"/pricing/img2.svg"}
            text2="Access"
            image3={"/pricing/img3.svg"}
            text3="Pixel / Pages / Domains"
            image4={"/pricing/img4.svg"}
            text4="Payment Methods"
            image5={"/pricing/img5.svg"}
            text5="ZEO Dashboard"
            image6={"/pricing/img6.svg"}
            text6="Support & Help"
            image7={"/pricing/img7.svg"}
            text7={`Any Other Charges <br/> ( Hidden Charges )`}
            image8={"/pricing/img8.svg"}
            text8="Payment for Ads Spend"
          />
          <PricingChild
            image1={undefined}
            text1="Unlimited"
            image2={undefined}
            text2="Full Admin Access + Billing Manage Access <br/> ( To Add Payment Method Yourself And Download Billing  Reports  )"
            image3={undefined}
            text3="Can Add Unlimited"
            image4={undefined}
            text4="A) INR Account - UPI / Net Banking <br/>B) USD Accounts – Via International Cards / Paypal <br/>All Payments Directly Paid to Facebook"
            image5={undefined}
            text5="Yes"
            image6={undefined}
            text6="ZEO Support & FB REP Support Enabled"
            image7={undefined}
            text7={`No Hidden Charges , No Maintainance or Monthly Charges`}
            image8={undefined}
            text8="INR Accounts - Prepaid<br>USD Accounts - Postpaid"
          />
        </section>
        <section className="gap-[24px] border-[1px] border-[#E4E7EC] p-[16px] flex justify-between rounded-[8px]">
          <div className="w-full bg-[#4779E8] h-[100px] p-[24px] text-white border-[1px] border-[#E4E7EC] rounded-[8px] text-center">
            <h3
              onClick={() => (status === "purchase" || status == "continue")&& handlePay()}
              className="font-semibold cursor-pointer text-[32px]"
            >
              {loading
                ? "Processing"
                : status === "enjoy"
                ? "Enjoy the Pack"
                : status === "continue"
                ? "Continue Another Month"
                : "5999 INR"}
            </h3>
          </div>
        </section>
      </section>
    </main>
  );
}
