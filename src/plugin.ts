import { createClient, Client } from "@urql/vue";
import { ref } from "vue";
import type { NuxtApp } from "nuxt3";

export default (nuxt: NuxtApp) => {
  const client = createClient({
    url: "<%= options.url %>",
  });
  nuxt.provide("urql", client);
  nuxt.vueApp.provide("$urql", ref(client));
};

// @ts-expect-error Nuxt app defined at runtime
declare module "#app" {
  interface NuxtApp {
    $urql: Client;
  }
}
