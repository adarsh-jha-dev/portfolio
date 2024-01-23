"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import { useSnapshot } from "valtio";
import state from "../store";

const HeroSection = () => {
  const snap = useSnapshot(state);
  const isDarkMode = snap.mode === "dark";

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedMode = localStorage.getItem("portfolio-mode1234");
      if (storedMode) {
        // Update the state with the stored mode
        state.mode = storedMode;
      }
    }
  }, []);

  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1
            className={`${
              isDarkMode ? "text-white" : "text-black"
            } mb-4 text-4xl sm:text-4xl h-32 md:h-auto lg:h-auto lg:text-8xl lg:leading-normal font-extrabold`}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Adarsh",
                1000,
                "A Web Developer",
                1000,
                "A UI/UX Designer",
                1000,
              ]}
              className={`text-white`}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          {/* <small
            className={`${
              isDarkMode ? "text-[#ADB7BE]" : "text-black"
            } text-base`}
          >
            [If the color of this type animation doesn't change on changing the
            theme, please refresh.]
          </small> */}
          <p
            className={`${
              isDarkMode ? "text-[#ADB7BE]" : "text-black"
            } text-base sm:text-lg mb-6 lg:text-xl`}
          >
            I&apos;m a passionate second-year undergraduate in computer science
            and engineering, specializing in full-stack web development. With
            proficiency in technologies like MERN Stack. Driven by a desire to
            create scalable web applications, I am excited to continue exploring
            new technologies and making a positive impact in the world of web
            development. Feel free to explore my portfolio to learn more about
            my projects and skills. Let&apos;s build something incredible
            together!
          </p>
          <div>
            <Link
              href="/#contact"
              className="px-6 light:bg-black light:text-black inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 hover:text-black text-white"
            >
              Hire Me
            </Link>
            <Link
              download="resume.pdf"
              href="/assets/resume.pdf"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div
            className={`rounded-full ml-[20px] md:ml-[10px] border border-${
              isDarkMode ? "white" : "black"
            } w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative`}
          >
            <Image
              src="/images/hero--image.jpg"
              alt="hero image"
              className="absolute transform rounded-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
