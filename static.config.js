import path from "path";
import axios from "axios";

export default {
  getRoutes: async () => {
    const { data: newsItems } = await axios.get(
      "https://api.npoint.io/af7aa73d0609f820ed5e"
    );

    return [
      {
        path: "/news",
        getData: () => ({
          newsItems,
        }),
        children: newsItems.map((item) => ({
          path: `/${item.id}`,
          template: "src/containers/Item",
          getData: () => ({
            item,
          }),
        })),
      },
    ];
  },
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
  silent: true,
};
