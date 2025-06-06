import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white/80 backdrop-blur-md text-gray-900 p-4 fixed top-0 left-0 w-full z-20 shadow">
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        <div className="text-2xl font-bold text-green-600">CollabCare</div>

        {/* Hamburger button */}
        <button
          className="sm:hidden focus:outline-none"
          onClick={toggleMenu}
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
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {/* Desktop Menu */}
        <div className="hidden sm:flex space-x-6">
          <Link to="/" className="hover:text-green-600 transition">Home</Link>
          <Link to="/journal" className="hover:text-green-600 transition">Journal</Link>
          <Link to="/goals" className="hover:text-green-600 transition">Goals</Link>
          <Link to="/dashboard" className="hover:text-green-600 transition">Dashboard</Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="flex flex-col mt-4 space-y-2 sm:hidden">
          <Link to="/" onClick={toggleMenu} className="hover:text-green-600 transition">Home</Link>
          <Link to="/journal" onClick={toggleMenu} className="hover:text-green-600 transition">Journal</Link>
          <Link to="/goals" onClick={toggleMenu} className="hover:text-green-600 transition">Goals</Link>
          <Link to="/dashboard" onClick={toggleMenu} className="hover:text-green-600 transition">Dashboard</Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
