import typescript from "@rollup/plugin-typescript";
import resolve from "@rollup/plugin-node-resolve";
import pkg from "./package.json";

export default {
  external: ["axios"],
  input: "src/index.ts",
  output: [
    {
      name: "Mongrel",
      file: pkg.main,
      format: "umd",
      globals: {
        axios: "Axios",
      },
    },
  ],
  plugins: [resolve(), typescript({ tsconfig: "./tsconfig.json" })],
};
