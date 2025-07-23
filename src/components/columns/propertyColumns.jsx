import React from "react";
import { Tag, Space } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

const createPropertyColumns  = (getColumnSearchProps) =>  [
    {
      title: "S.No",
      dataIndex: "serial",
      key: "serial",
      sorter: (a, b) => a.serial - b.serial,
    },
    {
      title: "Property Id",
      dataIndex: "propertyId",
      key: "propertyId",
      ...getColumnSearchProps("propertyId"),
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      ...getColumnSearchProps("name"),
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
      ...getColumnSearchProps("category"),
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      sorter: (a, b) => {
        const numA = parseFloat(a.price.replace("$", ""));
        const numB = parseFloat(b.price.replace("$", ""));
        return numA - numB;
      },
    },
    {
      title: "State",
      dataIndex: "state",
      key: "state",
      ...getColumnSearchProps("state"),
    },
    {
      title: "City",
      dataIndex: "city",
      key: "city",
      ...getColumnSearchProps("city"),
    },
    {
      title: "Created At",
      dataIndex: "createdAt",
      key: "createdAt",
      sorter: (a, b) =>
        new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <Tag color={status === "Approved" ? "green" : "red"}>{status}</Tag>
      ),
      filters: [
        { text: "Approved", value: "Approved" },
        { text: "Disapproved", value: "Disapproved" },
      ],
      onFilter: (value, record) => record.status === value,
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <EditOutlined
            style={{ color: "#1890ff", cursor: "pointer" }}
            onClick={() => console.log("Edit", record)}
          />
          <DeleteOutlined
            style={{ color: "#ff4d4f", cursor: "pointer" }}
            onClick={() => console.log("Delete", record)}
          />
        </Space>
      ),
    },
  ];

  const propertyStatuses = ["Approved", "Disapproved"];

const propertyData = Array.from({ length: 10 }, (_, i) => ({
  key: i + 1,
  serial: i + 1,
  propertyId: `PROP00${i + 1}`,
  name: ["John", "Jim", "Joe", "Anna", "Mark"][i % 5],
  category: ["Apartment", "Villa", "Condo"][i % 3],
  price: `$${1000 + i * 200}`,
  state: ["New York", "California", "Texas", "Florida"][i % 4],
  city: ["NYC", "LA", "Austin", "Miami"][i % 4],
  createdAt: `2024-0${(i % 9) + 1}-01`,
  status: propertyStatuses[Math.floor(Math.random() * 2)],
}));

export  {createPropertyColumns, propertyData};
