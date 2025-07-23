import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import PropertyCard from "../components/PropertyCard";
import TestimonialsSection from "../components/testimonial/Testimonial";
import { FaSearchLocation, FaSearch } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { Select } from "antd";

const { Option } = Select;

// Arrows
const CustomPrevArrow = ({ onClick }) => (
  <button
    className="absolute left-10 max-md:left-1 top-1/2 transform -translate-y-1/2 z-10 bg-white p-1 rounded-full shadow-md hover:bg-black transition hover:text-white"
    onClick={onClick}
  >
    <IoIosArrowBack className="text-3xl max-md:text-xl text-gray-700 hover:text-white" />
  </button>
);

const CustomNextArrow = ({ onClick }) => (
  <button
    className="absolute right-10 max-md:right-1 top-1/2 transform -translate-y-1/2 z-10 bg-white p-1 rounded-full shadow-md hover:bg-black transition hover:text-white"
    onClick={onClick}
  >
    <IoIosArrowForward className="text-3xl max-md:text-xl text-gray-700 hover:text-white" />
  </button>
);

const propertyData = [
  {
    name: "EROS SAMPOORNAM hkjlmnbiu iijnhbiojpk hiijnbuh",
    price: "22,000",
    image: "/home/eros.jpg",
    bed: "2",
    bath: "2",
    hall: "2",
    balcony: "2",
    kitchen: "2",
    city: "Noida",
    state: "UP",
  },
  {
    name: "ATS Greens Village",
    price: "25,000",
    image: "https://picsum.photos/400/300?random=2",
    bed: "3",
    bath: "2",
    hall: "1",
    balcony: "2",
    kitchen: "1",
    city: "Gurgaon",
    state: "Haryana",
  },
  {
    name: "Supertech Capetown",
    price: "20,000",
    image: "https://picsum.photos/400/300?random=3",
    bed: "2",
    bath: "2",
    hall: "1",
    balcony: "1",
    kitchen: "1",
    city: "Greater Noida",
    state: "UP",
  },
  {
    name: "Mahagun Moderne",
    price: "30,000",
    image: "https://picsum.photos/400/300?random=4",
    bed: "3",
    bath: "3",
    hall: "1",
    balcony: "3",
    kitchen: "1",
    city: "Delhi",
    state: "Delhi",
  },
  {
    name: "Prateek Wisteria",
    price: "28,000",
    image: "https://picsum.photos/400/300?random=5",
    bed: "3",
    bath: "2",
    hall: "1",
    balcony: "2",
    kitchen: "1",
    city: "Ghaziabad",
    state: "UP",
  },
  {
    name: "Amrapali Zodiac",
    price: "18,000",
    image: "https://picsum.photos/400/300?random=6",
    bed: "2",
    bath: "2",
    hall: "1",
    balcony: "2",
    kitchen: "1",
    city: "Faridabad",
    state: "Haryana",
  },
  {
    name: "Gaur City",
    price: "24,000",
    image: "https://picsum.photos/400/300?random=7",
    bed: "3",
    bath: "2",
    hall: "1",
    balcony: "2",
    kitchen: "1",
    city: "Lucknow",
    state: "UP",
  },
];

const stateData = [
  { img: "/home/haryana.jpg", name: "Haryana" },
  { img: "/home/madhya-pradesh.jpg", name: "Madhya Pradesh" },
  { img: "/home/Maharashtra.jpg", name: "Maharashtra" },
  { img: "/home/uttarpradesh.jpg", name: "Uttar Pradesh" },
  { img: "/home/delhi.jpg", name: "Delhi" },
];

