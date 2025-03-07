"use client";
import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

export default function Piechart({
  AllUsers,
  newUsers,
}: {
  AllUsers: any;
  newUsers: any;
}) {
  const data = [
    //@ts-ignore
    { name: "Page B", pv: Number(newUsers) },
    //@ts-ignore
    { name: "Page A", pv: Number(AllUsers) },
  ];
  return (
    <div className="p-[24px] gap-[16px] border-[1px] w-[364px] h-[357px] rounded-md bg-white">
      <div className="flex justify-between">    
        <div className="flex">
          <div className="ml-5">
            <div className="font-bold text-[20px] mb-3">Total Users</div>
            <div className="w-full ml-1 -mt-3 h-[250px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={data}
                    dataKey="pv"
                    cx="50%"
                    cy="50%"
                    outerRadius="100%"
                    fill="blue"
                    width={230}
                    height={230}
                  >
                    {data.map((entry: any, index: number) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
        <div className="text-[#3E4C59] flex  gap-x-5   -mt-5 ml-3"> 
          <div className="text-white rounded-md font-medium  p-3 flex gap-x-5 bg-black">New Users : {JSON.stringify(newUsers)}</div>
          <div className="text-white rounded-md font-medium  p-3 flex gap-x-5 bg-[#4779E8]">All Users : {JSON.stringify(AllUsers)}</div>
        </div>
    </div>
  );
}

const COLORS = ["#0088FE", "#000000"];
