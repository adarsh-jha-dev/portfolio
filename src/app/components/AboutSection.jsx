"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
// import { useSelector } from "react-redux";

const TAB_DATA = [
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>
          Sept, 2022 - July, 2026
          <ul className="list-disc pl-4">
            <li>Bachelor of Technology</li>
            <li>Heritage Institute of Technology, Kolkata</li>
            <li>CGPA - 10 (Till now)</li>
          </ul>
        </li>
        <li>
          Aug, 2020 - July, 2022
          <ul className="list-disc pl-4">
            <li>Higher Secondary</li>
            <li>Shree Jain Vidyalya, Kolkata</li>
            <li>93.2%</li>
          </ul>
        </li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Complete WebDev Bootcamp - Dr. Angela Yu, Udemy</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  // const mode = useSelector((state) => state.mode.theme);

  // const isDarkMode = mode === "dark";
  const [tab, setTab] = useState("education");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a aspiring full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, TypeScript, React, Redux, Zustand, Node.js,
            Express, MySQL, MongoDB HTML, CSS, and Git. I am a quick learner and
            I am always looking to expand my knowledge and skill set. I am a
            team player and I am excited to work with others to create amazing
            applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
