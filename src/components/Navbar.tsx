import React, { useState, useEffect } from "react";
import Logo from "../icons/VizcomLogo.png";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div
      className={`flex h-[80px] justify-between items-center px-4 sm:px-6 md:px-1 w-full bg-white transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } fixed top-0 left-0 z-50`}
    >
      {/* LOGO */}
      <a href="/" title="Back to home">
        <img className="h-[50px] md:h-[70px]" src={Logo} alt="Logo" />
      </a>

      {/* NAVIGATION MENU FOR DESKTOP */}
      <div className="hidden lg:flex space-x-4 items-center">
        <ul className="flex space-x-4">
          <li>
            <a
              href="/"
              className="text-black hover:text-blue-800 duration-300 text-[16px]"
            >
              HOME
            </a>
          </li>
          <li>
            <a
              href="/about-us"
              className="text-black hover:text-blue-800 duration-300 text-[16px]"
            >
              ABOUT US
            </a>
          </li>
          <li>
            <a
              href="/bpo-services"
              className="text-black hover:text-blue-800 duration-300 text-[16px]"
            >
              BPO SERVICES
            </a>
          </li>
          <li>
            <a
              href="/it-services"
              className="text-black hover:text-blue-800 duration-300 text-[16px]"
            >
              IT SERVICES
            </a>
          </li>
          <li>
            <a
              href="/saas-product"
              className="text-black hover:text-blue-800 duration-300 text-[16px]"
            >
              SAAS PRODUCT
            </a>
          </li>
        </ul>
        <a href="/contact-us">
          <button className="bg-[#0056B3] px-[20px] h-[40px] text-white rounded-[8px] text-[14px]">
            CONTACT US
          </button>
        </a>
      </div>

      {/* HAMBURGER MENU FOR MOBILE */}
      <div className="lg:hidden flex items-center">
        <button onClick={toggleMenu} className="text-black focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:hidden fixed top-0 left-0 right-0 shadow-lg justify-center h-screen p-[12px] z-50 bg-white`}
      >
        <div className="bg-[#0056B3] py-[32px] flex justify-center text-[24px] text-white font-black rounded-[4px] text-center">
          VIZCOM CORPORATION
        </div>
        <ul className="flex flex-col space-y-2 justify-center items-center py-[20px]">
          <li className="py-[20px] border border-[#00D4D4] w-full text-center rounded-[8px]">
            <a
              href="/"
              className="text-black hover:underline duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              HOME
            </a>
          </li>
          <li className="py-[20px] border border-[#00D4D4] w-full text-center rounded-[8px]">
            <a
              href="/about-us"
              className="text-black hover:underline duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              ABOUT US
            </a>
          </li>
          <li className="py-[20px] border border-[#00D4D4] w-full text-center rounded-[8px]">
            <a
              href="/bpo-services"
              className="text-black hover:underline duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              BPO SERVICES
            </a>
          </li>
          <li className="py-[20px] border border-[#00D4D4] w-full text-center rounded-[8px]">
            <a
              href="/it-services"
              className="text-black hover:underline duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              IT SERVICES
            </a>
          </li>
          <li className="py-[20px] border border-[#00D4D4] w-full text-center rounded-[8px]">
            <a
              href="/saas-product"
              className="text-black hover:underline duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              SAAS PRODUCT
            </a>
          </li>
          <li className="py-[20px] border border-[#00D4D4] w-full text-center rounded-[8px]">
            <a
              href="/contact-us"
              className="text-black hover:underline duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              CONTACT US
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
