export function getRollupOutput(name, options = {}) {
  const outputs = [];

  outputs.push({
    file: `./dist/${name}.cjs.js`,
    format: "cjs",
    sourcemap: true,
  });

  outputs.push({
    file: `./dist/${name}.esm.js`,
    format: "es",
    sourcemap: true,
  });

  if (options.globalName) {
    outputs.push({
      file: `./dist/${name}.min.js`,
      format: "iife",
      name: options.globalName,
      sourcemap: true,
    });

    outputs.push({
      file: `./dist/${name}.umd.js`,
      format: "umd",
      name: options.globalName,
      sourcemap: true,
    });
  }

  return outputs;
}
