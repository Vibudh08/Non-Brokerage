import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useColumnSearch from "../components/columns/useColumnSearch";
import {
  createPropertyColumns,
  propertyData,
} from "../components/columns/propertyColumns";
import {
  createSubscriptionColumns,
  subscriptionData,
} from "../components/columns/subscriptionColumns";
import {
  createEnquiryColumns,
  enquiryData,
} from "../components/columns/enquiryColumns";
import {
  createPayRentColumns,
  payRentData,
} from "../components/columns/payRentColumns";
import {
  createCollegeRentColumns,
  collegeRentData,
} from "../components/columns/collegeRentColumns";
import {
  AppstoreOutlined,
  UnorderedListOutlined,
  InboxOutlined,
  UserOutlined,
  MenuOutlined,
  LogoutOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme, Button, Popover } from "antd";
import DashboardCard from "../components/dashboard/Card";
import SubscriptionDetail from "../components/dashboard/SubscriptionDetail";
import Profile from "../components/dashboard/Profile";
import BecomeLandlord from "../components/dashboard/BecomeLandlord";
import TableList from "../components/dashboard/TableList";
import AddPropertyForm from "../components/dashboard/AddProperty";
const { Header, Content, Footer, Sider } = Layout;

const cards = [
  {
    title: "TOTAL PROPERTY",
    count: 0,
    button: "All Property",
    key: "property:1",
    parent: "property",
  },
  {
    title: "TOTAL ENQUIRY",
    count: 2,
    button: "All Enquiries",
    key: "enquiry",
  },
  {
    title: "TOTAL RENT PAY",
    count: 0,
    button: "All Rent Pay",
    key: "payrent",
  },
  {
    title: "COLLEGE FEE PAY",
    count: 3,
    button: "All Fees Pay",
    key: "collegepay",
  },
];

