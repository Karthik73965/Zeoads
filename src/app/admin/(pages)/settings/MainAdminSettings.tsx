"use client";
import React, { useState } from "react";
import AdminMainNav from "../../components/AdminMainNav";

type Props = {};

export default function MainAdminSettings({}: Props) {
  const [name, setname] = useState<string>("Test name ");
  const [email, setemail] = useState<string>("Test@ymal.in ");
  const [password, setpassword] = useState<string>("Test@ymal.in ");
  const [phoneNumber, setPhoneNumber] = useState<string>("+91 34234234");
  const [adress, setAddress] = useState<string>("I dont know where i live ");
  const [pinCode, serPincode] = useState<string>("98989");
  const [bio, setbio] = useState<string>(
    "I am a designer based in Philadelphia, making great software at Figma."
  );

  const userinfo = {
    name: "Test Name",
  };
  return (
    <main className="w-full dh-bg">
      <AdminMainNav />
      <section className="m-4 p-6 bg-white border-[1px] rounded-xl h-screen">
        <h5 className="text-[20px] font-medium ">Profile Settings</h5>
        {/* image */}
        <div className="mt-10 flex gap-x-5">
          <img
            className="w-[65px] h-[65px] rounded-full"
            src="/userDash/Nav/profile.svg"
            alt=""
          />
          <div className="mt-2">
            <div className="font-medium  capitalize">{userinfo?.name}</div>
            <div className="text-[14px]  text-[#7B8795] ">
              Change Profile Pic
            </div>
          </div>
        </div>
        {/* Feilds  */}
        <section className="mt-5">
          {/* 1 */}
          <div className="flex justify-between">
            <div>
              <label htmlFor="Name">Name</label> <br />
              <input
                value={name}
                onChange={(e) => setname(e.target.value)}
                type="text"
                className="text-md w-[35vw] border-[1px] rounded-md outline-none p-2 "
              />
            </div>
            <div>
              <label htmlFor="Name">Email</label> <br />
              <input
                value={email}
                onChange={(e) => setemail(e.target.value)}
                type="text"
                className="text-md w-[35vw] border-[1px] rounded-md outline-none p-2 "
              />
            </div>
          </div>
          {/* 2 */}
          <div className="flex justify-between mt-3">
            <div>
              <label htmlFor="Name">Password</label> <br />
              <input
                value={password}
                onChange={(e) => setpassword(e.target.value)}
                type="password"
                className="text-md w-[35vw] border-[1px] rounded-md outline-none p-2 "
              />
            </div>
            <div>
              <label htmlFor="Name">Phone</label> <br />
              <input
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                type="text"
                className="text-md w-[35vw] border-[1px] rounded-md outline-none p-2 "
              />
            </div>
          </div>
          {/* 3 */}
          <div className="flex justify-between mt-3">
            <div>
              <label htmlFor="Name">Adress</label> <br />
              <input
                value={adress}
                onChange={(e) => setAddress(e.target.value)}
                type="text"
                className="text-md w-[35vw] border-[1px] rounded-md outline-none p-2 "
              />
            </div>
            <div>
              <label htmlFor="Name">Pin code </label> <br />
              <input
                value={pinCode}
                onChange={(e) => serPincode(e.target.value)}
                type="text"
                className="text-md w-[35vw] border-[1px] rounded-md outline-none p-2 "
              />
            </div>
          </div>
          {/* bio */}
          <div className="mt-5 ">
            <label htmlFor="">Bio</label> <br />
            <textarea
              className="w-full  border-[1px] rounded-md outline-none p-2"
              value={bio}
              onChange={(e) => setbio(e.target.value)}
              rows={5}
            ></textarea>
          </div>
          <div className=" flex  justify-start gap-x-10 mb-3 mx-6 mt-3 font-semibold">
            <button className="text-[#3E4C59] h-[48px] py-3 w-[180px] px-8 rounded-[4px] border-[1px]">
              Cancel
            </button>
            <button className="bg-[#4779E8] h-[48px] text-white w-[180px] py-3 px-8 rounded-[4px] border-[1px]">
              Save
            </button>
          </div>
        </section>
        <div></div>
      </section>
    </main>
  );
}
