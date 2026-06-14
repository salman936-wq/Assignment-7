"use client";
import { Context } from "@/provider/ContextProvider";
import { useContext } from "react";
import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from "recharts";



const COLORS = ["#7c3aed", "#1e3a2f", "#22c55e"];

export default function StatsPage() {
  const { timeline } = useContext(Context);

  const callLength = timeline.filter(item => item.type === 'Call').length;
  const textLength = timeline.filter(item => item.type === 'Text').length;
  const videoLength = timeline.filter(item => item.type === 'Video').length;

  const data = [
  { name: "Text", value: textLength },
  { name: "Call", value: callLength },
  { name: "Video", value: videoLength },
];


  return (
    <main className="min-h-screen bg-[#f0f2f5] px-6 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-black text-gray-900 mb-6 tracking-tight">
          Friendship Analytics
        </h1>

        <div className="bg-white rounded-xl p-6">
          <p className="text-sm text-gray-500 mb-6">By Interaction Type</p>
          <ResponsiveContainer width="100%" height={280}>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={70}
                outerRadius={110}
                paddingAngle={5}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </main>
  );
}
