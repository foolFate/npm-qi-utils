import typescript from "@rollup/plugin-typescript";

const tsPlugin = typescript({
  tsconfig: "./tsconfig.json",
  sourceMap: true,
  inlineSources: true,
});

export default [tsPlugin];
