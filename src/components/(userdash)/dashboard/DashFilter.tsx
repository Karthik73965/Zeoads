import React from "react";
import { CreateAddAccount } from "../CreateAddAccount";
import { DatePickerWithRange } from "./FIlters/DatePicker";

type Props = {};

export default function DashFilter({}: Props) {
  return (
    <section className="mt-10 flex justify-between gap-[20px] mx-5">
     <div className="flex gap-x-10">
     <div className="h-[56px] border-[1px] rounded-[8px] py-[12px] bg-white px-[16px] flex gap-[12px]">
        <div className="text-[#3E4C59] ">Select Date </div>
        <img
          className="w-[24px] h-[24px]"
          src="/userDash/Agencies/cal.svg"
          alt="cal"
        />
      </div>
      <DatePickerWithRange/>   ``
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
