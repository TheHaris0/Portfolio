import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants/constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, settoggle] = useState(false);
  return (
    <>
      <nav
        className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
      >
        <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
          <Link
            to={"/"}
            className="flex items-center gap-2"
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
            <p className="text-white text-[18px] font-bold cursor-pointer flex">
              Haris &nbsp;{" "}
              <span className="sm:block hidden">
                |&nbsp; Full Stack Developer
              </span>
            </p>
          </Link>
          <ul className="list-none hidden sm:flex flex-row gap-10">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${
                  active === link.title ? "text-white" : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer`}
                onClick={() => setActive(link.title)}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>
          <div className="sm:hidden flex flex-1 justify-end items-center">
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="cursor-pointer"
              onClick={() => settoggle(!toggle)}
            />
            {toggle && (
              <div className="relative top-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
                doloremque cupiditate inventore molestias aspernatur et iste
                modi debitis magnam facilis mollitia reprehenderit dicta ex quam
                necessitatibus impedit, voluptatum deserunt ea!
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
