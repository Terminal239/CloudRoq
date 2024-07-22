"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { Area, ComposedChart, Line, ResponsiveContainer, XAxis } from "recharts";
import Container from "./Reusable/Container";

const PortfolioChart = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetch = async () => {
    setLoading(true);
    const response = await axios.get("/api/chart");
    setData(response.data);
    setLoading(false);
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <div className="rounded-lg bg-white p-4">
      <Container className="mb-8">
        <div className="mb-4 flex flex-col items-start gap-4">
          <h2 className="text-lg font-semibold">Portfolio</h2>
          <button className="rounded-md bg-gray-200 px-4 py-2 text-sm font-bold text-gray-700 hover:bg-gray-300">Settings</button>
        </div>
      </Container>
      <ResponsiveContainer width={"100%"} height={316}>
        {!loading ? (
          <ComposedChart data={data}>
            <XAxis className="!text-[12px]" dataKey={"month"} />
            <Area dataKey={"value"} stroke="#7c3aed" fill="#c4b5fd" />
            <Line type={"monotone"} dataKey={"value"} stroke="#7c3aed" />
          </ComposedChart>
        ) : (
          <div className="flex size-full items-center justify-center">
            <p className="text-xl">Loading data...</p>
          </div>
        )}
      </ResponsiveContainer>
    </div>
  );
};

export default PortfolioChart;
