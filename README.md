<h1 align='center'>nuxt-urql</h1>

<p align='center'><a href="https://formidable.com/open-source/urql/docs/basics/vue/">@urql/vue</a> for Nuxt.js! ⚡️<br>

## Features

- Basic Nuxt3 module for providing urql client
- Configurable URL in `nuxt.config.ts`

# Install

```bash
yarn add -D nuxt-urql
# npm i -D nuxt-urql
```

## Usage

Within your `nuxt.config.js` add the following.

```js
import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
  buildModules: [
    'nuxt-windicss',
  ],
  urql: {
    url: 'https://rickandmortyapi.com/graphql/'
  }
})
```

## Roadmap

- [ ] Configure all `@vue/urql` options from Nuxt config
- [ ] Composable urql [exchanges](https://formidable.com/open-source/urql/docs/architecture/#the-client-and-exchanges)
- [ ] Better documentation and examples

## Credits

- Based on a project by [@bicouy0](https://github.com/bicouy0/nuxt3-urql)
- Nuxt module structure [nuxt3-supabase](https://github.com/wobsoriano/nuxt3-supabase)
