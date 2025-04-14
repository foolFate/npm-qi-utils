import { getRollupOutput } from "./scripts/get-rollup-output.js";
import commonPlugins from "./scripts/common-plugins.js";

export default [
  {
    input: "src/canvas/index.ts",
    output: getRollupOutput("canvas", { globalName: "$QiCanvas" }),
    plugins: [...commonPlugins],
  },
  {
    input: "src/request/index.ts",
    output: getRollupOutput("request", { globalName: "$QiRequest" }),
    plugins: [...commonPlugins],
  },
  {
    input: "src/svg/index.ts",
    output: getRollupOutput("svg", { globalName: "$QiSvg" }),
    plugins: [...commonPlugins],
  },
];
