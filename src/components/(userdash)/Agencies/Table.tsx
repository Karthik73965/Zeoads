"use client";
import { getAdAccounts } from '@/actions/Dashboard/AdAccountActions';
import { useUserInfo } from '@/hooks/useUserInfo';
import Link from 'next/link';
import React, { useCallback, useEffect, useState } from 'react';

type Props = {
    route: string;
};

export default function Table({ route }: Props) {
    const [accounts, setAccounts] = useState<any[] | null>([]);
    const userinfo = useUserInfo();

    const getaccounts = useCallback(async () => {
        try {
            const data = await getAdAccounts(userinfo?.id);
            console.log(data);
            setAccounts(data);
        } catch (error) {
            console.log(error);
        }
    }, [userinfo?.id]);

    useEffect(() => {
        if (userinfo?.id) {
            getaccounts();
        }
    }, [userinfo?.id, getaccounts]);

    return (
        <main className={`mt-10 ${route === "slug" ? "" : "mx-5 p-[24px] border-[1px]"} bg-white rounded-[4px] gap-[4px] border-[#E4E7EC]`}>
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
            {accounts && accounts.map((i: any, index: number) => (
                <section key={index} className='flex justify-between h-[42px] py-[12px]'>
                    <div className='w-[100px] text-[14px] border-r-[1px] h-[40px] text-center pl-6 truncate cursor-pointer font-medium text-[#171C20]'>
                        <img src="/userDash/Agencies/meta.svg" alt="meta" />
                    </div>
                    <div className='w-[100px] text-[14px] border-r-[1px] pr-4 h-[40px] text-center truncate cursor-pointer font-medium text-[#171C20]'>{i.userId}</div>
                    <div className='w-[100px] text-[14px] border-r-[1px] pr-4 h-[40px] text-center truncate cursor-pointer font-medium text-[#171C20]'>{i.id}</div>
                    <div className='w-[100px] text-[14px] border-r-[1px] pr-4 h-[40px] text-center cursor-pointer font-medium text-[#171C20]'>
                        {i.status === "PENDING" ? (
                            <span className='text-[#F3CC02] bg-[#FCF8DD] py-[4px] px-[12px]'>Pending</span>
                        ) : (
                            <span className='text-[#159A3A] bg-[#E4F6E4] py-[4px] px-[12px]'>Approved</span>
                        )}
                    </div>
                    <div className='w-[100px] text-[14px] border-r-[1px] pr-4 h-[40px] text-center truncate cursor-pointer font-medium text-[#171C20]'>{i.balance}</div>
                    <div className='w-[100px] text-[14px] border-r-[1px] pr-4 h-[40px] text-center truncate cursor-pointer font-medium text-[#171C20]'>{i.timezone}</div>
                    {i?.status === "COMPLETED" ? (
                        <Link href={`/account/${i.id}`} className='w-[100px] h-[40px] text-center truncate cursor-pointer font-medium text-[#171C20] text-[12px] primary-text'>View Account</Link>
                    ) : (
                        <div className='w-[100px] h-[40px] text-center truncate cursor-pointer font-medium text-[#171C20] text-[12px]'>View Account</div>
                    )}
                </section>
            ))}
        </main>
    );
}
