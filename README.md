# Nuxt 3 Minimal Starter

## Project Description

This project applies a service pattern, with these details:
- API Mock: using Nuxt `server/api` module. ([Docs](https://nuxt.com/docs/guide/directory-structure/server))
- Services: store the API data controller from the `services` (extend from plugins) directory, then it is imported into the `plugins/service` plugin. ([Docs](https://nuxt.com/docs/guide/directory-structure/plugins))
- State Management: using Pinia to handle the invocation of the services. 

---

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
