import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PropertyContainer from "../components/listing/PropertyContainer";
import LeftSidebar from "../components/listing/LeftSidebar";

import { FiFilter, FiX } from "react-icons/fi";

const Listing = () => {
  const navigate = useNavigate();

  const [isMobile, setIsMobile] = useState(false);
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  useEffect(() => {
    if (!isMobile) {
      setShowMobileFilters(false);
    }
  }, [isMobile]);

   useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
        <button
          aria-label="Open filters"
          className={`lg:hidden fixed bottom-6 right-6 z-20 bg-[#4220bb] text-white p-3 rounded-full shadow-lg flex items-center justify-center transition-transform hover:scale-105 active:scale-95 ${
            showMobileFilters ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
          onClick={() => setShowMobileFilters(true)}
        >
          <FiFilter size={20} />
          <span className="sr-only">Open Filters</span>
        </button>
        {/* <div className="w-[23%]  self-start sticky top-0">
          <LeftSidebar />
        </div> */}
        <div
          className={`fixed lg:sticky top-0 lg:top-2 self-start m-3 max-lg:m-0 mr-1.5 inset-y-0 left-0 z-[1000] w-[85%] sm:w-3/4 lg:w-[21%]  bg-white lg:rounded-xl border  transform ${
            showMobileFilters ? "translate-x-0" : "-translate-x-full"
          } lg:translate-x-0 transition-transform duration-300 ease-in-out `}
        >
          <button
            aria-label="Close filters"
            className="lg:hidden absolute top-4 right-4 p-1 text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#373373] rounded-full"
            onClick={() => setShowMobileFilters(false)}
          >
            <FiX size={20} />
          </button>

          <LeftSidebar />
        </div>

        {showMobileFilters && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-[999] lg:hidden transition-opacity duration-300"
            onClick={() => setShowMobileFilters(false)}
            role="presentation"
          />
        )}
        <div className="w-[79%] max-lg:w-[100%] ">
          <PropertyContainer />
        </div>
      </div>
    </main>
  );
};

export default Listing;
