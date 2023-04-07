import React, { useEffect } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  useEffect(() => {
    document.title = "Contact Me — Viktoriia Yashkina";
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
          <h2 className="h2">get in touch</h2>
          <div>
            <div className="textContent">
              <p>
                I am looking for a job. Open to any suggestions in IT, from the
                internship to the entry-level position.
              </p>
              <p>
                Have a job proposal for me? You can contact me through email or
                LinkedIn. I will get back to you as soon as possible.
              </p>
              <p className="pt-10">
                <a
                  href="mailto:yashkina.viktoriia@proton.me"
                  className="importantLinks text-[18px] lg:text-[25px] font-bold"
                >
                  yashkina.viktoriia@proton.me
                </a>
              </p>
              <p>
                <a
                  href="https://www.linkedin.com/in/viktoriia-yashkina/"
                  target="_blank"
                  className="importantLinks text-[18px] lg:text-[25px] font-bold"
                >
                  LinkedIn
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
