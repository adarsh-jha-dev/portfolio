"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description:
      "A personal portfolio website using ReactJS, showcasing all my skills and projects",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Blogstagram",
    description:
      "A complete MERN stack blogging website from scratch. Users can post blogs with images/videos (being stored on cloudinary) along with title, description. Users can like someone's post, comment on it, follow each other.",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/adarsh-jha-dev/resume-ready",
    previewUrl: "https://blogstagram-frontend.vercel.app/",
  },
  {
    id: 3,
    title: "Snapgram",
    description:
      "A smaller version of instagram clone made with react, typescript and using Appwrite as the backend. New skills learned - react-query, shadcn-ui library",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/adarsh-jha-dev/snapgram",
    previewUrl: "https://snapgram-fnhd.vercel.app/",
  },
  {
    id: 4,
    title: "DigitalHippo",
    description:
      "A digital marketplace to buy digital assets such as - Icons, UI kits. Built the website using NextJS-14, new skills learned - nextjs-app-router, stripe-integration",
    image: "/images/projects/4.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/adarsh-jha-dev/nextjs-marketplace",
    previewUrl: "https://nextjs-marketplace-production.up.railway.app/",
  },
  {
    id: 5,
    title: "NextJS Admin Dashboard",
    description:
      "Mocked an Admin dashboard in NextJS, new skills learned - pagination, chart.js in react",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/adarsh-jha-dev/nextjs-dashboard",
    previewUrl: "https://nextjs-dashboard-puce-seven-87.vercel.app/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
