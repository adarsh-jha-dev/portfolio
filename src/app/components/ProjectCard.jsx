import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useSnapshot } from "valtio";
import state from "../store";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  const snap = useSnapshot(state);
  const isDarkMode = snap.mode === "dark";

  return (
    <div
      className={`shadow-lg transition-all duration-700 hover:scale-110 lg:m-2  sm:m-1 lg:h-auto border ${
        !isDarkMode && "border-black"
      } ${isDarkMode && "border-white"}  pb-4 rounded-xl`}
    >
      <div
        className={`h-52 md:h-72 rounded-t-xl relative group`}
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
          <Link
            target="_blank"
            href={gitUrl}
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
          </Link>
          {title !== "React Portfolio Website" &&
            title !== "Three JS T-Shirt Customizer using AI" && (
              <Link
                target="_blank"
                href={previewUrl}
                className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
              >
                <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
              </Link>
            )}
        </div>
      </div>
      <div className="text-white rounded-b-xl mt-3 bg-[#181818]py-6 px-4">
        <h5
          className={`${
            isDarkMode ? "text-white" : "text-[#8d1fa3]"
          } text-xl font-semibold mb-2`}
        >
          {title}
        </h5>
        <p className={`${isDarkMode ? "text-[#ADB7BE]" : "text-black"}`}>
          {description}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
