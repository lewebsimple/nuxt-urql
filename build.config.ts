import { BuildConfig } from "unbuild";

export default {
  declaration: true,
  entries: ["./src/module", "./src/plugin"],
  externals: ["@nuxt/kit-edge", "@urql/vue", "pathe", "vue", "#app"],
} as BuildConfig;
