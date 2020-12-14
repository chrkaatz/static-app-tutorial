import path from "path";

export default {
  plugins: [
    [
      require.resolve("react-static-plugin-source-filesystem"),
      {
        location: path.resolve("./src/pages"),
      },
    ],
    require.resolve("react-static-plugin-reach-router"),
    require.resolve("react-static-plugin-sitemap"),
  ],
  webpack: (config) => {
    config.optimization = {
      usedExports: true,
    };
    return config;
  },
  silent: true,
};
