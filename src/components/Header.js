import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Resume from "../assets/Yavuz_Celik.pdf";
import SearchHighlight from "./SearchHighlight";

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
      className={`bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-4 px-6 fixed w-full top-0 z-50 shadow-lg transition-transform duration-300 ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold">My Portfolio</h1>
        <nav className="flex items-center space-x-7">
          <Link
            to="/"
            className="hover:text-yellow-300 transition duration-300 ease-in-out"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="hover:text-yellow-300 transition duration-300 ease-in-out"
          >
            About Me
          </Link>
          <Link
            to="/projects"
            className="hover:text-yellow-300 transition duration-300 ease-in-out"
          >
            Projects
          </Link>
          <Link
            to="/contact"
            className="hover:text-yellow-300 transition duration-300 ease-in-out"
          >
            Contact
          </Link>
        </nav>
        <div className="flex items-center space-x-3 justify-center">
          <SearchHighlight />
          <a
            href={Resume} //path to your resume
            download="resume.pdf"
            className="bg-indigo-500 text-white rounded-full py-2 px-4 hover:bg-indigo-600 transition duration-300 ease-in-out"
          >
            Resume
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
