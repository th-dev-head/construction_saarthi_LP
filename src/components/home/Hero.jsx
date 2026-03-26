import React from "react";
import Button from "../common/Button";
import handImage from "../../assets/icon/Heroo.png";
import handdImage from "../../assets/icon/Vector.png";
import IndiaFlag from "../../assets/icon/flag.png";

const Hero = ({ scrollToSection }) => {
  return (
    <section id="home" className="relative px-4">
      <div className=" max-w-full mx-auto grid grid-cols-1 lg:grid-cols-2 bg-[#FBF7F2] rounded-2xl border border-[#E9E2D84D] overflow-hidden">
        {/* LEFT CONTENT */}
        <div className=" px-6 md:px-10 2xl:px-25 pt-8 md:pt-11 pb-8 md:pb-12 flex flex-col justify-center">
          {/* Heading */}
          <h1 className="mt-6 2xl:mt-10 text-4xl md:text-4xl lg:text-4xl 2xl:text-6xl font-semibold leading-tight">
            Manage Every <br />
            Construction Site Smarter
            <span className="block text-[#B02E0C] text-base md:text-lg 2xl:text-3xl mt-3">
              - From One Powerful Dashboard
            </span>
          </h1>

          {/* Description */}
          <p className="mt-4 2xl:mt-10 text-xs max-w-2xl 2xl:max-w-6xl 2xl:text-lg leading-relaxed text-[#4A4A4A]">
            Plan projects, track materials, manage labor, control finances, and
            calculate costs , all in one simple, AI-powered construction
            management platform built for real site work.
          </p>

          {/* CTA */}
          <div className="mt-6">
            <Button
              variant="primary"
              className="text-base font-medium"
              onClick={(e) => scrollToSection(e, "waitlist")}
              icon={
                <svg
                  width="16"
                  height="16"
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

          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 gap-y-6 gap-x-8 md:grid-cols-4">
            {/* 1 */}
            <div>
              <h3 className="text-xl 2xl:text-3xl font-bold">90%</h3>
              <p className="text-xs 2xl:text-xl tracking-wider mt-1">
                Time Saved
              </p>
            </div>

            {/* 2 → MOBILE + DESKTOP BORDER */}
            <div className="border-l-2 pl-4 md:border-l-2 border-[#E5DED5]">
              <h3 className="text-xl 2xl:text-3xl font-bold">Zero</h3>
              <p className="text-xs 2xl:text-xl tracking-wider mt-1">
                Manual Errors
              </p>
            </div>

            {/* 3 */}
            <div className="md:border-l-2 md:pl-4 border-[#E5DED5]">
              <h3 className="text-xl 2xl:text-3xl font-bold">AI-First</h3>
              <p className="text-xs 2xl:text-xl tracking-wider mt-1">
                Intelligence
              </p>
            </div>

            {/* 4 → MOBILE + DESKTOP BORDER */}
            <div className="border-l-2 pl-4 md:border-l-2 border-[#E5DED5]">
              <h3 className="text-xl 2xl:text-3xl font-bold">India</h3>

              <p className="text-xs 2xl:text-xl tracking-wider mt-1 flex items-center gap-1">
                Built For
                  <img
                    src={IndiaFlag}
                    alt="India Flag"
                    className="w-4 h-4 object-contain"
                  />
                <span>🇮🇳</span>
              </p>
            </div>
          </div>
        </div>

        {/* DESKTOP IMAGE ONLY */}
        <div className="hidden lg:flex justify-end items-end pt-20">
          <img
            src={handdImage}
            alt="Construction App Interface"
            className="object-contain"
          />
        </div>
      </div>

      {/* MOBILE + TABLET IMAGE (SEPARATE, BELOW CONTAINER) */}
      <div className="lg:hidden mt-6 flex justify-center">
        <img
          src={handImage}
          alt="Construction App Interface"
          className="w-full max-w-full mx-auto object-contain"
        />
      </div>
    </section>
  );
};

export default Hero;
