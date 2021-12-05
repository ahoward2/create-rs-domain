module.exports = {
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json", ".md"],
  },

  output: {
    publicPath: "http://localhost:1002/",
  },

  devServer: {
    port: 1002,
  },

  module: {
    rules: [
      {
        test: /\.m?js/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },

  plugins: [],
};
