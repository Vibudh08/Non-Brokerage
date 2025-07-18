import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Subscription = () => {
     useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  const navigate = useNavigate();
  const plans = [
    {
      name: "Basic Plan",
      price: "Free",
      color: "teal-600",
      features: [
        "List 2 Property for Free",
        "Contact up to 5 Owners per Month",
        "Pay Rent & Education Fees",
        "❌ No Premium Listing",
        "❌ No Featured Property",
      ],
    },
    {
      name: "Standard Plan",
      price: "₹999",
      offer: "₹499",
      tax: "+18% GST",
      color: "blue-800",
      features: [
        "List Up to 5 Properties",
        "Contact up to 20 Owners per Month",
        "Pay Rent & Education Fees",
        "Featured Property (Higher Visibility)",
        "❌ No Premium Listing",
      ],
    },
    {
      name: "Premium Plan",
      price: "₹1,499",
      offer: "₹999",
      tax: "+18% GST",
      color: "red-600",
      features: [
        "Unlimited Property Listings",
        "Unlimited Owner Contacts",
        "Pay Rent & Education Fees",
        "Premium Listing (Top Placement)",
        "Priority Support",
      ],
    },
  ];

  const colorClasses = {
  "teal-600": "bg-teal-600",
  "blue-800": "bg-blue-800",
  "red-600": "bg-red-600",
};


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
        <div className="relative h-[350px] flex flex-col justify-end pb-12 px-4 md:px-28">
          <h2 className="text-[22px] max-md:leading-7 md:text-3xl font-semibold text-[#06062b] mb-4 max-md:mb-2">
            Flexible Subscription Plans
          </h2>
          <div className="flex items-center text-[#06062b] font-medium">
            <span className="cursor-pointer" onClick={() => navigate("/")}>
              Home
            </span>
            <span className="mx-2">&#x3e;</span>
            <span className="cursor-pointer" onClick={() => navigate("/subscription")}>
              Subscription
            </span>
          </div>
          <p className="mt-4 text-[#06062b] max-w-md text-sm">
            Choose from a range of affordable subscription plans to list your
            property, reach more owners, and get premium visibility to close
            deals faster.
          </p>
        </div>
      </div>
      <div className="py-6 px-16 max-md:px-2 max-md:pb-4 text-center">
        <h2 className="text-[28px] max-md:text-[22px] font-semibold text-[#070026]  tracking-tight mb-[-4px]max-md:mb-[-2px]">
          Choose Your Plan
        </h2>
        <p className="text-lg max-md:text-base tracking max-md:leading-6">
          Select the best plan that suits your needs.
        </p>
      </div>
      <div className="py-12 pt-2 px-4 w-[85%] max-md:w-full mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`relative flex flex-col items-center rounded-xl border shadow-md p-6 pt-8 overflow-hidden`}
          >
            {/* Colored top border */}
            <div
              className={`absolute top-0 left-0 h-1.5 w-full ${colorClasses[plan.color]}`}
            ></div>

            <h3 className="text-xl font-bold text-[#06062b] mb-2">
              {plan.name}
            </h3>
            <div className="text-lg mb-4 text-center">
              {plan.price.includes("₹") ? (
                <>
                  <span className="line-through text-gray-500 mr-2">
                    {plan.price}
                  </span>
                  <span className="font-bold text-[#06062b]">{plan.offer}</span>
                  <span className="text-gray-500 ml-1">{plan.tax}</span>
                </>
              ) : (
                <span className="font-bold text-[#06062b]">{plan.price}</span>
              )}
            </div>

            <ul className="mb-6 text-left space-y-2 w-full">
              {plan.features.map((feature, index) => (
                <li
                  key={index}
                  className={`flex items-center gap-2 text-gray-700`}
                >
                  {feature.includes("❌") ? (
                    <>
                      <span className="text-red-600">✖</span>
                      <span>{feature.replace("❌ ", "")}</span>
                    </>
                  ) : (
                    <>
                      <span className="text-green-600">✔</span>
                      <span>{feature}</span>
                    </>
                  )}
                </li>
              ))}
            </ul>

            <button
              className={`${colorClasses[plan.color]} hover:opacity-90 transition text-white font-bold py-2 px-6 rounded w-full`}
            >
              Subscribe
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Subscription;
