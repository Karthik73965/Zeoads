import React from "react";

type Props = {};

export default function Ads({}: Props) {
  return (
    <section className="flex flex-wrap md:p-20  overflow-x-hidden w-[90vw] justify-between">
      <div>
        <img className="hidden md:block" src="/Home/Ad/ad6.svg" alt="ad1" />
      </div>
      <div>
        <img className="" src="/Home/Ad/ad5.svg" alt="ad1" />
      </div>
      <div>
        <img className="hidden md:block" src="/Home/Ad/ad2.svg" alt="ad1" />
      </div>
      <div>
        <img className="" src="/Home/Ad/ad3.svg" alt="ad1" />
      </div>
      <div>
        <img className="" src="/Home/Ad/ad4.svg" alt="ad1" />
      </div>
    </section>
  );
}
