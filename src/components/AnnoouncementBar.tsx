"use client";
import { getAnnouncementBar } from "@/actions/admin/ProductActions";
import { annoucement } from "@prisma/client";
import React, { useEffect, useState } from "react";

type Props = {};

export default function AnnouncementBar({}: Props) {
  const [barData, setBarData] = useState<annoucement | null>(null);

  const fetchAnnouncement = async () => {
    const data = await getAnnouncementBar();
    // Only update state if data is different
    if (data && data.message !== barData?.message) {
      setBarData(data);
    }
  };

  useEffect(() => {
    fetchAnnouncement();
  }, []); // Fetch announcement on mount

  return (
    <header className="h-[47px] fixed z-[1000] -mt-10 text-white text-center py-2 w-full bg-black ">
      {barData ? <div>{barData.message}</div> : null}
    </header>
  );
}
