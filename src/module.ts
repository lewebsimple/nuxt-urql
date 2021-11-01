import { dirname, resolve } from "pathe";
import { fileURLToPath } from "url";
import { defineNuxtModule, addPluginTemplate, addTemplate } from "@nuxt/kit";
import { ClientOptions } from "@urql/vue";

export default defineNuxtModule<ClientOptions>((nuxt) => ({
  name: "urql",
  configKey: "urql",
  setup(options: ClientOptions) {
    const __dirname__ = dirname(fileURLToPath(import.meta.url));

    addTemplate({
      filename: "urql.options.mjs",
      getContents: () => "export default " + JSON.stringify(options),
    });

    addPluginTemplate({
      src: resolve(__dirname__, "./plugin.mjs"),
    });

    nuxt.options.build.transpile.push("@urql/vue");
  },
}));

declare module "@nuxt/kit" {
  interface ConfigSchema {
    urql: ClientOptions;
  }
}
