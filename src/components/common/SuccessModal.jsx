import React, { useEffect } from "react";
import logo from "../../assets/icon/Csmodel.png";

const SuccessModal = ({ isOpen, onClose, email, phone }) => {

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // ❌ scroll bandh
    } else {
      document.body.style.overflow = "auto"; // ✅ scroll normal
    }

    return () => {
      document.body.style.overflow = "auto"; // cleanup
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-2xl md:max-w-xl 2xl:max-w-5xl bg-white rounded-[32px] overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-300 h-auto max-h-[90vh] sm:max-h-[85vh] md:max-h-[75vh] flex flex-col justify-center">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-[#EFE9E7] hover:bg-[#ede0db] transition-colors cursor-pointer"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <div className="px-8 pt-12 pb-10 2xl:pt-20 2xl:pb-20 flex flex-col items-center text-center">
          {/* Illustration */}
          <div className="mb-8 2xl:mb-15">
            <img
              src={logo}
              alt="Success Illustration"
              className="w-32 sm:w-48 md:w-48 2xl:w-100 h-auto"
            />
          </div>

          {/* Text Content */}
          <h2 className="text-xl md:text-2xl 2xl:text-5xl font-bold text-[#2D2D2D] mb-2">
            Your request is successfully send
          </h2>
          <p className="text-[#525465] text-xs md:text-sm 2xl:text-2xl leading-relaxed max-w-xl 2xl:max-w-4xl">
            You will receive an email regarding your ConstructionSaarthi
            registration at your registered email address:{" "}
            <span className="font-semibold text-black">{email}</span> or Phone
            Number: <span className="font-semibold text-black">{phone}</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
