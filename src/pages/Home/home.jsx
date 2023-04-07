import React, { useEffect } from "react";
import { motion } from "framer-motion";

const Home = () => {
  useEffect(() => {
    document.title = "Home — Viktoriia Yashkina";
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      className="wholePage"
    >
      <div className="w-full h-[80vh] flex flex-col justify-end px-[30px] md:px-[100px] lg:px-[200px]">
        {" "}
        <h1 className="h1">
          Hello, I am
          <br />
          Viktoriia Yashkina
        </h1>
        <p className="lg:text-[20px]">
          A future self-taught web developer. My goal is to become a full-stack
          developer one day.
        </p>
      </div>
    </motion.div>
  );
};

export default Home;
