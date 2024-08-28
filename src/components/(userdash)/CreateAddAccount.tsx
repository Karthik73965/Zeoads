"use client";
import FeauturesHome from "@/app/ui/FeauturesHome";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Facebookdata, Googledata, Tiktokdata } from "../Home/Feautures";
import { useCallback, useEffect, useState } from "react";
import DemoVideo from "./Home/DemoVideo";
import { useUserInfo } from "@/hooks/useUserInfo";
import { CreateAdAccount } from "@/actions/Dashboard/AdAccountActions";
import { getAllWallets } from "@/actions/Dashboard/CreditActions";

export function CreateAddAccount() {
  const [step, setStep] = useState<number>(1);
  const [Ad, setAd] = useState<string>("TIKTOK");
  const [currency, setCurrency] = useState<string>("USD");
  const [email, setEmail] = useState<string>("");
  const [TimeZone, setTimeZone] = useState<string>("");
  const [Link, setLink] = useState<string>("");
  const [selectedOption, setSelectedOption] = useState<string>("COMMISSION");
  const [selectedWallet, setSelectedWallet] = useState<string>("");
  const [wallets, setWallets] = useState<string[]>([]);

  const userinfo = useUserInfo();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  const handleCreate = async () => {
    try {
      const response = await CreateAdAccount(
        userinfo.id,
        userinfo.name,
        email,
        userinfo.phoneNumber,
        selectedOption,
        Ad,
        selectedWallet,
        currency,
        TimeZone,
        Link
      );
      console.log(response);
      alert("Done");
    } catch (error) {
      console.log(error);
      alert("Error");
    }
  };

  const fetchWallets = useCallback(async () => {
    try {
      const data = await getAllWallets(userinfo.id);
      const reduced = data?.map((account:any) => account.name) || [];
      setWallets(reduced);
    } catch (error) {
      alert(error);
    }
  }, [userinfo.id]);

  useEffect(() => {
    if (userinfo) {
      fetchWallets();
    }
  }, [userinfo, fetchWallets]);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="w-[] h-[56px] py-[16px] px-[24px] flex gap-[8px] text-white rounded-[8px] bg-[#4779E8] ">
          <img className="mt-1" src="/userDash/Agencies/plus.svg" alt="plus" />
          <div>Create Ad Account</div>
        </button>
      </DialogTrigger>
      <DialogContent className="min-w-max flex h-[99vh] p-6 gap-6">
        {step === 1 ? (
          <>
            <section>
              {Ad === "TIKTOK" ? (
                <FeauturesHome
                  name="Tiktok"
                  Heading="Tiktok Agency"
                  description="Scale effortlessly with our Tiktok Agency accounts."
                  image="/Home/adlogos/tiktok.svg"
                  list={Tiktokdata}
                />
              ) : Ad === "GOOGLE" ? (
                <FeauturesHome
                  name="Google"
                  Heading="Google Agency"
                  description="Top tier Google agency accounts with payment method activated."
                  image="/Home/adlogos/google.svg"
                  list={Googledata}
                />
              ) : Ad === "META" ? (
                <FeauturesHome
                  name="Facebook"
                  Heading="Facebook Agency"
                  description="Top tier Fb agency accounts with payment method activated."
                  image="/Home/adlogos/meta.svg"
                  list={Facebookdata}
                />
              ) : (
                ""
              )}
            </section>
            <section className="thin-scroll p-6 overflow-y-scroll">
              <h2 className="font-bold text-[32px] text-[#1F2933]">
                Get New Ad Account
              </h2>
              <div className="mt-5">
                <div>Get New Ad Account</div>
                <div className="flex mt-3 gap-[16px]">
                  <div
                    onClick={() => setAd("TIKTOK")}
                    className="w-[80px] text-center h-[40px] border-[#4779E8] py-[8px] text-[#3E4C59] font-semibold px-[16px] border-[1px] rounded-[4px]"
                  >
                    TIKTOK
                  </div>
                  <div
                    onClick={() => setAd("GOOGLE")}
                    className="h-[40px] text-center py-[8px] px-[16px] text-[#3E4C59] font-semibold border-[1px] rounded-[4px]"
                  >
                    Google Ads
                  </div>
                  <div
                    onClick={() => setAd("META")}
                    className="w-[80px] text-center h-[40px] py-[8px] px-[16px] font-semibold border-[1px] text-[#3E4C59] rounded-[4px]"
                  >
                    Meta
                  </div>
                </div>
              </div>
              <div className="mt-5">
                <div>Account Type</div>
                <div className="flex mt-3 gap-[16px]">
                  <div
                    onClick={() => setCurrency("USD")}
                    className="w-[80px] text-center h-[40px] border-[#4779E8] py-[8px] text-[#3E4C59] font-semibold px-[16px] border-[1px] rounded-[4px]"
                  >
                    USD
                  </div>
                  <div
                    onClick={() => setCurrency("INR")}
                    className="h-[40px] text-center py-[8px] px-[16px] text-[#3E4C59] font-semibold border-[1px] rounded-[4px]"
                  >
                    INR
                  </div>
                </div>
              </div>
              <div>
                <div className="mt-5">
                  <div className="text-[#1F2933] font-medium">Email</div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter Email ID"
                    className="outline-none mt-2 px-[16px] py-[12px] text-[#3E4C59] w-full border-[1px] rounded-[8px] h-[56px] border-[#E4E7EC]"
                  />
                </div>
                <div className="mt-5">
                  <div className="text-[#1F2933] font-medium">Account TimeZone</div>
                  <input
                    type="text"
                    value={TimeZone}
                    onChange={(e) => setTimeZone(e.target.value)}
                    placeholder="Enter TimeZone"
                    className="outline-none mt-2 px-[16px] py-[12px] text-[#3E4C59] w-full border-[1px] rounded-[8px] h-[56px] border-[#E4E7EC]"
                  />
                </div>
                <div>
                  <label
                    htmlFor="wallet-dropdown"
                    className="block font-medium mt-3 text-gray-700"
                  >
                    Select a wallet
                  </label>
                  <select
                    id="wallet-dropdown"
                    value={selectedWallet}
                    onChange={(e) => setSelectedWallet(e.target.value)}
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                  >
                    <option value="" disabled>
                      -- Choose a Wallet --
                    </option>
                    {wallets.map((wallet:any, index:number) => (
                      <option key={index} value={wallet}>
                        {wallet}
                      </option>
                    ))}
                  </select>

                  {selectedWallet && (
                    <div className="mt-4">
                      <p>
                        Selected Wallet: <strong>{selectedWallet}</strong>
                      </p>
                    </div>
                  )}
                </div>
                <div className="mt-5">
                  <div className="text-[#1F2933] font-medium">
                    Link {"(optional)"}
                  </div>
                  <input
                    type="text"
                    value={Link}
                    onChange={(e) => setLink(e.target.value)}
                    placeholder="Enter Link"
                    className="outline-none mt-2 px-[16px] py-[12px] text-[#3E4C59] w-full border-[1px] rounded-[8px] h-[56px] border-[#E4E7EC]"
                  />
                </div>
              </div>
              <div className="gap-[24px] flex mx-6 mt-3 font-semibold">
                <button className="text-[#3E4C59] h-[48px] py-3 px-8 rounded-[4px] border-[1px]">
                  Cancel
                </button>
                <button
                  onClick={() => setStep(2)}
                  className="bg-[#4779E8] text-white h-[48px] py-3 px-8 rounded-[4px]"
                >
                  Continue
                </button>
              </div>
            </section>
          </>
        ) : (
          <div className="w-full">
            <div className="mt-5">
              <h2 className="text-[32px] font-semibold text-[#1F2933]">
                Confirm your Ad Account
              </h2>
              <div className="mt-6">
                <div className="text-[#1F2933] font-medium">Email:</div>
                <div className="text-[#3E4C59]">{email}</div>
              </div>
              <div className="mt-5">
                <div className="text-[#1F2933] font-medium">Ad Account Type:</div>
                <div className="text-[#3E4C59]">{Ad}</div>
              </div>
              <div className="mt-5">
                <div className="text-[#1F2933] font-medium">Account TimeZone:</div>
                <div className="text-[#3E4C59]">{TimeZone}</div>
              </div>
              <div className="mt-5">
                <div className="text-[#1F2933] font-medium">Wallet:</div>
                <div className="text-[#3E4C59]">{selectedWallet}</div>
              </div>
              <div className="mt-5">
                <div className="text-[#1F2933] font-medium">Link {"(optional)"}</div>
                <div className="text-[#3E4C59]">{Link}</div>
              </div>
              <div className="gap-[24px] flex mx-6 mt-3 font-semibold">
                <button
                  onClick={() => setStep(1)}
                  className="text-[#3E4C59] h-[48px] py-3 px-8 rounded-[4px] border-[1px]"
                >
                  Back
                </button>
                <button
                  onClick={handleCreate}
                  className="bg-[#4779E8] text-white h-[48px] py-3 px-8 rounded-[4px]"
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