const offers = [
  { image: "/home/help1.jpg" },
  { image: "/home/help2.jpg" },
  { image: "/home/help3.jpg" },
];

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [selected, setSelected] = useState("All");
  const tabs = ["All", "Apartment", "Flat", "House"];
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/listing");
  };
  const bannerSlider = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    // prevArrow: <CustomPrevArrow onClick={() => {}} />,
    // nextArrow: <CustomNextArrow onClick={() => {}} />,
  };
  const propertySlider = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // show 3 full cards
    slidesToScroll: 1,
    centerMode: true, // this enables peeking left & right
    centerPadding: "5%", // this makes 20% of next/prev visible
    arrows: true,
    prevArrow: <CustomPrevArrow onClick={() => {}} />,
    nextArrow: <CustomNextArrow onClick={() => {}} />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <main>
      <div className="relative w-full border border-b-[#6BB3FD] h-screen max-md:h-[550px] mt-[-70px] flex items-center justify-center text-center">
        <div
          className="absolute inset-0 bg-bottom bg-contain bg-no-repeat z-10"
          style={{ backgroundImage: "url('/banner-home-1.jpg')" }}
        ></div>
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "linear-gradient(-45deg, #fcbfad, #c5face, #b6e8fa, #adf3e3, #f7b5ba, #cbabf5, #e9f5a5)",
            backgroundSize: "400% 400%",
            animation: "gradient 15s ease infinite",
          }}
        ></div>
        <div className="z-10 max-md:mt-20">
          <h2 className="text-[#373373] text-[26px] max-md:text-[22px] leading-9 max-md:leading-7">
            The Biggest Non Brokerage <br />{" "}
            <span className="font-semibold"> Property Website Worldwide</span>
          </h2>
          <div className="bg-white max-sm:hidden rounded-xl shadow-md p-3 mt-5 mb-2 flex flex-col  md:items-center gap-3 w-[650px]">
            {/* Filters */}

            <div className="flex flex-1 gap-2 w-full">
              {/* Location */}
              <Select
                className="flex-1  h-[40px]"
                placeholder="Location"
                allowClear
                showSearch
                optionFilterProp="children"
                variant="filled"
              >
                <Option value="HARYANA">HARYANA</Option>
                <Option value="MADHYA PRADESH">MADHYA PRADESH</Option>
                <Option value="MAHARASHTRA">MAHARASHTRA</Option>
                <Option value="UTTAR PRADESH">UTTAR PRADESH</Option>
                <Option value="DELHI">DELHI</Option>
              </Select>

              {/* BHK Type */}
              <Select
                className="flex-1 h-[40px]"
                placeholder="BHK Type"
                allowClear
                showSearch
                optionFilterProp="children"
                variant="filled"
              >
                <Option value="1 BHK">1 BHK</Option>
                <Option value="2 BHK">2 BHK</Option>
                <Option value="3 BHK">3 BHK</Option>
              </Select>

              {/* Availability */}
              <Select
                className="flex-1 h-[40px]"
                placeholder="Availability"
                allowClear
                showSearch
                optionFilterProp="children"
                variant="filled"
              >
                <Option value="Ready to Move">Ready to Move</Option>
                <Option value="Under Construction">Under Construction</Option>
              </Select>

              {/* Budget */}
              <Select
                className="flex-1 h-[40px]"
                placeholder="Budget"
                allowClear
                showSearch
                optionFilterProp="children"
                variant="filled"
              >
                <Option value="Below 50 Lakh">Below 50 Lakh</Option>
                <Option value="50 Lakh - 1 Cr">50 Lakh - 1 Cr</Option>
                <Option value="Above 1 Cr">Above 1 Cr</Option>
              </Select>
            </div>

            {/* Desktop Working Search Input */}
            <div className="flex w-full">
              <div
                className="flex items-center bg-gray-100 p-4 py-1 rounded-lg   md:flex-none"
                style={{ width: "calc(100% - 48px)" }}
              >
                <FaSearchLocation className="text-[#373373] mr-2" />
                <input
                  type="text"
                  placeholder="Search properties..."
                  className="flex-1 bg-transparent focus:outline-none text-gray-700"
                />
              </div>
              <button className="bg-[#373373] p-3 rounded-md text-white ml-2">
                <FaSearch />
              </button>
            </div>
          </div>

          {/* Mobile Search Input for filter screen*/}
          <div className="max-sm:flex w-full bg-white p-1.5 mt-4 mb-1 rounded-xl hidden ">
            <div
              className="flex items-center bg-gray-100 p-4 py-1 rounded-lg   md:flex-none"
              style={{ width: "calc(100% - 48px)" }}
              onClick={handleClick}
            >
              <FaSearchLocation className="text-[#373373] mr-2" />
              <input
                type="text"
                placeholder="Search properties..."
                className="flex-1 bg-transparent focus:outline-none text-gray-700"
              />
            </div>
            <button
              onClick={handleClick}
              className="bg-[#373373] p-3 rounded-md text-white ml-2"
            >
              <FaSearch />
            </button>
          </div>

          {/* property types */}
          <div className="flex gap-7 max-md:gap-4 justify-center">
            <div className="mt-4 cursor-pointer">
              <div className="w-fit flex flex-col justify-center items-center group">
                <div className="border rounded-full p-3.5 bg-[#e6f2ff] mb-1.5 w-fit transform transition-transform duration-300 group-hover:-translate-y-1.5">
                  <img
                    src="/icons/ho1.svg"
                    alt=""
                    className="w-[23px] max-md:w-[20px]"
                  />
                </div>
                <div className="text-[#373373] font-medium max-md:text-sm">
                  Apartment
                </div>
              </div>
            </div>
            <div className="mt-4 cursor-pointer">
              <div className="w-fit flex flex-col justify-center items-center group">
                <div className="border rounded-full p-3.5 bg-[#e6f2ff] mb-1.5 w-fit transform transition-transform duration-300 group-hover:-translate-y-1.5">
                  <img
                    src="/icons/ho2.svg"
                    alt=""
                    className="w-[23px] max-md:w-[20px]"
                  />
                </div>
                <div className="text-[#373373] font-medium max-md:text-sm">
                  Flat
                </div>
              </div>
            </div>
            <div className="mt-4 cursor-pointer">
              <div className="w-fit flex flex-col justify-center items-center group">
                <div className="border rounded-full p-3.5 bg-[#e6f2ff] mb-1.5 w-fit transform transition-transform duration-300 group-hover:-translate-y-1.5">
                  <img
                    src="/icons/ho3.svg"
                    alt=""
                    className="w-[23px] max-md:w-[20px]"
                  />
                </div>
                <div className="text-[#373373] font-medium max-md:text-sm">
                  House
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <Slider {...bannerSlider}>
          <div>
            <img
              className="w-full desktop-banner block max-md:hidden"
              src="/home/banner1.jpg"
              alt="Desktop Banner"
            />
            <img
              className="w-full mobile-banner max-md:block hidden"
              src="/home/houserent.jpg"
              alt="Mobile Banner"
            />
          </div>
          <div>
            <img
              className="w-full desktop-banner hidden md:block"
              src="/home/banner3.jpg"
              alt="Desktop Banner"
            />
            <img
              className="w-full mobile-banner block md:hidden"
              src="/home/houserent2.jpg"
              alt="Mobile Banner"
            />
          </div>
        </Slider>
      </div>

      <div className="mt-6 ">
        <div className="py-6 px-16 max-md:px-8">
          <h2 className="text-[28px] max-md:text-[24px] font-semibold text-[#070026]  tracking-tight mb-[-4px] max-md:mb-[-2px]">
            Recently Added
          </h2>
          <p className="text-lg max-md:text-base tracking-tight">
            Based on preferences of users like you
          </p>
          <div className="flex gap-2 mt-6 max-md:mt-5 text-[#73777D]">
            {tabs.map((tab) => (
              <span
                key={tab}
                onClick={() => setSelected(tab)}
                className={`border border-[#D6DBDF] rounded p-2.5 py-1 cursor-pointer transition 
            ${selected === tab ? "bg-[#4081FF] text-white" : ""}
          `}
              >
                {tab}
              </span>
            ))}
          </div>
        </div>
        <div>
          <Slider {...propertySlider}>
            {propertyData.map((items, index) => (
              <PropertyCard
                key={index}
                name={items.name}
                price={items.price}
                image={items.image}
                bed={items.bed}
                bath={items.bath}
                hall={items.hall}
                balcony={items.balcony}
                kitchen={items.kitchen}
                city={items.city}
                state={items.state}
              />
            ))}
          </Slider>
        </div>
      </div>

      <div className="bg-gray-50">
        <div className="py-6 px-16 max-md:px-6">
          <h2 className="text-[28px] max-md:text-[20px] font-semibold text-[#070026]  tracking-tight mb-[-4px]max-md:mb-[-2px]">
            Examine Various States for Real Estate
          </h2>
          <p className="text-lg max-md:text-base tracking">
            Chosen site specifically for you
          </p>
        </div>
        <div className="w-[90%] m-auto">
          <div className="w-full mt-2 pb-12 overflow-x-auto flex gap-1.5 flex-nowrap ">
            {stateData.map((data, index) => (
              <div key={index} className="w-fit relative flex-shrink-0">
                <img
                  src={data.img}
                  className="rounded-2xl w-[180px] h-[230px] object-cover"
                  alt=""
                />
                {/* <div className="absolute left-1/2 bottom-[8%] w-full text-center transform -translate-x-1/2 bg-black text-white px-3 py-1">
                  {data.name}
                </div> */}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mb-8">
        <div className="py-6 px-16 max-md:px-2 max-md:pb-4 text-center">
          <h2 className="text-[28px] max-md:text-[22px] font-semibold text-[#070026]  tracking-tight mb-[-4px]max-md:mb-[-2px]">
            How we help with your journey
          </h2>
          <p className="text-lg max-md:text-base tracking max-md:leading-6">
            People have people to share their journey with for a time.
          </p>
        </div>
        <div className="mt-3 mb-6 hidden md:grid grid-cols-3 gap-2 w-[90%] m-auto ">
          {offers.map((item, idx) => (
            <div
              key={idx}
              // onClick={() => handleClick(item.url)}
              className="cursor-pointer"
            >
              <img
                src={item.image}
                className="w-full h-full object-cover rounded-xl"
                alt={`Curated ${idx}`}
              />
            </div>
          ))}
        </div>

        {/* Mobile View */}
        <div className="mt-3 w-full md:hidden overflow-hidden">
          <div className="flex gap-2.5 overflow-x-auto scroll-smooth snap-x snap-mandatory px-4">
            {offers.map((item, idx) => (
              <div
                key={idx}
                // onClick={() => handleClick(item.url)}
                className="flex-shrink-0 w-[72vw] snap-center"
              >
                <img
                  src={item.image}
                  className="w-full h-[auto] object-cover rounded-xl"
                  alt={`Curated ${idx}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="!mt-6 mb-6 w-[90%] m-auto relative">
        <img
          src="/home/home-new-bg-million.jpg"
          className="h-[350px] w-full max-md:rounded-3xl"
          alt=""
        />
        <div className="absolute top-0 left-0 ml-10 max-md:ml-0 max-md:rounded-3xl w-full h-full flex flex-col justify-center  text-white p-4">
          <h2 className="text-4xl max-md:text-2xl font-bold max-w-[350px] mb-5">
            Why Many Users Trust us since 2025
          </h2>
          <p className="max-w-[450px] max-md:text-base">
            At BTJ Non-Brokerage, we prioritize transparency, efficiency, and
            customer satisfaction. Since 2025, countless users have trusted us
            to provide a seamless real estate experience without the hassle of
            brokerage fees.
          </p>
        </div>
      </div>

      <div className="">
        <TestimonialsSection />
      </div>
    </main>
  );
};

export default Home;
