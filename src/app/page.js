"use client";

import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AchievementsSection from "./components/AchievementsSection";
import Skills from "./components/Skills/Skills";
import { useSnapshot } from "valtio";
import state from "./store";

export default function Home() {
  const snap = useSnapshot(state);
  const isDarkMode = snap.mode === "dark";

  const activeStyles = isDarkMode
    ? {
        backgroundColor: "#121212",
      }
    : {
        backgroundColor: "#e5c3c6",
      };

  return (
    <main
      className="flex transition-colors duration-300 ease-in min-h-screen flex-col"
      style={activeStyles}
    >
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AchievementsSection />
        <AboutSection />
        <Skills />
        <ProjectsSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
