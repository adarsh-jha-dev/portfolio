import React from "react";
import "./SkillsInfoCard.css";
import Link from "next/link";
import { useSnapshot } from "valtio";
import state from "@/app/store";

const SkillsInfoCard = ({ heading, skills }) => {
  const snap = useSnapshot(state);
  const isDarkMode = snap.mode === "dark";

  return (
    <div className="skills-info-card">
      <h5
        style={{ color: isDarkMode ? "#FFFFFF" : "#000000" }}
        className={`${isDarkMode ? "text-white" : "text-black"}`}
      >
        {heading}
      </h5>

      <div className="skills-info-content">
        {skills.map((item, index) => (
          <React.Fragment key={`skill_${index}`}>
            <div className="skills-info">
              <Link
                className={`${
                  isDarkMode ? "text-white" : "text-black font-bold"
                } hover:${
                  isDarkMode ? "text-[#ff2bdf]" : "text-white"
                } cursor-pointer`}
                target="_blank"
                href={`${item.docs}`}
              >
                {item.skill}
              </Link>
              <p
                className={`percentage ${
                  isDarkMode ? "text-[#ff2bdf]" : "text-black"
                }`}
              >
                {item.percentage}
              </p>
            </div>
            <div className="skill-progress-bg">
              <div
                className="skill-progress"
                style={{ width: `${item.percentage}` }}
              />
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default SkillsInfoCard;
