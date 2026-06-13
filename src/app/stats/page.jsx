"use client";
import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Text", value: 40 },
  { name: "Call", value: 35 },
  { name: "Video", value: 25 },
];

const COLORS = ["#7c3aed", "#1e3a2f", "#22c55e"];

export default function StatsPage() {
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
