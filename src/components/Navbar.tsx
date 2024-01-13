import "../index.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="py-4 fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-4 lg:px-0">
        <a
          href="/"
          className="text-xl font-bold tracking-wide text-white hover:text-green-500 transition-colors duration-300 invisible md:visible"
        >
          TALHA B
        </a>
        <div className="lg:flex hidden space-x-4">
          <a
            href="#timeline"
            className="text-white hover:text-green-500 transition-colors duration-300"
          >
            Timeline
          </a>
          <a
            href="#skills"
            className="text-white hover:text-green-500 transition-colors duration-300"
          >
            Skills
          </a>
          <a
            href="#projects"
            className="text-white hover:text-green-500 transition-colors duration-300"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-white hover:text-green-500 transition-colors duration-300"
          >
            Contact
          </a>
        </div>
        <button
          className="lg:hidden text-white focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <FontAwesomeIcon
            icon={isMobileMenuOpen ? faTimes : faBars}
            size="2x"
            className="text-white transition-transform duration-300"
          />
        </button>
      </div>
      {isMobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black opacity-40 transition-opacity duration-300"
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>
          <div className="flex flex-col space-y-2 p-4 lg:hidden bg-white rounded shadow-lg w-64 right-4 top-20 absolute z-40 transition-transform duration-300 transform scale-95">
            {" "}
            {/* added transition */}
            {["Timeline", "Skills", "Projects", "Contact"].map(
              (item, index) => (
                <a
                  key={index}
                  href={`#${item.toLowerCase()}`}
                  className="text-black hover:text-green-500 transition-colors duration-300 py-2 px-4 rounded border hover:border-green-500 border-gray-200" // Added padding, rounded corners, and a border
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ),
            )}
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
