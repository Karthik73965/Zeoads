"use client"
import React, { FormEvent, useState } from 'react'
import { useRouter } from 'next/navigation'
import { OnboardingSubmit } from '@/actions/FormActions'

type Props = {}

interface RoleOption {
    text: string,
    main: string
}

// Renamed `roles` array to `roleOptions` to avoid conflicts
const roleOptions: Array<RoleOption> = [
    {
        text: "I am a direct",
        main: "ADVERTISER"
    },
    {
        text: "I am an",
        main: "AGENCY"
    },
]

export default function Page({ }: Props) {
    const [role, setRole] = useState<string>("NONE")
    const [state, setState] = useState<number>(0)
    const [agencyState, setAgencyState] = useState<number>(0)
    const [advertiserState, setAdvertiserState] = useState<number>(0)
    const [monthlyAdSpend, setMonthlyAdSpend] = useState<string>("< $100k")
    const [whyPerformance, setWhyPerformance] = useState<string[]>([])

    const router = useRouter()

    // ------------------------------------- submitting functions  -------------------------------------------------

    const handleAdSpendClick = (value: string) => {
        setMonthlyAdSpend(value);
    };

    const handlePerformanceChange = (value: string) => {
        setWhyPerformance((prev) => {
            if (prev.includes(value)) {
                return prev.filter((item) => item !== value);
            } else {
                return [...prev, value];
            }
        });
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            await OnboardingSubmit(monthlyAdSpend, whyPerformance, role)
            router.push('/dashboard')
        } catch (error) {
            console.error(error)
        }
    }

    const handleRoleChange = (newRole:string) => {
        setRole(newRole);
    };

    const MainOnboarding = () => {
        return (
            <>
                <h2 className='text-center text-[#1F2933] mt-5 text-[32px] font-semibold'>How do you plan with us?</h2>
                <p className='text-center text-[16px] text-[#3E4C59] mt-2'>ZEOADS is a performance marketing system</p>
                <center className='mt-10'>
                    {
                        roleOptions.map((i:any, index:number) => (
                            <div key={index} onClick={() => {
                                setState(1)
                                handleRoleChange(i.main)
                            }} className='w-[329px] cursor-pointer text-center mt-3 h-[56px] border-[#E4E7EC] rounded-[4px] border-[1px] py-[12px] px-[16px]'>
                                {i.text} <span className='text-[#1F2933] font-semibold'>{i.main}</span>
                            </div>
                        ))
                    }
                </center>
            </>
        )
    }

    const DetailsComponent = () => {
        return (
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
                        <hr className="flex-grow border-gray-300" />
                        <div className="bg-white text-[14px] px-2 text-[#727F8F]">More Details</div>
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
                <button type='submit' className='text-white mt-5 h-[56px] bg-[#4779E8] rounded-[4px] py-[16px] px-[40px] text-center'>
                    Next
                </button>
            </form>
        )
    }

    return (
        <center className=' h-screen  dh-bg  p-4  my-4 mx-20'>
            {state === 0 && <MainOnboarding />}
            {state === 1 && <DetailsComponent />}
        </center>
    )
}
