"use client";
import React from "react";
import {
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer,
} from "recharts";

export default function Piechart() {
    return (
        <div className="p-[24px] gap-[16px] border-[1px] w-[364px] h-[357px] rounded-md bg-white">
            <div className="flex justify-between">
                <div className="flex">
                    <div className="ml-5">
                        <div className="font-bold text-[20px] mb-3">Total Users</div>
                        <div className="w-full   h-[250px]">
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
                                        {data.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                        ))}
                                    </Pie>
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-[#3E4C59] mt-5 ml-3"></div>
        </div>
    );
}

const data = [
    { name: "Page A", pv: 400 },
    { name: "Page B", pv: 30 },
];

const COLORS = ['#0088FE', '#000000',];
