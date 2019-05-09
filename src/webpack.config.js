const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const AssetsPlugin = require('assets-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
var UglifyJsPlugin = require('assets-webpack-plugin');

module.exports = {
	mode: 'production',
	entry: {
		app: './js/main.js'
	},
	optimization: {
		minimizer: [new UglifyJsPlugin()],
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['env']
					}
				}
			},
			{
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === 'development',
            },
          },
          'css-loader',
        ],
      }
		]
	},

	output: {
		path: path.join(__dirname, './../static/dist'),
		filename: 'js/[name].[chunkhash].js'
	},

	resolve: {
		modules: [path.resolve(__dirname, 'src'), 'node_modules']
	},

	plugins: [
		new AssetsPlugin({
			filename: 'webpack_assets.json',
			path: path.join(__dirname, '../data'),
			prettyPrint: true
		}),
		new MiniCssExtractPlugin({
			filename: '[name].css',
			chunkFilename: '[id].css',
		})
	],
	watchOptions: {}
};
