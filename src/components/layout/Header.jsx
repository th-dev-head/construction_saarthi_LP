import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Button from "../common/Button";
import logo from "../../assets/icon/Cslogo.svg";
import { trackEvent } from "../../utils/pixel";

const Header = () => {
  const [activeItem, setActiveItem] = useState("Home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const navItems = [
    { label: "Home", id: "home" },
    { label: "Features", id: "features" },
    { label: "Impact", id: "impact" },
  ];

  // Sync active item with location state (for cross-page navigation)
  React.useEffect(() => {
    if (isHomePage) {
      if (location.state?.scrollTo) {
        const item = navItems.find((i) => i.id === location.state.scrollTo);
        if (item) setActiveItem(item.label);
      } else if (window.scrollY < 100) {
        setActiveItem("Home");
      }
    } else {
      setActiveItem("");
    }
  }, [location, isHomePage]);

  const handleNavigation = (e, id) => {
    e.preventDefault();

    const item = navItems.find((i) => i.id === id);
    if (item) setActiveItem(item.label);

    if (isHomePage) {
      if (id === "home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    } else {
      navigate("/", { state: { scrollTo: id } });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md">
      <div className="max-w-full mx-auto px-4 lg:px-14 2xl:px-[260px] py-3 lg:py-4">
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
            <span className="hidden min-[330px]:inline-block font-bold text-[#060C12] text-sm lg:text-md whitespace-nowrap">
              ConstructionSaarthi
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
                    ${isActive ? "bg-[#F9F6F3] text-black" : "text-[#5F5F5F]"}
                  `}
                >
                  <span
                    className={`
                      w-1.5 h-1.5 rounded-full bg-[#C4431B]
                      transition-opacity duration-200
                      ${isActive ? "opacity-100" : "opacity-0"}
                    `}
                  />
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* CTA Button */}
          <div className="flex items-center gap-2">
            {/* Login Button */}
            {/* <a
              href="https://platform.constructionsaarthi.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                className="text-xs lg:text-sm lg:px-6 lg:py-2"
              >
                Login
              </Button>
            </a> */}

            {/* Register Button */}
            <a
              href="https://platform.constructionsaarthi.com/register"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent('Lead')}
            >
              <Button
                variant="primary"
                className="text-xs lg:text-sm lg:px-6 lg:py-2"
              >
                Register
              </Button>
            </a>
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
