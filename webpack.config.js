const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ConcatPlugin = require('webpack-concat-plugin');
const PubChangesWebpackPlugin = require('@modem/pub-changes-plugin');
const fs = require('fs');

module.exports = function (env) {
    let isWatchAndPublishMode = false
    let isPublishMode = false;

    if (env) {
        isWatchAndPublishMode = env.mode == 'watch-and-publish';
        isPublishMode = env.mode == 'publish';
    }

    let plugins = [

        new MiniCssExtractPlugin({
            filename: 'mdm.tpl.content/style.css',
        }),

        new ConcatPlugin({
            uglify: false,
            sourceMap: true,
            name: 'site',
            fileName: 'mdm.tpl.pkg/4.js',
            filesToConcat: [
                ['./Scripts/videomonitoring/view/**/*.js'],
				["./Scripts/videomonitoring/masterdirectory/src/*.ts"]
            ],
            attributes: {
                async: false
            }
        })

    ];

    if (isWatchAndPublishMode || isPublishMode) {

        let path = readFrontEndPath();

        if (path)
            plugins.push(new PubChangesWebpackPlugin({
                packageName: 'videomonitoring-master-directory-js',
                frontendPath: path
            }));
    }

    return {
        entry: { 'app': './Scripts/globalexports.ts' },

        devtool: 'source-map',

        watch: isWatchAndPublishMode,

        watchOptions: {
            ignored: ['mdm.tpl.content/**/*.js', "mdm.tpl.pkg/**/*.js", 'node_modules/**']
        },

        module: {
            rules: [
                {
                    test: /\.js$/,
                    use: ["source-map-loader"],
                    exclude: /reflect-metadata/,
                    enforce: "pre"
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
            ]
        },

        resolve: {
            extensions: ['.jsx', '.tsx', '.ts', '.js']
        },

        output: {
            path: path.resolve(__dirname, '.'),
            filename: "mdm.tpl.pkg/2.js",
            library: "ModemVideoMonitoring",
            libraryTarget: 'global'
        },

        mode: 'development',
        optimization: {
            minimize: false
        },

        externals: {},

        plugins: plugins
    }
};


function readFrontEndPath() {
    try {
        let path = fs.readFileSync('frontendpath.txt', 'utf8');
        console.log('frontendpath: ' + path);
        return path.trim();
    } catch (e) {
        console.log(e);
    }
}
