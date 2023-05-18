const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./index.jsx",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  plugins: [new HtmlWebpackPlugin({ template: "index.html" })],
  devServer: { port: 8000 },
};
