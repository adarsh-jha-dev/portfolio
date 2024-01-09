import React from "react";
import "./SkillCard.css";
import { useSnapshot } from "valtio";
import state from "@/app/store";
import Image from "next/image";

const SkillCard = ({ title, imageUrl, isActive, onClick }) => {
  const snap = useSnapshot(state);
  const isDarkMode = snap.mode === "dark";

  return (
    <div
      className={`shadow-lg transition-all duration-700 hover:scale-110 skills-card ${
        isActive ? "active" : ""
      }`}
      onClick={() => onClick()}
    >
      <div className="skill-icon bg-primary-900 flex justify-center align-center">
        <Image
          width={50}
          height={50}
          className="icon bg-primary-500"
          src={imageUrl}
          alt={title}
        />
      </div>
      <span className={`${isDarkMode ? "text-white" : "text-black"}`}>
        {title}
      </span>
    </div>
  );
};

export default SkillCard;
