# AGENTS

## Purpose

This repository is a small frontend web application that generates release covers for No Smoking Recordings. It uses TypeScript, Vite, Vitest, ESLint, and Prettier.

## Recommended agent behavior

- Treat `src/` as the source of truth.
- Avoid editing generated or build output files under `coverage/` and `dist/` unless the task explicitly requires it.
- Preserve the existing modular structure: `src/cover/*` contains cover rendering logic, `src/handlers/*` contains event handling, `src/helpers/*` contains utilities, and `src/types/*` contains shared types.
- Keep changes consistent with the existing style: small focused modules, descriptive names, and test coverage for new logic.

## Tooling and commands

Use the repository scripts in `package.json`:

- `pnpm dev` — run the Vite development server.
- `pnpm build` — compile TypeScript and build the production bundle.
- `pnpm preview` — preview the built app.
- `pnpm test` — run Vitest.
- `pnpm coverage` — run tests with coverage.
- `pnpm lint` — run ESLint.
- `pnpm format` — run Prettier.

Environment:

- Node.js `>=22`
- pnpm `>=10`

## Continuous integration

The repository uses GitHub Actions defined in `.github/workflows/node.js.yml`.
The workflow installs dependencies with `pnpm install`, then runs `pnpm lint`, `pnpm coverage`, and `pnpm build` on Node 22 and 24.

## Key files and directories

- `index.html` — application entry page
- `src/app.ts` — application bootstrap
- `src/cover/` — cover rendering components and utilities
- `src/cover/__tests__/` and similar `__tests__` folders — test files for each module
- `tsconfig.json`, `vite.config.ts`, `vitest.config.ts`, `eslint.config.js` — project configuration
- `lefthook.yml` — git hook configuration (preinstall enforces pnpm)

## Notes for agents

- Prefer edits to `src/`; do not modify `coverage/` or `dist/` unless the task is explicitly about build artifacts.
- Use existing tests as guidance when adding or refactoring behavior.
- When a task involves tooling, favor the repository-recommended commands and versions.
