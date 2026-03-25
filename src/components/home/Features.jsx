import React from "react";
import siteImage from "../../assets/icon/Feature.png";
import calIcon from "../../assets/icon/C.svg";
import GenIcon from "../../assets/icon/G.svg";
import TracIcon from "../../assets/icon/T.svg";
import DasIcon from "../../assets/icon/D.svg";

const Features = () => {
  return (
    <section id="features" className="py-10 bg-white">
      <div className="max-w-full mx-auto space-y-10 py-10 px-4 lg:px-14 2xl:px-27 2xl:py-20">
        {/* Heading */}
        <div className="text-center space-y-2">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1 bg-[#E9E2D8] rounded-full text-xs 2xl:text-xl font-semibold max-[380px]:text-[9px] max-[380px]:px-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B02E0C]" />
            Shift from generic “AI” claims to real, site-level value.
          </div>

          {/* Heading */}
          <h2 className=" font-semibold text-2xl 2xl:text-6xl md:text-3xl max-[360px]:text-lg leading-snug">
            AI That Actually Works on{" "}
            <span className="text-[#C4431B]">Construction Sites</span>
          </h2>

          {/* Paragraph */}
          <p className=" text-sm 2xl:text-lg max-w-2xl 2xl:max-w-7xl mx-auto max-[360px]:text-xs leading-relaxed">
            Built with practical, next-gen AI to simplify planning, reduce
            errors, and improve decision-making across every stage of
            construction.
          </p>
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row items-center gap-10">
          {/* LEFT IMAGE */}
          <div className="relative flex-1 flex justify-center lg:justify-start">
            <img
              src={siteImage}
              alt="Site Workers"
              className="w-full max-w-full 2xl:max-w-full mx-auto object-contain"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="flex-1 space-y-5 w-full lg:pr-60">
            {/* ITEM 1 */}
            <div className="flex flex-col md:flex-row items-start gap-6 border-b border-[#E5DED5] pb-4">
              <div className="w-10 h-10 2xl:w-20 2xl:h-20 flex items-center justify-start shrink-0">
                <img src={calIcon} alt="Calculator" />
              </div>
              <div>
                <h3 className="text-base md:text-lg 2xl:text-3xl font-semibold mb-1">
                  AI Construction Calculator
                </h3>
                <p className="text-xs 2xl:text-lg leading-relaxed">
                  Get accurate material quantities, cost estimates, and
                  timelines instantly — reducing guesswork and costly
                  overruns before work even begins.
                </p>
              </div>
            </div>

            {/* ITEM 2 */}
            <div className="flex flex-col md:flex-row items-start gap-6 border-b border-[#E5DED5] pb-4">
              <div className="w-10 h-10 2xl:w-20 2xl:h-20 flex items-center justify-start shrink-0">
                <img src={GenIcon} alt="Document" />
              </div>
              <div>
                <h3 className="text-base md:text-lg 2xl:text-3xl font-semibold mb-1">
                  AI Document Generator
                </h3>
                <p className="text-xs 2xl:text-lg leading-relaxed">
                  Create professional quotations, contracts, BOQs, and site
                  reports in minutes — standardized, error-free, and ready
                  to share.
                </p>
              </div>
            </div>

            {/* ITEM 3 */}
            <div className="flex flex-col md:flex-row items-start gap-6 border-b border-[#E5DED5] pb-4">
              <div className="w-10 h-10 2xl:w-20 2xl:h-20 flex items-center justify-start shrink-0">
                <img src={TracIcon} alt="Tracking" />
              </div>
              <div>
                <h3 className="text-base md:text-lg 2xl:text-3xl font-semibold mb-1">
                  Labour & Finance Tracking
                </h3>
                <p className="text-xs 2xl:text-lg leading-relaxed">
                  Track attendance, wages, and daily expenses automatically
                  — giving you complete visibility into manpower and cash
                  flow.
                </p>
              </div>
            </div>

            {/* ITEM 4 */}
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="w-10 h-10 2xl:w-20 2xl:h-20 flex items-center justify-start shrink-0">
                <img src={DasIcon} alt="Dashboard" />
              </div>
              <div>
                <h3 className="text-base md:text-lg 2xl:text-3xl font-semibold mb-1">
                  AI Insights Dashboard
                </h3>
                <p className="text-xs 2xl:text-lg leading-relaxed">
                  Identify delays, control budgets, and make smarter
                  decisions with real-time insights based on your project
                  data.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
