import path from "path";
import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import reactPlugin from "eslint-plugin-react";
import tailwindPlugin from "eslint-plugin-tailwindcss";
import { defineConfig } from "eslint/config";

const jsFiles = ["**/*.{js,mjs,cjs,jsx}"];
const tsFiles = ["**/*.{ts,mts,cts,tsx}"];
const sourceFiles = ["src/**/*.{js,mjs,cjs,jsx,ts,mts,cts,tsx}"];
const reactFiles = ["src/**/*.{jsx,tsx}"];
const tailwindStylesheet = path.resolve("styles/globals.css");

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
        ...(reactPlugin.configs.flat.recommended.languageOptions?.globals ??
          {}),
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
  ...tailwindPlugin.configs["flat/recommended"].map((config) => ({
    ...config,
    files: sourceFiles,
    settings: {
      ...config.settings,
      tailwindcss: {
        ...config.settings?.tailwindcss,
        callees: ["classnames", "clsx", "ctl", "cn"],
        config: tailwindStylesheet,
        cssFiles: ["src/**/*.css", "styles/**/*.css"],
      },
    },
  })),
]);
