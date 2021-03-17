const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')

module.exports = {
    entry: './src/main.js',
    output: {
      path: __dirname + '/dist',
      filename: 'bundle.js',
      publicPath: '/'
    },
    devServer: {
      historyApiFallback: true
    },
    module: {
        rules: [
          {
            test: /\.s[ac]ss$/i,
            use: [            
              "style-loader",              
              "css-loader",              
              "sass-loader",
            ],
          },
          {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          },
          {
            test: /\.(png|jpe?g|gif)$/i,
            use: [
              {
                loader: 'file-loader',
                options :{
                    name : '[name].[ext]',
                    outputPath : '',
                    useRelativePath : true
                }
              },
            ],
          },
        ],
    },    
    plugins : [
        new HtmlWebpackPlugin({
            template : './src/index.html',
        }),
        new FaviconsWebpackPlugin({
            logo: './src/public/icon/icon.png',
            inject: true,
        })
    ]
}