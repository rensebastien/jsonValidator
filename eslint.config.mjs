import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  {
   
    files: ["src/**/*.js"],
    ignores: ["src/**/*.test.js"],
    languageOptions: { 
      sourceType: "module",
      globals: globals.browser 
    }
  },
  {
   
    files: ["src/**/*.test.js"],
    languageOptions: {
      sourceType: "module",
      globals: {
        ...globals.jest, 
        ...globals.node  
      }
    }
  },
  pluginJs.configs.recommended,
  {
  
    rules: {
      "no-unused-vars": "warn",
      "no-console": "warn",
      "eqeqeq": "error",
      "no-undef": "error" 
    }
  }
];