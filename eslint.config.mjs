import pluginJs from "@eslint/js";
import globals from "globals";


export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser, ...globals.node,
      }
    },
    ignores: [
      ".config/*",
      "node_modules/", 
    ],
    rules: {
      "no-unused-vars": ["error", {
          "vars": "local",
          "args": "after-used",
          "caughtErrors": "all",
          "argsIgnorePattern": "^_" ,
          "ignoreRestSiblings": false,
          "reportUsedIgnorePattern": false
      }]
  }
  },
  pluginJs.configs.recommended,
];