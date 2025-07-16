import React from "react";
import { useNavigate } from "react-router-dom";

const CookiesPolicy = () => {
  const navigate = useNavigate();
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
            Cookie Policy
          </h2>
          <div className="flex items-center text-[#06062b] font-medium">
            <span className="cursor-pointer" onClick={() => navigate("/")}>
              Home
            </span>
            <span className="mx-2">&#x3e;</span>
            <span
              className="cursor-pointer"
              onClick={() => navigate("/cookie-policy")}
            >
              Cookie Policy
            </span>
          </div>
        </div>
      </div>
       <div className="bg-white pb-12">
      <div className="w-[85%] max-md:w-[100%] bg-[#fcfcfc] mx-auto my-auto h-[90%] pt-16 pb-12 px-8 max-md:px-5 max-md:pt-6 text-gray-800 space-y-10">
        <section className="space-y-4 text-gray-700">
          <p className="leading-snug">
            This Cookies Policy explains how <strong className="text-gray-600">BTJ Non Brokerage</strong> uses cookies and similar technologies on our website www.btjnonbrokerage.com. By using our site, you agree to the use of cookies as described in this policy.
          </p>
        </section>

        <section className="space-y-4 text-gray-700">
          <h3 className="text-xl font-bold">1. What Are Cookies?</h3>
          <p className="leading-snug">
            Cookies are small text files that are stored on your device (computer, smartphone, tablet) when you visit a website. Cookies help us enhance your experience on our Site by remembering your preferences and providing personalized content.
          </p>
        </section>

        <section className="space-y-4 text-gray-700">
          <h4 className="text-lg font-bold">1.1 Types of Information Collected</h4>
          <p className="leading-snug">
            Personal information is information that identifies you as an individual. We may collect the following types of personal information:
          </p>
          <ul className="list-disc list-outside pl-6 space-y-2">
            <li className="leading-snug"><strong>Contact Information:</strong> Name, email address, postal address, phone number.</li>
            <li className="leading-snug"><strong>Account Information:</strong> Username, password, and other information related to your account.</li>
            <li className="leading-snug"><strong>Transaction Information:</strong> Property preferences, inquiries, and transaction details.</li>
            <li className="leading-snug"><strong>Financial Information:</strong> Payment details when you make transactions through our Services.</li>
            <li className="leading-snug"><strong>Identification Information:</strong> Copies of identification documents where necessary.</li>
          </ul>
        </section>

        <section className="space-y-4 text-gray-700">
          <h4 className="text-lg font-bold">2.2 Non-Personal Information</h4>
          <p className="leading-snug">
            Non-personal information includes data that does not directly identify you. We may collect such information including:
          </p>
          <ul className="list-disc list-outside pl-6 space-y-2">
            <li className="leading-snug"><strong>Usage Data:</strong> Pages viewed, links clicked, and other actions taken within our Services.</li>
            <li className="leading-snug"><strong>Technical Data:</strong> IP address, browser type, device information, operating system, and other technical details.</li>
            <li className="leading-snug"><strong>Transaction Information:</strong> Property preferences, inquiries, and transaction details.</li>
            <li className="leading-snug"><strong>Location Data:</strong> Approximate geographic location based on your IP address or other location-aware technologies.</li>
          </ul>
        </section>

        <section className="space-y-4 text-gray-700">
          <h4 className="text-lg font-bold">2.3 Information Collected from Other Sources</h4>
          <p className="leading-snug">
            We may also obtain information about you from other sources such as:
          </p>
          <ul className="list-disc list-outside pl-6 space-y-2">
            <li className="leading-snug">Public Databases</li>
            <li className="leading-snug">Social Media Platforms</li>
            <li className="leading-snug">Third-Party Partners</li>
          </ul>
        </section>

        <section className="space-y-4 text-gray-700">
          <h3 className="text-xl font-bold">3. How We Use Your Information</h3>
          <p className="leading-snug">
            We use the collected information for various purposes, including:
          </p>
          <ul className="list-disc list-outside pl-6 space-y-2">
            <li className="leading-snug"><strong>Providing Services:</strong> To facilitate property listings, inquiries, and transactions.</li>
            <li className="leading-snug"><strong>Personalization:</strong> To customize your experience and present properties and services tailored to your interests.</li>
            <li className="leading-snug"><strong>Communication:</strong> To send you updates, newsletters, marketing materials, and respond to your inquiries.</li>
          </ul>
        </section>

        <section className="space-y-4 text-gray-700">
          <p className="leading-snug text-sm text-gray-500">
            Disclaimer: This is a template provided for informational purposes only and does not constitute legal advice. You should consult with legal counsel to ensure that your cookies policy complies with all applicable laws and regulations specific to your business and location.
          </p>
        </section>
      </div>
    </div>
    </main>
  );
};

export default CookiesPolicy;
