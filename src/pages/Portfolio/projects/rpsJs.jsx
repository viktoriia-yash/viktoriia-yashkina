import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import RPSJSPreview from "../../../assets/rps-js.jpg";

const RpsJs = () => {
  useEffect(() => {
    document.title = "Rock Paper Scissors — Viktoriia Yashkina";
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      className="wholePage"
    >
      <div className="containerPortfolioProject">
        <div className="pt-12">
          <Link to="/portfolio" className="font-bold cursor-pointer">
            Back
          </Link>
          <h2 className="h2PortfolioProject">
            portfolio — Rock Paper Scissors
          </h2>{" "}
          <div className="containerContextPortfolioProject">
            <div className="textContent">
              <p>
                This project is a part of "The Odin Project" curriculum. The
                main goal was to create this game using Vanilla JS.
              </p>
              <p className="font-bold">Technology & Resources Used:</p>
              <p>01. Vanilla JS, HTML5, and CSS3</p>
              <p>02. GitHub Pages for hosting</p>
              <p>03. Google Fonts & Google Icons</p>
              <p className="font-bold">Main Links:</p>
              <p>
                01.{" "}
                <a
                  href="https://viktoriia-yash.github.io/rock-paper-scissors-vanilla-js/"
                  className="importantLinks"
                  rel="noreferrer"
                  target="_blank"
                >
                  Live Preview
                </a>
              </p>
              <p>
                02.{" "}
                <a
                  href="https://github.com/viktoriia-yash/rock-paper-scissors-vanilla-js"
                  className="importantLinks"
                  rel="noreferrer"
                  target="_blank"
                >
                  GitHub
                </a>
              </p>
            </div>
            <div className="max-w-[300px]">
              <img
                src={RPSJSPreview}
                alt="Rock Paper Scissors JS Preview Image"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default RpsJs;
