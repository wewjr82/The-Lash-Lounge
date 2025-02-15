import { useState } from "react";
import headerImage from "/src/assets/images/Gemini_Generated_Image_wz2d6wz2d6wz2d6w.jfif";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-Soft-Grey text-Rose-Gold p-4 shadow-md w-full fixed z-10">
      {/* Logo Section */}
      <div className="w-full h-64 bg-gray-300 flex justify-row items-center mt-4 md:mt-8">
        <img
          src={headerImage}
          alt="Header Graphic"
          className="w-full h-64 object-cover"
        />
      </div>

      {/* Navigation Section */}
      <div className="container mx-auto flex flex-col items-center">
        {/* Hamburger Menu for Mobile */}
        <button
          className="block md:hidden text-Rose-Gold focus:outline-none mb-4"
          onClick={() => setIsOpen(!isOpen)}
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
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>

        {/* Centered Menu */}
        <nav
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex flex-col md:flex-row items-start md:items-center w-full md:w-auto bg-Soft-Cream md:bg-transparent p-4 md:p-0 md:justify-center mx-auto`}
        >
          <a
            href="#home"
            className="block mt-2 md:mt-0 md:mx-4 hover:text-gray-400"
          >
            Home
          </a>
          <a
            href="#the-team"
            className="block mt-2 md:mt-0 md:mx-4 hover:text-gray-400"
          >
            The Team
          </a>
          <a
            href="#gallery"
            className="block mt-2 md:mt-0 md:mx-4 hover:text-gray-400"
          >
            Gallery
          </a>
          <a
            href="#faq"
            className="block mt-2 md:mt-0 md:mx-4 hover:text-gray-400"
          >
            FAQ
          </a>
          <a
            href="#contact"
            className="block mt-2 md:mt-0 md:mx-4 hover:text-gray-400"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
