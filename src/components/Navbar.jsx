import React, { useContext } from "react";
import { Link } from "react-router-dom"; 
import ThemeSwitcher from "./ThemeSwitcher";
import LoginContext from "../context/LoginContext";

export default function Navbar() {
  const { user, isLoggedIn, logout } = useContext(LoginContext); 

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to="/">Home</Link> {/* Use Link instead of <a> */}
              </li>
              <li>
                <Link to="/pokemon">Pokemon</Link> {/* Use Link instead of <a> */}
              </li>
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost text-xl">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pokémon_logo.svg"
              alt="Pokémon Logo"
              className="h-8 w-auto"
            />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/">Home</Link> {/* Use Link instead of <a> */}
            </li>
            <li>
              <Link to="/pokemon">Pokemon</Link> {/* Use Link instead of <a> */}
            </li>
            <li>
              <ThemeSwitcher />
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {isLoggedIn ? (
            <div>
              <span>Name: {user.name} </span>
              <span>NIM: {user.NIM}</span>
              <button onClick={logout} className="btn btn-ghost">Logout</button>
            </div>
          ) : (
            <Link to="/login" className="btn">Login</Link> 
          )}
        </div>
      </div>
    </div>
  );
}
