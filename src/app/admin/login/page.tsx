"use client";
import { verifyAdmin } from "@/actions/admin/AdminAuth";
import { ErrorToast, SucessToast } from "@/utils/ToastFucntion";
import { useRouter } from "next/navigation";
import { emit } from "process";
import React, { useState, useRef, useEffect } from "react";

export default function Page() {
  const [step, setStep] = useState<number>(1);

  const [email, setemail] = useState<string>("");
  const [password, setpassword] = useState<string>("");
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const otpRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const handleNext = async (e: React.FormEvent) => {
    e.preventDefault();
    if (step == 1) {
      setStep(2);
    } else if (step == 2) {
      const res = await verifyAdmin(email, password);
      if (res) {
        SucessToast("Logged in succesfull ");
        setTimeout(() => {
          router.push("/admin/user-management");
        }, 2000);
      }
      else{
        ErrorToast("Invalid Credentials")
        setStep(1)
        setemail("")
        setpassword("")
      }
    }
  };

  return (
    <main className="dh-bg pt-20 h-screen">
      <section className="w-[480px] m-auto h-[444px] bg-white rounded-md border-[1px] px-4 py-6">
        <img src="/logo.svg" alt="Logo" />
        <div>
          <h5 className="text-[32px] text-[#171C20] font-semibold mt-5 flex gap-x-5">
            Admin Panel Login{" "}
            <img src="/admin/adminProfile.svg" alt="Admin Profile" />
          </h5>
        </div>
        <p className="text-[14px] text-[#3E4C59]">
          Welcome back! Admin login to view your business stats & data
        </p>
        {step === 1 && (
          <form className="mt-6">
            <label className="block ml-1 text-xl font-medium text-gray-700 mb-2">
              email{" "}
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setemail(e.target.value)}
              placeholder={"enter your email address"}
              className="w-full p-3 border mt-2 h-[56px] outline-none border-gray-300 rounded-md"
            />
            <button
              type="submit"
              onClick={(e) => handleNext(e)}
              className="text-white mt-10 w-full rounded-md bg-[#4779E8] h-[56px] py-[16px] px-[40px]"
            >
              login
            </button>
          </form>
        )}
        {step === 2 && (
          <form className="mt-6">
            <label className="block ml-1 text-xl font-medium text-gray-700 mb-2">
              password{" "}
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              placeholder={"enter yourpassword"}
              className="w-full p-3 border mt-2 h-[56px] outline-none border-gray-300 rounded-md"
            />
            <button
              type="submit"
              onClick={(e) => handleNext(e)}
              className="text-white mt-10 w-full rounded-md bg-[#4779E8] h-[56px] py-[16px] px-[40px]"
            >
              login
            </button>
          </form>
        )}
        <div className="mt-10 flex justify-between">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className={`w-[122.67px] h-[10px] rounded-full ${
                step >= i ? "bg-[#4779E8]" : "bg-[#E4E7EC]"
              }`}
            ></div>
          ))}
        </div>
      </section>
    </main>
  );
}
