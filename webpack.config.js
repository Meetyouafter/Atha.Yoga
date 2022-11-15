const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

const eslint = new ESLint(options);

module.exports = {
  mode: 'development',
target: "web",
entry: {
    main: path.join(__dirname, 'src', 'index.jsx'),
},
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
filename: '[name].[hash].js',
    clean: true,
    publicPath: '/',
  },
  devServer: {
    static: './dist',
    hot: true,
    port: 8080,
    open: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Output Management',
      template: "./src/index.html",
      favicon: "./src/favicon.ico"   
    }),
    eslint,
  ],
  module: {
    rules: [
      {
        test: /\.s?css$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
        type: 'asset/resource',
        generator: {
            filename: 'assets/images/[name].[ext]'
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
            filename: 'assets/fonts/[name].[ext]'
          }
      },
      { 
        test: /\.(html)$/, 
        use: ['html-loader'] 
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.m?jsx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
                [
                  "@babel/preset-react",
                  {
                    "pragma": "dom", // default pragma is React.createElement (only in classic runtime)
                    "pragmaFrag": "DomFrag", // default is React.Fragment (only in classic runtime)
                    "throwIfNamespace": false, // defaults to true
                    "runtime": "classic" // defaults to classic
                    // "importSource": "custom-jsx-library" // defaults to react (only in automatic runtime)
                  }
                ]
              ]
          }
        }
      }
    ],
  },
}