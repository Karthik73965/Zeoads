import React from 'react'

type Props = {
    route: string
}

const Accoutns = [
    {
        id: "asdasdasdas",
        platform: 'meta',
        Acc_Name: "Demo Account",
        Acc_id: "ceskinsdojsdd",
        Acc_Status: "verified",
        Balance: "$1212",
        Time_Zone: "Asia/kolkata"
    },
    {
        id: "asdasdasdas",
        platform: 'meta',
        Acc_Name: "Demo Account",
        Acc_id: "ceskinsdojsdd",
        Acc_Status: "pending",
        Balance: "$1212",
        Time_Zone: "Asia/kolkata"
    },
    {
        id: "asdasdasdas",
        platform: 'meta',
        Acc_Name: "Demo Account",
        Acc_id: "ceskinsdojsdd",
        Acc_Status: "pending",
        Balance: "$1212",
        Time_Zone: "Asia/kolkata"
    },
    {
        id: "asdasdasdas",
        platform: 'meta',
        Acc_Name: "Demo Account",
        Acc_id: "ceskinsdojsdd",
        Acc_Status: "pending",
        Balance: "$1212",
        Time_Zone: "Asia/kolkata"
    },
    {
        id: "asdasdasdas",
        platform: 'meta',
        Acc_Name: "Demo Account",
        Acc_id: "ceskinsdojsdd",
        Acc_Status: "pending",
        Balance: "$1212",
        Time_Zone: "Asia/kolkata"
    },
    {
        id: "asdasdasdas",
        platform: 'meta',
        Acc_Name: "Demo Account",
        Acc_id: "ceskinsdojsdd",
        Acc_Status: "pending",
        Balance: "$1212",
        Time_Zone: "Asia/kolkata"
    },
]

export default function Table({ route }: Props) {
    return (
        <main className={`mt-10  ${route == "slug" ? "" : "mx-5 p-[24px] border-[1px]"}  bg-white rounded-[4px]  gap-[4px] border-[#E4E7EC]`}>
            {/* headings  */}
            <section className='flex justify-between h-[42px] py-[12px] dh-bg'>
                <div className='text-[12px] text-center w-[100px] cursor-pointer font-medium text-[#171C20]'>Platform</div>
                <div className='text-[12px] text-center w-[100px] cursor-pointer font-medium text-[#171C20]'>Account Name</div>
                <div className='text-[12px] text-center w-[100px] cursor-pointer font-medium text-[#171C20]'>Account ID</div>
                <div className='text-[12px] text-center w-[100px] cursor-pointer font-medium text-[#171C20]'>Account Status </div>
                <div className='text-[12px] text-center w-[100px] cursor-pointer font-medium text-[#171C20]'>Balance</div>
                <div className='text-[12px] text-center w-[100px] cursor-pointer font-medium text-[#171C20]'>Time-Zone</div>
                <div className='text-[12px] text-center w-[100px] cursor-pointer font-medium text-[#171C20]'>Actions</div>
            </section>
            {
                Accoutns.map((i, index) => {
                    return <section className='flex justify-between h-[42px] py-[12px]  '>
                        <div className=' w-[100px] text-[14px] border-r-[1px] h-[40px] text-center pl-6 truncate cursor-pointer font-medium text-[#171C20]'><img src="/userDash/Agencies/meta.svg" alt="meta" /></div>
                        <div className=' w-[100px] text-[14px] border-r-[1px] pr-4 h-[40px] text-center  truncate cursor-pointer font-medium text-[#171C20]'>{i.Acc_Name}</div>
                        <div className=' w-[100px] text-[14px] border-r-[1px] pr-4 h-[40px] text-center  truncate cursor-pointer font-medium text-[#171C20]'>{i.Acc_id}</div>
                        <div className=' w-[100px] text-[14px] border-r-[1px] pr-4 h-[40px] text-center  cursor-pointer font-medium text-[#171C20]'>{i.Acc_Status == "pending" ? <span className='text-[#F3CC02] bg-[#FCF8DD] py-[4px] px-[12px]'>Pending</span> : <span className='text-[#159A3A] bg-[#E4F6E4] py-[4px] px-[12px]'>Approved</span>}</div>
                        <div className=' w-[100px] text-[14px] border-r-[1px] pr-4 h-[40px] text-center  truncate cursor-pointer font-medium text-[#171C20]'>{i.Balance}</div>
                        <div className=' w-[100px] text-[14px] border-r-[1px] pr-4 h-[40px] text-center  truncate cursor-pointer font-medium text-[#171C20]'>{i.Time_Zone}</div>
                        <div className=' w-[100px]  h-[40px] text-center  truncate cursor-pointer font-medium text-[#171C20] text-[12px] primary-text  '>View Account</div>
                    </section>
                })
            }
        </main >
    )
}