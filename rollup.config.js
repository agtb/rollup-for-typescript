import run from "@rollup/plugin-run"
import typescript from "rollup-plugin-typescript2"

export default {
  input: "src/index.ts",
  output: {
    dir: "dist-rollup",
    format: "cjs",
  },
  plugins: [
    typescript({
      noEmitOnError: false,
    }),
    run(),
  ],
  watch: {
    exclude: [".pnp.*", "yarn/**"],
  },
}
