module.exports = {
  env: {
    es6: true,
  },
  parserOptions: {
    sourceType: "module",
  },
  rules: {
    "spaced-comment": "error",
  },
  overrides: [
    {
      files: ["*.ts"],
      extends: [
        "plugin:@typescript-eslint/recommended",
      ],
      rules: {
        "global-require": "off"
      }
    }
  ]
}