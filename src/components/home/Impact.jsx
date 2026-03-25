import React from "react";
import calcIcon from "../../assets/icon/Calculation.svg";
import inventoryIcon from "../../assets/icon/Inventory.svg";
import recedencyImage from "../../assets/icon/Recedency.svg";

const Impact = () => {
  return (
    <section id="impact" className="px-0">
      <div className="max-w-full mx-auto space-y-10 py-10 px-4 lg:px-14 2xl:px-27 2xl:py-20 bg-[#F3F3F3] border-2 border-[#E9E2D84D]">
        {/* Heading */}
        <div className="text-center space-y-2">
          <div className=" inline-flex items-center gap-2 px-4 py-1 bg-[#E9E2D8] rounded-full text-xs 2xl:text-xl font-semibold whitespace-nowrap max-[360px]:text-[10px] max-[360px]:px-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B02E0C]" />
            Clear positioning + local relevance + authority
          </div>

          <h2 className=" font-semibold pt-4 2xl:pt-6 text-xl 2xl:text-7xl sm:text-2xl md:text-5xl whitespace-nowrap">
            Why{" "}
            <span className="text-[#C4431B]">Construction Saarthi?</span>
          </h2>

          <p className="text-sm 2xl:text-lg 2xl:max-w-3xl max-w-2xl mx-auto">
            India's first AI-powered assistant designed specifically for
            contractors & builders.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 2xl:gap-10">
          {/* Card 1 */}
          <div className="bg-[#EBEAE8] p-6 rounded-2xl flex flex-col">
            <span className="inline-block w-fit px-3 py-1 mb-2 text-[10px] 2xl:text-[14px] font-normal rounded-full bg-[#B02E0C] text-white">
              Real-time project status
            </span>

            <h3 className="text-2xl 2xl:text-3xl font-medium mb-4">
              Smart Dashboard
            </h3>

            <p className="text-sm 2xl:text-xl text-[#5F5F5F] leading-relaxed mb-6">
              Track projects, expenses, materials, and progress in real time
              - without calling the site supervisor or opening spreadsheets.
            </p>

            <div className="mt-auto">
              <img
                src={recedencyImage}
                alt="Dashboard Preview"
                className="w-full object-contain"
              />
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#EBEAE8] p-6 rounded-2xl flex flex-col">
            <span className="inline-block w-fit px-3 py-1 mb-2 text-[10px] 2xl:text-[14px] font-normal rounded-full bg-[#B02E0C] text-white">
              Material & cost estimation
            </span>

            <h3 className="text-2xl 2xl:text-3xl font-medium text-[#2D2D2D] mb-4">
              AI Powered Calculator
            </h3>

            <p className="text-sm 2xl:text-xl text-[#5F5F5F] leading-relaxed mb-6">
              Calculate material quantities, costs, and timelines instantly
              using AI-powered construction formulas - reducing errors
              before work begins.
            </p>

            <div className="mt-auto flex justify-center">
              <img
                src={calcIcon}
                alt="Calculator Preview"
                className="w-full object-contain"
              />
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-[#EBEAE8] p-6 rounded-2xl flex flex-col">
            <span className="inline-block w-fit px-3 py-1 mb-2 text-[10px] 2xl:text-[14px] font-normal rounded-full bg-[#B02E0C] text-white">
              Live material tracking
            </span>

            <h3 className="text-2xl 2xl:text-3xl font-medium text-[#2D2D2D] mb-4">
              Inventory Management
            </h3>

            <p className="text-sm 2xl:text-xl text-[#5F5F5F] leading-relaxed mb-6">
              Monitor material usage, stock levels, and site inventory in
              real time - preventing shortages, wastage, and theft.
            </p>

            <div className="mt-auto">
              <img
                src={inventoryIcon}
                alt="Inventory Preview"
                className="w-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
