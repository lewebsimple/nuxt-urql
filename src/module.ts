import { fileURLToPath } from "url";
import { dirname, resolve } from "pathe";
import { defineNuxtModule, Nuxt, addPluginTemplate } from "@nuxt/kit-edge";

export type NuxtUrqlOptions = {
  url: string;
};

export default defineNuxtModule<NuxtUrqlOptions>((nuxt: Nuxt) => ({
  name: "urql",
  configKey: "urql",
  defaults: {
    url: "https://graphql.org/swapi-graphql/",
  },
  setup(options: NuxtUrqlOptions) {
    const distDir = dirname(fileURLToPath(import.meta.url));
    addPluginTemplate({
      src: resolve(distDir, "plugin.mjs"),
      options,
    });
  },
}));
