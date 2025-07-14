import React from "react";

export default function PropertyCard({
  name,
  price,
  image,
  bed,
  bath,
  hall,
  kitchen,
  balcony,
  city,
  state,
}) {
  return (
    <div className="max-w-sm rounded-xl overflow-hidden hover:shadow-lg border mx-2.5 mb-8 mt-2 border-gray-200">
      <div className="relative">
        <div className="relative overflow-hidden h-56 w-full">
          <img
            className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110"
            src={image}
            alt="Property"
          />
        </div>
        <span className="absolute top-4 left-4 bg-yellow-400 text-black text-xs font-semibold px-2 py-1 rounded">
          For Rent
        </span>
      </div>
      <div className="p-4">
        <h2 className="text-lg font-medium w-full truncate text-gray-800">
          {name}
        </h2>
        <p className="text-[28px] font-bold text-gray-900 mb-3 ">₹ {price}</p>
        <div className="flex flex-wrap gap-2 mb-5">
          <span className="flex items-center gap-1.5 bg-gray-100 px-4 py-1.5 rounded-full text-sm text-[#717171]">
            <img src="/icons/single-bed.jpg" className="w-4" alt="" />
            {bed} bed
          </span>
          <span className="flex items-center gap-1.5 bg-gray-100 px-4 py-1.5 rounded-full text-sm text-[#717171]">
            <img src="/icons/bath.svg" className="w-4" alt="" /> {bath} bath
          </span>
          <span className="flex items-center gap-1.5 bg-gray-100 px-4 py-1.5 rounded-full text-sm text-[#717171]">
            <img src="/icons/city-hall.jpg" className="w-4" alt="" /> {hall}{" "}
            hall
          </span>
          <span className="flex items-center gap-1.5 bg-gray-100 px-4 py-1.5 rounded-full text-sm text-[#717171]">
            <img src="/icons/kitchen.jpg" className="w-4" alt="" /> {kitchen}{" "}
            Kitchen
          </span>
          <span className="flex items-center gap-1.5 bg-gray-100 px-4 py-1.5 rounded-full text-sm text-[#717171]">
            <img src="/icons/balcony.jpg" className="w-4" alt="" /> {balcony}{" "}
            balcony
          </span>
        </div>
        <div className="flex items-center text-base gap-1 text-gray-600">
          <img src="/icons/map.svg" className="w-5" alt="" /> {city}, {state}
        </div>
      </div>
    </div>
  );
}
