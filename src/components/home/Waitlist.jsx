import React from "react";
import Button from "../common/Button";
import launchingImage from "../../assets/icon/Launching.svg";
import AeroIcon from "../../assets/icon/Aero.svg";

const Waitlist = ({ formData, setFormData, handleFormSubmit }) => {
  return (
    <section id="waitlist" className="py-20 px-4 lg:px-14 2xl:px-27 2xl:py-20 overflow-hidden">
      <div className="max-w-full mx-auto space-y-8">
        {/* Heading */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 px-4 py-1 bg-[#E9E2D8] rounded-full text-xs 2xl:text-xl font-medium whitespace-nowrap max-[360px]:text-[10px] max-[360px]:px-3 ">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B02E0C]" />
            Limited Early Access • Rolling Out Gradually
          </div>

          <h2 className=" font-semibold pt-4 text-3xl md:text-4xl max-[375px]:text-xl max-[320px]:text-lg 2xl:text-6xl leading-snug">
            <span className="text-[#B02E0C]">Available</span> for Indian
            Contractors
          </h2>

          <p className=" max-w-2xl mx-auto 2xl:max-w-4xl text-base 2xl:text-xl  max-[375px]:text-xs max-[320px]:text-[10px] leading-relaxed">
            Be among the first to manage construction sites with AI —
            faster, smarter, and simpler.
          </p>
        </div>

        {/* Main Card */}
        <div className="relative flex flex-col lg:flex-row items-stretch">
          {/* LEFT : IMAGE CARD */}
          <div className="relative flex-1 min-h-[420px] 2xl:min-h-[650px] rounded-[28px] overflow-hidden hidden lg:block">
            <img
              src={launchingImage}
              alt=""
              className="absolute inset-0 w-full h-full  object-cover"
            />

            {/* Text */}
            <div className="relative z-10 h-full px-8 2xl:px-20 md:px-14 flex flex-col justify-center">
              <h2 className="text-white text-2xl md:text-3xl 2xl:text-5xl font-medium mb-4 2xl:mb-8 leading-relaxed">
                Book Demo For Early Access
              </h2>
              <p className="text-gray-200 max-w-sm 2xl:max-w-xl text-sm md:text-base 2xl:text-2xl">
                Schedule your demo today, and we’ll get in touch with you as soon as possible.
              </p>
            </div>
          </div>

          {/* RIGHT : FLOATING FORM (OUTSIDE IMAGE) */}
          <div className="relative lg:-ml-50 flex items-center z-20">
            <div className=" relative w-full max-w-full sm:max-w-full md:max-w-full lg:max-w-md bg-[#EBEAE8] rounded-2xl shadow-sm border border-[#EBEAE8] px-6 py-8 md:px-8 md:py-6 2xl:py-20 mx-auto">
              <form className="2xl:space-y-6" onSubmit={handleFormSubmit}>
                {/* Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-black font-medium">
                      First Name
                    </label>
                    <input
                      required
                      name="firstName"
                      value={formData.firstName}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          firstName: e.target.value,
                        })
                      }
                      className="w-full border-b border-[#817794] 2xl:mt-4 mb-4 focus:border-[#C4431B] outline-none text-sm bg-transparent"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-black font-medium">
                      Last Name
                    </label>
                    <input
                      required
                      name="lastName"
                      value={formData.lastName}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          lastName: e.target.value,
                        })
                      }
                      className="w-full border-b border-[#817794] 2xl:mt-4 mb-4 focus:border-[#C4431B] outline-none text-sm bg-transparent"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="text-sm text-black font-medium">
                    Email address
                  </label>
                  <input
                    required
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full border-b border-[#817794] 2xl:mt-4 mb-4 focus:border-[#C4431B] outline-none text-sm bg-transparent"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="text-sm text-black font-medium">
                    Message
                  </label>
                  <textarea
                    rows="1"
                    name="message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Write your message..."
                    className="w-full border-b border-[#817794] 2xl:mt-4 mt-1 focus:border-[#C4431B] outline-none text-sm resize-none bg-transparent placeholder:text-gray-400"
                  />
                </div>

                {/* Button */}
                <div className="relative mt-6 lg:mt-14 2xl:mt-25 flex justify-center md:justify-end">
                  <img
                    src={AeroIcon}
                    alt="Arrow"
                    className="hidden lg:block absolute right-40"
                  />

                  <Button
                    variant="primary"
                    type="submit"
                    className="px-6 relative z-10 w-full md:w-auto"
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
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Waitlist;
