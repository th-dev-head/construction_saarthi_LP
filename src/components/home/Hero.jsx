import React from "react";
import Button from "../common/Button";
import heroBg from "../../assets/icon/Hero.svg";
import IndiaFlag from "../../assets/icon/flag.png";
import AvatarImg from "../../assets/icon/Avatar.png";
import { trackEvent } from "../../utils/pixel";

const Hero = ({ scrollToSection }) => {
  return (
    <section id="home" className="relative flex flex-col items-center justify-center py-20 px-4 md:p-[150px] xl:p-[200px] 2xl:p-[200px]">
      {/* BACKGROUND IMAGE WITH REQUESTED EFFECTS */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Construction Site Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* AVATAR IMAGE ON THE RIGHT */}
      <div className="absolute bottom-0 right-0 2xl:right-40 z-[20] hidden lg:block w-[250px] xl:w-[400px] 2xl:w-[416px] pointer-events-none">
        <img src={AvatarImg} alt="Construction Worker" className="w-full h-auto object-contain object-bottom" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-6 text-center text-white flex flex-col items-center">
        {/* Product Tag */}
        {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E9E2D8] mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-[#B02E0C]"></span>
          <span className="text-xs md:text-sm font-medium text-[#060C12]">Product by Techifyhouse</span>
        </div> */}

        {/* Heading */}
        <h1 className="text-xl md:text-[35px] xl:text-[62px] font-semibold mb-3 md:mb-6 tracking-[0.07em] leading-[1.2]">
          Manage Every Construction Site Smarter With AI
        </h1>

        {/* Sub-heading */}
        {/* <div className="flex items-center justify-center gap-2 mb-6">
           <span className="w-1.5 h-1.5 rounded-full bg-white flex-shrink-0"></span>
           <p className="text-sm md:text-lg lg:text-xl font-normal text-white">
             From One Powerful Dashboard
           </p>
        </div> */}

        {/* Description */}
        <p className="max-w-3xl mx-auto text-xs md:text-sm lg:text-lg opacity-90 mb-10 md:mb-12 font-light leading-relaxed">
          Plan projects, track materials, manage labor, control finances, and
          calculate costs – all in one simple, AI-powered construction
          management platform built for real site work.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 w-fit sm:w-auto mb-10 sm:mb-0">
          <a
            href="https://platform.constructionsaarthi.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
            onClick={() => trackEvent('InitiateCheckout')}
          >
            <Button
              variant="outline"
              className="w-full sm:w-[185px] text-white border-white/40 hover:bg-white hover:text-black px-8 py-3 md:py-4 rounded-full transition-all duration-300"
            >
              Login
            </Button>
          </a>
          <Button
            variant="primary"
            className="w-full sm:w-[185px] bg-[#D33D18] hover:bg-[#B02E0C] text-white border-none px-8 py-3 md:py-4 rounded-full transition-all duration-300 shadow-xl"
            onClick={(e) => scrollToSection(e, "waitlist")}
            icon={
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            }
          >
            Book Demo
          </Button>
        </div>
      </div>

      {/* STATS FLOATING CARD */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[94%] max-w-xl lg:max-w-2xl xl:max-w-[50%] z-20">
        <div className="bg-[#F9F4EE] rounded-[20px] p-7 border border-[#F4EEE6] overflow-hidden grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0">
          {/* Stat 1 */}
          <div className="text-center flex flex-col justify-center relative">
            <h3 className="text-xl md:text-[25px] font-semibold text-[#060C12] tracking-tight">90%</h3>
            <p className="text-[12px] lg:text-[16px] text-[#121510] font-medium opacity-80">
              Time Saved
            </p>
          </div>

          {/* Stat 2 */}
          <div className="text-center flex flex-col justify-center border-l border-[#E5DED5]">
            <h3 className="text-xl md:text-[25px] font-semibold text-[#060C12] tracking-tight">Zero</h3>
            <p className="text-[12px] lg:text-[16px] text-[#121510] font-medium opacity-80">
              Manual Errors
            </p>
          </div>

          {/* Stat 3 */}
          <div className="text-center flex flex-col justify-center md:border-l border-[#E5DED5]">
            <h3 className="text-xl md:text-[25px] font-semibold text-[#060C12] tracking-tight">AI-First</h3>
            <p className="text-[12px] lg:text-[16px] text-[#121510] font-medium opacity-80">
              Intelligence
            </p>
          </div>

          {/* Stat 4 */}
          <div className="text-center flex flex-col justify-center border-l border-[#E5DED5]">
            <h3 className="text-xl md:text-[25px] font-semibold text-[#060C12] tracking-tight">India</h3>
            <div className="flex items-center justify-center gap-2">
              <p className="text-[12px] lg:text-[16px] text-[#121510] font-medium opacity-80">
                Built For
              </p>
              <img src={IndiaFlag} alt="India" className="w-5 h-5 lg:w-7 lg:h-7 object-contain" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
