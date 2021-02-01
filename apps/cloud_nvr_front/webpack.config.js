const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { WebpackManifestPlugin } = require("webpack-manifest-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const RobotstxtPlugin = require("robotstxt-webpack-plugin");

const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const HardSourceWebpackPlugin = require("hard-source-webpack-plugin");
// const TerserPlugin = require("terser-webpack-plugin");
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
//
// const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
// const smp = new SpeedMeasurePlugin();

const path = require("path");
const fs = require("fs");

const lessToJs = require("less-vars-to-js");
const themeVariables = lessToJs(
  fs.readFileSync(path.join(__dirname, "./src/ant-theme-vars.less"), "utf8")
);

// console.log(process.env.NODE_ENV)

const devMode = process.env.NODE_ENV === "development";

function join(dest) {
  return path.resolve(__dirname, dest);
}

const config = {
  optimization: {
    minimize: true,
    minimizer: [
      // new TerserPlugin(),
      new OptimizeCSSAssetsPlugin({}),
    ],
  },
  // mode: devMode ? "development" : "production",
  mode: "production",
  cache: {
    type: "filesystem",
    cacheDirectory: path.resolve(__dirname, ".temp_cache"),
  },
  entry: {
    app: "./src/index.js",
  },
  output: {
    path: join("../cloud_nvr_web/priv/static/assets"),
    filename: "[name].js",
    publicPath: "/assets/",
  },
  module: {
    rules: [
      // {
      //   loader:'webpack-ant-icon-loader',
      //   enforce: 'pre',
      //   // options:{
      //   //   chunkName:'antd-icons'
      //   // },
      //   include:[
      //     require.resolve('@ant-design/icons/lib')
      //   ]
      // },
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          plugins: [
            [
              "import",
              {
                libraryName: "antd",
                libraryDirectory: "es",
                style: "css",
              },
            ],
            [
              "import",
              {
                libraryName: "@ant-design/icons",
                libraryDirectory: "es/icons",
                camel2DashComponentName: false,
              },
              "@ant-design/icons",
            ],
          ],
        },
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.less$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          {
            loader: "less-loader",
            options: {
              lessOptions: {
                modifyVars: themeVariables,
                javascriptEnabled: true,
              },
            },
          },
        ],
      },
      {
        test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/,
        use: "file-loader",
      },
      {
        test: /\.ico$|\.json$/,
        use: "file-loader?name=[name].[ext]",
      },
    ],
  },
  plugins: [
    // new CleanWebpackPlugin(),
    // new BundleAnalyzerPlugin(),
    new HtmlWebpackPlugin({
      favicon: "./public/favicon.ico",
      template: "./public/index.html",
      filename: "../index.html",
      minify: {
        removeAttributeQuotes: false, //是否删除属性的双引号
        collapseWhitespace: false, //是否折叠空白
      },
      // hash: true //是否加上hash，默认是 false
    }),
    // new CopyWebpackPlugin({
    //   patterns: [
    //     { from: "public/favicon.ico", to: "../" },
    //     { from: "public/manifest.json", to: "../" },
    //   ],
    // }),
    new MiniCssExtractPlugin({ filename: "app.css" }),
    new RobotstxtPlugin({ filePath: "../robots.txt" }),
    // new WebpackManifestPlugin({
    //   fileName: "asset-manifest.json",
    //   publicPath: "/",
    //   basePath: "public/",
    //   writeToFileEmit: true,
    //   generate: (seed, files) => {
    //     const manifestFiles = files.reduce(function (manifest, file) {
    //       manifest[file.name] = file.path;
    //       return manifest;
    //     }, seed);
    //
    //     return {
    //       files: manifestFiles,
    //     };
    //   },
    // }),
  ].concat(devMode ? [new HardSourceWebpackPlugin()] : []),

  watchOptions: {
    poll: 500,
    ignored: "node_modules/**",
  },
};

// module.exports = smp.wrap(config)
module.exports = config;
