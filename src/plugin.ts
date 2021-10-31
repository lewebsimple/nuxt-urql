import { createClient, Client } from "@urql/vue";
import { ref } from "vue";

export default (nuxt: any) => {
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
