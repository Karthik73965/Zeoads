"use client";
import React, { useCallback, useEffect, useState } from 'react';
import Header from './slug/Header';
import Balance from './slug/Balance';
import MainSlug from './slug/MainSlug';
import { AdAccountDetails } from '@/actions/Dashboard/AdAccountActions';
import { Account } from '@prisma/client';

type Props = {
    id: string;
};

export default function SpecificSection({ id }: Props) {
    const [details, setDetails] = useState<Account | null>(null);

    const fetchAccDetails = useCallback(async () => {
        try {
            const data = await AdAccountDetails(id);
            console.log("acc details", data);
            setDetails(data);
        } catch (error) {
            console.error("Failed to fetch account details:", error);
        }
    }, [id]);

    useEffect(() => {
        if (id) {
            fetchAccDetails();
        }
    }, [id, fetchAccDetails]);

    return (
        <main className='w-full mt-10 mx-5 border-[1px] border-[#E4E7EC] rounded-[8px] p-[24px] bg-white'>
            <Header
                id={details?.id || ""}
                status={details?.status}
                link={details?.AddLink}
                creditAccount={details?.creditAccount}
                userId={details?.userId}
            />
            <Balance currency={details?.currency} balance={details?.balance} id={id} />
            <MainSlug id={id} />
        </main>
    );
}
