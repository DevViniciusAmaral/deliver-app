module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["."],
          alias: {
            "@types": "./src/@types",
            "@assets": "./src/application/assets",
            "@components": "./src/application/components",
            "@styles": "./src/application/styles",
          },
        },
      ],
    ],
  };
};
