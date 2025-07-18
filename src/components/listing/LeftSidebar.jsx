import React, { useState } from "react";
import { Select } from "antd";

const LeftSidebar = () => {
  const sliderMin = 0;
  const sliderMax = 100000000; // ₹10 Crore in paise
  const [minVal, setMinVal] = useState(0);
  const [maxVal, setMaxVal] = useState(100000000);
  const { Option } = Select;
  const [selected, setSelected] = useState([]);

  const bhkOptions = ["1 RK", "1 BHK", "2 BHK", "3 BHK", "4 BHK", "4+ BHK"];

  const toggleBHK = (bhk) => {
    if (selected.includes(bhk)) {
      // Remove
      setSelected(selected.filter((item) => item !== bhk));
    } else {
      // Add
      setSelected([...selected, bhk]);
    }
  };

  const slideMin = (e) => {
    const value = Math.min(Number(e.target.value), maxVal - 1000000);
    setMinVal(value);
  };

  const slideMax = (e) => {
    const value = Math.max(Number(e.target.value), minVal + 1000000);
    setMaxVal(value);
  };
  return (
    <div className="bg-white m-2 rounded-md h-screen p-2 ">
      <div className="text-xl font-semibold mb-3.5 mt-1.5 max-md:mt-0">Filters</div>{" "}
      <hr className="mb-4 bg-gray-300 h-[1px]" />
      {/* City Dropdown */}
      <div className="font-semibold mb-1.5 text-sm">Location</div>
      <Select
        className="w-full border-gray-300 "
        allowClear
        defaultValue="Select Location"
        placeholder="Select Location"
      >
        {/* <Option value="option1" disabled>Select Location</Option> */}
        <Option value="option2">Delhi</Option>
        <Option value="option3">Mumbai</Option>
        <Option value="option4">Gurgaon</Option>
        <Option value="option5">Noida</Option>
        <Option value="option6">Ghaziabad</Option>
        <Option value="option7">Faridabad</Option>
      </Select>
      <div className="w-full max-w-xl mx-auto mt-4 mb-6">
        <h3 className="font-semibold text-sm mb-4 mt-2">
          Price Range: ₹{(minVal / 10000000).toFixed(2)} Cr to ₹
          {(maxVal / 10000000).toFixed(2)} Cr
        </h3>
        <div className="relative h-1 bg-gray-300 rounded-full">
          <div
            className="absolute h-1 bg-[#373373] rounded-full"
            style={{
              left: `${(minVal / sliderMax) * 100}%`,
              right: `${100 - (maxVal / sliderMax) * 100}%`,
            }}
          ></div>

          <input
            type="range"
            min={sliderMin}
            max={sliderMax}
            value={minVal}
            onChange={slideMin}
            className="absolute w-full h-1 top-1/2 -translate-y-1/2 appearance-none pointer-events-none bg-transparent [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#373373] [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:relative [&::-webkit-slider-thumb]:z-10"
          />

          <input
            type="range"
            min={sliderMin}
            max={sliderMax}
            value={maxVal}
            onChange={slideMax}
            className="absolute w-full h-1 top-1/2 -translate-y-1/2 appearance-none pointer-events-none bg-transparent [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#373373] [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:relative [&::-webkit-slider-thumb]:z-10"
          />
        </div>
      </div>
      {/* Search Type */}
      {/* <div className="flex gap-2 mb-4">
        <button className="flex-1 border border-green-500 bg-green-100 text-green-700 p-2 rounded">Locality Search</button>
        <button className="flex-1 border border-gray-300 p-2 rounded">Search along Metro</button>
      </div> */}
      {/* Locality Search Bar */}
      {/* <input
        type="text"
        placeholder="Search upto 3 localities or landmarks"
        className="w-full border border-gray-300 rounded p-2 mb-4"
      /> */}
      {/* New Builder Projects */}
      {/* <div className="flex items-center mb-4">
        <input type="checkbox" className="mr-2" />
        <span>New Builder Projects</span>
        <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded ml-2">Offer</span>
      </div> */}
      {/* Looking For */}
      {/* <div className="flex gap-2 mb-4">
        <button className="flex-1 bg-green-600 text-white p-2 rounded">Full House</button>
        <button className="flex-1 border border-gray-300 p-2 rounded">Land/Plot</button>
      </div> */}
      {/* BHK Type */}
      <div className="font-semibold mb-1.5 text-sm">BHK Type</div>
      <div className="grid grid-cols-3 gap-2 mb-4">
        {bhkOptions.map((bhk) => (
          <button
            key={bhk}
            onClick={() => toggleBHK(bhk)}
            className={`border border-gray-300 p-1.5 hover:border-[#373373] rounded text-sm ${
              selected.includes(bhk) ? "bg-[#373373] text-white" : "bg-white"
            }`}
          >
            {bhk}
          </button>
        ))}
      </div>
      {/* Property Type */}
      <div className="font-semibold mb-2 mt-1 text-sm">Availability</div>
      <div className="grid grid-cols-1 gap-1.5 mb-4">
        {[
          "Immediately",
          "Within 15 days",
          "Within 30 days",
          "After 30 days",
        ].map((option) => (
          <label
            key={option}
            className="flex items-center gap-2 text-sm text-gray-700"
          >
            <input
              type="radio"
              className="form-radio accent-[#373373]"
              name="availability"
            />
            {option}
          </label>
        ))}
      </div>
      {/* Property Status */}
      {/* <div className="flex gap-2 mb-4">
        <button className="flex-1 border border-gray-300 p-2 rounded">
          Under Construction
        </button>
        <button className="flex-1 border border-gray-300 p-2 rounded">
          Ready
        </button>
      </div> */}
      {/* Furnishing */}
      {/* <div className="flex gap-2 mb-4">
        <button className="flex-1 border border-gray-300 p-2 rounded">
          Full
        </button>
        <button className="flex-1 border border-gray-300 p-2 rounded">
          Semi
        </button>
        <button className="flex-1 border border-gray-300 p-2 rounded">
          None
        </button>
      </div> */}
      {/* Parking (Not shown in image but placeholder) */}
      {/* Add here if needed */}
      {/* Search Button */}
      {/* <button className="w-full bg-green-600 text-white p-3 rounded">
        SEARCH
      </button> */}
    </div>
  );
};

export default LeftSidebar;
