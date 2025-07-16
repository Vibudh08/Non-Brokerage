import React from "react";
import { Link, useNavigate } from "react-router-dom";

const TermsAndConditions = () => {
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
            Terms & Conditions
          </h2>
          <div className="flex items-center text-[#06062b] font-medium">
            <span className="cursor-pointer" onClick={() => navigate("/")}>
              Home
            </span>
            <span className="mx-2">&#x3e;</span>
            <span
              className="cursor-pointer"
              onClick={() => navigate("/terms-conditions")}
            >
              Terms & Conditions
            </span>
          </div>
        </div>
      </div>
      <div className="bg-white pb-12">
        <div className="w-[85%] max-md:w-[100%] bg-[#fcfcfc] mx-auto my-auto  h-[90%] pt-16 pb-12 px-8 max-md:px-5 max-md:pt-6 text-gray-800 space-y-10">
          <section className="space-y-4 text-gray-700">
            <p className="leading-snug">
              Welcome to{" "}
              <strong className="text-gray-600">BTJ Non Brokerage</strong>. By
              accessing or using our website{" "}
              <a
                href="https://www.btjnonbrokerage.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 font-semibold hover:underline"
              >
                www.btjnonbrokerage.com
              </a>{" "}
              and related services, you agree to comply with and be bound by the
              following Terms and Conditions. Please read them carefully. If you
              do not agree to these Terms, please do not use our Services.
            </p>
          </section>

          <section className="space-y-4 text-gray-700">
            <h3 className="text-xl font-bold">1. Acceptance of Terms</h3>
            <p className="leading-snug">
              By accessing or using our Services, you acknowledge that you have
              read, understood, and agree to be bound by these Terms, as well as
              our{" "}
              <Link
                to="/privacy-policy"
                className="text-gray-600 font-semibold hover:underline"
              >
                Privacy Policy
              </Link>
              . These Terms apply to all visitors, users, and others who access
              or use our Services ("Users").
            </p>
          </section>

          <section className="space-y-4 text-gray-700">
            <h3 className="text-xl font-bold">2. Eligibility</h3>
            <p className="leading-snug">
              You must be at least 18 years of age to use our Services. By using
              our Services, you represent that you are at least 18 years old and
              have the legal capacity to enter into a binding contract. If you
              are using the Services on behalf of an organization, you represent
              that you have the authority to bind that organization to these
              Terms.
            </p>
          </section>

          <section className="space-y-4 text-gray-700">
            <h3 className="text-xl font-bold">3. User Accounts</h3>
            <p className="leading-snug">
              To access certain features of our Services, you may be required to
              create an account. You agree to provide accurate, current, and
              complete information during the registration process and to update
              such information as necessary. You are responsible for maintaining
              the confidentiality of your account credentials and for all
              activities that occur under your account.
            </p>
          </section>

          <section className="space-y-4 text-gray-700">
            <h3 className="text-xl font-bold">4. Use of Services</h3>
            <p className="leading-snug">
              You are solely responsible for the content you upload, post, or
              otherwise make available through our Services. You agree that your
              content will not violate any third-party rights, including
              intellectual property rights, privacy rights, or other proprietary
              rights.
            </p>
          </section>

          <section className="space-y-4 text-gray-700">
            <h3 className="text-xl font-bold">5. Property Listings</h3>
            <p className="leading-snug">
              BTJ Non Brokerage does not warrant that property listings provided
              through the Services are accurate, complete, reliable, or
              up-to-date. We reserve the right to modify, update, or remove
              listings at any time without notice. Users are responsible for
              conducting their own due diligence and verifying the accuracy and
              suitability of any property listing before entering into any
              transaction.
            </p>
          </section>

          <section className="space-y-4 text-gray-700">
            <p className="leading-snug text-sm text-gray-500">
              <strong>Disclaimer:</strong> This template is provided for
              informational purposes only and does not constitute legal advice.
              You should consult with legal counsel to ensure that your privacy
              policy complies with all applicable laws and regulations specific
              to your business and location.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
};

export default TermsAndConditions;
