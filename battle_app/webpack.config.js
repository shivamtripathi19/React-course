const path = require("path");
const Dotenv = require("dotenv-webpack");
const HTMlWebpackPlugin = require("html-webpack-plugin");
module.exports = (env)=>({
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        use: "babel-loader",
      },
      {
        test: /\.(css)$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },

  mode: "development",
  plugins: [
    new HTMlWebpackPlugin({
      template: "public/index.html",
    }),
    new Dotenv({path: env.ENVIRONMENT ? `./.env.${env.ENVIRONMENT}` : './.env' ,systemvars: true }),
  ],
});
