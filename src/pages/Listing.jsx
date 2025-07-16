import React from "react";
import { useNavigate } from "react-router-dom";
import PropertyContainer from "../components/listing/PropertyContainer";
import LeftSidebar from "../components/listing/LeftSidebar";

const Listing = () => {
  const navigate = useNavigate();
  return (
    <main>
      <div className="relative mt-[-70px] z-0">
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "linear-gradient(-45deg, #fcbfad, #c5face, #b6e8fa, #adf3e3, #f7b5ba, #cbabf5, #e9f5a5)",
            backgroundSize: "400% 400%",
            animation: "gradient 15s ease infinite",
          }}
        ></div>
        <div className="relative h-[200px] flex flex-col justify-end pb-8 px-4 md:px-20">
          <h2 className="text-[22px] max-md:leading-4 md:text-3xl font-bold text-[#06062b] mb-2 max-md:mb-2">
            Listings
          </h2>
          <div className="flex items-center text-[#06062b] font-medium">
            <span className="cursor-pointer" onClick={() => navigate("/")}>
              Home
            </span>
            <span className="mx-2">&#x3e;</span>
            <span
              className="cursor-pointer"
              onClick={() => navigate("/listing")}
            >
              Listings
            </span>
          </div>
        </div>
      </div>
      <div className="w-full flex bg-gray-100">
        <div className="w-[23%] self-start sticky top-0">  
          <LeftSidebar />
        </div>
        <div className="w-[77%]">
          <PropertyContainer />
        </div>
      </div>
    </main>
  );
};

export default Listing;
