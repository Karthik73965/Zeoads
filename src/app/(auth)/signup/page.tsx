"use client";
import React, { useEffect, useState } from 'react';
import { verifyToken } from '@/utils/helpers';

import Script from 'next/script';
import { CreateUser } from '@/actions/AuthActions';
interface Props { }

export default function Page({ }: Props) {
    const [status, setStatus] = useState<boolean>(false)
    const [otplessinfo, setotplessinfo] = useState<any>(null)

    const token: string | null = otplessinfo ? JSON.parse(otplessinfo).token : null;

    const userId: string = otplessinfo ? JSON.parse(otplessinfo).userId : null || "";


    useEffect(() => {
        const handleOtpless = (otplessUser: any) => {
            setotplessinfo(JSON.stringify(otplessUser));
            setStatus(true);
        };
        //@ts-ignore
        window.otpless = handleOtpless;

    }, [token]);

    useEffect(() => {
        const getIdAcessTokenAsync = async () => {
            if (!token) {
                return;
            }

            try {
                const userDetail = await verifyToken(token, "VR65QXGRT6YJUJHCOHVB607YVGE9VZP6", "ehjruitnzlu5h5g0i3la86smqh44mry2").then(async (details: any) => {
                    await CreateUser(userId, details.name, details.email, details.phone_number, details.country_code).then((response: any) => {
                        alert(response.message)
                        window.location.reload()
                    }).catch((err) => {
                        alert(err)  
                    })
                }).catch((error: any) => {
                    alert(error)
                })


            } catch (error) {
                console.error('Error verifying token:', error);
            }
        };

        getIdAcessTokenAsync();
    }, [token, status , userId]);

    return (
        <main className='pt-10 dh-bg min-h-screen'>
            <Script
                strategy="beforeInteractive"
                id="otpless-sdk"
                type="text/javascript"
                data-appid="40QPLY4PUSRV0E0VMZCU"
                src="https://otpless.com/v2/auth.js"
            />
            <div className='mt-10' id="otpless-login-page"></div>
        </main>
    );
}
