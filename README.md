# BIOM Visualizer

## Ingredients

- ⚛️ React 18
- ✨ TypeScript
- ⚡️ Stylish NextUI created by @vercel inc.
- 💨 Tailwind CSS
- Vite - ⚡️ Fast Refresh, HMR, and Bundling
- 🃏 Vitest — Configured for unit testing
- 📈 Absolute Import and Path Alias — Import components using `@/` prefix
- Pre-configured Code Formatters
  - 📏 ESLint
  - 💖 Prettier
  - 🐶 Husky & Lint Staged
  - 🤖 Conventional Commit Lint
- 👷 Github Actions — Lint your code on PR
- 📝 MIT License
- ⚡️ File router powered by [TanStack Router](https://tanstack.com/router/)

## Getting Started

### Install dependencies

It is encouraged to use **pnpm** so the husky hooks can work properly.

```bash
pnpm install
```

### Run the development server

You can start the server using this command:

```bash
pnpm dev
```

Open [http://localhost:5173](http://localhost:5173) with your browser to see the result. You can start editing the page by modifying `src/routes/index.tsx`.

### Commit Message Convention

This starter is using [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/), it is mandatory to use it to commit changes.

## Test

### UI

```sh
npx vite preview --outDir ./html
```

## Deploy

### Build

```sh
pnpm build
```
