import React from "react";
import { CreateAddAccount } from "../CreateAddAccount";
import { DatePickerWithRange } from "./FIlters/DatePicker";

type Props = {};

export default function DashFilter({}: Props) {
  return (
    <section className="w-fit mt-10 flex flex-col md:flex-row justify-between gap-[20px] mx-5">
      <div className="flex flex-col md:flex-row gap-4 gap-x-10">
        <div className="h-[56px] border-[1px] rounded-[8px] py-[12px] bg-white px-[16px] flex flex-col md:flex-row gap-[12px]">
          <div className="text-[#3E4C59]">
            {/* <div className="hidden md:flex">Select Date</div> */}
            {/* <img
            className="w-[24px] h-[24px]"
            src="/userDash/Agencies/cal.svg"
            alt="cal"
            /> */}
            <DatePickerWithRange />
          </div>
        </div>
        <div className="h-[56px] border-[1px] rounded-[8px] py-[12px] bg-white px-[16px] flex gap-[12px]">
          <div className="text-[#3E4C59] ">More Filters</div>
          <img
            className="w-[24px] h-[24px]"
            src="/userDash/Agencies/circleplus.svg"
            alt="cal"
          />
        </div>
      </div>
      <CreateAddAccount />
    </section>
  );
}
