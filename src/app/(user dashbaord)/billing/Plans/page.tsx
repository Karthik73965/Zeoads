import DashNav from '@/components/(userdash)/DashNav'
import MainHistory from '@/components/(userdash)/History/MainHistory'
import MainNav from '@/components/(userdash)/MainNav'
import PricingChild from '@/components/Pricing/PricingChild'
import React from 'react'

type Props = {}

export default function Page({ }: Props) {
    return (
        <main className='flex  w-full'>
            <DashNav route='Plans' />
           
            <section className='dh-bg  w-[100vw-252px]'>
                <MainNav />
            <section className='gap-[24px] mt-5 border-[1px]  border-[#E4E7EC] p-[16px] flex justify-between rounded-[8px]'>
                    <div className='w-[500px] bg-[#131516] h-[117px] p-[24px] text-white border-[1px] border-[#E4E7EC] rounded-[8px] text-center'>
                        <h3 className='font-medim  mt-3 text-[24px]'>
                            Plans
                        </h3>
                    </div>
                    <div className='w-[500px] bg-[#131516] h-[117px] p-[24px] text-white border-[1px] border-[#E4E7EC] rounded-[8px] text-center'>
                        <h3 className='font-medim   text-[24px]'>
                            Recharge Via Self
                            <p className='text-center text-[14px] text-[#E4E7EC]' >{"(Non Commission Model)"}</p>
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
                <section className='gap-[24px] border-[1px]  border-[#E4E7EC] p-[16px] flex justify-between rounded-[8px]'>
                    <div className='w-full bg-[#4779E8] h-[100px] p-[24px] text-white border-[1px] border-[#E4E7EC] rounded-[8px] text-center'>
                        <h3 className='font-semibold text-[32px]    '>
                            5999 INR
                        </h3>
                    </div>                    
                </section>
            </section>
        </main>
    )
}