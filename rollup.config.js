import typescript from "rollup-plugin-typescript2";
import { terser } from "rollup-plugin-terser";
import dts from "rollup-plugin-dts";

import pkg from "./package.json";

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: pkg.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: pkg.module,
        format: "es",
        sourcemap: true,
      },
    ],
    external: [...Object.keys(pkg.dependencies || {})],
    plugins: [
      typescript({
        typescript: require("typescript"),
      }),
      terser(),
    ],
  },
  {
    input: "src/index.ts",
    output: [{ file: "dist/index.d.ts", format: "es" }],
    plugins: [dts.default()],
  },
];
