import { useEffect, useState, useRef, React } from "react";
import Slider from "react-slick";
import { FaQuestionCircle } from "react-icons/fa";
import { FaSquarePhone } from "react-icons/fa6";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import PropertyCard from "../components/PropertyCard";
import { Button, Flex, Collapse, Modal, Input } from "antd";
import { SyncOutlined } from "@ant-design/icons";

// Arrows
const CustomPrevArrow = ({ onClick }) => (
  <button
    className="absolute left-4 max-md:left-1 top-1/2 transform -translate-y-1/2 z-10 bg-white p-1 rounded-full shadow-md hover:bg-black transition hover:text-white"
    onClick={onClick}
  >
    <IoIosArrowBack className="text-2xl max-md:text-xl text-gray-700 hover:text-white" />
  </button>
);

const CustomNextArrow = ({ onClick }) => (
  <button
    className="absolute right-4 max-md:right-1 top-1/2 transform -translate-y-1/2 z-10 bg-white p-1 rounded-full shadow-md hover:bg-black transition hover:text-white"
    onClick={onClick}
  >
    <IoIosArrowForward className="text-2xl max-md:text-xl text-gray-700 hover:text-white" />
  </button>
);

const details = [
  { label: "Bedroom", value: "3" },
  { label: "Bathroom", value: "2" },
  { label: "Hall", value: "1" },
  { label: "Kitchen", value: "1" },
  { label: "Balcony", value: "1" },
  { label: "Facing", value: "East" },
  { label: "Address", value: "Virendra Nagar, Delhi, Delhi" },
  // { label: "Address 2", value: "Virendra Nagar, Delhi, Delhi" },
  { label: "City", value: "West Delhi" },
  { label: "State", value: "DELHI" },
  { label: "Pincode", value: "110010" },
];

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

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const items = [
  {
    key: "1",
    label:
      "This is panel header 1wedrfe wdghtfgds dghfgds afhgfd sdfgrjhrew ghyutrdfsa ",
    children: <p>{text}</p>,
  },
  {
    key: "2",
    label: "This is panel header 2",
    children: <p>{text}</p>,
  },
  {
    key: "3",
    label: "This is panel header 3",
    children: <p>{text}</p>,
  },
];

const ListingDetails = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showFullDetails, setShowFullDetails] = useState(false);
  const [loadings, setLoadings] = useState([]);

   useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
