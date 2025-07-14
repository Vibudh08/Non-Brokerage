import React from "react";
import { useState } from "react";

import { IoClose } from "react-icons/io5";

const companies = [
  "Non-Brokerage Real Estate Solutions Powered by BTJ ALPHA TECHNOLOGY PVT. LTD.",
  "Non-Brokerage Real Estate Solutions Powered by BTJ ALPHA TECHNOLOGY PVT. LTD.",
  "Non-Brokerage Real Estate Solutions Powered by BTJ ALPHA TECHNOLOGY PVT. LTD.",
];

const Header = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <main>
      {/* Dark overlay */}
      {show && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-[900]"
          onClick={() => {
            setShow(false);
          }}
        ></div>
      )}

      {/* Mobile Menu */}
      <div
        className={`categories fixed z-[1000] bg-white h-[100%] w-[400px] flex-col 
        transition-all duration-500 ease-in-out transform border border-white ${
          show ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
        }`}
      >
        <div className="flex bg-white p-4 py-5">
          <img src="new_logo.webp" className="w-[190px] cover" alt="" />
          <IoClose
            className="text-2xl absolute right-3 top-5 cursor-pointer text-gray-500 mt-3"
            onClick={() => setShow(false)}
          />
        </div>
        <div className="bg-[#E6F2FF] h-full">
          <div className="flex flex-col  text-base z-100">
            <div className="text-base py-3.5 p-3 border !border-b-[#ddd]">
              Home
            </div>
            <div className="text-base py-3.5 p-3 border border-b-[#ddd]">
              About Us
            </div>
            <div className="text-base py-3.5 p-3 border border-b-[#ddd]">
              All Property
            </div>
            <div className="text-base py-3.5 p-3 border border-b-[#ddd]">
              Blogs
            </div>
            <div className="text-base py-3.5 p-3 border border-b-[#ddd] relative">
              Download App
              <span className="bg-[#f22b68] text-white text-[9px] m-1 rounded-[7px] px-1 h-4 absolute top-2 right-4 translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                FREE
              </span>
            </div>
            <div className="text-base py-3.5 p-3 border border-b-[#ddd]">
              Pricing
            </div>
          </div>
          <button className="bg-[#042065] text-white p-4 py-3 m-2 my-3 w-[180px]">
            List Your Property
          </button>
        </div>
      </div>

      {/* Marquee slider */}
      <div className="relative overflow-x-hidden py-2.5 max-md:py-2 bg-black">
        <div className="flex w-max animate-scroll">
          {[...companies, ...companies].map((company, index) => (
            <div
              key={index}
              className="mx-8 whitespace-nowrap text-sm text-white"
            >
              {company}
            </div>
          ))}
        </div>
      </div>

      {/* main header */}
      <div className="py-2 px-12 max-md:px-2 flex justify-between items-center bg-transparent">
        <img
          src="/new_logo.webp"
          alt=""
          className="w-[200px] max-md:w-[180px] z-50"
        />
        <div className="flex  text-[17px] max-md:hidden ">
          <div className="hover:bg-white hover:rounded-lg px-3 py-2 text-[#373373] z-50">
            Home
          </div>
          <div className="hover:bg-white hover:rounded-lg px-3 py-2 text-[#373373] z-50">
            About Us
          </div>
          <div className="hover:bg-white hover:rounded-lg px-3 py-2 text-[#373373] z-50">
            Property
          </div>
          <div className="hover:bg-white hover:rounded-lg px-3 py-2 text-[#373373] z-50 relative inline-block">
            Download App
            <span className="bg-[#f22b68] text-white text-[9px] rounded-[8px] px-1 h-3.5 absolute top-2.5 right-4 translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
              FREE
            </span>
          </div>

          <div className="hover:bg-white hover:rounded-lg px-3 py-2 text-[#373373] z-50">
            Pricing
          </div>
        </div>
        <div className="gap-2 flex">
          <button className="max-md:text-sm max-md:border text-[#373373] z-50">
            Login
          </button>
          <button className="max-md:hidden text-[#373373] z-50">
            List Your Property
          </button>
          <div
            className="w-5 h-[12px] mt-3 max-md:flex flex-col hidden justify-between overflow-hidden cursor-pointer"
            onClick={handleClick}
          >
            <span className="w-full h-[2px] bg-black block"></span>
            <span
              className={`w-full h-[2px]  bg-black block ${
                show ? "" : "ml-[-9px]"
              }`}
            ></span>
            <span className="w-full h-[2px] bg-black block"></span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Header;
