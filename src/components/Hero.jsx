// import React from "react";
// import { motion } from "framer-motion";
import { styles } from "../styles";
const Hero = () => {
  return (
    <>
      <section className="relative w-full h-full mx-auto">
        <div
          className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
        >
          <div className="flex flex-col justify-center items-center mt-7">
            <div className="w-5 h-5 rounded-full bg-[#915eff]" />
            <div className="w-1 sm:h-80 h-40 violet-gradient" />
          </div>
          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi,I am <span className="text-[#915eff]">Muhammad Haris</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-200`}>
              I develop 3D visuals, user <br className="sm:block hidden" />{" "}
              Interfaces and Web Application
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
