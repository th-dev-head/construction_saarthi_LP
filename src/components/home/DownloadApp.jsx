import React from "react";
import downloadImg from "../../assets/icon/Download.png";
import appleLogo from "../../assets/icon/Apple.png";
import playStoreLogo from "../../assets/icon/Playstore.png";

const DownloadApp = () => {
  return (
    <section id="download" className="pt-10 px-4 lg:px-14 2xl:px-[260px] 2xl:pt-20 bg-[#F3F3F3] border border-[#E9E2D84D]">
      <div className="max-w-7xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1 bg-[#E9E2D8] rounded-full text-xs 2xl:text-lg font-medium mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-[#B02E0C]"></span>
          Get App Now
        </div>
        
        {/* Content */}
        <h2 className="font-semibold text-2xl 2xl:text-5xl md:text-3xl max-[360px]:text-lg mb-4 text-[#B02E0C]">
          Your Construction Site, <span className="block md:inline text-[#121212]">Now in Your Pocket</span>
        </h2>
        
        <p className="text-sm 2xl:text-[16px] max-w-2xl 2xl:max-w-3xl mx-auto max-[360px]:text-xs mb-4">
          Access ConstructionSaarthi on your mobile and stay in control of your projects on the go.
        </p>
        
        {/* Store Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-5 mb-15">
          <a
            href="https://apps.apple.com/app/construction-saarthi/id6760541467"
            className="flex items-center gap-4 bg-black text-white px-5 py-3 rounded-full transition-all hover:scale-[1.03] active:scale-[0.98] w-fit"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={appleLogo} alt="Apple" className="w-8 h-8 object-contain" />
            <div className="flex flex-col items-start leading-[1.0]">
              <span className="text-[12px] font-normal opacity-60">Download on the</span>
              <span className="text-[20px] font-semibold ">App Store</span>
            </div>
          </a>

          <a
            href="https://play.google.com/store/apps/details?id=com.constructionsaarthi.com&hl=en_IN"
            className="flex items-center gap-4 bg-black text-white px-5 py-3 rounded-full transition-all hover:scale-[1.03] active:scale-[0.98] w-fit"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={playStoreLogo} alt="Play Store" className="w-8 h-8 object-contain" />
            <div className="flex flex-col items-start leading-[1.0]">
              <span className="text-[12px] font-normal opacity-60 ">Download on the</span>
              <span className="text-[20px] font-semibold ">Play Store</span>
            </div>
          </a>
        </div>
        
        {/* Mockups */}
        <div className="relative max-w-5xl mx-auto">
          <img 
            src={downloadImg} 
            alt="ConstructionSaarthi Mobile App Interface" 
            className="w-full h-auto drop-shadow-[0_32px_64px_rgba(0,0,0,0.1)]"
          />
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;
