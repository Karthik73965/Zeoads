import React from 'react'

type Props = {
    route: string
}

const Accoutns = [
    {
        name: "karthik",
        email: "karhik81@ymailnasda.a",
        role: "Admin",
        status: "Approved"

    },
    {
        name: "karthik",
        email: "karhik81@ymailnasda.a",
        role: "Admin",
        status: "Deleted"

    },
    {
        name: "karthik",
        email: "karhik81@ymailnasda.a",
        role: "Admin",
        status: "Deleted"

    },
    {
        name: "karthik",
        email: "karhik81@ymailnasda.a",
        role: "Admin",
        status: "Deleted"

    },
    {
        name: "karthik",
        email: "karhik81@ymaiasdasdaslnasda.a",
        role: "Admin",
        status: "Deleted"

    },
]

export default function UserTable({ route }: Props) {
    return (
        <main className={`mt-10  ${route == "slug" ? "" : "mx-5 p-[24px] border-[1px]"}  bg-white rounded-[4px]  gap-[4px] border-[#E4E7EC]`}>
            {/* headings  */}
            <section className='flex justify-between h-[42px] py-[12px] dh-bg'>
                <div className='text-[14px]  px-[40px]  cursor-pointer font-semibold w-[170px] text-[#171C20]'>Name</div>
                <div className='text-[14px]  px-[40px]  cursor-pointer font-semibold w-[170px] text-[#171C20]'>Email</div>
                <div className='text-[14px]  px-[40px]  cursor-pointer font-semibold w-[170px] text-[#171C20]'>Role</div>
                <div className='text-[14px]  px-[40px] text-center cursor-pointer font-semibold w-[170px] text-[#171C20]'>Status</div>
                <div className='text-[14px]  px-[40px] text-center cursor-pointer font-semibold  w-[170px] text-[#171C20]'>Action</div>
            </section>
            {
                Accoutns.map((i:any, index:number) => {
                    return <section key={index} className='flex justify-between border-b-[1px] h-[42px] py-[12px]  '>
                        <div className='  text-[14px] border-r-[1px]  h-[40px]  pl-6  w-[170px]   px-auto  cursor-pointer font-medium text-[#171C20] pr-[20px] '>{i.name}                       </div>
                        <div className='  text-[14px] border-r-[1px]  pr-4 h-[40px]  w-[170px] px-auto truncate   cursor-pointer font-medium text-[#171C20]'>{i.email}</div>
                        <div className='  text-[14px] border-r-[1px]  pr-4 h-[40px]  w-[170px]  px-auto   cursor-pointer font-medium text-[#171C20]'>{i.role}</div>
                        <div className=' text-[14px] border-r-[1px]  pr-4 h-[40px]  w-[170px]   px-auto cursor-pointer font-medium text-[#171C20]'>
                            {i.status == "Deleted" ? <span className='text-white bg-[#D42A2A] w-[170px] py-[4px] px-[12px] rounded-[4px]'>Delted</span> : <span className='text-white bg-[#59C857] rounded-[4px] py-[4px] px-[12px]'>Active</span>}
                        </div>
                        <div className='  text-[14px] border-r-[1px] flex gap-x-[10px]  px-auto h-[40px] pr-8 cursor-pointer font-medium text-[#171C20]'>
                            <img className='w-[32px] h-[32px] bg-[#3E4C59] rounded-full' src="/utils/bin.svg" alt="bin" />
                            <img className='w-[32px] h-[32px]  rounded-full' src="/utils/edit.svg" alt="bin" />
                        </div>
                    </section>
                })
            }
        </main >
    )
}