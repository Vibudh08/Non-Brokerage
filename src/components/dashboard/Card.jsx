import React from "react";
import { Card, Button } from "antd";
import { BarChartOutlined } from "@ant-design/icons";

const DashboardCard = ({ title, count, button }) => {
  return (
    <Card
      key={title}
      className="flex flex-col h-full w-full bg-cover bg-no-repeat shadow-md"
      style={{ backgroundImage: "url('/corner.png')" }}
    >
      <div className="flex flex-col h-full">
        <div className="text-gray-500 font-medium mb-2">{title}</div>
        <div className="text-3xl font-bold mb-4">{count}</div>
        <div className="flex justify-between items-center mt-auto">
          <Button className="bg-[#070026] text-white rounded-md px-4 py-1">
            {button}
          </Button>
          <BarChartOutlined style={{ fontSize: "40px" }} />
        </div>
      </div>

      {/* Optional: background gradient or pattern */}
      <div className="absolute top-0 right-0 w-full h-full opacity-10 bg-[url('/pattern.svg')] bg-cover pointer-events-none"></div>
    </Card>
  );
};

export default DashboardCard;
