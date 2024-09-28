"use client";
import React, { useEffect, useState, useCallback } from "react";
import MainNav from "../MainNav";
import { useUserInfo } from "@/hooks/useUserInfo";
import {
  InvoiceInfo,
  UpdateInvoiceInfp,
} from "@/actions/Dashboard/UtilsActions";
import { SucessToast } from "@/utils/ToastFucntion";
import { getVideobyTitle } from "@/actions/admin/NotifyActions";

type Props = {};

export default function MainInvoice({}: Props) {
  const [invoiceInfo, setInvoiceInfo] = useState<any>(null);
  const userInfo = useUserInfo();

  const [name, setName] = useState<string>("");
  const [type, setType] = useState<string>("");
  const [country, setCountry] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [zipcode, setZipcode] = useState<string>("");
  const [taxOffice, setTaxOffice] = useState<string>("");
  const [regNumber, setRegNumber] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [selectedModel, setSelectedModel] = useState<string>("");
  const [selectedCurrency, setSelectedCurrency] = useState<string>("");

  const [videoUrl, setVideoUrl] = useState<string>("");

  const getVideo = useCallback(async () => {
    try {
      const data = await getVideobyTitle("BANNER_CTA");
      if (data) {
        setVideoUrl(data);
      }
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    getVideo();
  }, [getVideo]);
  const fetchInvoice = useCallback(async () => {
    if (userInfo?.id) {
      try {
        const info = await InvoiceInfo(userInfo.id);
        setInvoiceInfo(info);
        setName(info?.name || "");
        setType(info?.type || "");
        setCountry(info?.country || "");
        setEmail(info?.email || "");
        setAddress(info?.adress || "");
        setZipcode(info?.zipcode || "");
        setTaxOffice(info?.taxOffice || "");
        setRegNumber(info?.Reg_number || "");
        setPhoneNumber(info?.phoneNumber || "");
        setSelectedModel(info?.model || "");
        setSelectedCurrency(info?.currency || "");
      } catch (error) {
        console.error("Failed to fetch invoice info", error);
      }
    }
  }, [userInfo?.id]);

  const submitInvoice = async () => {
    try {
      const response = await UpdateInvoiceInfp(
        userInfo.id,
        name,
        type,
        country,
        email,
        address,
        zipcode,
        taxOffice,
        regNumber,
        phoneNumber,
        selectedModel,
        selectedCurrency
      );
      console.log(response);
      SucessToast("Invoice updated successfully");
    } catch (error) {
      console.error("Failed to update invoice info", error);
    }
  };

  useEffect(() => {
    fetchInvoice();
  }, [fetchInvoice]);

  return (
    <main className="w-full dh-bg">
      <MainNav />
      <main className="my-10 mx-5 bg-white rounded-[8px] p-[24px] border-[1px]">
        <h3 className="text-[#1F2933] font-medium text-[24px]">
          Invoice Settings
        </h3>
        <p className="text-[#3E4C59] mt-1 text-[14px]">
          Please enter company information
        </p>
        <div className="primary-text flex mt-2 gap-[5px]">
          See all invoices{" "}
          <img src="/userDash/Agencies/tiltedblue.svg" alt="" />
        </div>
        {/* Details */}
        <section className="flex justify-between flex-1 mt-5">
          <div>
            <div className="text-[#1F2933] font-medium">Billing Type * </div>
            <input
              type="text"
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="outline-none mt-5 px-[16px] py-[12px] w-[434px] border-[1px] rounded-[8px] h-[56px]"
            />
          </div>
          <div>
            <div className="text-[#1F2933] font-medium">Country * </div>
            <input
              type="text"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="outline-none mt-5 px-[16px] py-[12px] w-[434px] border-[1px] rounded-[8px] h-[56px]"
            />
          </div>
        </section>
        {/* text fields */}
        <section className="flex justify-between flex-1 mt-5">
          <div>
            <div className="text-[#1F2933] font-medium">Name * </div>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="outline-none mt-5 px-[16px] py-[12px] w-[434px] border-[1px] rounded-[8px] h-[56px]"
            />
          </div>
          <div>
            <div className="text-[#1F2933] font-medium">Email * </div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="outline-none mt-5 px-[16px] py-[12px] w-[434px] border-[1px] rounded-[8px] h-[56px]"
            />
          </div>
        </section>
        <div className="mt-5">
          <div className="text-[#1F2933] font-medium">Address Details * </div>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="outline-none mt-5 px-[16px] py-[12px] w-full border-[1px] rounded-[8px] h-[80px]"
          />
        </div>
        {/* video */}
        <section className="my-4 bg-white rounded-[8px] p-[24px] border-[1px] border-[#E4E7EC]">
          <div className="flex gap-[24px]">
            {videoUrl ? (
              <video
                className=" w-[534px] h-[320px] rounded-xl mt-5 rounded-t-3xl"
                src={videoUrl}
                controls
              ></video>
            ) : (
              <img
                className="w-[534px] h-[320px] rounded-[8px]"
                src="/userDash/video.svg"
                alt="video"
              />
            )}

            <div className="mt-10">
              <div className="text-[#727F8F]">Here&apos;s Quick Tutorial!</div>
              <h3 className="font-medium mt-5 text-[24px] text-[#1F2933]">
                Watch our video guide - learn how to start your Zeoads account
                today.
              </h3>
              <div className="primary-text mt-5 font-medium">
                Feel free to contact our support{" "}
              </div>
            </div>
          </div>
          {/* stuff */}
          <div className="mt-5">
            <div className="text-[#171C20] font-medium">Select Model </div>
            <div className="flex mt-3">
              <div
                className={`px-[16px] py-[8px] gap-[16px] flex text-center rounded-[4px] h-[40px] ${
                  selectedModel === "commission" ? "bg-gray-200" : ""
                }`}
                onClick={() => setSelectedModel("commission")}
              >
                <input
                  name="model"
                  type="radio"
                  checked={selectedModel === "commission"}
                  onChange={() => setSelectedModel("commission")}
                />
                <div>Commission Based Model</div>
              </div>
              <div
                className={`px-[16px] py-[8px] gap-[16px] flex text-center rounded-[4px] h-[40px] ${
                  selectedModel === "non-commission" ? "bg-gray-200" : ""
                }`}
                onClick={() => setSelectedModel("non-commission")}
              >
                <input
                  name="model"
                  type="radio"
                  checked={selectedModel === "non-commission"}
                  onChange={() => setSelectedModel("non-commission")}
                />
                <div>Non-Commission Based Model</div>
              </div>
            </div>

            <div className="mt-5">
              <div className="text-[#171C20] font-medium">Select Currency </div>
              <div className="flex mt-3 gap-[16px]">
                <button
                  className={`px-[16px] py-[8px] border-[1px] border-[#4779E8] text-center rounded-[4px] h-[40px] ${
                    selectedCurrency === "USD" ? "bg-gray-200" : ""
                  }`}
                  onClick={() => setSelectedCurrency("USD")}
                >
                  USD
                </button>
                <button
                  className={`px-[16px] py-[8px] border-[1px] border-[#4779E8] text-center rounded-[4px] h-[40px] ${
                    selectedCurrency === "INR" ? "bg-gray-200" : ""
                  }`}
                  onClick={() => setSelectedCurrency("INR")}
                >
                  INR
                </button>
              </div>
            </div>
          </div>
        </section>
        {/* remaining details */}
        <section className="mt-5">
          <div className="text-[#1F2933] font-medium">Zip Code * </div>
          <input
            type="text"
            value={zipcode}
            onChange={(e) => setZipcode(e.target.value)}
            className="outline-none mt-5 px-[16px] py-[12px] w-full border-[1px] rounded-[8px] h-[56px]"
          />
        </section>
        <section className="mt-5">
          <div className="text-[#1F2933] font-medium">Tax Office * </div>
          <input
            type="text"
            value={taxOffice}
            onChange={(e) => setTaxOffice(e.target.value)}
            className="outline-none mt-5 px-[16px] py-[12px] w-full border-[1px] rounded-[8px] h-[56px]"
          />
        </section>
        <section className="mt-5">
          <div className="text-[#1F2933] font-medium">
            Registration Number *{" "}
          </div>
          <input
            type="text"
            value={regNumber}
            onChange={(e) => setRegNumber(e.target.value)}
            className="outline-none mt-5 px-[16px] py-[12px] w-full border-[1px] rounded-[8px] h-[56px]"
          />
        </section>
        <section className="mt-5">
          <div className="text-[#1F2933] font-medium">Phone Number * </div>
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="outline-none mt-5 px-[16px] py-[12px] w-full border-[1px] rounded-[8px] h-[56px]"
          />
        </section>
        <button
          onClick={submitInvoice}
          className="px-[16px] py-[8px] bg-[#4779E8] text-white rounded-[4px] mt-5"
        >
          Save Changes
        </button>
      </main>
    </main>
  );
}
