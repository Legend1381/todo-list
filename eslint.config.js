import baseConfig from "eslint-config-vuetify";

export default [
  ...baseConfig,
  {
    rules: {
      "@stylistic/quotes": ["error", "double"],
      "vue/script-indent": [
        "error",
        TYPE,
        {
          baseIndent: 0,
          switchCase: 0,
          ignores: [],
        },
      ],
    },
  },
];
