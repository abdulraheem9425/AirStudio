import { Search, ShoppingBag, User, ChevronDown, Menu, X } from "lucide-react";
import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="w-full bg-white shadow-md text-gray-600">
      <div className="flex justify-between items-center h-20 px-4 sm:px-6 md:px-8">

        <div className="w-32 sm:w-40  sm:mx-0">
          <img src="/assets/images/logo.png" className="w-full" alt="Logo" />
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <X className="text-black" />
            ) : (
              <Menu className="text-black" />
            )}
          </button>
        </div>

        <div className="hidden md:flex justify-center space-x-10 text-lg">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-black font-semibold" : "hover:text-black"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/shop"
            className={({ isActive }) =>
              isActive ? "text-black font-semibold" : "hover:text-black"
            }
          >
            Shop
          </NavLink>
          <NavLink
            to="/store"
            className={({ isActive }) =>
              isActive ? "text-black font-semibold" : "hover:text-black"
            }
          >
            Store
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "text-black font-semibold" : "hover:text-black"
            }
          >
            Contact
          </NavLink>
        </div>

        <div className="hidden md:flex items-center space-x-6">
          <Link to="/login">
            <Search className="cursor-pointer hover:text-black" />
          </Link>
          <Link to="/register">
            <ShoppingBag className="cursor-pointer hover:text-black" />
          </Link>
          <Link to="/table">
            <User className="cursor-pointer hover:text-black" />
          </Link>
          <div className="flex items-center space-x-1 cursor-pointer">
            <img
              src="/assets/images/Group.png"
              alt="Language"
              className="w-5 h-5 rounded"
            />
            <Link to="/register-seller">
              <ChevronDown size={16} />
            </Link>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden transition-all duration-300 ${
          isOpen ? "h-screen px-6 pb-4 space-y-4" : "h-0 overflow-hidden"
        }`}
      >
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "block text-black font-semibold"
              : "block hover:text-black"
          }
          onClick={() => {
            closeMenu();
          }}
        >
          Home
        </NavLink>
        <NavLink
          to="/shop"
          className={({ isActive }) =>
            isActive
              ? "block text-black font-semibold"
              : "block hover:text-black"
          }
          onClick={() => {
            closeMenu();
          }}
        >
          Shop
        </NavLink>
        <NavLink
          to="/store"
          className={({ isActive }) =>
            isActive
              ? "block text-black font-semibold"
              : "block hover:text-black"
          }
          onClick={() => {
            closeMenu();
          }}
        >
          Store
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "block text-black font-semibold"
              : "block hover:text-black"
          }
          onClick={() => {
            closeMenu();
          }}
        >
          Contact
        </NavLink>

        <div className="flex items-right space-x-6 pt-2 border-t border-gray-200">
          <Link to="/login" onClick={closeMenu}>
            <Search />
          </Link>
          <Link to="/register" onClick={closeMenu}>
            <ShoppingBag />
          </Link>
          <Link to="/table" onClick={closeMenu}>
            <User />
          </Link>
          <Link to="/register-seller" onClick={closeMenu}>
            <div className="flex items-center space-x-1">
              <img
                src="/assets/images/Group.png"
                className="w-5 h-5 rounded"
              />
              <ChevronDown size={16} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
