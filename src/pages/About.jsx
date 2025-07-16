import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  const steps = [
    {
      number: "1",
      title: "Find agents in your area",
      description:
        "Use The Regional Expertise Of An Expert To Conveniently Market Your Property.",
    },
    {
      number: "2",
      title: "You decide who suits you",
      description:
        "We Make Your Decision Easier With The Help Of Reviews And Information About The Broker's Focus.",
    },
    {
      number: "3",
      title: "Your request is non-biding",
      description:
        "Message Brokers Directly From The Profile. This Doesn't Cost You Anything.",
    },
  ];

  return (
    <section>
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
      <div className="relative h-[350px] flex flex-col justify-end pb-12 px-4 md:px-20">
        <h2 className="text-[22px] max-md:leading-7 md:text-3xl font-semibold text-[#06062b] mb-4 max-md:mb-2">
          Every Home has a Story.
          <br /> Here's Ours
        </h2>
        <div className="flex items-center text-[#06062b] font-medium">
          <span className="cursor-pointer" onClick={()=>navigate("/")}>Home</span>
          <span className="mx-2">&#x3e;</span>
          <span className="cursor-pointer" onClick={()=>navigate("/about")}>About Us</span>
        </div>
        <p className="mt-4 text-[#06062b] max-w-md text-sm">
          BTJ Non Brokerage is India’s largest integrated platform for Real
          Estate & Mortgages and one of the fastest growing Proptech platform in
          India.
        </p>
      </div>
    </div>
    <div className="bg-[#F4F5F7] w-full px-4 md:px-20 py-6 md:py-20 flex max-md:flex-col-reverse gap-4">
      <div className="w-1/2 space-y-4 leading-5 max-md:w-full">
        <h2 className="text-3xl max-md:text-2xl font-semibold py-3 max-md:py-2 pt-8 text-black">About BTJ Non Brokerage</h2>
        <p>Welcome to BTJ Non Brokerage, where we revolutionize the real estate experience by eliminating the need for traditional middlemen. As a leading real estate provider, our mission is to simplify the process of buying, selling, and renting properties, ensuring transparency, efficiency, and satisfaction for all our clients.</p>
        <p>At Non Brokerage, we believe in a direct and straightforward approach. Our unique model allows you to connect directly with property owners and buyers, giving you access to the best deals without the extra cost or complexity of traditional brokerage services. Whether you're searching for your dream home, a profitable investment, or the perfect commercial space, our extensive network and industry expertise ensure that you find exactly what you need.</p>
        <p><strong>Experience a new way to navigate the real estate market—welcome to Non Brokerage, where your satisfaction is our top priority.</strong></p>
      </div>
      <div className="w-1/2 max-md:w-full">
        <img src="/nonbrokerageabout.jpg" alt="" />
      </div>

    </div>
    <div className="py-12 px-4 max-w-7xl mx-auto text-center w-[90%] max-md:w-full">
      <h2 className="text-2xl md:text-3xl font-bold text-[#06062b] mb-2">
        Selling Your Place?
      </h2>
      <p className="text-[#06062b] mb-10">
        Compare real estate agents before you’re sold on one.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {steps.map((step) => (
          <div
            key={step.number}
            className="border border-gray-200 rounded-lg p-6 text-left hover:shadow-lg transition"
          >
            <div className="flex items-center mb-4">
              <div className="bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center mr-2">
                {step.number}
              </div>
              <div className="flex-grow border-t border-dotted border-blue-200"></div>
            </div>

            <h3 className="font-bold text-[#06062b] mb-2">
              {step.title}
            </h3>
            <p className="text-gray-500 leading-relaxed">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
};

export default About;
