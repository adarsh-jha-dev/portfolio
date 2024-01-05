import React from "react";
import "./SkillCard.css";

const SkillCard = ({ title, imageUrl, isActive, onClick }) => {
  return (
    <div
      className={`skills-card ${isActive ? "active" : ""}`}
      onClick={() => onClick()}
    >
      <div className="skill-icon bg-primary-900 flex justify-center align-center">
        <img className="icon bg-primary-500" src={imageUrl} alt={title} />
      </div>
      <span>{title}</span>
    </div>
  );
};

export default SkillCard;
