import React from "react";
import "./SkillsInfoCard.css";
import Link from "next/link";

const SkillsInfoCard = ({ heading, skills }) => {
  return (
    <div className="skills-info-card">
      <h5>{heading}</h5>

      <div className="skills-info-content">
        {skills.map((item, index) => (
          <React.Fragment key={`skill_${index}`}>
            <div className="skills-info">
              <Link
                className="hover:text-[#ff2bdf] cursor-pointer"
                target="_blank"
                href={`${item.docs}`}
              >
                {item.skill}
              </Link>
              <p className="percentage text-pink-00">{item.percentage}</p>
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
