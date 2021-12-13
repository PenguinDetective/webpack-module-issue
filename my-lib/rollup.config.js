const packageJson = require("./package.json");
const path = require("path");

import typescript from '@rollup/plugin-typescript';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: packageJson.main,
      format: "cjs",
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: "esm",
      sourcemap: true,
    },
  ],
  plugins: [typescript({
    tsconfig: path.resolve(__dirname, "./tsconfig.json"),
  })],
  external:[
    "react",
    "react-dom",
    "react-bootstrap"
  ]
};