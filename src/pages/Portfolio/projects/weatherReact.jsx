import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import WeatherReactPreview from "../../../assets/weather-react.jpg";

const WeatherReact = () => {
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
                My final project for "SheCodes React" course. The main project
                of this course was to create a weather forecast application
                using React and API from OpenWeatherMap.
              </p>
              <p className="font-bold">Technology & Resources Rsed:</p>
              <p>01. React, HTML5, and CSS3</p>
              <p>
                02. API from{" "}
                <a
                  href="https://openweathermap.org/"
                  className="importantLinks"
                  target="_blank"
                >
                  OpenWeatherMap
                </a>
              </p>
              <p>03. Netlify for hosting</p>
              <p>
                04.{" "}
                <a
                  href="https://unsplash.com/photos/NpF9JLGYfeQ"
                  className="importantLinks"
                  target="_blank"
                >
                  Background image
                </a>{" "}
                by Cerqueira
              </p>
              <p>05. Google Fonts & Google Icons</p>
              <p className="font-bold">Main Links:</p>
              <p>
                01.{" "}
                <a
                  href="https://effervescent-sable-d2e99c.netlify.app/"
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
                  href="https://github.com/viktoriia-yash/weather-app-react"
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
                  href="https://www.shecodes.io/certificates/e17d8f7d1dfb6d8df4f61b5eab3aa39d"
                  className="importantLinks"
                  rel="noreferrer"
                  target="_blank"
                >
                  "SheCodes React"
                </a>{" "}
                certificate
              </p>
            </div>
            <div className="max-w-[300px]">
              <img
                src={WeatherReactPreview}
                alt="Weather React Preview Image"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default WeatherReact;
