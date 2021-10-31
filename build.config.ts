import { BuildConfig } from "unbuild";

export default {
  declaration: true,
  entries: ["./src/module", "./src/plugin"],
  externals: ["@nuxt/kit", "@nuxt/kit-edge", "@urql/vue", "nuxt3", "pathe", "vue", "#app"],
} as BuildConfig;
