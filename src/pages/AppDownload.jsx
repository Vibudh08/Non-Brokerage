import { useEffect } from "react";
import React from "react";

const AppDownload = () => {
     useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
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
      <div className="relative h-screen max-md:h-auto w-full flex max-md:flex-col-reverse">

      <div className=" flex flex-col justify-center pb-12 px-3 md:px-20 w-1/2 max-md:w-full">
        <h2 className="text-2xl md:text-3xl font-bold text-[#06062b] mb-0 ">
          Non Brokerage on the Go!
        </h2>
        <p className="mt-2 text-[#06062b] max-w-md text-lg">
          Download our top-rated app, made just for you! <br /> It’s free, easy and
          smart.
        </p>
        <div>
            <input type="text" placeholder="Enter Your Number" className="border border-gray-500 text-gray-500 rounded-lg p-3 mt-4 w-[290px] max-md:w-[200px]" />
            <button className="bg-[#373373] text-white ml-2 max-md:ml-1.5 rounded-lg px-3 max-md:px-2">Send App Link</button>
        </div>
      </div>
      <div className="w-1/2 max-md:w-full max-md:mb-5"><img src="bg_app.jpg" alt="" className="w-[90%] max-md:w-full"/></div>
      </div>
    </div>
  );
};

export default AppDownload;
