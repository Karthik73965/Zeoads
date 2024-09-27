import React from "react";
import PricingChild from "./PricingChild";

type Props = {};

export default function Hero({}: Props) {
  return (
    <main className="px-10 md:px-20 pt-[72px] mt-10 ">
      <h1 className="text-center text-[20px] md:text-[56px] font-bold text-[#1F2933]">
        Select the Platform to see its Picing.
      </h1>
      <section className="bg-[#F5F6FA] py-[32px] md:px-[24px] gap-[16px] mt-5 md:h-[1413px]">
        <section className="gap-x-[24px] border-[1px]  border-[#E4E7EC] md:p-[16px] flex justify-between rounded-[8px]">
          <div className="md:w-[548px] w-[50%] bg-[#131516] h-[77px] md:h-[117px] px-[24px] md:p-[24px] text-white border-[1px] border-[#E4E7EC] rounded-[8px] md:text-center">
            <h3 className="font-medim  mt-3 text-[14px] md:text-[24px]">Plans</h3>
          </div>
          <div className="md:w-[548px] w-[50%] bg-[#131516] h-[77px] md:h-[117px]  md:p-[24px] p-2 text-white border-[1px] border-[#E4E7EC] rounded-[8px] md:text-center">
            <h3 className="font-medim   text-[14px] md:text-[24px]">
              Recharge Via Self
              <p className="text-center text-[10px] -ml-6 md:-ml-0  mt-2 md:mt-0 md:text-[14px] text-[#E4E7EC]">
                {"(Non Commission Model)"}
              </p>
            </h3>
          </div>
        </section>
        <section className="flex md:gap-[16px]">
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
            text7={`Any Other Charges ( Hidden Charges )`}
            image8={"/pricing/img8.svg"}
            text8="Payment for Ads Spend"
          />
          <PricingChild
            image1={undefined}
            text1="Unlimited"
            image2={undefined}
            text2="Full Admin Access + Billing Manage Access  ( To Add Payment Method Yourself And Download Billing  Reports  )"
            image3={undefined}
            text3="Can Add Unlimited"
            image4={undefined}
            text4="A) INR Account - UPI / Net Banking B) USD Accounts – Via International Cards / Paypal All Payments Directly Paid to Facebook"
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
        <section className="gap-[24px] border-[1px]  border-[#E4E7EC] p-[16px] flex justify-between rounded-[8px]">
          <div className="w-full bg-[#4779E8] h-[100px] p-[24px] text-white border-[1px] border-[#E4E7EC] rounded-[8px] text-center">
            <h3 className="font-semibold text-[32px]    ">5999 INR</h3>
          </div>
        </section>
      </section>
    </main>
  );
}
