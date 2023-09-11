// @ts-check

/** @type {import("next").NextConfig} */
const config = {
  swcMinify: true,
  webpack: (config) => {
    return {
      ...config,
      module: {
        ...config.module,
        rules: config.module.rules.concat([
          {
            test: /\.txt$/,
            loader: "raw-loader",
          },
        ]),
      },
    };
  },
};
export default config;
