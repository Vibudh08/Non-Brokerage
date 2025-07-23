import React from "react";
import { Form, Input, Button } from "antd";

const Profile = ({ phone, email, name }) => {
  return (
    <div className="pt-2 px-1">
      <h1
        className="text-[15px] tracking-wide font-semibold p-2.5 w-full text-center bg-gray-100"
        style={{ transform: "scaleY(1.1)" }}
      >
        UPDATE USER
      </h1>
      <div className="my-6 flex max-md:block gap-8">
        <div className="w-[30%] flex flex-col justify-center items-center max-md:w-full  max-md:mb-4">
          {" "}
          <img src="/user1.png" className="w-36" alt="" />{" "}
          <p className="text-center mt-3 text-lg">{name}</p>
        </div>
        <Form
          name="layout-multiple-horizontal"
          layout="horizontal"
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 20 }}
          className="grid  w-[70%] max-md:w-full"
          initialValues={{
            phone: phone,
            email: email,
            name: name,
          }}
        >
          <div className="flex gap-4 mb-5">
            <Form.Item
              layout="vertical"
              label="User Type:"
              name="phone"
              className="font-semibold w-1/2 max-md:mb-0"
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
            >
              <Input readOnly className="h-[39px] mt-1" />
            </Form.Item>

            <Form.Item
              layout="vertical"
              label="Plan Type:"
              name="email"
              className="font-semibold w-1/2 max-md:mb-0"
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
            >
              <Input readOnly className="h-[39px] mt-1"/>
            </Form.Item>
          </div>

          <Form.Item
            layout="vertical"
            label="Remaining Listings:"
            name="name"
            className="font-semibold mb-14 max-md:mb-6"
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
          >
            <Input readOnly className="h-[39px] mt-1" />
          </Form.Item>

          <Button type="primary" className="w-[130px]">Update</Button>
        </Form>
      </div>
    </div>
  );
};

export default Profile;
