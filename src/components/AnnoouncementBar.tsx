"use client";
import { getAnnouncementBar } from "@/actions/admin/ProductActions";
import { annoucement } from "@prisma/client";
import React, { useCallback, useEffect, useState } from "react";

type Props = {};

export default function AnnouncementBar({}: Props) {
  const [barData, setBarData] = useState<annoucement | null>(null);

  const getAnnouncement = useCallback(async () => {
    const data = await getAnnouncementBar();
    if (data && data !== barData) {
      setBarData(data);
    }
  }, []);

  useEffect(() => {
    getAnnouncement();
  }, [getAnnouncement]);

  return (
    <header className="h-[47px] fixed z-[1000] -mt-10 text-white text-center py-2 w-full bg-black ">
      {barData ? <div>{barData.message}</div> : null}
    </header>
  );
}
