const createEnquiryColumns  = (getColumnSearchProps) => [
    {
      title: "S.No",
      dataIndex: "serial",
      key: "serial",
      sorter: (a, b) => a.serial - b.serial,
    },
    {
      title: "Property Name",
      dataIndex: "Property",
      key: "Property",
      ...getColumnSearchProps("Property"),
    },
    {
      title: "Customer Name",
      dataIndex: "name",
      key: "name",
      ...getColumnSearchProps("name"),
    },
    {
      title: "Mobile",
      dataIndex: "mobile",
      key: "mobile",
      sorter: (a, b) => a.mobile - b.mobile,
      ...getColumnSearchProps("mobile"),
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      ...getColumnSearchProps("email"),
    },
    {
      title: "Enquiry Date",
      dataIndex: "enquiry",
      key: "enquiry",
      sorter: (a, b) =>
        new Date(a.enquiry).getTime() - new Date(b.enquiry).getTime(),
    },
  ];

  
const enquiryData = Array.from({ length: 10 }, (_, i) => ({
  key: i + 1,
  serial: i + 1,
  Property: `PROP00${i + 1}`,
  name: ["John Doe", "Jane Smith", "Mike Lee", "Sara Khan", "Raj Patel"][i % 5],
  mobile: `98765${10000 + i}`,
  email: [
    "john@example.com",
    "jane@example.com",
    "mike@example.com",
    "sara@example.com",
    "raj@example.com",
  ][i % 5],
  enquiry: `2024-0${(i % 9) + 1}-1${i % 9} 10:00:00`,
}));

export  {createEnquiryColumns, enquiryData};
