import React from "react";
import calcIcon from "../../assets/icon/Calculation.png";
import inventoryIcon from "../../assets/icon/Inventoryy.svg";
import recedencyImage from "../../assets/icon/Smartt.png";

const Impact = () => {
  return (
    <section id="impact" className="px-0">
      <div className="max-w-full mx-auto space-y-10 py-10 px-4 lg:px-14 2xl:px-[260px] 2xl:py-20 bg-[#F3F3F3] border-2 border-[#E9E2D84D]">
        {/* Heading */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 px-4 py-1 bg-[#E9E2D8] rounded-full text-xs 2xl:text-lg font-medium max-[380px]:text-[9px] max-[380px]:px-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B02E0C]" />
            Clear positioning + local relevance + authority
          </div>

          <h2 className="font-semibold text-2xl 2xl:text-5xl md:text-3xl max-[360px]:text-lg leading-snug">
            Why{" "}
            <span className="text-[#B02E0C]">Construction Saarthi?</span>
          </h2>

          <p className="text-sm 2xl:text-[16px] max-w-2xl 2xl:max-w-3xl mx-auto max-[360px]:text-xs leading-relaxed">
            India's first AI-powered assistant designed specifically for
            contractors & builders.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 2xl:gap-10">
          {/* Card 1 */}
          <div className="bg-[#EBEAE8] p-6 rounded-2xl flex flex-col h-full overflow-hidden">
            <div className="w-full h-[220px] 2xl:h-[320px] flex items-center justify-center -mt-3 -mb-5">
              <img
                src={recedencyImage}
                alt="Dashboard Preview"
                className="max-h-full w-full object-contain "
              />
            </div>

            <h3 className="text-lg 2xl:text-[22px] font-semibold">
              Smart Dashboard
            </h3>

            <p className="text-[14px] text-[#5F5F5F] leading-relaxed">
              Track projects, expenses, materials, and progress in real time
              - without calling the site supervisor or opening spreadsheets.
            </p>


          </div>

          {/* Card 2 */}
          <div className="bg-[#EBEAE8] p-6 rounded-2xl flex flex-col h-full overflow-hidden">
            <div className="w-full h-[220px] 2xl:h-[320px] flex items-center justify-center -mt-1 -mb-6">
              <img
                src={calcIcon}
                alt="Calculator Preview"
                className="max-h-full w-full object-contain "
              />
            </div>

            <h3 className="text-lg 2xl:text-[22px] font-semibold">
              AI Powered Calculator
            </h3>

            <p className="text-[14px] text-[#5F5F5F] leading-relaxed">
              Calculate material quantities, costs, and timelines instantly
              using AI-powered construction formulas - reducing errors
              before work begins.
            </p>

          </div>

          {/* Card 3 */}
          <div className="bg-[#EBEAE8] p-6 rounded-2xl flex flex-col h-full overflow-hidden">
            <div className="w-full h-[220px] 2xl:h-[320px] flex items-center justify-center mt-8 -mb-15">
              <img
                src={inventoryIcon}
                alt="Inventory Preview"
                className="max-h-full w-full object-contain"
              />
            </div>

            <h3 className="text-lg 2xl:text-[22px] font-semibold ">
              Inventory Management
            </h3>

            <p className="text-[14px] text-[#5F5F5F] leading-relaxed">
              Monitor material usage, stock levels, and site inventory in
              real time - preventing shortages, wastage, and theft.
            </p>


          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
