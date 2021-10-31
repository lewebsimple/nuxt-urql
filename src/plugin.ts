// @ts-expect-error #app provided by Nuxt3
import { defineNuxtPlugin, NuxtApp } from "#app";
import { createClient, Client } from "@urql/vue";
import { ref } from "vue";
// @ts-expect-error #build provided by Nuxt3
import urqlOptions from "#build/urql.options.mjs";

export default defineNuxtPlugin((nuxt: NuxtApp) => {
  const client = createClient(urqlOptions);
  nuxt.provide("urql", client);
  nuxt.vueApp.provide("$urql", ref(client));
});

// @ts-expect-error Nuxt app defined at runtime
declare module "#app" {
  interface NuxtApp {
    $urql: Client;
  }
}
