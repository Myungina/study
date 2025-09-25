import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  { 
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"], 
     resolve: {
      alias: {
      '@': path.resolve(__dirname, 'src/*'),
    },
      extensions: [".ts", ".tsx", ".js", ".jsx"],
      
    },
    parser: "babel-eslint",
    parserOptions: {
        "ecmaFeatures": {
        "jsx": true
    }
    },
    plugins: { react }, 
    extends: ["eslint:recommended", "plugin:react/recommended"], 
    languageOptions: { globals: globals.browser }   ,
    rules: {
        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "error",
    },
    
    settings: {
      "import/resolver": {
        "node": {
          "paths": ["src"] //절대경로 설정
        }
      },
        "react": {
        "createClass": "createReactClass", // Regex for Component Factory to use,
                                          // default to "createReactClass"
        "pragma": "React",  // Pragma to use, default to "React"
        "fragment": "Fragment",  // Fragment to use (may be a property of <pragma>), default to "Fragment"
        "version": "detect", // React version. "detect" automatically picks the version you have installed.
                            // You can also use `16.0`, `16.3`, etc, if you want to override the detected value.
                            // Defaults to the "defaultVersion" setting and warns if missing, and to "detect" in the future
        "defaultVersion": "", // Default React version to use when the version you have installed cannot be detected.
                              // If not provided, defaults to the latest React version.
        "flowVersion": "0.53" // Flow version
      },
      "propWrapperFunctions": [
          // The names of any function used to wrap propTypes, e.g. `forbidExtraProps`. If this isn't set, any propTypes wrapped in a function will be skipped.
          "forbidExtraProps",
          {"property": "freeze", "object": "Object"},
          {"property": "myFavoriteWrapper"},
          // for rules that check exact prop wrappers
          {"property": "forbidExtraProps", "exact": true}
      ],
      "componentWrapperFunctions": [
          // The name of any function used to wrap components, e.g. Mobx `observer` function. If this isn't set, components wrapped by these functions will be skipped.
          "observer", // `property`
          {"property": "styled"}, // `object` is optional
          {"property": "observer", "object": "Mobx"},
          {"property": "observer", "object": "<pragma>"} // sets `object` to whatever value `settings.react.pragma` is set to
      ],
      "formComponents": [
        // Components used as alternatives to <form> for forms, eg. <Form endpoint={ url } />
        "CustomForm",
        {"name": "SimpleForm", "formAttribute": "endpoint"},
        {"name": "Form", "formAttribute": ["registerEndpoint", "loginEndpoint"]}, // allows specifying multiple properties if necessary
      ],
      "linkComponents": [
        // Components used as alternatives to <a> for linking, eg. <Link to={ url } />
        "Hyperlink",
        {"name": "MyLink", "linkAttribute": "to"},
        {"name": "Link", "linkAttribute": ["to", "href"]}, // allows specifying multiple properties if necessary
      ]
    }

  },
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
]);
