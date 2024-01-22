const { proxy } = require("valtio");

const getInitialMode = () => {
  try {
    if (typeof window !== "undefined") {
      return localStorage.getItem("portfolio-mode1234") || "dark";
    }
    return "dark"; // Default mode if localStorage is not available
  } catch (error) {
    console.error("Error accessing localStorage:", error);
    return "dark"; // Default mode if there's an error
  }
};

const state = proxy({
  mode: getInitialMode(),
});

export default state;
