const { override, fixBabelImports, addLessLoader, addWebpackAlias  } = require("customize-cra");
const path = require('path');


module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: true //"css" // should be true?
  }),
  addLessLoader({
    javascriptEnabled: true,
    //modifyVars: { "@primary-color": "#1DA57A" }
  }),
  addWebpackAlias({
    api: path.resolve(__dirname, './src/services/'),
    components: path.resolve(__dirname, './src/components'),
    config: path.resolve(__dirname, './src/utils/config'),
    models: path.resolve(__dirname, './src/models'),
    routes: path.resolve(__dirname, './src/routes'),
    services: path.resolve(__dirname, './src/services'),
    themes: path.resolve(__dirname, './src/themes'),
    utils: path.resolve(__dirname, './src/utils'),
  })
);
