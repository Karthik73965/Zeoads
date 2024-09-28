"use client";

import React, { useEffect, useState, useCallback } from "react";
import MainNav from "../MainNav";
import { useUserInfo } from "@/hooks/useUserInfo";
import "react-toastify/dist/ReactToastify.css";
import { getUserInfoDb } from "@/actions/StateActions";
import { uploadImageToS3 } from "@/actions/UploadS3";
import { Bounce, toast, ToastContainer, ToastTransition } from "react-toastify";
import { ErrorToast, SucessToast, WarnToast } from "@/utils/ToastFucntion";
import { CheckIsSubUser } from "@/utils/SubUserUtils";

type Props = {};

export default function MainSettings({}: Props) {
  const [userinfo, setuserinfo] = useState<any>("");
  const [name, setname] = useState<string>(userinfo?.name || "");
  const [email, setemail] = useState<string>(userinfo?.email || "");

  const [phoneNumber, setphoneNumber] = useState<string>(
    userinfo?.phoneNumber || ""
  );

  const [edit, setedit] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(
    userinfo?.image || ""
  );

  const data = useUserInfo();

  const notify = () =>
    toast("Image Uploaded to s3", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });

  const fetchinfo = useCallback(async () => {
    //@ts-ignore
    const info = await getUserInfoDb(data?.id);
    const checkSum = await CheckIsSubUser();
    checkSum ? WarnToast("Main Account User Information is showing here ") : "";
    setuserinfo(info);
    if (info) {
      setname(info.name);
      setemail(info.email);
      setphoneNumber(info.phoneNumber);
      setPreviewImage(info.image); // Set the existing image
    }
  }, [data?.id]);

  const handleUpdate = async () => {
    try {
      let imageUrl = previewImage;
      if (selectedImage) {
        imageUrl = await uploadImageToS3(selectedImage);
        console.log("Uploaded image URL:", imageUrl);
        const res = await fetch(imageUrl, {
          method: "PUT",
          headers: {
            "Content-Type": selectedImage.type,
          },
          body: selectedImage,
        });
        const fileUrl = imageUrl.split("?")[0];
        console.log(fileUrl);
      }
      // const updateddata = await UpdateUserInfo(userinfo.id, name, email, phoneNumber,)
      notify();
    } catch (error) {
      ErrorToast("Error updating user");
      console.log(error);
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  useEffect(() => {
    if (data?.id) {
      fetchinfo();
    }
  }, [data?.id, fetchinfo]);

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

      <main className="w-full dh-bg">
        <MainNav />
        <section className="bg-white mx-5 my-10 rounded-[8px] p-[24px] border-[1px] overflow-x-hidden">
          <section className="mx-5 flex justify-between ">
            <div>
              <div className="font-medium text-[#1F2933] text-[24px]">
                User Management
              </div>
              <div className="text-[#3E4C59] text-[14px] mt-1">
                Manage profile and security settings
              </div>
            </div>
            <div
              onClick={() => setedit(!edit)}
              className="border-[1px] cursor-pointer flex h-[40px] gap-[16px] rounded-[8px] px-[16px] py-[8px]"
            >
              <div>Edit</div>
              <img
                className="w-[24px] h-[24px]"
                src="/utils/edit.svg"
                alt="edit"
              />
            </div>
          </section>
          {/* profile info */}
          <div className="mt-5 border-b-[1px] pb-2 mx-5 border-[#E4E7EC]">
            <div className="flex flex-col md:flex-row gap-2 gap-x-10 justify-between">
              <div className="my-10">
                <div className="text-[#1F2933] font-medium">
                  Profile picture
                </div>
                <img
                  className="w-[120px] h-[120px] rounded-full my-3"
                  src={previewImage || ""}
                  alt="Profile"
                />
                {edit && (
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                  />
                )}
              </div>
              {edit ? (
                <div className="flex gap-x-10 justify-between -ml-32">
                  <div className="w-[173px] my-auto mr-10">
                    <div className="text-[#1F2933] font-medium">Name</div>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setname(e.target.value)}
                      className="text-[#3E4C59] outline-none border-[2px] rounded-sm p-3 mt-2"
                    />
                  </div>
                  <div className="w-[173px] my-auto mr-10">
                    <div className="text-[#1F2933] font-medium">Email</div>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setemail(e.target.value)}
                      className="text-[#3E4C59] outline-none border-[2px] rounded-sm p-3 mt-2"
                    />
                  </div>
                  <div className="w-[173px] my-auto mr-10">
                    <div className="text-[#1F2933] font-medium">
                      Phone Number
                    </div>
                    <input
                      type="text"
                      value={phoneNumber}
                      onChange={(e) => setphoneNumber(e.target.value)}
                      className="text-[#3E4C59] outline-none border-[2px] rounded-sm p-3 mt-2"
                    />
                  </div>
                </div>
              ) : (
                <>
                  <div className="w-[173px] my-auto">
                    <div className="text-[#1F2933] font-medium">Name</div>
                    <div className="text-[#3E4C59]">{userinfo?.name}</div>
                  </div>
                  <div className="w-[173px] my-auto">
                    <div className="text-[#1F2933] font-medium">Email</div>
                    <div className="text-[#3E4C59]">{userinfo?.email}</div>
                  </div>
                  <div className="w-[173px] my-auto">
                    <div className="text-[#1F2933] font-medium">
                      Phone Number
                    </div>
                    <div className="text-[#3E4C59]">
                      {userinfo?.phoneNumber}
                    </div>
                  </div>
                </>
              )}
            </div>
            {edit && (
              <div className="flex justify-end gap-x-10 mb-3 mx-6 mt-3 font-semibold">
                <button
                  onClick={() => setedit(!edit)}
                  className="text-[#3E4C59] h-[48px] py-3 w-[180px] px-8 rounded-[4px] border-[1px]"
                >
                  Cancel
                </button>
                <button
                  onClick={handleUpdate}
                  className="bg-[#4779E8] h-[48px] text-white w-[180px] py-3 px-8 rounded-[4px] border-[1px]"
                >
                  Save
                </button>
              </div>
            )}
          </div>
          {/* Panel info */}
          <section className="border-b-[1px] mt-4 mx-5 flex flex-col md:flex-row gap-2 justify-between border-[#E4E7EC] h-[180px]">
            <div className="my-auto">
              <div className="text-[#1F2933] font-medium">Panel Settings</div>
              <div className="text-[#3E4C59] text-[14px]">
                Your Timezone and language
              </div>
            </div>
            <div className="my-auto">
              <div className="text-[#1F2933] font-medium">Commission</div>
              <div className="text-[#3E4C59] text-[14px]">16% Percent</div>
            </div>
            <div className="my-auto">
              <div className="text-[#1F2933] font-medium">Language</div>
              <div className="text-[#3E4C59] text-[14px]">English</div>
            </div>
            <div className="my-auto">
              <div className="text-[#1F2933] font-medium">Time Zone</div>
              <div className="text-[#3E4C59] text-[14px]">
                IST - Indian Standard Time
              </div>
            </div>
            <div className="border-[1px] my-auto flex h-[40px] gap-[16px] rounded-[8px] px-[16px] py-[8px]">
              <div>Edit</div>
              <img
                className="w-[24px] h-[24px]"
                src="/utils/edit.svg"
                alt="edit"
              />
            </div>
          </section>
          {/* KYC status */}
          <section className="border-b-[1px] py-10 mt-16 mx-5 flex justify-between border-[#E4E7EC]">
            <div className="">
              <div className="primary-text font-semibold">KYC Status</div>
            </div>
            <div>
              <div className="w-[100px] text-[14px] pr-4 h-[40px] text-center cursor-pointer font-medium text-[#171C20]">
                <span className="text-[#F3CC02] bg-[#FCF8DD] py-[4px] px-[12px]">
                  Pending
                </span>
              </div>
            </div>
          </section>
          {/* CTA */}
          <section className="border-[1px]  flex justify-between border-[#E4E7EC]">
            <div className="flex flex-col md:flex-row h-auto p-8 gap-[24px]">
              <img
                className="rounded-full w-[56px] h-[56px]"
                src="/utils/walletblue.svg"
                alt="wallet"
              />
              <div>
                <div className="text-[24px] font-medium text-[#1F2933]">
                  Recharge Your wallet
                </div>
                <p className="text-[#3E4C59] text-[14px] mt-2">
                  Feel free to contact us if you have any doubt regarding our
                  plans.
                </p>
              </div>
              <div className="flex flex-col md:flex-row gap-[48px] whitespace-nowrap ">
                <button className="w-full primary-text h-[48px] rounded-[4px] py-[12px] px-[32px] border-[1px] border-[#4779E8] text-center">
                  Contact Us
                </button>
                <button className="text-white h-[48px] rounded-[4px] py-[12px] px-[32px] border-[1px] bg-[#4779E8] text-center">
                  Let&apos;s get Started
                </button>
              </div>
            </div>
          </section>
        </section>
      </main>
    </>
  );
}
