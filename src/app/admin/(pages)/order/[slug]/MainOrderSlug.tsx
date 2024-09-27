"use client";
import { getOrderInfo, SubmitOrder } from "@/actions/admin/OrderActions";
import AdminMainNav from "@/app/admin/components/AdminMainNav";
import { ErrorToast, SucessToast } from "@/utils/ToastFucntion";
import React, { useEffect, useState } from "react";

type Props = {};

export default function MainOrderSlug({ id }: { id: string }) {
  const [orderinfo, setOrderInfo] = useState<any>({});
  const [link, setlink] = useState<string | null>("");

  useEffect(() => {
    const fetchOrderInfo = async () => {
      try {
        const data = await getOrderInfo(id);
        setOrderInfo(data);
        console.log(data);
        if (data) {
          setlink(data?.AddLink);
        }
      } catch (error) {
        console.log(error);
      }
    };

    if (id) {
      fetchOrderInfo();
    }
  }, [id]);

  const submitlink = async () => {
    try {
      if (link) {
        const response = await SubmitOrder(id, link);
        if (response) {
          SucessToast("Link added SucessFully");
        } else {
          ErrorToast("something wenr Wrong ");
        }
      } else {
        ErrorToast("nill");
      }
    } catch (error) {
      ErrorToast("error");
      console.log(error);
    }
  };

  return (
    <main className="w-full dh-bg">
      <AdminMainNav />
      <section className="bg-white mt-10 mx-5 rounded-lg p-6">
        <h4 className="text-[#171C20]  text-[20px]  font-medium">
          Submit Your Delivery Here
        </h4>
        <p className="text-[#3E4C59] mt-5 text-[14px] ">
          Hello, to deliver your product to your customer kindly share the order
          link below.
        </p>
        <div className="mt-6">
          <div>Link</div>
          <div className="flex  gap-[16px] mt-1">
            <input
              type="text"
              value={link || ""}
              onChange={(e) => setlink(e.target.value)}
              className="outline-none text-[#52606D] w-[416px] rounded-lg border-[1px] p-3 "
              placeholder="https://example.link"
            />
            <button
              onClick={() => submitlink()}
              className="text-white w-[102px] gap-[8px] p-2 bg-[#4779E8] h-[48px] rounded-[8px]  text-center"
            >
              Submit
            </button>
          </div>
          <p className="text-[#727F8F]  text-[14px] mt-1">
            After submitting the link they will get permission to create Ads
            Agency account.
          </p>
        </div>
      </section>
      <section className="mx-5 p-6 mt-10 bg-white rounded-lg">
        <div className="flex justify-between">
          <div className="flex gap-[24px]">
            <img src="/utils/ArrowLeft..svg" alt="arrow" />
            <div className="text-[#1F2933] text-[20px] font-medium ">
              {orderinfo?.id}
            </div>
            <button className="text-white w-[64px] gap-[8px] text-[12px] mt-1 bg-[#4779E8] h-[26px] rounded-full  text-center">
              Deliver
            </button>
          </div>
          <button className="text-white w-[159px] gap-[8px] px-[24px] py-[8px] mt-1 bg-[#4779E8] h-[40px] rounded-[4px]  text-center">
            Create Refund
          </button>
        </div>
        <div className="flex mt-5 gap-[8px] ">
          <img className="w-[32px] h-[32px]" src="/utils/new.svg" alt="new" />
          <div className="mt-1  text-[#3E4C59] font-medium">Order details</div>
        </div>
        {/* acc info */}
        <section className="border-[1px] rounded-[8px] mt-5 -p-3">
          <section className="mt-5  px-[24px]  py-[16px] flex  justify-between flex-wrap">
            {/* section */}
            <div className=" grid ">
              <div>Order Create On</div>
              <div className="flex text-[14px] mt-1 gap-[16px] text-[#727F8F] truncate w-[100px] justify-between">
                {orderinfo?.createdAt &&
                  new Date(orderinfo.createdAt).toLocaleDateString()}
              </div>
            </div>
            {/* section */}
            <div className=" grid w-[100px]">
              <div>Name</div>
              <div className="flex text-[14px] mt-1 gap-[16px] text-[#727F8F]  w-[120px] justify-between">
                <div>{orderinfo?.name}</div>
              </div>
            </div>
            {/* section */}
            <div className=" grid w-[100px]">
              <div>Phone No.</div>
              <div className="flex text-[14px] mt-1 gap-[16px] text-[#727F8F] truncate -ml-3 w-[110px] justify-between">
                <div>{orderinfo?.phoneNumber}</div>
              </div>
            </div>
            {/* section */}
            <div className=" grid w-[100px]">
              <div>Customer Email</div>
              <div className="flex text-[14px] mt-1 gap-[16px] text-[#727F8F] truncate w-[100px] justify-between">
                <div>{orderinfo?.email}</div>
              </div>
            </div>
            {/* section */}
            <div className=" grid ">
              <div>Payment</div>
              <div className="flex text-[14px] mt-1 gap-[16px] text-[#727F8F] truncate  justify-between">
                <div>5999 INR</div>
                {/* <div className="bg-[#4779E8] text-white pt-2 px-2 rounded-3xl">
                                    Prepaid
                                </div> */}
              </div>
            </div>
          </section>
          <section className="mt-5 px-[24px] justify-between flex flex-wrap">
            {/* section */}
            <div className=" grid w-[100px]">
              <div>Order Delivered On </div>
              <div className="flex text-[14px] mt-1 gap-[16px] text-[#727F8F] truncate w-[100px] justify-between">
                {orderinfo?.updatedAt &&
                  new Date(orderinfo.updatedAt).toLocaleDateString()}
              </div>
            </div>
            {/* section */}
            <div className=" grid w-[100px]">
              <div>Channel</div>
              <div className="flex text-[14px] mt-1 gap-[16px] text-[#727F8F] truncate w-[100px] justify-between">
                <div>{orderinfo?.weblink}</div>
              </div>
            </div>
            {/* section */}
            <div className=" grid w-[100px]">
              <div>Address</div>
              <div className="flex text-[14px] mt-1 gap-[16px] text-[#727F8F] truncate w-[100px] justify-between">
                <div>nill</div>
              </div>
            </div>
            {/* section */}
            <div className=" grid w-[100px]">
              <div>Billing Type</div>
              <div className="flex text-[14px] mt-1 gap-[16px] text-[#727F8F] truncate w-[100px] justify-between">
                <div>Individual</div>
              </div>
            </div>
            {/* section */}
            <div className=" grid w-[100px]">
              <div>Country</div>
              <div className="flex text-[14px] mt-1 gap-[16px] text-[#727F8F] truncate w-[100px] justify-between">
                <div>{orderinfo?.timezone}</div>
              </div>
            </div>
          </section>
        </section>
      </section>
    </main>
  );
}
