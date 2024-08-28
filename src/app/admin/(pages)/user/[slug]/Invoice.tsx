"use client";
import React, { useEffect, useState } from "react";
import { InvoiceInfo, UpdateInvoiceInfp } from "@/actions/Dashboard/UtilsActions";

type Props = {
    id: string;
};

export default function MainInvoice({ id }: Props) {
    const [invoiceInfp, SetInvoiceInfo] = useState<any>("");

    const [name, setname] = useState<string>("");
    const [type, settype] = useState<string>("");
    const [country, setcountry] = useState<string>("");
    const [email, setemail] = useState<string>("");
    const [adress, setadress] = useState<string>("");
    const [zipcode, setzipcode] = useState<string>("");
    const [taxOffice, settaxOffice] = useState<string>("");
    const [Reg_number, setReg_number] = useState<string>("");
    const [phoneNumber, setphoneNumber] = useState<string>("");
    const [selectedModel, setSelectedModel] = useState<string>("");
    const [selectedCurrency, setSelectedCurrency] = useState<string>("");

    useEffect(() => {
        const FetchInvoice = async () => {
            const info = await InvoiceInfo(id);
            SetInvoiceInfo(info);
            //@ts-ignore
            setname(info?.name);
            //@ts-ignore
            settype(info?.type);
            //@ts-ignore
            setcountry(info?.country);
            //@ts-ignore
            setemail(info?.email);
            //@ts-ignore
            setadress(info?.adress);
            //@ts-ignore
            setzipcode(info?.zipcode);
            //@ts-ignore
            settaxOffice(info?.taxOffice);
            //@ts-ignore
            setReg_number(info?.Reg_number);
            //@ts-ignore
            setphoneNumber(info?.phoneNumber);
            //@ts-ignore
            setSelectedModel(info?.model);
            //@ts-ignore
            setSelectedCurrency(info?.currency);
        };

        if (id) {
            FetchInvoice();
        }
    }, [id]);

    return (
        <main className="w-full dh-bg">
            <main className="my-10 mx-5 bg-white rounded-[8px] p-[24px] border-[1px]">
                {/* The rest of your component code */}
            </main>
        </main>
    );
}
