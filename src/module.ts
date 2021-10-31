import { dirname, resolve } from "pathe";
import { fileURLToPath } from "url";
import { defineNuxtModule, addPluginTemplate, addTemplate } from "@nuxt/kit";
import type { ClientOptions } from "@urql/vue";

export type NuxtUrqlOptions = ClientOptions & {};

export default defineNuxtModule<NuxtUrqlOptions>(() => ({
  name: "urql",
  configKey: "urql",
  setup(options: NuxtUrqlOptions) {
    const __dirname__ = dirname(fileURLToPath(import.meta.url));

    addTemplate({
      filename: "urql.options.mjs",
      getContents: () => "export default " + JSON.stringify(options),
    });

    addPluginTemplate({
      src: resolve(__dirname__, "./plugin.mjs"),
    });
  },
}));
