const createCollegeRentColumns  = (getColumnSearchProps) => [
    {
      title: "S.No",
      dataIndex: "serial",
      key: "serial",
      sorter: (a, b) => a.serial - b.serial,
    },
    {
      title: "Transaction ID",
      dataIndex: "transactionIDpr",
      key: "transactionIDpr",
      ...getColumnSearchProps("transactionIDpr"),
    },
    {
      title: "Pay Type",
      dataIndex: "payType",
      key: "payType",
      filters: [
        { text: "Online", value: "Online" },
        { text: "Offline", value: "Offline" },
      ],
      onFilter: (value, record) => record.payType.includes(value),
    },
    {
      title: "User Name",
      dataIndex: "userName",
      key: "userName",
      ...getColumnSearchProps("userName"),
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
      sorter: (a, b) => a.phone - b.phone,
      ...getColumnSearchProps("phone"),
    },
    {
      title: "Landlord Name",
      dataIndex: "landlordName",
      key: "landlordName",
      ...getColumnSearchProps("landlordName"),
    },
    {
      title: "Landlord Phone",
      dataIndex: "landlordPhone",
      key: "landlordPhone",
      sorter: (a, b) => a.landlordPhone - b.landlordPhone,
      ...getColumnSearchProps("landlordPhone"),
    },
    {
      title: "Pay Mode",
      dataIndex: "payMode",
      key: "payMode",
      filters: [
        { text: "NEFT", value: "NEFT" },
        { text: "UPI", value: "UPI" },
        { text: "RTGS", value: "RTGS" },
      ],
      onFilter: (value, record) => record.payMode.includes(value),
    },
    {
      title: "Acc No./ UPI",
      dataIndex: "accountOrUpi",
      key: "accountOrUpi",
      ...getColumnSearchProps("accountOrUpi"),
    },
    {
      title: "IFSC",
      dataIndex: "ifsc",
      key: "ifsc",
      ...getColumnSearchProps("ifsc"),
    },
    {
      title: "Property Address",
      dataIndex: "propertyAddress",
      key: "propertyAddress",
      ...getColumnSearchProps("propertyAddress"),
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
      sorter: (a, b) => a.amount - b.amount,
    },
    {
      title: "Payment Type",
      dataIndex: "paymentType",
      key: "paymentType",
      filters: [
        { text: "Full", value: "Full" },
        { text: "Partial", value: "Partial" },
      ],
      onFilter: (value, record) => record.paymentType.includes(value),
    },
    {
      title: "Beneficiary PAN",
      dataIndex: "beneficiaryPan",
      key: "beneficiaryPan",
      ...getColumnSearchProps("beneficiaryPan"),
    },
    {
      title: "Tenant PAN",
      dataIndex: "tenantPan",
      key: "tenantPan",
      ...getColumnSearchProps("tenantPan"),
    },
    {
      title: "Agreement Doc",
      dataIndex: "agreementDoc",
      key: "agreementDoc",
      render: (text) =>
        text ? (
          <a href={text} target="_blank" rel="noreferrer">
            View
          </a>
        ) : (
          "-"
        ),
    },
    {
      title: "Date/Time",
      dataIndex: "enquiry",
      key: "enquiry",
      sorter: (a, b) =>
        new Date(a.enquiry).getTime() - new Date(b.enquiry).getTime(),
    },
    {
      title: "UTR Number",
      dataIndex: "utrNumber",
      key: "utrNumber",
      ...getColumnSearchProps("utrNumber"),
    },
    {
      title: "Refund ID",
      dataIndex: "refundId",
      key: "refundId",
      ...getColumnSearchProps("refundId"),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      filters: [
        { text: "Pending", value: "Pending" },
        { text: "Completed", value: "Completed" },
        { text: "Failed", value: "Failed" },
      ],
      onFilter: (value, record) => record.status.includes(value),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => <a onClick={() => handleAction(record)}>Action</a>,
    },
  ];

  
  
  
  const collegeRentData = Array.from({ length: 10 }, (_, i) => ({
    key: i + 1,
    serial: i + 1,
    transactionIDpr: `TXN00${i + 1}`,
    payType: i % 2 === 0 ? "Online" : "Offline",
    userName: [
      "John Doe",
      "Alice Smith",
      "Bob Johnson",
      "Maria Garcia",
      "David Lee",
    ][i % 5],
    phone: `98765432${10 + i}`,
    landlordName: [
      "Mr. Sharma",
      "Ms. Patel",
      "Mr. Khan",
      "Mrs. Das",
      "Mr. Singh",
    ][i % 5],
    landlordPhone: `91234567${10 + i}`,
    payMode: ["NEFT", "UPI", "RTGS"][i % 3],
    accountOrUpi: `accUPI00${i + 1}`,
    ifsc: `IFSC000${i + 1}`,
    propertyAddress: `${10 + i} Main Street, City ${i + 1}`,
    amount: 10000 + i * 500,
    paymentType: i % 2 === 0 ? "Full" : "Partial",
    beneficiaryPan: `BENPAN00${i + 1}`,
    tenantPan: `TENPAN00${i + 1}`,
    agreementDoc: i % 2 === 0 ? `https://example.com/doc${i + 1}.pdf` : null,
    enquiry: `2024-0${(i % 9) + 1}-0${(i % 28) + 1} 10:00:00`,
    utrNumber: `UTR00${i + 1}`,
    refundId: i % 3 === 0 ? `REF00${i + 1}` : "",
    status: ["Pending", "Completed", "Failed"][i % 3],
  }));

export {createCollegeRentColumns, collegeRentData};
