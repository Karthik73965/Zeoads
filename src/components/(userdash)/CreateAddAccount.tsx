"use client"
import FeauturesHome from "@/app/ui/FeauturesHome"
import {
    Dialog,
    DialogContent,

    DialogTrigger,
} from "@/components/ui/dialog"
import { Facebookdata, Googledata, Tiktokdata } from "../Home/Feautures"
import { useState } from "react"

export function CreateAddAccount() {
    const [Ad, SetAd] = useState<string>("Tiktok")
    const [currency, setcurrency] = useState<string>("USD")
    return (
        <Dialog>
            <DialogTrigger asChild>
                <button className='w-[] h-[56px] py-[16px] px-[24px] flex gap-[8px] text-white rounded-[8px] bg-[#4779E8] '>
                    <img className='mt-1' src="/userDash/Agencies/plus.svg" alt="plus" />
                    <div>Create Add Account</div>
                </button>
            </DialogTrigger>
            <DialogContent className="min-w-[861px] flex h-screen p-6 gap-6">
                <section>
                    {
                        Ad == "Tiktok" ? <FeauturesHome name='Tiktok' Heading='Tiktok Agency' description='Scale effortlessly with our Tiktok Agency accounts.' image='/Home/adlogos/tiktok.svg' list={Tiktokdata} /> : (
                            Ad == " Google" ? <FeauturesHome name='Google' Heading='Google Agency' description='Top tier Google agency accounts with payment method activated.' image='/Home/adlogos/google.svg' list={Googledata} /> : (
                                Ad == "Meta" ? <FeauturesHome name='Facebook' Heading='Facebook Agency' description='Top tier Fb agency accounts with payment method activated.' image='/Home/adlogos/meta.svg' list={Facebookdata} /> : ""
                            )
                        )
                    }
                </section>
                <section className="h-[708px] p-6">
                    <h2 className=" font-bold text-[32px]  text-[#1F2933]">Get New Ad Account</h2>
                    {/* New account  */}
                    <div className="mt-5">
                        <div>Get New Ad Account</div>
                        <div className="flex mt-3 gap-[16px]">
                            <div onClick={() => SetAd("Tiktok")} className="w-[80px] text-center   h-[40px] border-[#4779E8] py-[8px]   text-[#3E4C59] font-semibold  px-[16px] border-[1px] rounded-[4px]">Tiktok</div>
                            <div onClick={() => SetAd("Google")} className="h-[40px] text-center   py-[8px] px-[16px] text-[#3E4C59] font-semibold border-[1px] rounded-[4px]">Google Ads</div>
                            <div onClick={() => SetAd("Meta")} className="w-[80px]   text-center h-[40px] py-[8px] px-[16px] font-semibold border-[1px] text-[#3E4C59] rounded-[4px]">Meta</div>
                        </div>
                    </div>
                    {/*Account type */}
                    <div className="mt-5">
                        <div>Acccount Type</div>
                        <div className="flex mt-3 gap-[16px]">
                            <div onClick={() => setcurrency("USD")} className="w-[80px] text-center   h-[40px] border-[#4779E8] py-[8px]   text-[#3E4C59] font-semibold  px-[16px] border-[1px] rounded-[4px]">USD</div>
                            <div onClick={() => setcurrency("INR")} className="h-[40px] text-center   py-[8px] px-[16px] text-[#3E4C59] font-semibold border-[1px] rounded-[4px]">INR</div>
                        </div>
                    </div>
                    {/* Feilds */}
                    <div >
                        <div>
                            <div className='mt-5'>
                                <div className='text-[#1F2933] font-medium'>Email </div>
                                <input type='email' placeholder="Enter Email ID" className="outline-none mt-2 px-[16px] py-[12px] text-[#3E4C59]  w-full border-[1px] rounded-[8px] h-[56px] border-[#E4E7EC] " />
                            </div>
                            <div className='mt-5'>
                                <div className='text-[#1F2933] font-medium'>Account TimeZone </div>
                                <input type='email' placeholder="Enter Email ID" className="outline-none mt-2 px-[16px] py-[12px] text-[#3E4C59]  w-full border-[1px] rounded-[8px] h-[56px] border-[#E4E7EC] " />
                            </div>
                            <div className='mt-5'>
                                <div className='text-[#1F2933] font-medium'>Link {"(optional) "}</div>
                                <input type='email' placeholder="Enter Email ID" className="outline-none mt-2 px-[16px] py-[12px] text-[#3E4C59]  w-full border-[1px] rounded-[8px] h-[56px] border-[#E4E7EC] " />
                            </div>
                        </div>
                    </div>
                    {/* buttons */}
                    <div className="gap-[24px] flex mx-6 mt-3 font-semibold">
                        <button className="text-[#3E4C59] h-[48px] py-3 px-8 rounded-[4px] border-[1px]">
                            Cancel
                        </button>
                        <button className="bg-[#4779E8] h-[48px] text-white py-3 px-8 rounded-[4px] border-[1px]">
                            Pay Now
                        </button>
                    </div>
                </section>
            </DialogContent>
        </Dialog>
    )
}
