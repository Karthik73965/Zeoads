import React from "react";

type Props = {
  heading: string;
  Main: string;
  istrue: boolean;
  trueAmount: string;
  percent: string;
  trueStr: string;
};

export default function DashCard({
  heading,
  Main,
  istrue,
  trueAmount,
  trueStr,
  percent,
}: Props) {
  return (
    <div className="w-[257px] font-medium h-[166px]  bg-white rounded-[8px] bordere-[1px] px-[16px] py-[24px]  gap-[24px] ">
      <div className="text-[14px] text-[#3E4C59] ">{heading}</div>
      <div className="mt-3  font-semibold text-[#1F2933] text-[32px] ">{Main}</div>
      <div className={`flex  mt-3 ${istrue ?  "justify-between  "  :"justify-end"} `}>
        {
            istrue ? <div className="flex text-[14px] gap-x-2 ">
                <div className="font-medium text-[#727F8F] uppercase ">{trueStr}</div>
                <div className="text-[#1F2933] font-medium ">{trueAmount}</div>
            </div> :""
        }
       <div className="bg-[#F5F6FA] px-1 font-medium text-[#3E4C59 text-[12px] rounded-full">
        {percent} % 
       </div>
      </div>
    </div>
  );
}
