"use client";

import { SKILLS } from "@/app/utils/data";
import React, { useState } from "react";
import SkillCard from "./SkillCard/SkillCard";
import "./Skills.css";
import SkillsInfoCard from "./SkillsInfoCard/SkillsInfoCard";
import { useSnapshot } from "valtio";
import state from "@/app/store";

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(SKILLS[0]);
  const handleSelectSkill = (data) => {
    setSelectedSkill(data);
  };

  const snap = useSnapshot(state);
  const isDarkMode = snap.mode === "dark";

  return (
    <section id="skills" className="skills-container">
      <h5
        className={`${
          isDarkMode ? "text-white" : "text-black"
        } text-center text-6xl`}
      >
        My <span className="text-primary-800">Skills</span>
      </h5>

      <div className="skills-content">
        <div className="skills">
          {SKILLS.map((skill) => (
            <SkillCard
              key={skill.title}
              imageUrl={skill.icon}
              doc={skill.doc}
              title={skill.title}
              isActive={selectedSkill.title === skill.title}
              onClick={() => handleSelectSkill(skill)}
            />
          ))}
        </div>

        <div className="skills-info">
          <SkillsInfoCard
            heading={selectedSkill.title}
            skills={selectedSkill.skills}
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
