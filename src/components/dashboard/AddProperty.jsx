import React, { useState } from "react";
import { Form, Input, Select, DatePicker, Upload, Button } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
const { Option } = Select;

const AddPropertyForm = () => {
  const { Dragger } = Upload;
  const [value, setValue] = useState("");
  return (
    <div>
      <h1
        className="text-[15px] tracking-wide font-semibold p-2.5 w-full text-center bg-gray-100 mb-6"
        style={{ transform: "scaleY(1.1)" }}
      >
        ADD PROPERTY
      </h1>
      <Form layout="vertical" className="">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* House/Property/Society */}
          <Form.Item
            label="House/Property/Society *"
            name="propertyName"
            className="mb-0"
          >
            <Input placeholder="House/Property/Society Name" />
          </Form.Item>

          {/* Category */}
          <Form.Item label="Category *" name="category" className="mb-0">
            <Select placeholder="Select Category">
              <Option value="house">House</Option>
              <Option value="apartment">Apartment</Option>
              <Option value="villa">Villa</Option>
            </Select>
          </Form.Item>

          {/* Area */}
          <Form.Item label="Area ( sqft ) *" name="area" className="mb-0">
            <Input placeholder="Enter Area sqft" />
          </Form.Item>

          {/* Plan Type */}
          <Form.Item label="Plan Type *" name="planType" className="mb-0">
            <Select placeholder="Monthly">
              <Option value="monthly">Monthly</Option>
              <Option value="yearly">Yearly</Option>
            </Select>
          </Form.Item>

          {/* Price */}
          <Form.Item label="Price *" name="price" className="mb-0">
            <Input placeholder="Enter Property Price" />
          </Form.Item>

          {/* Phone */}
          <Form.Item label="Phone *" name="phone" className="mb-0">
            <Input placeholder="Enter Property Contact No." />
          </Form.Item>

          {/* Available From */}
          <Form.Item
            label="Available From *"
            name="availableFrom"
            className="mb-0"
          >
            <DatePicker className="w-full" />
          </Form.Item>

          {/* Property Type */}
          <Form.Item
            label="Property Type *"
            name="propertyType"
            className="mb-0"
          >
            <Select placeholder="Unfurnished">
              <Option value="unfurnished">Unfurnished</Option>
              <Option value="semi-furnished">Semi-Furnished</Option>
              <Option value="furnished">Furnished</Option>
            </Select>
          </Form.Item>

          {/* Security Deposit */}
          <Form.Item
            label="Security Deposit *"
            name="securityDeposit"
            className="mb-0"
          >
            <Select placeholder="Please select an option">
              <Option value="1_month">1 Month</Option>
              <Option value="2_months">2 Months</Option>
              <Option value="none">None</Option>
            </Select>
          </Form.Item>

          {/* Bedroom */}
          <Form.Item label="Bedroom *" name="bedroom" className="mb-0">
            <Input placeholder="No. of Bedroom" />
          </Form.Item>

          {/* Bathroom */}
          <Form.Item label="Bathroom *" name="bathroom" className="mb-0">
            <Input placeholder="No. of Bathroom" />
          </Form.Item>

          {/* Kitchen */}
          <Form.Item label="Kitchen *" name="kitchen" className="mb-0">
            <Input placeholder="No. of Kitchen" />
          </Form.Item>

          {/* Hall */}
          <Form.Item label="Hall *" name="hall" className="mb-0">
            <Input placeholder="No. of Hall" />
          </Form.Item>

          {/* Balcony */}
          <Form.Item label="Balcony *" name="balcony" className="mb-0">
            <Input placeholder="No. of Bedroom" />
          </Form.Item>

          {/* Facing */}
          <Form.Item label="Facing *" name="facing" className="mb-0">
            <Select placeholder="East">
              <Option value="east">East</Option>
              <Option value="west">West</Option>
              <Option value="north">North</Option>
              <Option value="south">South</Option>
            </Select>
          </Form.Item>

          {/* State */}
          <Form.Item label="State *" name="state" className="mb-0">
            <Select placeholder="ANDAMAN & NICOBAR">
              <Option value="andaman">ANDAMAN & NICOBAR</Option>
              <Option value="delhi">Delhi</Option>
              <Option value="maharashtra">Maharashtra</Option>
            </Select>
          </Form.Item>

          {/* City */}
          <Form.Item label="City *" name="city" className="mb-0">
            <Select placeholder="Please select an option">
              <Option value="portblair">Port Blair</Option>
              <Option value="mumbai">Mumbai</Option>
              <Option value="delhi">Delhi</Option>
            </Select>
          </Form.Item>

          {/* Pincode */}
          <Form.Item label="Pincode *" name="pincode" className="mb-0">
            <Select placeholder="Please select an option">
              <Option value="110001">110001</Option>
              <Option value="400001">400001</Option>
            </Select>
          </Form.Item>
        </div>
        <div className="flex gap-4 mt-3">
          <Form.Item label="Address *" name="address1" className="w-1/2">
            <Input placeholder="Address.." />
          </Form.Item>
          <Form.Item label="Address2 *" name="address2" className="w-1/2">
            <Input placeholder="Address.." />
          </Form.Item>
        </div>

        {/* Images Upload */}
        <Form.Item
          label="Please upload images (each 2MB & between 4 to 7) *"
          name="images"
          valuePropName="fileList"
          getValueFromEvent={(e) => (Array.isArray(e) ? e : e && e.fileList)}
        >
          <Dragger
            name="files"
            multiple
            beforeUpload={() => false} // Prevent auto-upload
          >
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">
              Drag and drop a file here or click
            </p>
          </Dragger>
        </Form.Item>

        {/* Facility */}
        <Form.Item label="Facility *" name="facility">
          <Select placeholder="Please select an option" mode="multiple" >
            <Option value="gym">Gym</Option>
            <Option value="parking">Parking</Option>
            <Option value="pool">Swimming Pool</Option>
            <Option value="wifi">Wi-Fi</Option>
          </Select>
        </Form.Item>

        {/* Description */}
        <Form.Item label="Property Description *" name="description" >
          <div className="border p-4 ">
            <SimpleMDE
              value={value}
              onChange={setValue}
            />
          </div>
        </Form.Item>

        <Button
          type="primary"
          htmlType="submit"
          className="bg-[#6366F1] text-white mt-4"
        >
          Add Property
        </Button>
      </Form>
    </div>
  );
};

export default AddPropertyForm;
