exports.onPreInit = () => {
  console.log("Loaded my-plugin!");
};

exports.createPages = async ({ actions }) => {
  const { createPage } = actions;

  createPage({
    path: "/custom-plugin-page",
    component: require.resolve("./src/templates/custom-page.js"),
    context: {
      message: "Hello from the plugin!"
    },
  });
};
