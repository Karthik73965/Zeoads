"use client"
import React, { FormEvent, useState } from 'react'
import {useRouter} from 'next/navigation'
import { OnboardingSubmit } from '@/app/actions/FormActions'

type Props = {}

interface roles {
    text: String,
    main: String
}

export enum Role {
    AGENCY = 'AGENCY',
    ADVERTISER = 'ADVERTISER',
    NONE = 'NONE'
}
const roles: Array<roles> = [
    {
        text: "I am a direct",
        main: Role.ADVERTISER
    },
    {
        text: "I am an",
        main: Role.AGENCY
    },
]

export default function page({ }: Props) {
    const [role, Setrole] = useState<Role>(Role.NONE)
    const [state, Setstate] = useState<number>(0)
    const [AgencyState, SetAgencyState] = useState<number>(0)
    const [AdvertiserState, SetAdvertiserState] = useState<number>(0)
    const [monthlyAdSpend, SetmonthlyAdSpend] = useState<string>("< $100k")
    const [whyPerformance, SetwhyPerformance] = useState<string[]>([])


    const Router = useRouter()


    // ------------------------------------- submiting functions  -------------------------------------------------

    const handleAdSpendClick = (value: string) => {
        SetmonthlyAdSpend(value);
    };

    const handlePerformanceChange = (value: string) => {
        SetwhyPerformance((prev: any) => {
            if (prev.includes(value)) {
                return prev.filter((item: any) => item !== value);
            } else {
                return [...prev, value];
            }
        });
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            const submitted = await OnboardingSubmit(monthlyAdSpend, whyPerformance, role).then(()=>{
                Router.push('/dashboard')                
            })
        } catch (error) {

        }
    }
    const handleRoleChange = (newRole: Role) => {
        Setrole(newRole);
    };

    const MainOnboarding = () => {
        return <>
            <h2 className='text-center text-[#1F2933] mt-5 text-[32px] font-semibold'>How do you plan with us ?</h2>
            <p className='text-center text-[16px] text-[#3E4C59] mt-2'>ZEOADS is a performance marketing system</p>
            <center className='mt-10'>
                {
                    roles.map((i: roles, index) => {
                        return <div key={index} onClick={() => {
                            Setstate(1)
                            { /* @ts-ignore */ }
                            handleRoleChange(i.main)

                        }} className='w-[329px] cursor-pointer text-center mt-3 h-[56px] border-[#E4E7EC] rounded-[4px] border-[1px] py-[12px] px-[16px] '>{i.text} <span className=' text-[#1F2933]  font-semibold'>{i.main}</span></div>

                    })
                }
            </center>

        </>
    }



    const DetailsComponent = () => {
        return <>
            <form onSubmit={handleSubmit} className='grid mt-10 gap-x-[40px]'>
                <section>
                    <h4 className='text-[20px] font-medium text-[#1F2933] text-center'>What is your approximate monthly ad spend?</h4>
                    <section className='flex mt-5 gap-x-[24px]'>
                        <div onClick={() => handleAdSpendClick('< $100k')} className={`w-[360px] border rounded-[4px] border-[#E4E7EC] gap-x-[8px] p-[12px] flex h-[56px] ${monthlyAdSpend === '< $100k' ? 'bg-gray-300' : ''}`}>
                            {'<'} $100k
                        </div>
                        <div onClick={() => handleAdSpendClick('$100k - $500k')} className={`w-[360px] border rounded-[4px] border-[#E4E7EC] gap-x-[8px] p-[12px] flex h-[56px] ${monthlyAdSpend === '$100k - $500k' ? 'bg-gray-300' : ''}`}>
                            $100k - $500k
                        </div>
                    </section>
                    <section className='flex mt-5 gap-x-[24px]'>
                        <div onClick={() => handleAdSpendClick('$500k - $1M')} className={`w-[360px] border rounded-[4px] border-[#E4E7EC] gap-x-[8px] p-[12px] flex h-[56px] ${monthlyAdSpend === '$500k - $1M' ? 'bg-gray-300' : ''}`}>
                            $500k - $1M
                        </div>
                        <div onClick={() => handleAdSpendClick('$1M - $5m')} className={`w-[360px] border rounded-[4px] border-[#E4E7EC] gap-x-[8px] p-[12px] flex h-[56px] ${monthlyAdSpend === '$1M - $5m' ? 'bg-gray-300' : ''}`}>
                            $1M - $5m
                        </div>
                    </section>
                    <div onClick={() => handleAdSpendClick('$5M +')} className={`w-full mt-5 border rounded-[4px] border-[#E4E7EC] gap-x-[8px] p-[12px] flex h-[56px] ${monthlyAdSpend === '$5M +' ? 'bg-gray-300' : ''}`}>
                        <div className='mx-auto '>$5M +</div>
                    </div>
                    <div className="relative flex items-center mt-5">
                        <hr className="flex-grow  border-gray-300" />
                        <div className=" bg-white text-[14px] px-2 text-[#727F8F]">More Details</div>
                        <hr className="flex-grow border-gray-300" />
                    </div>
                </section>
                <section>
                    <h4 className='text-[20px] mt-10 font-medium text-[#1F2933] text-center'>What do you need in your performance marketing operations?</h4>
                    <section className='flex mt-5 gap-x-[24px]'>
                        <div className='w-[360px] border rounded-[4px] border-[#E4E7EC] gap-x-[8px] p-[12px] flex justify-between h-[56px]'>
                            <div className='text-[#1F2933] font-medium'>Ad Account</div>
                            <input type='checkbox' className='mt-1 w-[20px] h-[20px]' checked={whyPerformance.includes('Ad Account')} onChange={() => handlePerformanceChange('Ad Account')} />
                        </div>
                        <div className='w-[360px] border rounded-[4px] border-[#E4E7EC] gap-x-[8px] p-[12px] flex justify-between h-[56px]'>
                            <div className='text-[#1F2933] font-medium'>Campaign management</div>
                            <input type='checkbox' className='mt-1 w-[20px] h-[20px]' checked={whyPerformance.includes('Campaign management')} onChange={() => handlePerformanceChange('Campaign management')} />
                        </div>
                    </section>
                    <section className='flex mt-5 gap-x-[24px]'>
                        <div className='w-[360px] border rounded-[4px] border-[#E4E7EC] gap-x-[8px] p-[12px] flex justify-between h-[56px]'>
                            <div className='text-[#1F2933] font-medium'>Creative Creation</div>
                            <input type='checkbox' className='mt-1 w-[20px] h-[20px]' checked={whyPerformance.includes('Creative Creation')} onChange={() => handlePerformanceChange('Creative Creation')} />
                        </div>
                        <div className='w-[360px] border rounded-[4px] border-[#E4E7EC] gap-x-[8px] p-[12px] flex justify-between h-[56px]'>
                            <div className='text-[#1F2933] font-medium'>Consultation</div>
                            <input type='checkbox' className='mt-1 w-[20px] h-[20px]' checked={whyPerformance.includes('Consultation')} onChange={() => handlePerformanceChange('Consultation')} />
                        </div>
                    </section>
                </section>
                <button type='submit' className='text-white mt-5 h-[56px] bg-[#4779E8] rounded-[4px] py-[16px] px-[40px]  text-center'>
                    Next
                </button>
            </form>
        </>
    }


    const AgencySteps = () => {
        return <>
            <h2 className='text-center text-[#1F2933] mt-10 text-[32px] font-semibold'>ZEOADS for Agency</h2>
            <p className='text-center text-[16px] text-[#3E4C59] mt-2'>We will contact you via this email Please enter an active email address.</p>
            {
                AgencyState == 0 ? <DetailsComponent /> : ""
            }
        </>
    }

    const AdvertiserSteps = () => {
        return <>
            <h2 className='text-center text-[#1F2933] mt-10 text-[32px] font-semibold'>ZEOADS for Advertiser</h2>
            <p className='text-center text-[16px] text-[#3E4C59] mt-2'>We will contact you via this email Please enter an active email address.</p>
            {
                AdvertiserState == 0 ? <DetailsComponent /> : ""
            }
        </>


    }

    const Sucessmodal = () => {
        return <center className='mt-10'>
            <img src="/onboarding/success.svg" alt="success" />
            <h2 className='text-center text-[#1F2933] mt-10 text-[32px] font-semibold'>Success ! </h2>
            <p className='text-center text-[16px] text-[#3E4C59] mt-2'>Thankyou, your form has been successfully saved.  <br />
                we will contact you regarding your application as soon as possible.</p>
            <button className='text-white w-full mt-10 h-[56px] bg-[#4779E8] rounded-[4px] py-[16px] px-[40px]  text-center'>
                Return to Home page
            </button>
            <button className='text-white w-full mt-3 h-[56px] border  border-[#4779E8] font-semibold primary-text rounded-[4px] py-[16px] px-[40px]  text-center'>
                Explore Blogs
            </button>

        </center>
    }



    return (
        <main className='bg-gray-100 pt-10 min-h-screen'>
            <section className='w-[792px] border-[1px] rounded-[8px] shadow-xl bg-white border-[#E4E7EC] m-auto px-[24px] py-[40px]'>
                <img src="/logo.svg" alt="logo" className='mx-auto ' />
                {
                    state == 0 ? <MainOnboarding /> : (
                        state == 1 ?
                            role == roles[0].main ? <AdvertiserSteps /> : (
                                role == roles[1].main ? <AgencySteps /> : ""
                            ) : <Sucessmodal />
                    )
                }
                <div className='text-center mt-10'>
                    Not a member  ?  <span className='primary-text'>Sign Up Now </span>
                </div>
            </section>
        </main>
    )
}
