import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/icon/Cslogo.svg";
import CallIcon from "../../assets/icon/Call.svg";
import EmailIcon from "../../assets/icon/Email.svg";

const Footer = () => {
  return (
    <footer className="w-full bg-[#E9E2D8] px-4 lg:px-14 2xl:px-[260px] pt-6 md:pt-10 2xl:pt-15 md:pb-10 2xl:pb-15">
      <div className="max-w-full mx-auto">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between gap-10 border-b border-[#D8D0C5] pb-4 2xl:pb-8">
          {/* Logo & Text */}
          <div className="space-y-3 max-w-sm">
            <div className="flex items-center gap-2">
              <img src={logo} alt="Construction Saarthi" className="h-7" />
              <span className="font-bold text-lg 2xl:text-2xl text-[#2D2D2D]">
                ConstructionSaarthi
              </span>
            </div>

            <p className="text-sm 2xl:text-xl text-[#5F5F5F]">
              Manage Every Construction Site Smarter
            </p>

            <p className="text-sm font-medium">
              Product By{" "}
              <a 
                href="http://www.techifyhouse.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#B02E0C] font-bold hover:underline"
              >
                TechifyHouse
              </a>
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={CallIcon} alt="Call" className="w-4 h-4" />
              <span className="text-sm 2xl:text-lg font-medium text-[#2D2D2D]">
                +91 9737321120
              </span>
            </div>

            <div className="flex items-center gap-3">
              <img src={EmailIcon} alt="Email" className="w-4 h-4" />
              <span className="text-sm 2xl:text-lg font-medium text-[#2D2D2D]">
                contact@constructionsaarthi.com
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="bg-white md:bg-transparent -mx-4 lg:mx-0 px-4 lg:px-0 pb-4 md:pb-0">
          <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-4 pt-4 2xl:pt-6 text-center md:text-left">
            <p className="text-[10px] md:text-xs 2xl:text-lg font-medium text-[#2D2D2D] border-t border-[#E5E5E5] md:border-t-0 pt-4">
              © {new Date().getFullYear()} ConstructionSaarthi. All rights reserved by{" "}
              <a 
              href="http://www.techifyhouse.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#B02E0C] font-medium hover:underline"
            >
              Techifyhouse.
            </a>
            </p>

            <div className="flex gap-6 ">
              <Link
                to="/privacy-policy"
                className="text-[10px] md:text-xs 2xl:text-lg hover:text-[#B02E0C] transition"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms-and-conditions"
                className="text-[10px] md:text-xs 2xl:text-lg hover:text-[#B02E0C] transition"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
