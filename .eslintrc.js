module.exports = {
  "env": {
    "browser": true,
    "es6": true
  },
  "extends": [
    "plugin:react/recommended",
    "airbnb",
    "prettier",
    "prettier/react"
  ],
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "plugins": [
    "prettier",
    "react"
  ],
  "rules": {
    "import/prefer-default-export": "off",
    "import/no-extraneous-dependencies": ["error", { "devDependencies": true }],
    "react/jsx-filename-extension": ["warn", { "extensions": [".js", ".jsx"] }],
    "react/jsx-props-no-spreading": "off",
    "react/forbid-prop-types": 0,
    "react/require-default-props": 0,
    "react/no-unused-prop-types": 0,
    "no-var": 2,
    "prefer-const": 1,
    "no-console": 1,
    "no-debugger": 1,
    "no-unreachable": 1,
  }
};
