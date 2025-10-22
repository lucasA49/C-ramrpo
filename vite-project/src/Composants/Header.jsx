import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import logo from "/logo.jpg"; // adapte le chemin vers ton logo

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <NavLink to="/" className="flex items-center">
          <img
            src={logo}
            alt="Logo Céram Pro"
            className="h-13 w-auto transition-transform duration-300 hover:scale-105"
          />
        </NavLink>

        {/* Menu Desktop */}
        <nav className="hidden md:flex space-x-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-teal-600 font-semibold"
                : "text-gray-700 hover:text-teal-600 transition"
            }
          >
            Accueil
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive
                ? "text-teal-600 font-semibold"
                : "text-gray-700 hover:text-teal-600 transition"
            }
          >
            Services
          </NavLink>
          <NavLink
            to="/realisations"
            className={({ isActive }) =>
              isActive
                ? "text-teal-600 font-semibold"
                : "text-gray-700 hover:text-teal-600 transition"
            }
          >
            Réalisations
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-teal-600 font-semibold"
                : "text-gray-700 hover:text-teal-600 transition"
            }
          >
            Contact
          </NavLink>
        </nav>

        {/* Bouton Menu Mobile */}
        <button
          className="md:hidden text-teal-600 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FiMenu className="w-6 h-6" />
        </button>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <nav className="flex flex-col space-y-4 p-4">
            <NavLink
              to="/"
              className="text-gray-700 hover:text-teal-600"
              onClick={() => setIsOpen(false)}
            >
              Accueil
            </NavLink>
            <NavLink
              to="/services"
              className="text-gray-700 hover:text-teal-600"
              onClick={() => setIsOpen(false)}
            >
              Services
            </NavLink>
            <NavLink
              to="/realisations"
              className="text-gray-700 hover:text-teal-600"
              onClick={() => setIsOpen(false)}
            >
              Réalisations
            </NavLink>
            <NavLink
              to="/contact"
              className="text-gray-700 hover:text-teal-600"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </NavLink>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
