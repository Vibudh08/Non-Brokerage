import React from "react";
import { Table } from "antd";

const TableList = ({ columns, data }) => (
  <Table columns={columns} pagination={{ pageSize: 4 }} scroll={{ x: 'max-content' }}   dataSource={data} />
);
export default TableList;
