import React from "react";
import "./SkillsInfoCard.css";
import Link from "next/link";
import { useSnapshot } from "valtio";
import state from "@/app/store";
import Image from "next/image";

const SkillsInfoCard = ({ heading, skills }) => {
  const snap = useSnapshot(state);
  const isDarkMode = snap.mode === "dark";

  return (
    <div className="mx-auto skills-info-card">
      <h5
        style={{ color: isDarkMode ? "#FFFFFF" : "#000000" }}
        className={`${isDarkMode ? "text-white" : "text-black"}`}
      >
        {heading}
      </h5>

      <div className="skills-info-content">
        {skills.map((item, index) => (
          <React.Fragment key={`skill_${index}`}>
            <Link
              className={`${
                isDarkMode ? "text-white" : "text-black font-bold"
              } hover:${
                isDarkMode ? "text-[#ff2bdf]" : "text-white"
              } cursor-pointer`}
              target="_blank"
              href={`${item.docs}`}
            >
              <div className="skills-info">
                <p className="mb-2">{item.skill}</p>
                <Image
                  src={item.icon}
                  height={80}
                  width={80}
                  alt={`${item.skill} logo`}
                />
              </div>
            </Link>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default SkillsInfoCard;
