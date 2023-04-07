import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import WeatherJSPreview from "../../../assets/weather-js.jpg";

const WeatherJs = () => {
  useEffect(() => {
    document.title = "Weather App — Viktoriia Yashkina";
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
          <h2 className="h2PortfolioProject">portfolio — Weather App</h2>{" "}
          <div className="containerContextPortfolioProject">
            <div className="textContent">
              <p>
                My final project for "SheCodes Plus" course. The main project of
                this course was to create a weather forecast application using
                Vanilla JS and API from OpenWeatherMap.
              </p>
              <p className="font-bold">Technology & Resources Used:</p>
              <p>01. Vanilla JS, HTML5, and CSS3</p>
              <p>
                02. API from{" "}
                <a
                  href="https://openweathermap.org/"
                  className="importantLinks"
                  rel="noreferrer"
                  target="_blank"
                >
                  OpenWeatherMap
                </a>
              </p>
              <p>03. Netlify for hosting</p>
              <p>04. Google Fonts & Google Icons</p>
              <p className="font-bold">Main Links:</p>
              <p>
                01.{" "}
                <a
                  href="https://marvelous-crumble-fa8f20.netlify.app/"
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
                  href="https://github.com/viktoriia-yash/weather-app-vanilla-js"
                  className="importantLinks"
                  rel="noreferrer"
                  target="_blank"
                >
                  GitHub
                </a>
              </p>
              <p>
                03.{" "}
                <a
                  href="https://www.shecodes.io/certificates/1187bf11df5df5020d21e4573a2ac874"
                  className="importantLinks"
                  rel="noreferrer"
                  target="_blank"
                >
                  "SheCodes Plus" certificate
                </a>
              </p>
            </div>
            <div className="max-w-[300px]">
              <img src={WeatherJSPreview} alt="Weather JS Project Preview" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default WeatherJs;
