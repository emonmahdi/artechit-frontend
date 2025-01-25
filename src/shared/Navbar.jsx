import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`w-full bg-white shadow-md transition-all duration-300 z-50 ${
        isSticky ? "fixed top-0 left-0" : "relative"
      }`}
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-500 w-full">
          <Link to="/">AR Tech IT</Link>
        </div>

        {/* Hamburger Menu */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>

        {/* Menu */}
        <ul
          className={`md:flex md:space-x-6 absolute md:static top-full left-0 w-full bg-white md:bg-transparent shadow-lg md:shadow-none transition-all duration-300 ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <li className="relative group">
            <a
              href="#"
              className="block px-4 py-2 text-gray-700 hover:text-blue-500 md:inline"
            >
              Home
            </a>
          </li>

          <li className="relative group">
            <a
              href="#"
              className="block px-4 py-2 text-gray-700 hover:text-blue-500 md:inline"
            >
              Products
            </a>
            <ul className="absolute left-0 top-full mt-2 hidden w-40 bg-white shadow-lg group-hover:block">
              <li className="border-b hover:bg-blue-100">
                <a href="#" className="block px-4 py-2 text-gray-700">
                  Medicine
                </a>
              </li>
              <li className="border-b hover:bg-blue-100">
                <a href="#" className="block px-4 py-2 text-gray-700">
                  Supplements
                </a>
              </li>
              <li className="hover:bg-blue-100">
                <a href="#" className="block px-4 py-2 text-gray-700">
                  Equipment
                </a>
              </li>
            </ul>
          </li>

          <li className="relative group">
            <a
              href="#"
              className="block px-4 py-2 text-gray-700 hover:text-blue-500 md:inline"
            >
              About
            </a>
          </li>

          <li className="relative group">
            <a
              href="#"
              className="block px-4 py-2 text-gray-700 hover:text-blue-500 md:inline"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
