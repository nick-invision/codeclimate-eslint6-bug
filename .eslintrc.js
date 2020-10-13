module.exports = {
  env: {
    es6: true,
  },
  parserOptions: {
    sourceType: "module",
  },
  rules: {
    "spaced-comment": 0,
  },
  extends: [
    "plugin:@typescript-eslint/recommended",
  ],
  overrides: [
    {
      files: ["*.ts"],
      rules: {
        "global-require": "off"
      }
    }
  ],
  plugins: [
    "@typescript-eslint"
  ]
}
