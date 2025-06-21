import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      globals: { ...globals.browser, ...globals.node }, // Adding Node.js globals if needed
      sourceType: "module", // Assuming modern JS usage
    },
    plugins: {
      js,
    },
    extends: [
      "js/recommended",
      // Other relevant configurations can go here
    ],
  },
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "script",
    },
  },
]);
