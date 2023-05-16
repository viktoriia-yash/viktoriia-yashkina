import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Logo from "../assets/logo.png";

const menuVariants = {
  hidden: {
    x: "100%",
  },
  show: {
    x: 0,
    transition: {
      ease: [0.2, 0.3, -0.1, 0.3],
    },
  },
};

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header className="relative w-full h-[130px] flex items-center px-[30px] lg:px-[200px] z-30 font-accentFont text-headerColor">
      <div className="w-full flex flex-row justify-between border-headerColor border-b-[1px]">
        <Link to={"/"} className="pb-5">
          <img src={Logo} className="max-w-[75px]" alt="website's logo" />
        </Link>

        <nav className="flex items-center">
          <div
            onClick={() => setOpenMenu(true)}
            className="text-lg md:text-2xl cursor-pointer"
          >
            <section>menu</section>
          </div>

          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate={openMenu ? "show" : ""}
            className="absolute w-full h-screen top-0 right-0 flex flex-col justify-between items-center z-20 bg-backgroundColor"
          >
            <div
              onClick={() => setOpenMenu(false)}
              className="absolute top-12 right-2 lg:right-28 z-30 text-lg md:text-2xl cursor-pointer px-[30px] lg:px-[100px]"
            >
              <p>close</p>
            </div>

            <ul className="h-full flex flex-col justify-center items-center gap-y-10 text-3xl lg:text-5xl">
              <li>
                <Link to="/" onClick={() => setOpenMenu(false)}>
                  home
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={() => setOpenMenu(false)}>
                  about
                </Link>
              </li>
              <li>
                <Link to="/portfolio" onClick={() => setOpenMenu(false)}>
                  projects
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={() => setOpenMenu(false)}>
                  contact
                </Link>
              </li>
            </ul>
          </motion.div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
