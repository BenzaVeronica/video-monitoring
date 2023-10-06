const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const mode = process.env.MODE || 'development';
// const port = process.env.PORT || 3000;

module.exports = {
mode: mode,
		// devtool: 'inline-source-map',
devtool: "source-map",
		// watch: isWatchAndPublishMode,
		// watchOptions: {
		// 	ignored: ["mdm.tpl.content/**/*.js", "mdm.tpl.pkg/**/*.js", "node_modules/**"],
		// },
entry: ['./src/index.ts'],
output: {
	path: path.resolve(__dirname,"dist"),
	filename: '[name].[hash].js',
},
		// output: {
		// 	path: path.resolve(__dirname, "."),
		// 	filename: "mdm.tpl.pkg/2.js",
		// 	library: "ModemRefData",
		// 	libraryTarget: "global",
		// },
		// optimization: { minimize: false, },
		// externals: {},
optimization:{
	splitChunks:{
		chunks: 'all'
	}
},
module: {
	rules: [
		{
			test: /\.(js|jsx)$/,
			exclude: /node_modules/,
			use: ["babel-loader"],
		},
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader',

						options: {
							presets: ["@babel/env", "@babel/react"]
						}
					}
				]
			},
			{
				test: /\.ts(x?)$/,
				use: [
					{
						loader: "ts-loader",
						options: {
							transpileOnly: true,
						},
					},
				],
				exclude: /node_modules/,
			},
		{
			test: /\.s(a|c)ss$/,
			exclude: /node_modules/,
			use: [
				production ? MiniCssExtractPlugin.loader : 'style-loader',
				{
					loader: 'css-loader',
					options: {
						modules: true,
						sourceMap: !production
					}
				},
				{
					loader: 'sass-loader',
					options: {
						sourceMap: !production
					}
				}
			]
		},
			{
				test: /\.styl(us)?$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'stylus-loader',
				],

			},
			{
				test: /\.(s*)css$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader', "sass-loader"],
			}, {
				test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
				loader: 'url-loader',
				options: {
					limit: 5000,
					name: 'mdm.tpl.content/assets/[name].[hash:8].[ext]'
				}
			}, {
				test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
				loader: 'url-loader',
				options: {
					limit: 5000,
					publicPath: function (url) {
						return url.replace(/mdm.tpl.mobile\//, '')
					},
					name: 'mdm.tpl.content/assets/[name].[hash:8].[ext]'
				}
			}

	],
},

resolve: {
	extensions: [".js", ".jsx", ".ts", ".tsx"],
},

plugins: [
	new CleanWebpackPlugin(),
	// new webpack.HotModuleReplacementPlugin(),
	new HtmlWebpackPlugin({
		title: "Webpack & React",
		template: "./src/index.html",
		favicon: "./public/favicon.ico"
	}),
	// new MiniCssExtractPlugin({
	// 	filename: "mdm.tpl.content/style.css",
	// }),
	new MiniCssExtractPlugin({
		filename: '[name].[contenthash].css',
	}),
	// new ConcatPlugin({
	// 	uglify: false,
	// 	sourceMap: true,
	// 	name: "site",
	// 	outputPath: ".",
	// 	fileName: "mdm.tpl.pkg/4.js",
	// 	filesToConcat: [
	// 		// ["./Scripts/refdata/planning/drillingblock/**/*.js"],
	// 		["./Scripts/refdata/common/**/*.js"],
	// 		["./Scripts/refdata/classifier/**/*.js"],
	// 		["./Scripts/refdata/planning/wellboreStage/**/*.js"],
	// 		["./Scripts/refdata/refmode/**/*.js"],
	// 		["./Scripts/refdata/support/**/*.js"],
	// 		["./Scripts/refdata/planning/drillingblockschedule/*.js"],
	// 	],
	// 	attributes: {
	// 		async: false,
	// 	},
	// }),
],
// for hotplugin
// devServer: {
// 	port: 3001,
// 	hot: true,
// }



//   module: {
//     rules: [
//       {
//         test: /\.(js)$/,
//         exclude: /node_modules/,
//         use: [
//           {
//             loader: 'babel-loader',
//             options: {
//               plugins: [require('react-refresh/babel')].filter(Boolean),
//             },
//           },
//         ],
//       },
//       {
//         test: /\.css$/,
//         use: [
//           {
//             loader: 'style-loader',
//             options: {
//               esModule: true,
//               modules: {
//                 namedExport: true,
//               },
//             },
//           },
//           {
//             loader: 'css-loader',
//             options: {
//               esModule: true,
//               modules: {
//                 compileType: 'module',
//                 mode: 'local',
//                 exportLocalsConvention: 'camelCaseOnly',
//                 namedExport: true,
//               },
//             },
//           },
//         ],
//       },
//     ],
//   },
//   optimization: {
//     splitChunks: {
//       cacheGroups: {
//         vendor: {
//           chunks: 'initial',
//           test: /[/]node_modules[/]/,
//           name: 'vendor',
//           enforce: true,
//         },
//       },
//     },
//   },
//   plugins: [
//     new ReactRefreshWebpackPlugin({
//       overlay: { sockIntegration: 'wps' },
//     }),
//     new HtmlWebpackPlugin({
//       template: 'public/index.html',
//       favicon: 'public/favicon.ico',
//     }),
//     new WebpackPluginServe({
//       host: 'localhost',
//       port: port,
//       historyFallback: true,
//       open: true,
//       liveReload: false,
//       hmr: true,
//       static: './dist',
//     }),
//   ],
//   watch: true,
};