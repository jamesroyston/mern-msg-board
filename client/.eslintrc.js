module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react", "eslint-plugin-no-unused-react-component-methods"
    ],
    "rules": {
        'no-unused-expressions': [
            'error',
            {
              allowShortCircuit: true,
              allowTernary: true,
              allowTaggedTemplates: true,
            },
          ],

    }
};