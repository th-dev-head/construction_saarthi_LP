import React, { useState } from "react";
import faql from "../../assets/icon/Faqq.png";

const faqs = [
  {
    question: "What is Construction Saarthi?",
    answer:
      "Construction Saarthi is an AI-powered platform designed specifically for Indian contractors and builders to manage construction sites, track materials, labor, and finances all in one place.",
  },
  {
    question: "How does the AI Construction Calculator work?",
    answer:
      "Our calculator uses advanced algorithms and standard construction formulas to provide accurate material estimates, cost projections, and timelines based on your project inputs.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Yes, we prioritize data security. All your project details, financial records, and site data are encrypted and stored securely.",
  },
  {
    question: "Can I manage multiple sites?",
    answer:
      "Absolutely! Construction Saarthi is built to handle multiple projects simultaneously, giving you a birds-eye view of all your construction sites from a single dashboard.",
  },
  {
    question: "How can I get started with Construction Saarthi?",
    answer:
      "Getting started is simple! You can sign up directly on our platform using the 'Register' button at the top of the page. Our team will guide you through the platform and help you get started.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className=" px-4 lg:px-14 2xl:px-[260px] pt-10 2xl:pt-20 overflow-hidden">
      <div className="max-w-full mx-auto space-y-8">
        <div className="text-start mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1 bg-[#E9E2D8] rounded-full text-xs 2xl:text-lg font-medium max-[380px]:text-[9px] max-[380px]:px-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B02E0C]" />
            FAQs
          </div>
          <h2 className="font-semibold text-2xl 2xl:text-5xl md:text-3xl max-[360px]:text-lg leading-snug">
            Need Help? Check Our{" "}
            <span className="text-[#C4431B]">Questions</span>
          </h2>
          {/* Paragraph */}
          <p className=" text-sm 2xl:text-[16px] max-[360px]:text-xs ">
            Find quick answers to the most commonly asked questions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 items-center gap-10 lg:gap-10">
          <div className="flex justify-start lg:justify-end items-center lg:col-span-2">
            <img
              src={faql}
              alt="FAQ Illustration"
              className="w-full max-w-full md:max-w-full 2xl:max-w-full rounded-2xl object-contain"
            />
          </div>
          <div className="space-y-4 w-full lg:col-span-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === index ? "bg-[#F8F8F8]" : "bg-[#F8F8F8]"
                  }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className={`w-full flex items-center justify-between p-5 text-left transition-colors cursor-pointer ${openIndex === index ? "bg-[#F8F8F8]" : "bg-[#F8F8F8]"
                    }`}
                >
                  <span className="text-base md:text-sm 2xl:text-[16px] font-semibold text-[#2D2D2D]">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-6 h-6 text-[#C4431B] transform transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""
                      }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out ${openIndex === index
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                    }`}
                >
                  <div
                    className={`p-5 text-sm md:text-base 2xl:text-[14px] text-[#5F5F5F] border-t border-[#E5DED5] ${openIndex === index ? "bg-[#F8F8F8]" : "bg-[#F8F8F8]"
                      }`}
                  >
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default FAQ;
