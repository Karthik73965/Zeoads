import React from "react";

type Props = {};

export default function Stats({}: Props) {
  return (
    <main className="md:mx-20 md:mt-20 mx-5 rounded-2xl py-5 md:py-[40px] ">
      <img
        src="/utils/world.png"
        className="stats-bg -z-10 w-[90vw] md:w-auto rounded-2xl bg-[#F3EFD8] "
        alt="Cover image"
      />
      <center className="status-content md:py-[40px]">
        <h1 className="md:text-[56px] text-center font-bold text-[#1F2933] mt-5">
          Zeoads Licenses and Values
        </h1>
        <center className="flex justify-between mx-5 mt-5 md:mx-[20vw] ">
          <div>
            <p className="font-medium">Country</p>{" "}
            <h2 className=" text-[24px] md:text-[32px] font-bold">12 +</h2>
          </div>
          <div>
            <p className="font-medium">Patner</p>
            <h2 className=" text-[24px] md:text-[32px] font-bold">2500 +</h2>
          </div>
          <div>
            <p className="font-medium">Annual Spent</p>
            <h2 className=" text-[24px] md:text-[32px] font-bold">$7M +</h2>
          </div>
        </center>
      </center>
      <section className="grid md:flex mt-5 md:mt-28  px-10  justify-between">
        <div>
          <h2 className="font-semibold dLtext-[32px]">
            {" "}
            Facebook Country Partner
          </h2>
          <p className="text-[#52606D] mt-3">
            Rockads is an authorized Facebook Country Partner for global app
            growth.
          </p>
        </div>
        <div className="flex  mt-5 md:mt-  align-middle">
          <img
            src="/Home/adlogos/Facebook.svg"
            className="h-[48px] w-[48px]"
            alt="facebook"
          />
          <div className="text-[32px] font-semibold ">Facebook</div>
        </div>
      </section>
    </main>
  );
}
