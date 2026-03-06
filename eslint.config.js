import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import reactPlugin from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

const jsFiles = ["**/*.{js,mjs,cjs,jsx}"];
const tsFiles = ["**/*.{ts,mts,cts,tsx}"];
const sourceFiles = ["src/**/*.{js,mjs,cjs,jsx,ts,mts,cts,tsx}"];
const reactFiles = ["src/**/*.{jsx,tsx}"];

export default defineConfig([
  {
    ignores: ["dist", "node_modules"],
  },
  {
    files: jsFiles,
    ...js.configs.recommended,
  },
  ...tseslint.configs.recommended.map((config) => ({
    ...config,
    files: tsFiles,
  })),
  {
    files: sourceFiles,
    languageOptions: {
      globals: globals.browser,
    },
  },
  {
    files: reactFiles,
    ...reactPlugin.configs.flat.recommended,
    languageOptions: {
      ...reactPlugin.configs.flat.recommended.languageOptions,
      globals: {
        ...(reactPlugin.configs.flat.recommended.languageOptions?.globals ?? {}),
        ...globals.browser,
      },
    },
    settings: {
      react: {
        version: "19.0",
      },
    },
  },
  {
    files: reactFiles,
    ...reactPlugin.configs.flat["jsx-runtime"],
  },
]);