const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [openKeys, setOpenKeys] = useState([]);
  const [contentShow, setContentShow] = useState("dashboard");
  const navigate = useNavigate();

  const { getColumnSearchProps } = useColumnSearch();

  const propertyColumns = createPropertyColumns(getColumnSearchProps);
  const subscriptionColumns = createSubscriptionColumns(getColumnSearchProps);
  const payRentColumns = createPayRentColumns(getColumnSearchProps);
  const enquiryColumns = createEnquiryColumns(getColumnSearchProps);
  const collegeRentColumns = createCollegeRentColumns(getColumnSearchProps);

  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.includes(latestOpenKey)) {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    } else {
      setOpenKeys(keys);
    }
  };

  const onClick = ({ key }) => {
    // If a normal item is clicked (not a submenu)
    if (!rootSubmenuKeys.includes(key) && !key.includes(":")) {
      setOpenKeys([]);
    }

     if (window.innerWidth < 1024) { // 'lg' in Tailwind/Antd ≈ 1024px
    setCollapsed(true);
  }
  };

  const rootSubmenuKeys = ["property", "subscription"];
  const isMobile = window.innerWidth < 768;

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const content = (
    <div className="w-[130px] flex flex-col justify-center">
      {/* Centered Image + Name */}
      <div className="flex flex-col items-center">
        <img src="/user1.png" className="w-20 mb-2" alt="" />
        <div className="font-semibold text-base mb-2">Vibudh</div>
      </div>

      {/* HR line */}
      <hr className="w-full border-t border-gray-300 mb-2" />

      {/* Hover links */}
      <div className="flex flex-col w-full">
        <div
          className="w-full cursor-pointer hover:bg-gray-100 p-2 flex items-center"
          onClick={() => setContentShow("signup")}
        >
          <UserOutlined className="mr-1.5" />
          Dealer Profile
        </div>

        <div className="w-full cursor-pointer hover:bg-gray-100 p-2 flex items-center">
          <LogoutOutlined className="mr-1.5" />
          LogOut
        </div>
      </div>
    </div>
  );

  const renderHeader = () => {
    let title = "Welcome to Dashboard";
    let buttonText = "List Your Property";
    let onClick = () => {
      setContentShow("property:1");
      if (!isMobile) {
        setOpenKeys(["property"]);
      }
    };

    switch (contentShow) {
      case "property:2":
        title = "Property List";
        buttonText = "Back To Home";
        onClick = () => setContentShow("dashboard");
        break;

      case "subscription:1":
        title = "Subscription History List";
        buttonText = "Back To Home";
        onClick = () => setContentShow("dashboard");
        break;

      case "enquiry":
        title = "Property Enquiries List";
        buttonText = "Back To Home";
        onClick = () => setContentShow("dashboard");
        break;

      case "payrent":
        title = "Pay Rent List";
        buttonText = "Back To Home";
        onClick = () => setContentShow("dashboard");
        break;

      case "collegepay":
        title = "School College Fee List";
        buttonText = "Back To Home";
        onClick = () => setContentShow("dashboard");
        break;

      // These pages don’t show the header at all
      case "subscription:2":
      case "signup":
      case "user-profile":
      case "property:1":
        return null;

      default:
        break;
    }

    return (
      <div className="flex justify-between items-center pb-5">
        <div className="text-xl max-md:text-lg font-semibold">{title}</div>
        <div>
          <Button
            className="bg-[#070026] text-white py-[18px] max-md:px-2.5 max-md:py-[14px]  text-sm max-md:text-xs"
            onClick={onClick}
          >
            {buttonText}
          </Button>
        </div>
      </div>
    );
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        theme="dark"
        width={235}
        breakpoint="lg"
        collapsedWidth="0"
        collapsed={collapsed}
        onCollapse={(collapsed, type) => setCollapsed(collapsed)}
        className={`fixed top-0 left-0 h-full z-50`}
        trigger={null}
      >
        {/* Logo */}
        <div
          className="flex items-center justify-center p-1 m-3 mx-1 cursor-pointer rounded-lg bg-white"
          onClick={() => navigate("/")}
        >
          <img src="/new_logo.webp" alt="Logo" className="w-52" />
        </div>

        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[contentShow]}
          openKeys={openKeys}
          onOpenChange={onOpenChange}
          onClick={onClick}
        >
          <Menu.Item
            key="dashboard"
            icon={<AppstoreOutlined />}
            onClick={() => setContentShow("dashboard")}
          >
            Dealer Dashboard
          </Menu.Item>

          <Menu.ItemGroup key="property-group" title="PROPERTY" />

          <Menu.SubMenu
            key="property"
            icon={<UnorderedListOutlined />}
            title="Property"
          >
            <Menu.Item
              key="property:1"
              onClick={() => setContentShow("property:1")}
            >
              Add Property
            </Menu.Item>
            <Menu.Item
              key="property:2"
              onClick={() => setContentShow("property:2")}
            >
              Manage Property
            </Menu.Item>
          </Menu.SubMenu>

          <Menu.SubMenu
            key="subscription"
            icon={<UnorderedListOutlined />}
            title="Subscription"
          >
            <Menu.Item
              key="subscription:2"
              onClick={() => setContentShow("subscription:2")}
            >
              Subscription Details
            </Menu.Item>
            <Menu.Item
              key="subscription:1"
              onClick={() => setContentShow("subscription:1")}
            >
              Subscription History
            </Menu.Item>
          </Menu.SubMenu>

          <Menu.Item
            key="enquiry"
            icon={<InboxOutlined />}
            onClick={() => setContentShow("enquiry")}
          >
            Property Enquiry
          </Menu.Item>

          <Menu.ItemGroup key="profile" title="PROFILE" />

          <Menu.Item
            key="user-profile"
            icon={<UserOutlined />}
            onClick={() => setContentShow("user-profile")}
          >
            User Profile
          </Menu.Item>

          <Menu.Item
            key="signup"
            icon={<UserAddOutlined />}
            onClick={() => setContentShow("signup")}
          >
            Sign Up as Landlord
          </Menu.Item>
        </Menu>
      </Sider>

      {!collapsed && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setCollapsed(true)}
        />
      )}
      <Layout className={`${collapsed ? "ml-0" : "lg:ml-[235px] ml-0"}`}>
        <Header
          style={{ padding: "0 14px", background: colorBgContainer }}
          className="flex justify-between items-center"
        >
          <div className="mt-1 hidden max-md:flex">
            <MenuOutlined
              onClick={() => setCollapsed(!collapsed)}
              style={{ fontSize: "22px", cursor: "pointer", padding: "0 10px" }}
            />
          </div>
          <div></div>
          <div className="flex gap-2 mt-1 items-center">
            <Button
              className="bg-[#070026] text-white text-xs max-md:px-2.5 cursor-pointer"
              onClick={() => navigate("/")}
            >
              GO TO WEBSITE
            </Button>
            <div>
              <Popover placement="bottomRight" content={content}>
                <img src="/user1.png" className="w-8" alt="" />
              </Popover>
            </div>
          </div>
        </Header>

        <Content className="py-6 mx-5 max-md:mx-3">
          {renderHeader()}

          <div
            style={{
              // padding: 22,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
              //   minHeight: 360,
            }}
            className="h-fit max-md:p-3 p-3 px-5"
          >
            {(() => {
              switch (contentShow) {
                case "dashboard":
                  return (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-2 mb-6">
                      {cards.map((item) => (
                        <DashboardCard
                          key={item.title}
                          title={item.title}
                          count={item.count}
                          button={item.button}
                          onNavigate={() => {
                            setContentShow(item.key);
                            if (!isMobile) {
                              setOpenKeys(["property"]); // ✅ only on desktop!
                            }
                          }}
                        />
                      ))}
                    </div>
                  );

                case "subscription:2":
                  return (
                    <SubscriptionDetail
                      dealer="dealer"
                      plan_type="N/A"
                      listings="3"
                      date="2025-08-19 10:16:15"
                    />
                  );

                case "signup":
                  return (
                    <BecomeLandlord
                      phone="9639193554"
                      email="vibudhrathore8@gmail.com"
                      tenant="Vibudh"
                      address="Noida"
                    />
                  );

                case "user-profile":
                  return (
                    <Profile
                      phone="8736977153"
                      email="vibudhrathore8@gmail.com"
                      name="Vibudh"
                    />
                  );

                case "property:1":
                  return <AddPropertyForm />;

                case "property:2":
                  return (
                    <TableList columns={propertyColumns} data={propertyData} />
                  );

                case "subscription:1":
                  return (
                    <TableList
                      columns={subscriptionColumns}
                      data={subscriptionData}
                    />
                  );

                case "enquiry":
                  return (
                    <TableList columns={enquiryColumns} data={enquiryData} />
                  );

                case "payrent":
                  return (
                    <TableList columns={payRentColumns} data={payRentData} />
                  );

                case "collegepay":
                  return (
                    <TableList
                      columns={collegeRentColumns}
                      data={collegeRentData}
                    />
                  );
                default:
                  return null; // Nothing rendered for other cases
              }
            })()}
          </div>
        </Content>
        <Footer
          style={{ textAlign: "center" }}
          className="text-[11px] p-2 text-[#7987a1]"
        >
          Copyright © 2025{" "}
          <Link to="/">
            <span className="text-[#6571ff]">BTJ Non Brokerage</span>
          </Link>
        </Footer>
      </Layout>
    </Layout>
  );
};
export default Dashboard;
