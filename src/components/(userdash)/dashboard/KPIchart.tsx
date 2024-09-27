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

// Dummy Data
const dummyThings = {
  dailyMontlyPerformance: [
    { createdAt: "2024-09-01T12:34:56Z", amount: 120 },
    { createdAt: "2024-09-01T15:00:00Z", amount: 80 },
    { createdAt: "2024-09-02T12:34:56Z", amount: 150 },
    { createdAt: "2024-09-03T09:22:45Z", amount: 200 },
    { createdAt: "2024-09-04T11:11:11Z", amount: 50 },
    { createdAt: "2024-09-05T12:34:56Z", amount: 300 },
  ],
};

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
          acc[day] = { day: `Day ${day}`, spent: 0 };
        }

        // Add amount to the respective day's spent
        acc[day].spent += entry.amount;

        return acc;
      }, {})
    );
  };

  // UseEffect to update data when things prop changes
  useEffect(() => {
    if (things) {
      const transformed: any = transformData(things);
      setData(transformed);
    }
  }, [things]); // Depend on things prop so that it re-runs when things updates

  return (
    <>
      {
        <div className="p-[24px] m-4 gap-[16px] border-[1px] w-full rounded-md bg-white">
          <div className="flex justify-between">
            <div className="flex">
              <div className="ml-5">
                <div className="text-[#3E4C59] font-semibold text-[20px] mb-3">
                  KPI Chart{" "}
                </div>
                <p className="-mt-2">Key Performance Indicators</p>
                <div className="w-full  h-[300px] mt-10">
                  <ResponsiveContainer width={900} height="100%">
                    <BarChart width={500} height={300} data={data}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="day" /> {/* Display day on the X-axis */}
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="spent" fill="#4779E8" />{" "}
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

// Usage of the component with dummy data
export function KPICHART() {
  return (
    <div className="">
      <MonthlyBarChart things={dummyThings} />
    </div>
  );
}
