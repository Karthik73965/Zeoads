"use client";
import React, { useEffect, useState, useCallback, useMemo } from "react";
import AdminMainNav from "../AdminMainNav";
import UsersTable from "./UsersTable";
import { getAllUsers } from "@/actions/admin/AdminUserActions";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type Props = {};

export default function UserMain({}: Props) {
  const [WhichUsers, SetWhichUsers] = useState("Active");
  const [users, setUsers] = useState<any>(null);
  const [filter, setFilter] = useState<string>("oldest");

  const AllUsers = async () => {
    try {
      const data = await getAllUsers();
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    AllUsers();
  }, []);

  // Memoize the filter function to avoid recreating it on every render
  const filterApply = useCallback(() => {
    if (!users) return [];

    // Clone the users array to avoid mutating the original array
    let filteredList = [...users];

    // Apply the filter based on the selected option
    if (filter === "Newest" || filter == "This Year") {
      // Sort users by the first transaction date, handling missing or undefined dates
      filteredList.sort((a: any, b: any) => {
        const dateA = a.firstTransaction?.createdAt
          ? new Date(a.firstTransaction.createdAt).getTime()
          : 0;
        const dateB = b.firstTransaction?.createdAt
          ? new Date(b.firstTransaction.createdAt).getTime()
          : 0;
        return dateB - dateA; // Newest first
      });
    } else if (filter === "oldest") {
      // Sort users by the first transaction date, handling missing or undefined dates
      filteredList.sort((a: any, b: any) => {
        const dateA = a.firstTransaction?.createdAt
          ? new Date(a.firstTransaction.createdAt).getTime()
          : 0;
        const dateB = b.firstTransaction?.createdAt
          ? new Date(b.firstTransaction.createdAt).getTime()
          : 0;
        return dateA - dateB; // Oldest first
      });
    } 
    return filteredList;
  }, [users, filter]);

  // Memoize the filtered users so it only recalculates when the filter changes
  const filteredUsers = useMemo(() => {
    return filterApply();
  }, [filterApply]);

  // Filter users when WhichUsers state changes
  useEffect(() => {
    if (users) {
      if (WhichUsers === "Paid") {
        const oneMonthAgo = new Date();
        oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);

        const paidUsers = users.filter((user: any) => {
          const transactionDate = user.firstTransaction?.createdAt
            ? new Date(user.firstTransaction.createdAt)
            : null;
          return transactionDate && transactionDate > oneMonthAgo;
        });
        setUsers(paidUsers);
      } else {
        // Reset to all users when "Active" is selected
        AllUsers();
      }
    }
  }, [WhichUsers]);

  const Filter = () => {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="w-[103px] h-[56px] cursor-pointer flex rounded-[8px] bg-white gap-[8px] ml-10 border-[1px] border-[#CBD2DA] p-[16px]">
            Filter
            <img src="/utils/filter.svg" alt="filter" />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[433px] rounded-[8px] p-[24px] mt-5 mr-28">
          <div className="font-semibold">Filter by time & date</div>
          <div className="flex gap-x-5 mx-5 mt-5">
            <div className="text-[#1F2933] font-medium">Oldest</div>
            <input
              type="radio"
              className="mt-1 w-[20px] h-[20px]"
              checked={filter === "oldest"}
              onChange={() => setFilter("oldest")}
              onClick={(e) => e.stopPropagation()} // Prevent dropdown from closing
            />
            <div className="text-[#1F2933] font-medium">Newest</div>
            <input
              type="radio"
              className="mt-1 w-[20px] h-[20px]"
              checked={filter === "Newest"}
              onChange={() => setFilter("Newest")}
              onClick={(e) => e.stopPropagation()} // Prevent dropdown from closing
            />
            <div className="text-[#1F2933] font-medium">This Year</div>
            <input
              type="radio"
              className="mt-1 w-[20px] h-[20px]"
              checked={filter === "This Year"}
              onChange={() => setFilter("This Year")}
              onClick={(e) => e.stopPropagation()} // Prevent dropdown from closing
            />
          </div>
          <div
            onClick={() => filterApply()}
            className="text-white bg-[#4779E8] w-full p-3 rounded-md mt-5 cursor-pointer"
          >
            Apply
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  };

  return (
    <main className="w-full min-h-screen dh-bg">
      <AdminMainNav />
      {/* ---------------------------------------- Main section -------------------------------------- */}
      <section className="mt-10 flex justify-between mx-5">
        <div className="flex bg-white border-[1px] gap-[16px] h-[58px] w-[313px] rounded-[8px] px-[24px] py-[9px]">
          <div
            onClick={() => SetWhichUsers("Active")}
            className={`h-[40px] cursor-pointer border-b-[2px] pl-2 ${
              WhichUsers === "Active"
                ? "primary-text border-[#4779E8]"
                : "text-[#3E4C59]"
            } pt-2`}
          >
            All Active Users
          </div>
          <div
            onClick={() => SetWhichUsers("Paid")}
            className={`h-[40px] cursor-pointer border-b-[2px] pl-2 ${
              WhichUsers === "Paid"
                ? "primary-text border-[#4779E8]"
                : "text-[#3E4C59]"
            } pt-2`}
          >
            Paid Users
          </div>
        </div>
        {/* filter */}
        <div className="flex gap-[px]">
          <Filter />
          <div className="w-[56px] h-[56px] rounded-[8px] bg-white gap-[8px] ml-10 border-[1px] border-[#CBD2DA] p-[16px]">
            <img src="/userDash/Agencies/share.svg" alt="share" />
          </div>
        </div>
      </section>
      <section>
        {filteredUsers && <UsersTable userinfo={filteredUsers} />}
      </section>
    </main>
  );
}
