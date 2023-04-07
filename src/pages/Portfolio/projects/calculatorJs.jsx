import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import CalculatorPreview from "../../../assets/calculator-js.jpg";

const Calculator_js = () => {
  useEffect(() => {
    document.title = "Calculator — Viktoriia Yashkina";
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
          <h2 className="h2PortfolioProject">portfolio — Calculator</h2>{" "}
          <div className="containerContextPortfolioProject">
            <div className="textContent">
              <p>
                This project is a part of "The Odin Project" curriculum. The
                main goal was to build a basic calculator using Vanilla JS.
              </p>
              <p className="font-bold">Technology & Resources Used:</p>
              <p>01. Vanilla JS, HTML5, and CSS3</p>
              <p>02. Netlify for hosting</p>
              <p>03. Google Fonts & Google Icons</p>
              <p className="font-bold">Main Links:</p>
              <p>
                01.{" "}
                <a
                  href="https://superb-donut-123f5f.netlify.app/"
                  className="importantLinks"
                  target="_blank"
                >
                  Live Preview
                </a>
              </p>
              <p>
                02.{" "}
                <a
                  href="https://github.com/viktoriia-yash/calculator-vanilla-js"
                  className="importantLinks"
                  target="_blank"
                >
                  GitHub
                </a>
              </p>
            </div>
            <div className="max-w-[300px]">
              <img
                src={CalculatorPreview}
                alt="Calculator JS Project Preview Image"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Calculator_js;
