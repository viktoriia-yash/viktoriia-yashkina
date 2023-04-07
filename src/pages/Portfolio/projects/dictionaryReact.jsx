import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import DictionaryPreview from "../../../assets/dictionary-react.jpg";

const DictionaryReact = () => {
  useEffect(() => {
    document.title = "Dictionary — Viktoriia Yashkina";
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
          <h2 className="h2PortfolioProject">portfolio — Dictionary</h2>{" "}
          <div className="containerContextPortfolioProject">
            <div className="textContent">
              <p>
                My first solo React project and second in general. My main goal
                was to create a dictionary application using React and API.
              </p>
              <p className="font-bold">Technology & Resources Used:</p>
              <p>01. React, HTML5, and Tailwind CSS</p>
              <p>
                02.{" "}
                <a
                  href="https://dictionaryapi.dev/"
                  className="importantLinks"
                  rel="noreferrer"
                  target="_blank"
                >
                  Free Dictionary API
                </a>
              </p>
              <p>03. Netlify for hosting</p>
              <p>04. Google Fonts & Google Icons</p>
              <p className="font-bold">Main Links:</p>
              <p>
                01.{" "}
                <a
                  href="https://incomparable-fairy-68dab3.netlify.app/"
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
                  href="https://github.com/viktoriia-yash/dictionary-react"
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
                src={DictionaryPreview}
                alt="Dictionary React Preview Image"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default DictionaryReact;
