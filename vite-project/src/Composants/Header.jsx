import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Accueil", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Réalisations", path: "/realisations" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-lg shadow-sm z-50">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <NavLink
          to="/"
          className="text-2xl font-bold text-green-600 tracking-tight"
          onClick={() => setOpen(false)}
        >
          Céram Pro
        </NavLink>

        {/* Menu desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `font-medium transition-colors duration-200 ${
                    isActive ? "text-green-600" : "text-gray-800 hover:text-green-600"
                  }`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
          <li>
            <NavLink
              to="/devis"
              className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-5 rounded-full transition-all duration-300"
            >
              Devis Gratuit
            </NavLink>
          </li>
        </ul>

        {/* Menu burger mobile */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-700 hover:text-green-600 transition"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>

        {/* Menu mobile */}
        {open && (
          <div className="absolute top-[68px] left-0 w-full bg-white shadow-md border-t border-gray-100 md:hidden animate-fade-in-down">
            <ul className="flex flex-col gap-3 py-4 px-6">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <NavLink
                    to={link.path}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `block py-2 font-medium ${
                        isActive
                          ? "text-green-600"
                          : "text-gray-800 hover:text-green-600"
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
              <li>
                <NavLink
                  to="/devis"
                  onClick={() => setOpen(false)}
                  className="block text-center bg-green-600 hover:bg-green-700 text-white font-medium py-2 rounded-full transition"
                >
                  Devis Gratuit
                </NavLink>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
