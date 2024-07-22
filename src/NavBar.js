import React, { useEffect, useState } from "react";
import { FaSearch, FaHome } from "react-icons/fa";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-10 top-0 transition-colors duration-300
        !bg-black
`}
    >
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="flex items-center">
          <FaHome className="text-2xl mr-4 text-white" />
          <span className="text-xl font-bold text-white">Brand</span>
        </div>
        <div className="flex items-center space-x-4">
          <a
            href="#"
            className="text-white hover:text-gray-400 transition duration-300"
          >
            Home
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-400 transition duration-300"
          >
            About Us
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-400 transition duration-300"
          >
            Skills
          </a>
          <a
            href="#"
            className="text-white hover:text-gray-400 transition duration-300"
          >
            Contact Us
          </a>
        </div>
        <div className="relative group">
          <input
            type="text"
            className="bg-gray-700 text-white rounded-full pl-10 pr-4 py-2 focus:outline-none focus:bg-gray-600 transition duration-300"
            placeholder="Search..."
          />
          <FaSearch className="absolute left-3 top-3 text-white group-focus-within:text-gray-400 transition duration-300" />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
