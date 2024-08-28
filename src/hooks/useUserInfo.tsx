"use client"
import { useState, useEffect } from "react";
import { getUserInfo } from "@/actions/StateActions";

export function useUserInfo() {
    const [userInfo, setUserInfo] = useState<any | null>(null);

    const fetchUserInfo = async () => {
        try {
            const info = await getUserInfo();
            setUserInfo(info);
        } catch (error) {
            setUserInfo(null);
            console.log(error);
        }
    };

    useEffect(() => {
        fetchUserInfo();
    }, []);

    return userInfo;
}
