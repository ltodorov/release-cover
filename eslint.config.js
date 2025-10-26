import { defineConfig } from "eslint/config";
import globals from "globals";
import js from "@eslint/js";
import tseslint from "typescript-eslint";

export default defineConfig([
    {
        ignores: ["node_modules", "coverage", "dist", ".github", ".vscode"],
    },
    {
        files: ["**/*.{js,mjs,cjs,ts}"],
    },
    {
        files: ["src/**/*.ts}"],
        languageOptions: {
            globals: globals.browser,
        },
    },
    {
        files: ["**/*.{js,mjs,cjs,ts}"],
        plugins: { js },
        extends: ["js/recommended"],
    },
    tseslint.configs.recommended,
]);
