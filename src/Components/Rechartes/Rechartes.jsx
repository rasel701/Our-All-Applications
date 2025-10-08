import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "5 star", value: 12000 },
  { name: "4 star", value: 7000 },
  { name: "3 star", value: 4500 },
  { name: "2 star", value: 3000 },
  { name: "1 star", value: 1500 },
];

const Rechartes = ({ rating }) => {
  return (
    <div className="w-[100%] mx-auto mt-3 h-[400px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={rating}
          layout="vertical"
          margin={{ top: 10, right: 30, left: 0, bottom: 30 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" />
          <YAxis type="category" dataKey="name" />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" fill="#FF8C00" barSize={30} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Rechartes;
