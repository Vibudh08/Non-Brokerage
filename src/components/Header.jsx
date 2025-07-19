import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const companies = [
  "Non-Brokerage Real Estate Solutions Powered by BTJ ALPHA TECHNOLOGY PVT. LTD.",
  "Non-Brokerage Real Estate Solutions Powered by BTJ ALPHA TECHNOLOGY PVT. LTD.",
  "Non-Brokerage Real Estate Solutions Powered by BTJ ALPHA TECHNOLOGY PVT. LTD.",
];

const Header = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const navigate = useNavigate();

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
        className={`categories fixed z-[1000] bg-white h-[100%] w-full max-w-[400px] flex-col 
        transition-all duration-500 ease-in-out transform border border-white ${
          show ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
        }`}
      >
        <div className="flex bg-white p-4 py-5">
          <Link to="/">
            <img
              src="new_logo.webp"
              className="w-[190px] cover"
              alt=""
              onClick={() => setShow(false)}
            />
          </Link>
          <IoClose
            className="text-2xl absolute right-3 top-5 cursor-pointer text-gray-500 mt-3"
            onClick={() => setShow(false)}
          />
        </div>
        <div className="bg-[#E6F2FF] h-full">
          <div
            className="flex flex-col  text-base z-50"
            onClick={() => setShow(false)}
          >
            <Link to="/">
              <div
                className="text-base py-3.5 p-3 z-50 border !border-b-[#ddd]"
                onClick={() => setShow(false)}
              >
                Home
              </div>
            </Link>

            <div
              className="text-base py-3.5 p-3 border border-b-[#ddd] "
              onClick={() => navigate("/about")}
            >
              About Us
            </div>
            <div
              className="text-base py-3.5 p-3 border border-b-[#ddd] "
              
            >
              All Property
            </div>
            <div
              className="text-base py-3.5 p-3 border border-b-[#ddd] "
              onClick={() => setShow(false)}
            >
              Blogs
            </div>
            <div
              className="text-base py-3.5 p-3 border border-b-[#ddd]   relative"
              onClick={() => navigate("/app-download")}
            >
              Download App
              <span className="bg-[#f22b68] text-white text-[9px] m-1 rounded-[7px] px-1 h-4 absolute top-2 right-4 translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                FREE
              </span>
            </div>
            <div
              className="text-base py-3.5 p-3 border border-b-[#ddd] "
              onClick={() => navigate("/subscription")}
            >
              Pricing
            </div>
          </div>
          <button
            className="bg-[#042065] text-white p-4 py-3 m-2 my-3 w-[180px] "
          >
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
        <Link to="/" className="z-50">
          <img
            src="/new_logo.webp"
            alt=""
            className="w-[200px] max-md:w-[180px] "
          />
        </Link>
        <div className="flex  text-[17px] max-md:hidden ">
          <Link to="/" className="z-50">
            <div className="hover:bg-white hover:rounded-lg px-3 py-2 text-[#373373] ">
              Home
            </div>
          </Link>
          <div
            className="hover:bg-white hover:rounded-lg px-3 py-2 text-[#373373] z-50 cursor-pointer"
            onClick={() => navigate("/about")}
          >
            About Us
          </div>
          <div className="hover:bg-white hover:rounded-lg px-3 py-2 text-[#373373] z-50 cursor-pointer"
            onClick={() => navigate("/listing")} >
            Property
          </div>
          <div className="hover:bg-white hover:rounded-lg px-3 py-2 text-[#373373] z-50 relative inline-block cursor-pointer"
            onClick={() => navigate("/app-download")}>
            Download App
            <span className="bg-[#f22b68] text-white text-[8px] rounded-[8px] px-1 h-3.5 absolute top-2.5 right-4 translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
              FREE
            </span>
          </div>

          <div className="hover:bg-white hover:rounded-lg px-3 py-2 text-[#373373] z-50 cursor-pointer" onClick={() => navigate("/subscription")}>
            Pricing
          </div>
        </div>
        <div className="gap-2 flex">
          <button className="max-md:text-sm max-md:border text-[#373373] z-50" onClick={()=>navigate("/account")}>
            Login
          </button>
          <button className="max-md:hidden text-[#373373] z-50" onClick={()=>navigate("/dashboard")}>
            List Your Property
          </button>
          <div className="bg-white z-50 px-3 rounded-lg hidden max-md:block">
            <div
              className="w-5 h-[12px] mt-3.5 max-md:flex flex-col   justify-between overflow-hidden cursor-pointer"
              onClick={handleClick}
            >
              <span className="w-full h-[2px] bg-[#104ee3] block"></span>
              <span
                className={`w-full h-[2px]   bg-[#104ee3] block ${
                  show ? "" : "ml-[-9px]"
                }`}
              ></span>
              <span className="w-full h-[2px]  bg-[#104ee3] block"></span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Header;
