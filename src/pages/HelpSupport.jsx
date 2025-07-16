import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';

const faqs = [
{
  question: "How does your platform help in renting or buying properties?",
  answer:
    "Our platform connects property owners with buyers and tenants directly, making the process transparent and cost-effective without brokerage fees.",
},
{
  question: "Is your platform completely free to use?",
  answer:
    "Yes, listing and browsing properties on our platform is free for both owners and seekers.",
},
{
  question: "How can I list my property on your website?",
  answer:
    "Simply sign up for an account, go to your dashboard, and follow the steps to create a new listing with photos and details.",
},
{
  question: "How can I contact the property owner?",
  answer:
    "Each property listing includes contact details of the owner so you can reach out directly.",
},
{
  question: "Can I edit or update my property listing after posting?",
  answer:
    "Yes, you can edit your listing anytime from your dashboard to keep information up-to-date.",
},
{
  question: "How do I contact a property owner or tenant?",
  answer:
    "You can use the provided contact options on the listing page to reach out via phone or email.",
},
{
  question: "Is there a way to boost my property listing for more visibility?",
  answer:
    "Yes, we offer featured listing options to increase your property’s visibility to more potential buyers and renters.",
},
];
const HelpSupport = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const navigate = useNavigate();

   const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
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
        <div className="relative h-[250px] flex flex-col justify-end pb-12 px-4 md:px-32">
          <h2 className="text-[22px] max-md:leading-4 md:text-3xl font-bold text-[#06062b] mb-2 max-md:mb-2">
            Help & Support
          </h2>
          <div className="flex items-center text-[#06062b] font-medium">
            <span className="cursor-pointer" onClick={() => navigate("/")}>
              Home
            </span>
            <span className="mx-2">&#x3e;</span>
            <span className="cursor-pointer" onClick={() => navigate("/help-support")}>
              Help & Support
            </span>
          </div>
        </div>
      </div>
       <section className="bg-gray-50 py-12 px-4 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
        {/* Left side */}
        <div className="md:w-1/3">
          <h2 className="text-3xl md:text-4xl font-bold text-[#06062b] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 mb-6">
            Here are some of the most common questions we receive about
            backlink outreach:
          </p>
          <button onClick={()=>navigate("/contact")} className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition">
            Connect with us &rarr;
          </button>
        </div>

        {/* Right side */}
        <div className="md:w-2/3 flex flex-col divide-y divide-gray-200 border rounded-lg bg-white shadow">
          {faqs.map((faq, index) => (
            <div key={index} className="py-2 px-2 max-md:py-0 max-md:px-0">
              <button
                onClick={() => toggle(index)}
                className="flex justify-between items-center w-full text-left text-lg font-semibold text-gray-800"
              >
                <span>{faq.question}</span>
                <span>
                  {openIndex === index ? (
                    <svg
                      className="w-5 h-5 transform rotate-180"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </span>
              </button>
              {openIndex === index && (
                <div className="mt-3 text-gray-600 px-4 py-2">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
    </main>
  )
}

export default HelpSupport