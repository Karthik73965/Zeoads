"use client";
import { getAdAccounts } from "@/actions/Dashboard/AdAccountActions";
import { useUserInfo } from "@/hooks/useUserInfo";
import Link from "next/link";
import React, { useCallback, useEffect, useState } from "react";

type Props = {
  route: string;
};

export default function Table({ route }: Props) {
  const [accounts, setAccounts] = useState<any[] | null>([]);
  const userinfo = useUserInfo() || "";

  const getaccounts = useCallback(async () => {
    try {
      const data = await getAdAccounts(userinfo?.id || "");
      setAccounts(data);
    } catch (error) {
      console.error(error);
    }
  }, [userinfo?.id]);

  useEffect(() => {
    if (userinfo?.id) {
      getaccounts();
    }
  }, [userinfo?.id, getaccounts]);

  return (
    <div className="mt-10 mx-5 p-4 bg-white rounded-lg shadow-md overflow-x-auto">
      {/* Table Header */}
      <div className="min-w-[800px] grid grid-cols-7 gap-4 p-4 border-b border-gray-200 text-center font-semibold text-gray-700">
        <div className="min-w-[100px]">Platform</div>
        <div className="min-w-[100px]">Account Name</div>
        <div className="min-w-[100px]">Account ID</div>
        <div className="min-w-[100px]">Account Status</div>
        <div className="min-w-[100px]">Balance</div>
        <div className="min-w-[100px]">Time-Zone</div>
        <div className="min-w-[100px]">Actions</div>
      </div>

      {/* Table Content */}
      {accounts?.map((account: any, index: number) => (
        <div
          key={index}
          className="min-w-[800px] grid grid-cols-7 gap-4 p-4 items-center border-b border-gray-100 text-center text-gray-600"
        >
          <div className="truncate">
            <img
              src="/userDash/Agencies/meta.svg"
              alt="Platform"
              className="mx-auto"
            />
          </div>
          <div className="truncate">{account.userId}</div>
          <div className="truncate">{account.id}</div>
          <div className="truncate">
            {account.status === "PENDING" ? (
              <span className="text-yellow-600 bg-yellow-100 px-3 py-1 rounded-md">
                Pending
              </span>
            ) : (
              <span className="text-green-600 bg-green-100 px-3 py-1 rounded-md">
                Approved
              </span>
            )}
          </div>
          <div className="truncate">{account.balance}</div>
          <div className="truncate">{account.timezone}</div>
          <div>
            {account?.status === "COMPLETED" ? (
              <Link
                href={`/account/${account.id}`}
                className="text-blue-500 hover:underline"
              >
                View Account
              </Link>
            ) : (
              <span className="text-gray-500">View Account</span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
