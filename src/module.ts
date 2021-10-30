import { defineNuxtModule, Nuxt } from "@nuxt/kit";

export type NuxtUrqlOptions = {
  url: string;
};

export default defineNuxtModule<NuxtUrqlOptions>((nuxt: Nuxt) => ({
  name: "urql",
  configKey: "urql",
  //defaults: {},
  setup(options: NuxtUrqlOptions) {
    console.log("TODO: Setup urql...");
  },
}));
