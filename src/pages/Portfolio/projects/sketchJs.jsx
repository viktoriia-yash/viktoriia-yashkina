import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SketchJsPreview from "../../../assets/sketch-js.jpg";

const SketchJs = () => {
  useEffect(() => {
    document.title = "Etch-A-Sketch — Viktoriia Yashkina";
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
          <h2 className="h2PortfolioProject">portfolio — Etch-A-Sketch</h2>{" "}
          <div className="containerContextPortfolioProject">
            <div className="textContent">
              <p>
                This project is a part of "The Odin Project" curriculum. The
                main goal was "to build a browser version of something between a
                sketchpad and an Etch-A-Sketch" using Vanilla JS.
              </p>
              <p className="font-bold">Technology & Resources Used:</p>
              <p>01. Vanilla JS, HTML5, and CSS3</p>
              <p>02. Netlify for hosting</p>
              <p>
                03.{" "}
                <a
                  href="https://unsplash.com/photos/aYEUXnVG8tg"
                  className="importantLinks"
                  rel="noreferrer"
                  target="_blank"
                >
                  Background image
                </a>{" "}
                by Hamish Weir
              </p>
              <p>04. Google Fonts & Google Icons</p>
              <p className="font-bold">Main Links:</p>
              <p>
                01.{" "}
                <a
                  href="https://sweet-rugelach-791a62.netlify.app/"
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
                  href="https://github.com/viktoriia-yash/etch-a-sketch-vanilla-js"
                  className="importantLinks"
                  rel="noreferrer"
                  target="_blank"
                >
                  GitHub
                </a>
              </p>
            </div>
            <div className="max-w-[300px]">
              <img src={SketchJsPreview} alt="Etch-A-Sketch JS Preview" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SketchJs;
