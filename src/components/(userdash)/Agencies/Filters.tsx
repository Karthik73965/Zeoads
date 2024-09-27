import React from "react";
import { CreateAddAccount } from "../CreateAddAccount";

type Props = {};

export default function Filters({}: Props) {
  return (
    <section className="mt-10 flex flex-col md:flex-row gap-[20px] mx-5">
      <div className="flex bg-white border-[1px] gap-[16px] h-[56px] w-[364px] rounded-[8px]  px-3  ">
        <img
          className="w-[22px] my-auto  h-[22px]"
          src="/userDash/Nav/search.png"
          alt="search"
        />
        <input
          type="text"
          className="outline-none text-[#52606D]"
          placeholder="Search"
        />
      </div>
      <div className="h-[56px] border-[1px] rounded-[8px] py-[12px] bg-white px-[16px] flex gap-[12px]">
        <div className="text-[#3E4C59] ">Select Date </div>
        <img
          className="w-[24px] h-[24px]"
          src="/userDash/Agencies/cal.svg"
          alt="cal"
        />
      </div>
      <div className="h-[56px] border-[1px] rounded-[8px] py-[12px] bg-white px-[16px] flex gap-[12px]">
        <div className="text-[#3E4C59] ">More Filters</div>
        <img
          className="w-[24px] h-[24px]"
          src="/userDash/Agencies/circleplus.svg"
          alt="cal"
        />
      </div>
      <div className="w-[56px] h-[56px] rounded-[8px] bg-white gap-[8px] ml-10 border-[1px] border-[#CBD2DA] p-[16px]">
        <img src="/userDash/Agencies/share.svg" alt="share" />
      </div>
      <CreateAddAccount />
    </section>
  );
}
