// @ts-expect-error #app resolved by Nuxt3
import { defineNuxtPlugin, NuxtApp } from "#app";
// @ts-expect-error #build resolved by Nuxt3
import nuxtUrqlOptions from "#build/urql.options.mjs";
import { createClient } from "@urql/vue";
import { ref } from "vue";

export default defineNuxtPlugin((nuxt: NuxtApp) => {
  // Configure urql options
  const options = {
    url: nuxtUrqlOptions.url,
  };

  // Instantiate urql client
  const client = ref(createClient(options));

  // Provide urql client to Nuxt / vueApp
  nuxt.provide("urql", client);
  nuxt.vueApp.provide("$urql", client);
});
