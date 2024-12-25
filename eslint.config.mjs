import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

// Get __filename and __dirname values
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Create an instance of FlatCompat with baseDirectory as __dirname
const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// Use the compat API to load the configuration in the flat config format
const eslintConfig = compat.config({
  overrides: [
    {
      files: ["**/*.js"],
      extends: ["next/core-web-vitals"],
      parserOptions: {
        ecmaVersion: 2020, // Example parser option
        sourceType: "module",
      },
      rules: {
        "no-console": "warn", // Example custom rule
      },
    },
  ],
});

export default eslintConfig;
