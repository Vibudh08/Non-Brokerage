import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const RefundPolicy = () => {
     useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
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
            Refund Policy
          </h2>
          <div className="flex items-center text-[#06062b] font-medium">
            <span className="cursor-pointer" onClick={() => navigate("/")}>
              Home
            </span>
            <span className="mx-2">&#x3e;</span>
            <span
              className="cursor-pointer"
              onClick={() => navigate("/refund-policy")}
            >
              Refund Policy
            </span>
          </div>
        </div>
      </div>
      <div className="bg-white pb-12">
        <div className="w-[85%] max-md:w-[100%] bg-[#fcfcfc] mx-auto my-auto h-[90%] pt-10 pb-12 px-8 max-md:px-5 max-md:pt-6 text-gray-800 space-y-10">
          <section className="space-y-4 text-gray-700">
            <h3 className="text-xl font-bold">1. Introduction</h3>
            <p className="leading-snug">
              At <strong className="text-gray-600">BTJ NON BROKERAGE</strong>,
              we strive to provide a secure and transparent platform for
              property listings, rent payments, and education fee transactions.
              However, to ensure the safety and integrity of all transactions,
              we have established the following refund policy:
            </p>
            <p className="leading-snug">
              By accessing or using our Services, you acknowledge that you have
              read, understood, and agree to be bound by this Refund Policy. If
              you do not agree with the terms of this Refund Policy, please do
              not access the Services.
            </p>
          </section>

          <section className="space-y-4 text-gray-700">
            <h3 className="text-xl font-bold">2. Refund Eligibility</h3>
            <p>We may provide refunds under specific circumstances:</p>

            <h4 className="font-bold">2.1 Eligible Refunds</h4>
            <p className="leading-snug">
              Refunds may be granted in the following cases:
            </p>
            <ul className="list-disc list-outside pl-6 space-y-2">
              <li className="leading-snug">
                Payments flagged as fraudulent or unauthorized will be reviewed
                for potential refunds.
              </li>
              <li className="leading-snug">
                Users who accidentally make duplicate payments due to technical
                issues may request a refund.
              </li>
              <li className="leading-snug">
                Transactions made with incorrect details may be considered for
                refunds upon verification.
              </li>
            </ul>

            <h4 className="font-bold">2.2 Non-Refundable Transactions</h4>
            <p className="leading-snug">
              Some transactions are not eligible for refunds, including:
            </p>
            <ul className="list-disc list-outside pl-6 space-y-2">
              <li className="leading-snug">
                Successfully processed property listings and rent or fee
                payments generally cannot be refunded unless flagged as
                fraudulent.
              </li>
              <li className="leading-snug">
                Refund requests made after 7 days from the transaction date may
                not be considered.
              </li>
            </ul>
          </section>

          <section className="space-y-4 text-gray-700">
            <h3 className="text-xl font-bold">3. Refund Process</h3>
            <ul className="list-disc list-outside pl-6 space-y-2">
              <li className="leading-snug">
                <strong>Review:</strong> Our compliance team will review
                suspicious payments.
              </li>
              <li className="leading-snug">
                <strong>Approval:</strong> If a refund is approved, the amount
                will be credited back to the original payment method within 5–7
                business days.
              </li>
              <li className="leading-snug">
                <strong>Verification:</strong> Additional documentation may be
                required to process the refund.
              </li>
            </ul>
          </section>

          <section className="space-y-4 text-gray-700">
            <h3 className="text-xl font-bold">
              4. Reporting a Suspicious Transaction
            </h3>
            <p className="leading-snug">
              If you believe a payment was made fraudulently or in error, please
              contact our support team immediately at{" "}
              <a
                href="mailto:support@btjnonbrokerage.com"
                className="text-gray-600 font-semibold hover:underline"
              >
                support@btjnonbrokerage.com
              </a>{" "}
              with transaction details for prompt assistance.
            </p>
            <p className="leading-snug">
              We are committed to ensuring a secure and hassle-free experience
              for all our users. For any further queries regarding our refund
              policy, feel free to reach out to our customer support team.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
};

export default RefundPolicy;
