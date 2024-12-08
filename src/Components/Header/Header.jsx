import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav className="flex p-5 justify-around items-center w-full">
        <div>
          <Link to="/" className="flex items-center">
            <img
              src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
              className="mr-3 h-12"
              alt="Logo"
            />
          </Link>
        </div>
        <div>
          <ul className="flex gap-6 ">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `${isActive ? "text-red-500" : "text-gray-600"}`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `${isActive ? "text-red-500" : "text-gray-600"}`
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `${isActive ? "text-red-500" : "text-gray-600"}`
                }
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/github"
                className={({ isActive }) =>
                  `${isActive ? "text-red-500" : "text-gray-600"}`
                }
              >
                Github
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="text-xl flex gap-3">
          <button className="text-red-600 font-medium">Login</button>
          <button className="bg-red-600 px-4 py-1 text-white rounded-md">
            Sign Up
          </button>
        </div>
      </nav>
      <hr />
    </header>
  );
}

export default Header;
