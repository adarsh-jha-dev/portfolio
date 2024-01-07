const { proxy } = require("valtio");

const state = proxy({
  mode: "dark",
});

export default state;
