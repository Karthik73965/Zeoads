"use client";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {
  id: string;
  main: boolean;
  imageurl: string;
  heading: string;
  date: string;
  description: string;
};

export default function BlogCard({
  id,
  main,
  imageurl,
  heading,
  date,
  description,
}: Props) {
  const router = useRouter();
  return (
    <section
      className={`border-[1px] rounded-[8px] cursor-pointer md:w-[384px] w-[90vw] shadow-md h-[453px] ${
        main ? "border-[#4779E8]" : "border-[#E4E7EC]"
      } p-[24px] gap-[16px]`}
      onClick={() => router.push(`/blogs/${id}`)}
    >
      <img
        src={imageurl}
        className="w-[336px] h-[192px] rounded-[8px]"
        alt="something"
      />
      <div className="mt-5 md:w-[336px] text-[#727F8F] text-[14px] h-[21px] flex justify-between">
        <div>Metaverse</div>
        <div>9 May 2024</div>
      </div>
      <div className="w-[336px] h-[164px] gap-[16px] mt-5">
        <div className=" text-[24px] leading[36px]  text-[#1F2933]">
          {heading}
        </div>
        <div className="mt-5 primary-text font-medium"> Read Blog {"-->"}</div>
      </div>
    </section>
  );
}
