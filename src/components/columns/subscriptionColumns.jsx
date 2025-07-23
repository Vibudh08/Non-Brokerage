import React from "react";
import { Tag,  } from "antd";

const createSubscriptionColumns  = (getColumnSearchProps) =>  [
    {
      title: "S.No",
      dataIndex: "serial",
      key: "serial",
      sorter: (a, b) => a.serial - b.serial,
    },
    {
      title: "Transaction Id",
      dataIndex: "transactionID",
      key: "transactionID",
      ...getColumnSearchProps("transactionID"),
    },
    {
      title: "Payment Status",
      dataIndex: "paymentStatus",
      key: "paymentStatus",
      filters: [
        { text: "Paid", value: "Paid" },
        { text: "Pending", value: "Pending" },
        { text: "Failed", value: "Failed" },
      ],
      onFilter: (value, record) => record.paymentStatus === value,
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
      sorter: (a, b) => {
        const numA = parseFloat(a.amount.replace("$", ""));
        const numB = parseFloat(b.amount.replace("$", ""));
        return numA - numB;
      },
    },
    {
      title: "Plan Status",
      dataIndex: "planStatus",
      key: "planStatus",
      filters: [
        { text: "Basic", value: "Basic" },
        { text: "Standard", value: "Standard" },
        { text: "Premium", value: "Premium" },
      ],
      onFilter: (value, record) => record.planStatus === value,
      render: (status) => {
        let color;
        switch (status) {
          case "Basic":
            color = "#14b8a6"; // teal-600
            break;
          case "Standard":
            color = "#1e40af"; // blue-800
            break;
          case "Premium":
            color = "#dc2626"; // red-600
            break;
          default:
            color = "gray";
        }
        return <Tag color={color}>{status}</Tag>;
      },
    },
    {
      title: "Start Date & Time",
      dataIndex: "start",
      key: "start",
      sorter: (a, b) =>
        new Date(a.start).getTime() - new Date(b.start).getTime(),
    },
    {
      title: "Expiry Date & Time",
      dataIndex: "expiry",
      key: "expiry",
      sorter: (a, b) =>
        new Date(a.expiry).getTime() - new Date(b.expiry).getTime(),
    },
  ];
const planStatuses = ["Basic", "Standard", "Premium"];

const subscriptionData = Array.from({ length: 10 }, (_, i) => ({
  key: i + 1,
  serial: i + 1,
  transactionID: `TXN00${i + 1}`,
  paymentStatus: ["Paid", "Pending", "Failed"][i % 3],
  amount: `$${(100 + i * 50).toFixed(2)}`,
  planStatus: planStatuses[i % 3],
  start: `2024-0${(i % 9) + 1}-01 10:00:00`,
  expiry: `2024-1${(i % 9) + 1}-01 10:00:00`,
}));

export  {createSubscriptionColumns, subscriptionData};
