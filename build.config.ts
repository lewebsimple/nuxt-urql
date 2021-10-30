import { BuildConfig } from "unbuild";

export default {
  declaration: true,
  entries: ["./src/module", "./src/plugin"],
  externals: ["@nuxt/kit-edge", "@nuxt/types", "@urql/vue", "@urql/core", "pathe", "#app"],
} as BuildConfig;
