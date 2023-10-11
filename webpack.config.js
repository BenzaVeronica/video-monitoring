const webpack = require('webpack');
const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const OptimizeCssAssetWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')
// const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer')
/*
https://habr.com/ru/articles/274385/
webpack.ProvidePlugin({
    '$':          'jquery',
*/
target: 'web'
// via webpack? deploy СБОРКА
//как экспортироовать react fun in another project
// with babel, just copy in dist files
//https://stackoverflow.com/questions/60480757/one-react-app-imported-into-another-react-app
//https://levelup.gitconnected.com/publish-react-components-as-an-npm-package-7a671a2fb7f
//babel + npm install [-g] minifier
//https://medium.com/@n8e/turning-your-reusable-react-component-into-an-npm-package-ca11e1bdac65

//+++MUI проблема стилей
//https://www.youtube.com/watch?v=pEHvMCC92T0&list=LL&index=10&ab_channel=Let%27sCode
//Ant кастомизация
// https://habr.com/ru/companies/vk/articles/530798/

//vendor 2 конфига 
//https://vk.com/@takeoff_staff-webpack-dlya-react
//+isDev 2
//https://stackoverflow.com/questions/49348365/webpack-4-size-exceeds-the-recommended-limit-244-kib
//+++Webpack + CSS Modules + TS = Love
//https://habr.com/ru/articles/688844/ 
//+++Integrate React JS into Sencha Ext JS
// https://hollyos.medium.com/react-in-extjs-ad3da5f2b8ab

//+++https://github.com/vladilenm/webpack-2020/blob/master/webpack.config.js
//https://github.com/Vladislav-Lukyanuk/react-webpack/blob/main/webpack.config.js

//+++Rollup
//https://habr.com/ru/articles/660285/
const mode = process.env.MODE || 'development';
const isDev = mode === 'development';
const isProd = !isDev;
// const port = process.env.PORT || 3000;

const babelOptions = preset => {
  const opts = {
    presets: [
      '@babel/preset-env'
    ],
    plugins: [
      '@babel/plugin-proposal-class-properties'
    ]
  }
  if (preset) {
    opts.presets.push(preset)
  }
  return opts
}
const jsLoaders = () => {
  const loaders = [{
    loader: 'babel-loader',
    options: babelOptions()
  }]
//   if (isDev) {
//     loaders.push('eslint-loader')
//   }
  return loaders
}

const cssLoaders = extra => {
  const loaders = [
    {
      loader: MiniCssExtractPlugin.loader,
    //   options: {
    //     hmr: isDev,
    //     reloadAll: true
    //   },
    },
    'css-loader'
  ]
  if (extra) {
    loaders.push(extra)
  }
  return loaders
}
const optimization = () => {
  const config = {
    splitChunks: {
      chunks: 'all'
    }
  }

  if (isProd) {
    config.minimizer = [
      new OptimizeCssAssetWebpackPlugin(),
      new TerserWebpackPlugin({
        terserOptions: {
          format: {
            comments: false,
          },
        },
        extractComments: false,
      })
    ]
  }

  return config
}

module.exports = {
mode: mode,
devtool: isDev ? "source-map":false,
		// watch: isWatchAndPublishMode,
		// watchOptions: {
		// 	ignored: ["mdm.tpl.content/**/*.js", "mdm.tpl.pkg/**/*.js", "node_modules/**"],
		// },
// devServer: {
// 	port: 3001,
// 	hot: true,
// },
entry: {
	main: './src/index.ts',
},
output: {
	path: path.resolve(__dirname,"dist"),
	filename: '[name].[contenthash].js',
},
		// output: {
		// 	path: path.resolve(__dirname, "."),
		// 	filename: "mdm.tpl.pkg/2.js",
		// 	library: "ModemRefData",
		// 	libraryTarget: "global",
		// },

  optimization: optimization(),
// optimization:{
// 	splitChunks:{
// 		chunks: 'all'
// 	},
// 	cacheGroups: {
// 		vendor: {
// 			chunks: 'initial',
// 			test: /[/]node_modules[/]/,
// 			name: 'vendor',
// 			enforce: true,
// 		},
// 	},
// }, 
module: {
	rules: [
	{
        test: /\.js$/,
        exclude: /node_modules/,
        use: jsLoaders()
      },
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: babelOptions('@babel/preset-typescript')
        }
      },
		//use: {
		//	loader: "ts-loader",
		//	options: {
		//		transpileOnly: true,
		//	},
		//},
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: babelOptions('@babel/preset-react')
		  // presets: ["@babel/env", "@babel/react"]
        }
      },

      {
        test: /\.less$/,
        use: cssLoaders('less-loader')
      },
      {
		// 	test: /\.(s*)css$/,
        // test: /\.s[ac]ss$/,
		test: /\.(scss|sass|css)$/,
        use: cssLoaders('sass-loader')
      },
		{
			test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
			loader: 'url-loader',
			options: {
				limit: 5000,
				name: 'mdm.tpl.content/assets/[name].[contenthash].[ext]'
			}
		}, {
			test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
			loader: 'url-loader',
			options: {
				limit: 5000,
				publicPath: function (url) {
					return url.replace(/mdm.tpl.mobile\//, '')
				},
				name: 'mdm.tpl.content/assets/[name].[contenthash].[ext]'
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
	// new HtmlWebpackPlugin({
	// 	title: "Webpack & React",
	// 	template: "./src/index.html",
	// 	favicon: "./public/favicon.ico"
	// }),

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