const formRef = useRef(null);

 const handleScrollToForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  const enterLoading = (index) => {
    console.log("Start loading:", index);
    setLoadings((prevLoadings) => {
      const newLoadings = [...prevLoadings];
      newLoadings[index] = true;
      return newLoadings;
    });
    setTimeout(() => {
      setLoadings((prevLoadings) => {
        const newLoadings = [...prevLoadings];
        newLoadings[index] = false;
        return newLoadings;
      });
    }, 3000);
    setShowFullDetails(true);
  };

  const phoneNumber = "6391234567";
  const address = "Noida Sector 62";

  const maskString = (str, visible = 3) => {
    if (str.length <= visible) return str;
    const maskedPart = "*".repeat(str.length - visible);
    return str.slice(0, visible) + maskedPart;
  };

  const showModal = () => {
    setIsModalOpen(true);
    setShowFullDetails(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleViewFullDetails = () => {
    setShowFullDetails(true);
  };

  useEffect(() => {
    Fancybox.bind("[data-fancybox='gallery']", {});
  }, []);

  const listingImages = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    fade: true,
    prevArrow: <CustomPrevArrow onClick={() => {}} />,
    nextArrow: <CustomNextArrow onClick={() => {}} />,
  };
  const propertySlider = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // show 3 full cards
    slidesToScroll: 1,
    centerMode: false, // this enables peeking left & right
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
        <div className="relative h-[70px] flex flex-col justify-end pb-8 px-4 md:px-20"></div>
      </div>
      <div className=" w-full  shadow-lg mb-14 max-md:mb-10">
        <div className="w-[80%] max-md:w-[95%] mx-auto  overflow-hidden flex py-5  max-md:pt-0 gap-6 flex-col md:flex-row">
          {/* Image */}
          <div className="md:w-[60%] w-full py-2 pb-6 max-md:pb-0 max-md:py-0">
            <div className="mt-6">
              <Slider {...listingImages}>
                {[
                  "/home/banner1.jpg",
                  "/home/banner3.jpg",
                  "/home/eros.jpg",
                  "/home/houserent2.jpg",
                  "/home/houserent.jpg",
                ].map((src, index) => (
                  <div key={index}>
                    <a data-fancybox="gallery" href={src}>
                      <img
                        src={src}
                        alt={`House ${index + 1}`}
                        className="w-full h-[400px] object-cover rounded-2xl cursor-pointer"
                      />
                    </a>
                  </div>
                ))}
              </Slider>
            </div>
          </div>

          {/* Details */}
          <div className="md:w-[40%] w-full p-1 pt-6 max-md:pt-0 max-md:mt-0 flex flex-col mt-4">
            <div>
              <h2 className="text-sm text-gray-600 uppercase font-semibold mb-1">
                House
              </h2>
              <h1 className="text-2xl md:text-2xl font-bold mb-2">
                3 BHK HOUSE FOR RENT
              </h1>
              <p className="text-2xl  text-[#06062b] mb-4">
                <strong>₹ 35,000</strong>
              </p>
              <p className="text-lg font-semibold mb-1">West Delhi, DELHI</p>
              <div className="flex items-center mb-4">
                <span className="h-2 w-2 bg-green-500 rounded-full mr-2"></span>
                <p className="text-gray-600">FOR RENT</p>
              </div>
              <div className="flex flex-wrap gap-2 mb-5">
                <span className="flex items-center gap-1.5 bg-gray-100 px-3.5 py-1.5 rounded-full text-sm text-[#717171]">
                  <img src="/icons/single-bed.jpg" className="w-4" alt="" />2
                  bed
                </span>
                <span className="flex items-center gap-1.5 bg-gray-100 px-3.5 py-1.5 rounded-full text-sm text-[#717171]">
                  <img src="/icons/bath.svg" className="w-4" alt="" /> 2 bath
                </span>
                <span className="flex items-center gap-1.5 bg-gray-100 px-3.5 py-1.5 rounded-full text-sm text-[#717171]">
                  <img src="/icons/city-hall.jpg" className="w-4" alt="" /> 1
                  hall
                </span>
                <span className="flex items-center gap-1.5 bg-gray-100 px-3.5 py-1.5 rounded-full text-sm text-[#717171]">
                  <img src="/icons/kitchen.jpg" className="w-4" alt="" /> 1
                  Kitchen
                </span>
                <span className="flex items-center gap-1.5 bg-gray-100 px-3.5 py-1.5 rounded-full text-sm text-[#717171]">
                  <img src="/icons/balcony.jpg" className="w-4" alt="" /> 2
                  balcony
                </span>
              </div>
            </div>

            <Flex gap="small">
              <Button className="rounded-lg px-4 py-5 bg-[#373373] text-white" onClick={handleScrollToForm}>
                <FaQuestionCircle className="text-lg mb-[1px]" /> Enquire Now
              </Button>
              <Button
                className="rounded-lg px-4 py-5 bg-[#373373] text-white"
                onClick={showModal}
              >
                <FaSquarePhone className="text-lg mb-[1px]" />
                Contact Now
              </Button>
            </Flex>
          </div>
        </div>
      </div>
      <div className="w-[80%] max-md:w-[95%] mx-auto  overflow-hidden flex flex-col md:flex-row gap-7">
        <div className="md:w-[67%] w-full py-2 pb-6">
          <div className="mb-10 mt-2">
            <h2 className="text-[21px] font-semibold pb-1">
              Property Information
            </h2>
            <hr className="h-[3px] bg-black w-[100px]" />
            <hr />
            <div className="mt-3 tracking-tight">
              MODULAR KITCHEN | 2 BATHROOM | CAR PARKING <br />
              Digihomes has an 80 per cent area dedicated to open spaces and
              landscaped greens for sustainable and green living.
            </div>
          </div>
          <div>
            <h2 className="text-[21px] font-semibold pb-1">Key Highlights</h2>
            <hr className="h-[3px] bg-black w-[100px]" />
            <hr />
            <div className="border rounded-md p-4 max-w-4xl mx-auto mt-3 bg-gray-50 border-gray-300">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {details.map((item, index) => (
                  <div key={index} className="border-b pb-2">
                    <h4 className="font-semibold text-sm text-gray-900 mb-0.5">
                      {item.label}
                    </h4>
                    <p className="text-gray-500 text-xs">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div ref={formRef} className="md:w-[33%] w-full py-2 pb-6">
          <h2 className="text-[21px] font-semibold pb-2.5">
            Let’s Enquire This Property
          </h2>
          <div className="max-w-md mx-auto bg-white p-5 rounded-lg shadow border">
            <form className="space-y-3">
              <div>
                <label className="block text-gray-700 mb-1">Full name</label>
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  className="w-full border border-[#B2BAC0] bg-[#F4F5F7] text-[#73777D] rounded px-4  focus:outline-none text-sm h-[40px] py-[3px]"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-1">
                  Contact number
                </label>
                <input
                  type="tel"
                  placeholder="+91"
                  className="w-full border border-[#B2BAC0] bg-[#F4F5F7] text-[#73777D] rounded px-4  focus:outline-none text-sm h-[40px] py-[3px]"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  placeholder="Enter Email"
                  className="w-full border border-[#B2BAC0] bg-[#F4F5F7] text-[#73777D] rounded px-4  focus:outline-none text-sm h-[40px] py-[3px]"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-1">
                  Message (optional)
                </label>
                <textarea
                  rows="4"
                  placeholder=""
                  className="w-full border border-[#B2BAC0] bg-[#F4F5F7] text-[#73777D] rounded px-4  focus:outline-none text-sm  py-[3px]"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-blue-600 text-white px-5 py-1.5 rounded hover:bg-blue-700 transition"
              >
                Send a request
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="w-[83%] max-md:w-[95%] mx-auto">
        <div className="py-3 px-2">
          <h2 className="text-[25px] font-semibold ">Nearby similar homes</h2>
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
        <hr className="mt-8 mb-12" />
      </div>
      <div className="w-[83%] max-md:w-[95%] mx-auto mb-8">
        <h2 className="text-[21px] font-semibold pb-5">
          Frequently asked questions
        </h2>
        <Collapse accordion items={items} />
      </div>
      <Modal
        open={isModalOpen}
        footer={null}
        onCancel={handleCancel}
        centered
        width={370}
      >
        <div className="flex flex-col items-center text-center">
          <img src="new_logo.webp" alt="Logo" className="w-40 mb-4" />
          <h2 className="text-xl font-bold text-[#3f3f9f] mb-1">
            Welcome to BTJ Non-Brokerage
          </h2>
          <p className="text-gray-500 mb-3">
            Here are the contact details of the owner of this property.
          </p>

          <div className="w-full mb-4 text-left">
            <label className="block font-semibold mb-1">Name</label>
            <Input
              value="Saif"
              disabled
              className="rounded-lg h-[40px] border-gray-300"
            />
          </div>

          <div className="w-full mb-4 text-left">
            <label className="block font-semibold mb-1">Phone No.</label>
            <Input
              value={showFullDetails ? phoneNumber : maskString(phoneNumber, 3)}
              disabled
              className="rounded-lg h-[40px] border-gray-300"
            />
          </div>

          <div className="w-full mb-4 text-left">
            <label className="block font-semibold mb-1">Address</label>
            <Input
              value={showFullDetails ? address : maskString(address, 3)}
              disabled
              className="rounded-lg h-[40px] border-gray-300"
            />
          </div>
            {!showFullDetails && (
          <Button
            type="link"
            className="text-blue-500 bg-gray-100"
            loading={loadings[3] && { icon: <SyncOutlined spin /> }}
            onClick={() => enterLoading(3)}
          >
            View full details
          </Button>
          )}
        </div>
      </Modal>
    </main>
  );
};

export default ListingDetails;
