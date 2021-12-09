const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const babelrc = require('./babel.config.js');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const isProduction = process.env.NODE_ENV === "production";

const webpackConfig = {
  entry: {
    index: "./src/index.ts",
  },
  output: {
    path: path.resolve(__dirname, "lib"),
    filename: "[name].js",
    libraryTarget: "commonjs",
  },
  target: "web",
  devtool: isProduction ? "" : 'inline-source-map', // https://webpack.js.org/configuration/devtool/
  plugins: [new CleanWebpackPlugin()],
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/inline'
      },
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: babelrc.presets
            }
          }
        ],
      }, // rules to process .ts, .tsx, .js, .jsx files
      {
        test: /\.s[ac]ss$/i,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: true,
              sourceMap: true
            }
          },
          "sass-loader"],
      } /* rules to process .scss, .sass files */,
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      insert: () => { }
    })
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  externals: {
    react: 'react',
    reactDOM: 'react-dom',
  },
};

module.exports = webpackConfig;