import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const SiteMap = () => {
     useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  const navigate = useNavigate();
  const cities = [
    "Delhi",
    "Mumbai",
    "Gurgaon",
    "Noida",
    "Ghaziabad",
    "Faridabad",
  ];
  const sizes = [
    "Flats for rent in",
    "1 RK for rent in",
    "1 BHK for rent in",
    "2 BHK for rent in",
    "3 BHK for rent in",
    "4 BHK for rent in",
    "4+ BHK for rent in",
  ];
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
        <div className="relative h-[250px] flex flex-col justify-end pb-12 px-4 md:px-32">
          <h2 className="text-[22px] max-md:leading-4 md:text-3xl font-bold text-[#06062b] mb-2 max-md:mb-2">
            Site Map
          </h2>
          <div className="flex items-center text-[#06062b] font-medium">
            <span className="cursor-pointer" onClick={() => navigate("/")}>
              Home
            </span>
            <span className="mx-2">&#x3e;</span>
            <span
              className="cursor-pointer"
              onClick={() => navigate("/site-map")}
            >
              Site Map
            </span>
          </div>
        </div>
      </div>
      <div className="px-8 max-md:px-2 py-12 w-[85%] max-md:w-full m-auto">
        <h2 className="text-2xl font-semibold mb-8">Flats for rent</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-md:gap-4 text-gray-700">
          {cities.map((city) => (
            <div key={city} className="space-y-1">
              <h3 className="font-medium">{city}</h3>
              <ul className="space-y-1">
                {sizes.map((size) => (
                  <li
                    key={size}
                    className="text-sm hover:underline cursor-pointer"
                  >
                    {size} {city}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="px-8 max-md:px-2 py-8 w-[85%] max-md:w-full m-auto">
        <h2 className="text-2xl font-semibold mb-8">House for rent</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-md:gap-4 text-gray-700">
          {cities.map((city) => (
            <div key={city} className="space-y-1">
              <h3 className="font-medium">{city}</h3>
              <p className="text-sm hover:underline cursor-pointer">House for rent in {city}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default SiteMap;
