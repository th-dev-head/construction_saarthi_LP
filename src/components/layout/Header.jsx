import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Button from "../common/Button";
import logo from "../../assets/icon/Cslogo.svg";

const Header = () => {
  const [activeItem, setActiveItem] = useState("Home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const handleNavigation = (e, id) => {
    e.preventDefault();
    
    if (isHomePage) {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
      // Map id to label roughly or just keep current active logic
      const item = navItems.find(i => i.id === id);
      if(item) setActiveItem(item.label);
    } else {
      navigate("/", { state: { scrollTo: id } });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { label: "Home", id: "home" },
    { label: "Features", id: "features" },
    { label: "Impact", id: "impact" },
    { label: "Preview", id: "preview" },
    { label: "Waitlist", id: "waitlist" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md">
      <div className="max-w-6xl 2xl:max-w-7xl mx-auto px-4 py-3 lg:px-6 lg:py-4">
        <div className="relative flex items-center justify-between bg-[#F3EFEC] rounded-full px-4 py-2 lg:bg-transparent lg:rounded-none lg:p-0">
          {/* Mobile/Tablet Menu Toggle (Left) */}
          <button
            className="lg:hidden p-1 text-[#2D2D2D] order-first"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <svg
                width="24"
                height="24"
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
            ) : (
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
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>

          {/* Logo & Brand */}
          <div 
            className="flex items-center gap-2 cursor-pointer lg:order-none"
            onClick={(e) => handleNavigation(e, "home")}
          >
            <img
              src={logo}
              alt="Construction Saarthi Logo"
              className="h-6 w-auto lg:h-8"
            />
            <span className="hidden min-[425px]:inline-block font-bold text-sm lg:text-md whitespace-nowrap">
              Construction Saarthi
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-2">
            {navItems.map((item) => {
              const isActive = isHomePage && activeItem === item.label;

              return (
                <a
                  key={item.label}
                  href={`#${item.id}`}
                  onClick={(e) => handleNavigation(e, item.id)}
                  className={`
                    flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium
                    transition-all duration-200
                    ${
                      isActive
                        ? "bg-[#F9F6F3] text-black"
                        : "text-[#5F5F5F]"
                    }
                  `}
                >
                  <span
                    className={`
                      w-1.5 h-1.5 rounded-full bg-[#C4431B]
                      transition-opacity duration-200
                      ${
                        isActive
                          ? "opacity-100"
                          : "opacity-0"
                      }
                    `}
                  />
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* CTA Button */}
          <div className="flex items-center">
            <Button
              variant="primary"
              className="px-4 py-1.5 text-xs lg:text-sm lg:px-6 lg:py-2"
              onClick={(e) => handleNavigation(e, "waitlist")}
              icon={
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lg:w-4 lg:h-4"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              }
            >
              Join Waitlist
            </Button>
          </div>

          {/* Mobile/Tablet Dropdown Menu */}
          {isMenuOpen && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden lg:hidden z-50">
              <div className="flex flex-col p-2">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={`#${item.id}`}
                    onClick={(e) => handleNavigation(e, item.id)}
                    className={`
                      px-4 py-3 rounded-xl text-sm font-medium transition-colors
                      ${
                        isHomePage && activeItem === item.label
                          ? "bg-[#F9F6F3] text-black"
                          : "text-[#5F5F5F] hover:bg-gray-50"
                      }
                    `}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
