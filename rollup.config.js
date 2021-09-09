import pkg from "./package.json";

export default {
  external: ["axios"],
  input: "src/index.js",
  output: {
    name: "mongrelDB",
    file: pkg.main,
    format: "umd",
    globals: {
      axios: "Axios",
    },
  },
};
