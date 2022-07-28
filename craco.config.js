const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@ENV': path.resolve(__dirname, 'src/envs/index.ts'),
    },
  },
  plugins: [
    {
      plugin: {
        overrideWebpackConfig: ({webpackConfig}) => {
          const oneOfRule = webpackConfig.module.rules.find((rule) => rule.oneOf);
          if (oneOfRule) {
            const tsxRule = oneOfRule.oneOf.find(
              (rule) => rule.test && rule.test.toString().includes('tsx'),
            );

            const newIncludePaths = [
              // relative path to my yarn workspace library
              // path.resolve(__dirname, '../shared/types/'),
              // path.resolve(__dirname, '../shared/repositories/'),
              // path.resolve(__dirname, '../shared/envs/'),
              // path.resolve(__dirname, '../shared/assets/'),
              // path.resolve(__dirname, '../shared/charts/'),
              // path.resolve(__dirname, '../shared/util/'),
              // path.resolve(__dirname, '../shared/const/'),
              // path.resolve(__dirname, '../shared/models/'),
            ];
            if (tsxRule) {
              if (Array.isArray(tsxRule.include)) {
                tsxRule.include = [...tsxRule.include, ...newIncludePaths];
              } else {
                tsxRule.include = [tsxRule.include, ...newIncludePaths];
              }
            }
          }
          return webpackConfig;
        },
      },
    },
  ],
};
