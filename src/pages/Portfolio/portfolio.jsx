import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { portfolioData } from "./portfolioData";

const Portfolio = () => {
  useEffect(() => {
    document.title = "Portfolio — Viktoriia Yashkina";
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      className="wholePage"
    >
      <div className="containerWholePage">
        <div className="containerContext">
          <h2 className="h2">portfolio</h2>
          <div className="grid md:grid-cols-2 gap-x-24 gap-y-2">
            {portfolioData.map((item, index) => (
              <div className="flex justify-start items-center ">
                <div>
                  <h3 className="h3">
                    {item.number}
                    {item.title}
                  </h3>
                  <p className="textContent">
                    {item.category} |{" "}
                    <Link
                      to={item.link}
                      key={index}
                      className="importantLinks"
                      target="_blank"
                    >
                      Learn More
                    </Link>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Portfolio;
