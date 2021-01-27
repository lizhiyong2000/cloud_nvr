const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { WebpackManifestPlugin } = require("webpack-manifest-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const RobotstxtPlugin = require("robotstxt-webpack-plugin");

const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const HardSourceWebpackPlugin = require("hard-source-webpack-plugin");

// const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
// const smp = new SpeedMeasurePlugin();

const path = require("path");

const devMode = process.env.NODE_ENV === "development";

function join(dest) {
  return path.resolve(__dirname, dest);
}

const config = {
  optimization: {
    minimizer: [new OptimizeCSSAssetsPlugin({})],
  },
  mode: devMode ? "development" : "production",
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
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
        exclude: /node_modules/,
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
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "../index.html",
      minify: {
        removeAttributeQuotes: false, //是否删除属性的双引号
        collapseWhitespace: false, //是否折叠空白
      },
      // hash: true //是否加上hash，默认是 false
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: "public/favicon.ico", to: "../" },
        { from: "public/manifest.json", to: "../" },
      ],
    }),
    new MiniCssExtractPlugin({ filename: "app.css" }),
    new RobotstxtPlugin({ filePath: "../robots.txt" }),
    new WebpackManifestPlugin({
      fileName: "asset-manifest.json",
      publicPath: "/",
      basePath: "public/",
      writeToFileEmit: true,
      generate: (seed, files) => {
        const manifestFiles = files.reduce(function (manifest, file) {
          manifest[file.name] = file.path;
          return manifest;
        }, seed);

        return {
          files: manifestFiles,
        };
      },
    }),
  ].concat(devMode ? [new HardSourceWebpackPlugin()] : []),
};

// module.exports = smp.wrap(config)
module.exports = config;
