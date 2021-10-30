import type { Plugin } from "@nuxt/types";
import { createClient } from "@urql/vue";

const nuxtUrqlPlugin: Plugin = (context, inject) => {
  const client = createClient({
    url: "<%= options.url %>",
  });
};

export default nuxtUrqlPlugin;
