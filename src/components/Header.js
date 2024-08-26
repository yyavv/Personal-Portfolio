import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Resume from "../assets/Yavuz_Celik.pdf";
import SearchComponent from "./SearchComponent";

const Header = () => {
  const location = useLocation();

  const [showHeader, setShowHeader] = useState(true);
  let lastScrollY = window.scrollY;

  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      setShowHeader(false);
    } else {
      setShowHeader(true);
    }
    lastScrollY = window.scrollY;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <header
      className={`bg-gray-900 text-gray-300 py-4 px-6 fixed w-full top-0 z-50 shadow-lg transition-transform duration-300 ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto flex justify-around items-center">
        <button class="resume">
          <span class="circle1"></span>
          <span class="circle2"></span>
          <span class="circle3"></span>
          <span class="circle4"></span>
          <span class="circle5"></span>
          <span class="text">
            <a href={Resume} download="resume.pdf">
              Resume
            </a>
          </span>
        </button>
        <nav className="flex items-center space-x-3">
          <Link
            to="/"
            className="hover:text-gray-400 transition duration-300 ease-in-out"
          >
            Home
          </Link>
          <Link
            to="/projects"
            className="hover:text-gray-400 transition duration-300 ease-in-out"
          >
            Projects
          </Link>
          <Link
            to="/contact"
            className="hover:text-gray-400 transition duration-300 ease-in-out"
          >
            Contact
          </Link>
        </nav>
        <div className="flex items-center space-x-3 justify-center">
          <SearchComponent />
        </div>
      </div>
    </header>
  );
};

export default Header;
