import React from "react";
import { Form, Input } from "antd";

const SubscriptionDetail = ({ dealer, plan_type, listings, date }) => {
  return (
    <div className="pt-2 px-1">
      <h1
        className="text-[15px] tracking-wide font-semibold p-2.5 w-full text-center bg-gray-100"
        style={{ transform: "scaleY(1.1)" }}
      >
        SUBSCRIPTION DETAILS
      </h1>
      <div className="my-6">
        <Form
          name="layout-multiple-horizontal"
          layout="horizontal"
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 20 }}
          className="grid grid-cols-2 gap-5"
          initialValues={{
            dealer: dealer,
            plan_type: plan_type,
            listings: listings,
            date: date,
          }}
        >
          <Form.Item
            layout="vertical"
            label="User Type:"
            name="dealer"
            className="font-semibold mb-8 max-md:mb-0"
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
          >
            <Input readOnly className="h-[39px] mt-1" />
          </Form.Item>

          <Form.Item
            layout="vertical"
            label="Plan Type:"
            name="plan_type"
            className="font-semibold mb-8 max-md:mb-0"
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
          >
            <Input readOnly className="h-[39px] mt-1" />
          </Form.Item>

          <Form.Item
            layout="vertical"
            label="Remaining Listings:"
            name="listings"
            className="font-semibold max-md:mb-0"
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
          >
            <Input readOnly className="h-[39px] mt-1" />
          </Form.Item>

          <Form.Item
            layout="vertical"
            label="Expiry Date:"
            name="date"
            className="font-semibold max-md:mb-0"
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
          >
            <Input readOnly className="h-[39px] mt-1" />
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default SubscriptionDetail;
