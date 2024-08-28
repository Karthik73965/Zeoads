"use client";
import Link from 'next/link';
import React from 'react';

type Props = {
    userinfo: any[];
}

export default function UsersTable({ userinfo }: Props) {
    return (
        <main className='py-[16px] bg-white mt-10 mx-5 px-[24px] rounded-[4px] gap-[4px]'>
            {/* Headings */}
            <section className='flex justify-between dh-bg py-[12px] px-[16px] h-[42px]'>
                <div className='text-[#171C20] w-[30px] text-[12px] font-medium'>No .</div>
                <div className='text-[#171C20] w-[100px] text-center text-[12px] font-medium'>Customer Name</div>
                <div className='text-[#171C20] w-[100px] text-center text-[12px] font-medium'>Account ID</div>
                <div className='text-[#171C20] w-[100px] text-center text-[12px] font-medium'>Phone No.</div>
                <div className='text-[#171C20] w-[100px] text-center text-[12px] font-medium'>Date of purchase</div>
                <div className='text-[#171C20] w-[100px] text-center text-[12px] font-medium'>Balance</div>
                <div className='text-[#171C20] w-[100px] text-center text-[12px] font-medium'>Account Type</div>
                <div className='text-[#171C20] w-[100px] text-center text-[12px] font-medium'>Actions</div>
            </section>

            {/* User Rows */}
            {userinfo.map((user, index) => {
                const transactionDate = user.firstTransaction?.createdAt ? new Date(user.firstTransaction.createdAt) : null;
                const formattedDate = transactionDate ? transactionDate.toLocaleDateString() : "N/A";

                // Calculate total balance across all currencies
                const totalBalance = Object.values(user.totalBalanceByCurrency).reduce(
                    //@ts-ignore
                    (acc, balance) => acc + balance,
                    0
                );

                // Determine the user type based on the first transaction's date
                let userType = "Free User";
                if (transactionDate) {
                    const oneMonthAgo = new Date();
                    oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);

                    if (transactionDate > oneMonthAgo) {
                        userType = "Paid User";
                    }
                }

                return (
                    <section key={user.id} className='flex justify-between items-center py-[12px] px-[16px] h-[42px]'>
                        <div className='text-[#171C20] w-[30px] text-[12px]'>{index + 1}</div>
                        <div className='text-[#171C20] w-[100px] text-center text-[12px]'>{user.name}</div>
                        <div className='text-[#171C20] w-[100px] text-center truncate text-[12px]'>{user.id}</div>
                        <div className='text-[#171C20] w-[100px] text-center text-[12px]'>{user.phoneNumber}</div>
                        <div className='text-[#171C20] w-[100px] text-center text-[12px]'>{formattedDate}</div>
                        {/* @ts-ignore */}
                        <div className='text-[#171C20] w-[100px] text-center text-[12px]'>{totalBalance.toFixed(2)}</div>
                        <div className='text-[#171C20] w-[100px] text-center text-[12px]'>{userType}</div>
                        <div className='text-[#171C20] w-[100px] text-center text-[12px]'>
                            <Link href={`/admin/user/${user.id}`} className='text-blue-500 hover:underline'>
                                View
                            </Link>
                        </div>
                    </section>
                );
            })}
        </main>
    );
}
