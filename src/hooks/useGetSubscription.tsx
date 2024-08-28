"use client";

import { getAllTxns } from "@/actions/Dashboard/BillingActions";
import { useUserInfo } from "./useUserInfo";
import { useState, useEffect } from "react";

type Props = {};

export default function useGetSubscription() {
    const [transactions, setTransactions] = useState<any>(null);

    const userinfo = useUserInfo();

    useEffect(() => {
        const fetchTxns = async () => {
            try {
                if (userinfo?.id) {
                    const data = await getAllTxns(userinfo?.id);
                    setTransactions(data);
                }
            } catch (error) {
                console.log(error);
            }
        };

        if (userinfo) {
            fetchTxns();
        }
    }, [userinfo]);

    return transactions;
}
