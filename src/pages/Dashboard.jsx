import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  AppstoreOutlined,
  UnorderedListOutlined,
  InboxOutlined,
  UserOutlined,
  MenuOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme, Button, Popover } from "antd";
import DashboardCard from "../components/dashboard/Card";
import SubscriptionDetail from "../components/dashboard/SubscriptionDetail";
const { Header, Content, Footer, Sider } = Layout;

const cards = [
  {
    title: "TOTAL PROPERTY",
    count: 0,
    button: "All Property",
  },
  {
    title: "TOTAL ENQUIRY",
    count: 2,
    button: "All Enquiries",
  },
  {
    title: "TOTAL RENT PAY",
    count: 0,
    button: "All Rent Pay",
  },
  {
    title: "COLLEGE FEE PAY",
    count: 3,
    button: "All Fees Pay",
  },
];

const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [openKeys, setOpenKeys] = useState([]);
  const [contentShow, setContentShow] = useState(0);
  const navigate = useNavigate();

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
  };

  const rootSubmenuKeys = ["property", "subscription"];
  const isMobile = window.innerWidth < 992;

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
          onClick={() => setContentShow(7)}
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

  return (
    <Layout style={{ minHeight: "100vh" }}>
      {!collapsed && isMobile && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-[999]"
          onClick={() => setCollapsed(true)}
        ></div>
      )}

      <Sider
        theme="dark"
        width={250}
        breakpoint="lg"
        collapsedWidth="0"
        collapsed={collapsed}
        onCollapse={(collapsed, type) => setCollapsed(collapsed)}
        className={!collapsed ? "mobile-sidebar" : ""}
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
          defaultSelectedKeys={["dashboard"]}
          openKeys={openKeys}
          onOpenChange={onOpenChange}
          onClick={onClick}
        >
          {/* Dealer Dashboard */}
          <Menu.Item
            key="dashboard"
            icon={<AppstoreOutlined />}
            onClick={() => setContentShow(0)}
          >
            Dealer Dashboard
          </Menu.Item>

          {/* Section Title */}
          <Menu.ItemGroup key="property-group" title="PROPERTY" />

          {/* Property (submenu) */}
          <Menu.SubMenu
            key="property"
            icon={<UnorderedListOutlined />}
            title="Property"
          >
            <Menu.Item key="property:1" onClick={() => setContentShow(1)}>
              Add Property
            </Menu.Item>
            <Menu.Item key="property:2" onClick={() => setContentShow(2)}>
              Manage Property
            </Menu.Item>
          </Menu.SubMenu>

          {/* Subscription (submenu) */}
          <Menu.SubMenu
            key="subscription"
            icon={<UnorderedListOutlined />}
            title="Subscription"
          >
            <Menu.Item key="subscription:1" onClick={() => setContentShow(3)}>
              Plans
            </Menu.Item>
            <Menu.Item key="subscription:2" onClick={() => setContentShow(4)}>
              Manage Plans
            </Menu.Item>
          </Menu.SubMenu>

          {/* Property Enquiry */}
          <Menu.Item
            key="enquiry"
            icon={<InboxOutlined />}
            onClick={() => setContentShow(5)}
          >
            Property Enquiry
          </Menu.Item>

          {/* Property Enquiry */}
          <Menu.Item
            key="signup"
            icon={<InboxOutlined />}
            onClick={() => setContentShow(6)}
          >
            Sign Up as Landlord
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header
          style={{ padding: "0 16px", background: colorBgContainer }}
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
              className="bg-[#070026] text-white text-xs cursor-pointer"
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

        <Content style={{ margin: "0 22px" }} className="py-6">
          {contentShow === 4 ? (
            ""
          ) : (
            <div className="flex justify-between items-center pb-5">
              <div className="text-xl font-semibold">Welcome to Dashboard</div>
              <div className="">
                <Button className="bg-[#070026] text-white py-[18px] text-sm">
                  List Your Property
                </Button>
              </div>
            </div>
          )}
          <div
            style={{
              padding: 24,
              //   minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
            className="h-fit"
          >
            {contentShow === 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-2 mb-6">
                {cards.map((item) => (
                  <DashboardCard
                    title={item.title}
                    count={item.count}
                    button={item.button}
                  />
                ))}
              </div>
            ) : (
              ""
            )}

            {contentShow === 4 ? (
              <div>
                <SubscriptionDetail
                  dealer={"dealer"}
                  plan_type={"N/A"}
                  listings={"3"}
                  date={"2025-08-19 10:16:15"}
                />
              </div>
            ) : (
              ""
            )}
          </div>
        </Content>
        <Footer
          style={{ textAlign: "center" }}
          className="text-[11px] p-4 text-[#7987a1]"
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
