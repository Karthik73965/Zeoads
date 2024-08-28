import React from "react";

type Props = {
    heading:string , 
    amount:string ,
    description:string 
};

export default function Card({
    heading , 
    amount ,
    description  
}: Props) {
  return (
    <div className="h-[188px] w-[344px] p-[24px] gap-[16px] border-[1px] rounded-md bg-white">
      <div className="flex justify-between">
        <div className="flex">
          <div className="border-[2px] border-[#4779E8]  "></div>
          <div className="ml-5">
            <div className="text-[#3E4C59]  text-[20px] mb-3 ">
          {heading}
            </div>
            <div className="font-semibold text-[32px] mt-2">{amount}</div>
          </div>
        </div>
        <img className="-mt-3" src="/admin/Fund.svg" alt="fund" />
      </div>
      <div className="text-[#3E4C59] mt-5 ml-3 ">{description}</div>
    </div>
  );
}
