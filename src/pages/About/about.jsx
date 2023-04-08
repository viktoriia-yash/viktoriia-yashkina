import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Me from "../../assets/me.png";

const Home = () => {
  useEffect(() => {
    document.title = "About Me — Viktoriia Yashkina";
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
          <h2 className="h2">about me</h2>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-x-[3rem]">
            <div className="textContent">
              <p>
                Hello! I am Viktoriia, an Italy-based 26 years old Ukrainian.
                Currently, I am working on becoming a web developer. Forced to
                live in two different countries - Italy and Ukraine.
              </p>
              <p>
                My interest in coding started thanks to Tumblr and peaked in
                high school. In 2014 I wanted to attend the university and link
                my life with programming, but I abandoned this decision due to
                many factors.
              </p>
              <p>
                It took me eight years to back to my dream. Throughout this
                time, I left one university after three years of study, earned a
                Bachelor's degree in sociology at another university, changed
                several jobs, and left my country because of war.
              </p>
              <p>
                I am on the way to achieving my dream now. I already took
                several online courses and gained basic front-end skills. I'm
                increasingly sure that coding is what I would like to do for the
                rest of my life. Now I am focused on learning SQL and MySQL.
              </p>
            </div>
            <div className="max-w-[200px]">
              <img src={Me} alt="Me" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
