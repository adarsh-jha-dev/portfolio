const { proxy } = require("valtio");

const state = proxy({
  mode: localStorage.getItem("portfolio-mode1234") ?? "dark",
});

export default state;
