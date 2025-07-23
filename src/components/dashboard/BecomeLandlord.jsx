import React from "react";
import { Form, Input, Checkbox, Button } from "antd";

const BecomeLandlord = ({ address, tenant, email, phone }) => {
  return (
    <div className="pt-2 px-1">
      <h1
        className="text-[15px] tracking-wide font-semibold p-2.5 w-full text-center bg-gray-100"
        style={{ transform: "scaleY(1.1)" }}
      >
        BECOME A LANDLORD
      </h1>
      <div className="my-6">
        <Form
          name="layout-multiple-horizontal"
          layout="horizontal"
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 20 }}
          className="grid  gap-5 max-md:gap-2"
          initialValues={{
            address: address,
            tenant: tenant,
            email: email,
            phone: phone,
          }}
        >
          <div className="flex gap-4 mb-1">
            <Form.Item
              layout="vertical"
              label="Phone:"
              name="phone"
              className="font-semibold w-1/2 max-md:mb-0"
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
            >
              <Input disabled className="h-[39px] mt-1" />
            </Form.Item>

            <Form.Item
              layout="vertical"
              label="Email:"
              name="email"
              className="font-semibold w-1/2 max-md:mb-0"
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
            >
              <Input disabled className="h-[39px] mt-1" />
            </Form.Item>
          </div>

          <div className="flex gap-4 mb-1">
            <Form.Item
              layout="vertical"
              label="Tenant Name:"
              name="tenant"
              className="font-semibold w-1/2 max-md:mb-0"
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
            >
              <Input readOnly className="h-[39px] mt-1" />
            </Form.Item>

            <Form.Item
              layout="vertical"
              label="Landlord:"
              name="landlord"
              className="font-semibold w-1/2 max-md:mb-0"
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
            >
              <Checkbox className="max-md:mt-3">Please Checked</Checkbox>
            </Form.Item>
          </div>
          <Form.Item
            layout="vertical"
            label="Address:"
            name="address"
            className="font-semibold  max-md:mb-0"
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
          >
            <Input readOnly className="h-[39px] mt-1" />
          </Form.Item>
          <Button type="primary" className="w-[130px] mt-3">Update</Button>
        </Form>
      </div>
    </div>
  );
};

export default BecomeLandlord;
