import React from "react";
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import SingleTestimonialCard from "./TestimonialCard";

const CustomPrevArrow = ({ onClick }) => (
  <button
    className="absolute left-[46%] max-md:left-[39%] bottom-[-80px] max-md:bottom-[-60px] transform -translate-y-1/2 z-10 bg-white p-1 rounded-full shadow-md hover:bg-black transition hover:text-white"
    onClick={onClick}
  >
    <IoIosArrowBack className="text-3xl max-md:text-2xl text-gray-700 hover:text-white" />
  </button>
);

const CustomNextArrow = ({ onClick }) => (
  <button
    className="absolute right-[46%] max-md:right-[39%] bottom-[-80px] max-md:bottom-[-60px] transform -translate-y-1/2 z-10 bg-white p-1 rounded-full shadow-md hover:bg-black transition hover:text-white"
    onClick={onClick}
  >
    <IoIosArrowForward className="text-3xl max-md:text-2xl text-gray-700 hover:text-white" />
  </button>
);

const testimonials = [
  {
    name: "Sandhya Shrestha",
    rating: 4,
    avatar: "/home/nico.jpg",
    review:
      "Finding my first rental apartment was super easy and stress-free. The platform connected me directly with the owner, no brokers involved!",
  },
  {
    name: "Dhruv",
    rating: 5,
    avatar: "/home/dhruv.jpeg",
    review:
      "I found a great flat within my budget in just a few days. Transparent listings and verified owners made the whole process trustworthy and smooth.",
  },
  {
    name: "Vibudh Rathore",
    rating: 5,
    avatar: "/home/vibudh.jpeg",
    review:
      "Hands down the best rental experience! No hidden fees, clear communication, and I saved a lot by avoiding brokerage charges.",
  },
  {
    name: "Sonica Yadav",
    rating: 5,
    avatar: "/home/sonika.jpeg",
    review:
      "I needed a flat urgently near my college. Within 2 days, I got multiple owner contacts and closed the deal directly. Highly recommended!",
  },
  {
    name: "Mohd Zaid",
    rating: 4,
    avatar: "/home/zaid.jpg",
    review:
      "Rented a 2BHK for my family through this platform. Verified owners, genuine photos, and no fake listings made the process hassle-free.",
  },
  {
    name: "Anshu Shyanda",
    rating: 5,
    avatar: "/home/anshu.jpg",
    review:
      "Best place to find rental properties without paying hefty broker fees. I shifted to a new city and found a perfect flat in just one week!",
  },
];

const TestimonialsSection = () => {
  const testimonialsSlider = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
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
    <section className="py-2 pb-24 bg-gray-50 ">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">

        <div className="py-6 px-16 max-md:px-2 max-md:pb-0 text-center">
          <h2 className="text-[28px] max-md:text-[24px] max-md:mb-1 font-semibold text-[#070026]  tracking-tight mb-[-4px]">
            What our customer say
          </h2>
          <p className="text-lg tracking max-md:text-sm">
            Consumers are defined as individuals or businesses that consume or
            use goods.
          </p>
        </div>
          <div className="relative mt-8  md:order-2">
            <div className="absolute -inset-x-1 inset-y-16 md:-inset-x-2 md:-inset-y-6">
              <div
                className="w-full h-full max-w-5xl mx-auto rounded-3xl opacity-30 blur-lg filter"
                style={{
                  background:
                    "linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)",
                }}
              ></div>
            </div>

            <div className="relative grid max-w-lg grid-cols-1 gap-6 mx-auto md:max-w-none lg:gap-10">
              <Slider {...testimonialsSlider}>
                {testimonials.map((testimonial, idx) => (
                  <SingleTestimonialCard key={idx} testimonial={testimonial} />
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
