"use client";
import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// Component to render the Bar Chart
export default function MonthlyBarChart({ things }: { things: any }) {
  const [data, setData] = useState([]);

  // Transform the data function with added safety checks
  const transformData = (response: any) => {
    if (!response || !Array.isArray(response.dailyMontlyPerformance)) {
      return [];
    }

    return Object.values(
      response.dailyMontlyPerformance.reduce((acc: any, entry: any) => {
        const day = new Date(entry.createdAt).getDate(); // Get the day of the month from createdAt

        // Initialize day in accumulator if it doesn't exist
        if (!acc[day]) {
          acc[day] = { day: `Day ${day}`, collectedFunds: 0 };
        }

        // Add amount to the respective day's collectedFunds
        acc[day].collectedFunds += entry.amount;

        return acc;
      }, {})
    );
  };

  // UseEffect to update data when things prop changes
  useEffect(() => {
    if (things) {
      const transformed:any = transformData(things);
      setData(transformed);
    }
  }, [things]); // Depend on things prop so that it re-runs when things updates

  return (
    <>
      {
        <div className="p-[24px] gap-[16px] border-[1px] rounded-md bg-white">
          <div className="flex justify-between">
            <div className="flex">
              <div className="ml-5">
                <div className="text-[#3E4C59] font-semibold text-[20px] mb-3">
                  Overall Monthly Performance
                </div>
                <div className="w-full h-[300px] mt-10">
                  <ResponsiveContainer width={600} height="100%">
                    <BarChart width={500} height={300} data={data}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="day" /> {/* Display day on the X-axis */}
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="collectedFunds" fill="#4779E8" />{" "}
                      {/* Display collected funds as bars */}
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  );
}
