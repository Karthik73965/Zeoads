"use client";
import { getAnnouncementBar } from "@/actions/admin/ProductActions";
import { annoucement } from "@prisma/client";
import React, { useCallback, useEffect, useState } from "react";

type Props = {};

export default function AnnoouncementBar({}: Props) {
  const [barData, SetbarData] = useState<annoucement | null>(null);

  const getAnnoncmenet = useCallback(async () => {
    const data = await getAnnouncementBar();
    if (data) {
      SetbarData(data);
    }
  }, []);


  useEffect(() => {
    getAnnoncmenet();
  },);
  return (
    <header className="h-[47px] fixed z-[1000] -mt-10 text-white text-center py-2  w-full bg-black ">
      {barData ? <div>{barData.message}</div> : ""}
    </header>
  );
}
