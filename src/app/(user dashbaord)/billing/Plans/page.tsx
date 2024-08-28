"use client";
import { getAllTxns, purchase5999 } from '@/actions/Dashboard/BillingActions';
import { useUserInfo } from '@/hooks/useUserInfo';
import DashNav from '@/components/(userdash)/DashNav';
import MainNav from '@/components/(userdash)/MainNav';
import PricingChild from '@/components/Pricing/PricingChild';
import React, { useCallback, useEffect, useState } from 'react';

export default function Page() {
    const [transactions, setTransactions] = useState<any>(null);
    const userinfo = useUserInfo();
    const [loading, setLoading] = useState<boolean>(false);
    const [status, setStatus] = useState<string>("");

    const Plans = () => {
        const fetchTxns = useCallback(async () => {
            try {
                if (userinfo?.id) {
                    const data = await getAllTxns(userinfo.id);
                    setTransactions(data);
                    if (data) {
                        // @ts-ignore
                        evaluateStatus(data);
                    }
                }
            } catch (error) {
                console.log(error);
            }
        }, []);
    const evaluateStatus = (txns: any[]) => {
        if (txns.length > 0) {
            const now = new Date();
            const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
            const txnThisMonth = txns.find(txn => new Date(txn.createdAt) >= startOfMonth);

            if (txnThisMonth) {
                setStatus("enjoy");
            } else {
                setStatus("continue");
            }
        } else {
            setStatus("purchase");
        }
    };

    const handlePay = async () => {
        try {
            setLoading(true);
            const data = await purchase5999(5999, "INR", userinfo?.id);
            setLoading(false);
            alert("Transaction successful");
            fetchTxns(); 
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    };

    useEffect(() => {
        if (userinfo) {
            fetchTxns();
        }
    }, [ fetchTxns]);

    return (
        <main className='flex w-full'>
            <DashNav route='Plans' />

            <section className='dh-bg w-[100vw-252px]'>
                <MainNav />
                <section className='gap-[24px] mt-5 border-[1px] border-[#E4E7EC] p-[16px] flex justify-between rounded-[8px]'>
                    <div className='w-[500px] bg-[#131516] h-[117px] p-[24px] text-white border-[1px] border-[#E4E7EC] rounded-[8px] text-center'>
                        <h3 className='font-medim mt-3 text-[24px]'>
                            Plans
                        </h3>
                    </div>
                    <div className='w-[500px] bg-[#131516] h-[117px] p-[24px] text-white border-[1px] border-[#E4E7EC] rounded-[8px] text-center'>
                        <h3 className='font-medim text-[24px]'>
                            Recharge Via Self
                            <p className='text-center text-[14px] text-[#E4E7EC]'>{`(Non Commission Model)`}</p>
                        </h3>
                    </div>
                </section>
                <section className='flex gap-[16px]'>
                    <PricingChild
                        image1={'/pricing/img1.png'}
                        text1='Spending Limit'
                        image2={'/pricing/img2.svg'}
                        text2='Access'
                        image3={'/pricing/img3.svg'}
                        text3='Pixel / Pages / Domains'
                        image4={'/pricing/img4.svg'}
                        text4='Payment Methods'
                        image5={'/pricing/img5.svg'}
                        text5='ZEO Dashboard'
                        image6={'/pricing/img6.svg'}
                        text6='Support & Help'
                        image7={'/pricing/img7.svg'}
                        text7={`Any Other Charges <br/> ( Hidden Charges )`}
                        image8={'/pricing/img8.svg'}
                        text8='Payment for Ads Spend'
                    />
                    <PricingChild
                        image1={undefined}
                        text1='Unlimited'
                        image2={undefined}
                        text2='Full Admin Access + Billing Manage Access <br/> ( To Add Payment Method Yourself And Download Billing  Reports  )'
                        image3={undefined}
                        text3='Can Add Unlimited'
                        image4={undefined}
                        text4='A) INR Account - UPI / Net Banking <br/>B) USD Accounts – Via International Cards / Paypal <br/>All Payments Directly Paid to Facebook'
                        image5={undefined}
                        text5='Yes'
                        image6={undefined}
                        text6='ZEO Support & FB REP Support Enabled'
                        image7={undefined}
                        text7={`No Hidden Charges , No Maintainance or Monthly Charges`}
                        image8={undefined}
                        text8='INR Accounts - Prepaid<br>USD Accounts - Postpaid'
                    />
                </section>
                <section className='gap-[24px] border-[1px] border-[#E4E7EC] p-[16px] flex justify-between rounded-[8px]'>
                    <div className='w-full bg-[#4779E8] h-[100px] p-[24px] text-white border-[1px] border-[#E4E7EC] rounded-[8px] text-center'>
                        <h3 onClick={() => status === "purchase" && handlePay()} className='font-semibold cursor-pointer text-[32px]'>
                            {loading ? "Processing" :
                                status === "enjoy" ? "Enjoy the Pack" :
                                    status === "continue" ? "Continue Another Month" :
                                        "5999 INR"
                            }
                        </h3>
                    </div>
                </section>
            </section>
        </main>
    );
}}
