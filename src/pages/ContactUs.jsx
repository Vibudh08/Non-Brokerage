import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const ContactUs = () => {
  const navigate = useNavigate();
       useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

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
            Contact Us
          </h2>
          <div className="flex items-center text-[#06062b] font-medium">
            <span className="cursor-pointer" onClick={() => navigate("/")}>
              Home
            </span>
            <span className="mx-2">&#x3e;</span>
            <span
              className="cursor-pointer"
              onClick={() => navigate("/contact")}
            >
              Contact Us
            </span>
          </div>
        </div>
      </div>
      <div className="max-w-5xl m-8 mx-auto p-6 max-md:p-2 md:p-12 border max-md:border-none border-gray-400 rounded-xl flex flex-col-reverse md:flex-row gap-12">
      {/* Left: Form */}
      <div className="flex-1 space-y-4 max-md:border p-4 rounded-xl">
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="First Name"
            className="flex-1 border rounded-md px-4 py-4 outline-none"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="flex-1 border rounded-md px-4 py-4 outline-none"
          />
        </div>
        <input
          type="text"
          placeholder="Phone"
          className="w-full border rounded-md px-4 py-4 outline-none"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full border rounded-md px-4 py-4 outline-none"
        />
        <textarea
          rows="5"
          placeholder="Your Message"
          className="w-full border rounded-md px-4 py-4 outline-none"
        ></textarea>
        <button className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 rounded-md">
          CONTACT US
        </button>
      </div>

      {/* Right: Text */}
      <div className="flex-1 space-y-6">
        <h2 className="text-2xl md:text-3xl font-bold text-[#06062b]">
          Find Your Dream Property <br />
          Expert Real Estate Services <br />
          Await You
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Contact us today to explore the best real estate opportunities tailored
          to your needs. Whether you're looking to buy, sell, or invest, our
          dedicated team is here to guide you through every step. Reach out via
          phone, email, or visit our office for personalized assistance. Let's
          make your real estate journey smooth and successful!
        </p>

        <div className="flex items-start gap-3 text-gray-600">
          <FaMapMarkerAlt className="mt-1 text-xl" />
          <p className="italic">Sector 2, Noida<br />201301</p>
        </div>

        <div className="flex items-center gap-3 text-gray-600">
          <FaPhoneAlt className="text-xl" />
          <p className="italic">0120-4525483</p>
        </div>
      </div>
    </div>
    <section className="py-8 max-md:py-2 bg-white w-[85%] max-md:w-full m-auto">
        <div className="mx-auto px-4">
          <div className=" items-center">
            <div className="">
              <div className="rounded-xl overflow-hidden shadow-md ml-5 max-md:ml-0">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.430891875109!2d77.3130094!3d28.5868475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce4589e66cd21%3A0x74986f30f963e27!2sSector%202%2C%20Noida%2C%20Uttar%20Pradesh%20201301!5e0!3m2!1sen!2sin!4v1720000000000!5m2!1sen!2sin"
                  width="100%"
                  height="450"
                  allowFullScreen=""
                  loading="lazy"
                  style={{ border: 0 }}
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactUs;
