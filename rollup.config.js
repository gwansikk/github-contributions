import typescript from "rollup-plugin-typescript2";
import packageJson from "./package.json";
import { terser } from "rollup-plugin-terser";

export default {
  input: "lib/index.ts",
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
  external: [...Object.keys(packageJson.dependencies || {})],
  plugins: [
    typescript({
      typescript: require("typescript"),
    }),
    terser(),
  ],
};
