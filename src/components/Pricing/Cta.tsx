import React from "react";

type Props = {};

export default function Cta({}: Props) {
  return (
    <section className="text-center mx-5 md:mx-20 mt-48">
      <h1 className="text-[20px] md:text-[56px] text-center font-bold text-[#1F2933]">
        Start now and launch your ads
      </h1>
      <button className="py-[16px] px-[40px] bg-[#4779E8] text-white mt-10 w-[157px] rounded-sm">
        Start Now
      </button>
    </section>
  );
}
