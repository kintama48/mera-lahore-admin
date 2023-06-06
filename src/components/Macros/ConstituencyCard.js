import React from "react";
import { Card } from "antd";
import { useNavigate } from "react-router-dom";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const ConstituencyCard = ({
  name,
  total,
  pending,
  resolved,
  inProgress,
  chartData,
}) => {
  const nav = useNavigate();

  const handleCardClick = (name) => {
    nav(`/complaints/cc/${name}`);
  };

  return (
    <Card
      onClick={() => handleCardClick(name)}
      className="pb-4 w-[350px] cursor-pointer shadow-xl"
      title={name}
    >
      <div className="flex justify-between">
        <div>
          <p className="text-t1 mt-2">Total: {total}</p>
          <p className="text-t1 mt-2">Pending: {pending}</p>
          <p className="text-t1 mt-2">Resolved: {resolved}</p>
          <p className="text-t1 mt-2">In Progress: {inProgress}</p>
        </div>
        <div className="w-1/2 h-1/2">
          <Pie data={chartData} />
        </div>
      </div>
    </Card>
  );
};

export default ConstituencyCard;
