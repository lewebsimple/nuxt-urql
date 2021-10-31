import { dirname, resolve } from "pathe";
import { fileURLToPath } from "url";
import { defineNuxtModule, addPluginTemplate } from "@nuxt/kit-edge";

export type NuxtUrqlOptions = {
  url: string;
};

export default defineNuxtModule<NuxtUrqlOptions>(() => ({
  name: "urql",
  configKey: "urql",
  setup(options: NuxtUrqlOptions) {
    const __dirname__ = dirname(fileURLToPath(import.meta.url));
    addPluginTemplate({
      src: resolve(__dirname__, "./plugin.mjs"),
      options,
    });
  },
}));
