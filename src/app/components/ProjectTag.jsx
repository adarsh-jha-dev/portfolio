import React from "react";
import { useSnapshot } from "valtio";
import state from "../store";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const snap = useSnapshot(state);
  const isDarkMode = snap.mode === "dark";

  const buttonStyles = isDarkMode
    ? `${
        isSelected
          ? "text-white border-primary-500"
          : "text-[#ADB7BE] border-slate-600 hover:border-white"
      }`
    : `${
        isSelected
          ? "text-black font-bold border-black"
          : "text-[#8d1fa3] border-primary-800"
      }`;

  return (
    <button
      className={`${buttonStyles} rounded-full border-2 px-6 py-3 text-xl cursor-pointer`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
