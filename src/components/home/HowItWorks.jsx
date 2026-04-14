import React, { useState } from "react";
import cpIcon from "../../assets/icon/Cp.svg";
import tdIcon from "../../assets/icon/Td.svg";
import mfIcon from "../../assets/icon/Mf.svg";
import msIcon from "../../assets/icon/Ms.svg";

import cpImg from "../../assets/icon/Create Your Project.png";
import tdImg from "../../assets/icon/Track Daily Progress.png";
import mfImg from "../../assets/icon/Manage Finance Effortlessly.png";
import msImg from "../../assets/icon/Manage Inventory.png";

const steps = [
  {
    id: 1,
    title: "Create Your Project",
    description: "Add project details, location, and team members in seconds.",
    icon: cpIcon,
    image: cpImg,
  },
  {
    id: 2,
    title: "Track Daily Progress",
    description: "Log site updates, materials used, and workforce activity in real time.",
    icon: tdIcon,
    image: tdImg,
  },
  {
    id: 3,
    title: "Manage Finances Effortlessly",
    description: "Record expenses, monitor budgets, and avoid cost overruns.",
    icon: mfIcon,
    image: mfImg,
  },
  {
    id: 4,
    title: "Manage Site Inventory",
    description: "Keep track of inventory, usage, and shortages to avoid delays.",
    icon: msIcon,
    image: msImg,
  },
];

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(steps[0]);

  return (
    <section id="how-it-works" className="py-20 px-4 lg:px-14 2xl:px-[260px] bg-[#FDFCFB]">
      <div className="max-w-full mx-auto">
        {/* Header Section */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 bg-[#E9E2D8] rounded-full text-xs 2xl:text-lg font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B02E0C]" />
            How It Works
          </div>
          <h2 className="font-semibold text-2xl 2xl:text-5xl md:text-3xl max-[360px]:text-lg">
            How <span className="text-[#B02E0C]">ConstructionSaarthi</span> Works
          </h2>
          <p className="text-sm 2xl:text-[16px] max-w-2xl 2xl:max-w-3xl mx-auto max-[360px]:text-xs">
            Get started in minutes and streamline your entire construction workflow.
          </p>
        </div>

        {/* Content Section */}
        <div className="flex flex-col lg:flex-row gap-15 items-center">
          {/* Left Side: Steps */}
          <div className="flex-1 w-full space-y-4">
            {steps.map((step) => (
              <div
                key={step.id}
                onClick={() => setActiveStep(step)}
                className={`p-4 xl:p-6 rounded-2xl cursor-pointer transition-all duration-300 border-2 ${activeStep.id === step.id
                    ? "bg-[#F8F8F8] border-[#CE29003D]/24 shadow-lg shadow-[#C9BBBB1A]"
                    : "bg-[#F8F8F8] border-[#F3F3F3] hover:bg-[#F5F5F3]"
                  }`}
              >
                <div className="flex-col items-start gap-4">
                  <div className={`rounded-xl transition-colors mb-2 xl:mb-4 ${activeStep.id === step.id ? "" : ""
                    }`}>
                    <img
                      src={step.icon}
                      alt={step.title}
                      className={`w-6 h-6 ${activeStep.id === step.id ? "" : ""}`}
                    />
                  </div>
                  <div className="">
                    <h3 className={`font-semibold text-lg 2xl:text-xl ${activeStep.id === step.id ? "text-black" : "text-[#2D2D2D]"
                      }`}>
                      {step.title}
                    </h3>
                    <p className="text-[#5F5F5F] text-sm 2xl:text-md leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side: Image/Mockup */}
          <div className="flex-1 w-full flex justify-center items-center">
            <div className="relative w-full max-w-full aspect-square flex items-center justify-center overflow-hidden">
              <img
                key={activeStep.id}
                src={activeStep.image}
                alt={activeStep.title}
                className="w-full max-w-full h-full object-contain animate-fade-in"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
