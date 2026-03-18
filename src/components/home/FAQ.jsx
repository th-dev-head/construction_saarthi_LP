import React, { useState } from "react";
import faql from "../../assets/icon/faql.png";

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
      "Getting started is simple! You can book a demo by filling out the form provided just below the FAQ section on this page. Our team will get in touch with you shortly to guide you through the platform and help you get started.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="pt-20 px-4 lg:px-14 2xl:px-27 overflow-hidden">
      <div className="max-w-full mx-auto space-y-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1 bg-[#E9E2D8] rounded-full text-xs 2xl:text-xl font-semibold mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B02E0C]" />
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl md:text-4xl 2xl:text-6xl font-semibold">
            Need Help? Check Our{" "}
            <span className="text-[#C4431B]">Questions</span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="flex-1 space-y-4 w-full">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`rounded-2xl overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "bg-[#EBEAE8]" : "bg-[#F5F4F2]"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className={`w-full flex items-center justify-between p-5 text-left transition-colors cursor-pointer ${
                    openIndex === index ? "bg-[#EBEAE8]" : "bg-[#F5F4F2]"
                  }`}
                >
                  <span className="text-base md:text-lg 2xl:text-2xl font-medium text-[#2D2D2D]">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-6 h-6 text-[#C4431B] transform transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
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
                  className={`transition-all duration-300 ease-in-out ${
                    openIndex === index
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div
                    className={`p-5 text-sm md:text-base 2xl:text-xl text-[#5F5F5F] border-t border-[#E5DED5] ${
                      openIndex === index ? "bg-[#EBEAE8]" : "bg-[#EBEAE8]"
                    }`}
                  >
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex-1 md:flex justify-end items-center">
            <img
              src={faql}
              alt="FAQ Illustration"
              className="w-full max-w-lg md:max-w-full 2xl:max-w-xl rounded-2xl object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
