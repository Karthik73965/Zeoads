import React from "react";

type Props = {};

export default function CtaBlog({}: Props) {
  return (
    <section className="mx-5 md:mx-20 mt-10 rounded-[8px] bg-[#F5F6FA] flex flex-col-reverse md:flex justify-between py-[40px] px-[24px]  gap-[24px] md:h-[400px]">
      <div>
        <div className=" font-bold block md:hidden  text-[20px] ">
          <span className="text-[#727F8F] ">Time to get </span>
          <span className="text-[#171C20] ">marketing stuff </span>
          <span className="text-[#727F8F] ">in</span>
          <span className="text-[#171C20]">order</span>.
        </div>
        <div className=" font-bold hidden md:block text-[56px] leading-[70px]">
          <span className="text-[#727F8F] ">Time to get </span> <br />{" "}
          <span className="text-[#171C20] ">marketing stuff </span>{" "}
          <span className="text-[#727F8F] ">in</span> <br />{" "}
          <span className="text-[#171C20]">order</span>.
        </div>
        <button className="bg-[#4779E8] w-full mt-5 md:mt-0 md:w-[174px] h-[56px] py-[16px] px-[40px] text-white rounded-[4px] ">
          Try ZEOADS
        </button>
      </div>
      <img src="/utils/laptop.png" alt="laptop" />
    </section>
  );
}
