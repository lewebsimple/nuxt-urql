import { BuildConfig } from "unbuild";

export default {
  declaration: true,
  entries: ["./src/module"],
  externals: ["@nuxt/kit"],
} as BuildConfig;
