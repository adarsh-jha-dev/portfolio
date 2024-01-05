"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import DarkModeToggle from "react-dark-mode-toggle";
// import { useDispatch, useSelector } from "react-redux";
// import { setTheme } from "../store/ModeSlice";
//
const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {
  // const mode = useSelector((state) => state.mode.theme);
  // const dispatch = useDispatch();
  const [isDarkMode, setIsDarkMode] = useState(() => false);
  const [navbarOpen, setNavbarOpen] = useState(false);

  // const handleMode = (e) => {
  //   e.preventDefault();
  //   if (mode === "dark") {
  //     dispatch(setTheme({ theme: "dark" }));
  //   } else {
  //     dispatch(setTheme({ theme: "light" }));
  //   }
  // };

  return (
    <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
      <div className="flex flex-wrap items-center justify-between mx-auto p-8">
        <Link className="text-5xl font-semibold text-white" href="/">
          Adarsh
        </Link>
        <div className="mobile-menu block md:hidden">
          <div className="flex justify-between">
            <DarkModeToggle
              className=" items-center mt-2 ml-1"
              onChange={setIsDarkMode}
              checked={isDarkMode}
              size={50}
            />
            {!navbarOpen ? (
              <button
                onClick={() => setNavbarOpen(true)}
                className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
              >
                <Bars3Icon className="h-5 w-5" />
              </button>
            ) : (
              <button
                onClick={() => setNavbarOpen(false)}
                className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
              >
                <XMarkIcon className="h-5 w-5" />
              </button>
            )}
          </div>
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
            {!navbarOpen && (
              <DarkModeToggle
                onChange={setIsDarkMode}
                checked={isDarkMode}
                size={80}
              />
            )}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;