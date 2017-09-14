module.exports = {
    "extends": ["airbnb", "plugin:react/all"],
    "plugins": [
        "react",
        "import"
    ],
    "rules": {
      "import/prefer-default-export": [0],
      "arrow-body-style": [0],
      "react/jsx-filename-extension": [ 1, {"extensions": [".jsx", ".js"] }],
      "react/jsx-no-literals": [ 0, { "noStrings": true }],
      "react/no-set-state": [0],
      "react/require-optimization": [0],
      "react/prefer-stateless-function": [0],
    },
    "env": {
      "browser": true,
      "node": true,
      "mocha": true,
    },
    "globals": {
      "document": false,
      "describe": false,
      "it": false,
      "beforeEach": false,
      "should": false
    },
    "parserOptions": {
      "ecmaFeatures": {
        "jsx": true
      }
    }
};
