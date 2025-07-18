import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import {
  IoLocationOutline,
  IoCallOutline,
  IoMailOutline,
} from "react-icons/io5";
import { BsTwitterX } from "react-icons/bs";
import { QRCode } from "antd";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10">
      <div className="mx-auto px-10 max-md:px-4 flex max-md:flex-col">
        {/* Logo & Contact */}
        <div className="w-[28%] max-md:w-full max-md:mb-6">
          <img
            src="/new_logo.webp"
            alt="footer-logo"
            className="mb-6 max-w-[200px] bg-white ml-6 max-md:ml-0 p-1"
          />
          <ul className="space-y-4 max-md:space-y-2 relative pl-6 max-md:pl-0 max-md:text-sm">
            <li className="relative flex gap-2">
              <IoLocationOutline className="mt-1" />
              <span>Sector-2, Noida, UP, 201301</span>
            </li>
            <li className="relative flex gap-2">
              <IoCallOutline className="mt-1.5" />
              <a href="tel:01145531923">01145531923</a>
            </li>
            <li className="relative flex gap-2">
              <IoMailOutline className="mt-1.5" />
              <a href="mailto:support@btjnonbrokerage.com">
                support@btjnonbrokerage.com
              </a>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className="w-[16%] max-md:w-full max-md:mb-6">
          <h2 className="text-lg mb-6 max-md:mb-2  text-[#646cff] font-semibold">
            QUICK LINKS
          </h2>
          <ul className="space-y-2 max-md:space-y-1 max-md:grid max-md:grid-cols-2 max-md:text-sm">
            <li className="max-md:mt-1">
              <Link to="/about" className="hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/listing" className="hover:underline">
                List Property
              </Link>
            </li>
            <li>
              <Link to="/subscription" className="hover:underline">
                Pricing
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/blogs" className="hover:underline">
                Blogs
              </Link>
            </li>
            <li>
              <Link to="/site-map" className="hover:underline">
                Site Map
              </Link>
            </li>
            <li>
              <Link to="/help-support" className="hover:underline">
                Help & Support
              </Link>
            </li>
          </ul>
        </div>

        {/* Discover Location */}
        <div className="w-[18%] max-md:w-full  max-md:mb-6">
          <h2 className="text-lg mb-6  max-md:mb-2 text-[#646cff] font-semibold">
            FLATS FOR RENT
          </h2>
          <ul className="space-y-2 max-md:space-y-1  max-md:grid max-md:grid-cols-2 max-md:text-sm">
            <li className="max-md:mt-1">
              <Link to="/" className="hover:underline">
                Flats in Delhi
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:underline">
                Flats in Mumbai
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:underline">
                Flats in Gurgaon
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:underline">
                Flats in Noida
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:underline">
                Flats in Ghaziabad
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:underline">
                Flats in Faridabad
              </Link>
            </li>
          </ul>
        </div>

        {/* Subscribe & Social */}
        <div className="w-[18%] max-md:w-full max-md:mb-6">
          <h2 className="text-lg mb-6 max-md:mb-2 text-[#646cff] font-semibold">
            HOUSE FOR RENT
          </h2>
          <ul className="space-y-2 max-md:space-y-1  max-md:grid max-md:grid-cols-2 max-md:text-sm">
            <li className="max-md:mt-1">
              <Link to="/" className="hover:underline">
                House in Delhi
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:underline">
                House in Mumbai
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:underline">
                House in Gurgaon
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:underline">
                House in Noida
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:underline">
                House in Ghaziabad
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:underline">
                House in Faridabad
              </Link>
            </li>
          </ul>
        </div>

        <div className="w-[20%] max-md:w-full">
          <h3 className="text-lg mb-6 text-[#646cff] font-semibold">
            EXPERIENCE ON MOBILE
          </h3>
          {/* <a href="/">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png"
              alt="Google Play"
              className="w-40"
            />
          </a> */}
          <div className="bg-white w-fit ">
            <QRCode
              errorLevel="H"
              value="https://ant.design/"
              icon="/favicon11.png"
            />
          </div>

          <h3 className="font-semibold mt-6 text-[#646cff]">KEEP IN TOUCH</h3>
          <div className="flex gap-3 mt-2  w-fit p-1">
            <a
              href="https://www.facebook.com/people/BTJ-NonBrokerage/61573074818273/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="text-[#1877F2] w-6 h-6 cursor-pointer transform transition-transform duration-200 hover:scale-110" />
            </a>
            {/* <a
              href="https://www.x.com/BTJAdmirer"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsTwitterX className="text-black w-6 h-6 cursor-pointer transform transition-transform duration-200 hover:scale-110" />
            </a> */}
            <a
              href="https://www.instagram.com/btjnonbrokerage/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-[#E1306C] w-6 h-6 cursor-pointer transform transition-transform duration-200 hover:scale-110" />
            </a>
            <a
              href="https://www.youtube.com/@BTJNonbrokerage"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube className="text-[#FF0000] w-7 h-6 cursor-pointer transform transition-transform duration-200 hover:scale-110" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 px-10 max-md:px-0">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between text-sm">
          <p>© 2025 All Rights Reserved By BTJ Non Brokerage</p>
          <ul className="flex gap-4 mt-4 md:mt-0 text-[#646cff]">
            <li>
              <Link to="/privacy-policy" className="hover:underline">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms-conditions" className="hover:underline">
                Term & Conditions
              </Link>
            </li>
            <li>
              <Link to="/cookie-policy" className="hover:underline">
                Cookie Policy
              </Link>
            </li>
            <li>
              <Link to="/refund-policy" className="hover:underline">
                Refund Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
