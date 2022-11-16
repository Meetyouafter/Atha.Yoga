const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const isProd = process.env.NODE_ENV === "production";
const isDev = !isProd;

module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: "development",
  target: "web",
  entry: "./index.jsx",
  devtool:"eval-source-map",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[hash].js",
    clean: true,
    publicPath: "/",
  },
  devServer: {
    static: "./dist",
    hot: true,
    port: 8080,
    open: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Output Management",
      template: "./index.html",
      favicon: "./favicon.ico",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.s?css$/i,
        use: ["style-loader", "css-loader", "scoped-css-loader", "sass-loader"],
      },
      {
        test: /\.js|jsx$/,
        enforce: "pre",
        use: ["source-map-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
        type: "asset/resource",
        generator: {
          filename: "assets/images/[name].[ext]",
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
        generator: {
          filename: "assets/fonts/[name].[ext]",
        },
      },
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              [
                "@babel/preset-react"
              ],
            ],
          },
        },
      },
    ],
  },
};
