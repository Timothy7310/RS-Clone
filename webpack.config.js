const path = require('path');
const glob = require('glob').sync;
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {
    CleanWebpackPlugin,
} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

const filename = (ext) => isDev ? `[name].${ext}` : `[name].[contenthash].${ext}`;

const optimization = () => {
    const configObj = {};

    if (isProd) {
        configObj.minimizer = [
            new CssMinimizerPlugin(),
        ];
    }

    return configObj;
};

module.exports = {
    context: path.resolve(__dirname, 'src'),
    experiments: {
        topLevelAwait: true,
    },
    mode: 'development',
    entry: './index.ts',
    module: {
        rules: [{
            test: /\.html$/,
            loader: 'html-loader',
        },
        {
            test: /\.ts$/,
            include: [path.resolve(__dirname, 'src')],
            use: 'ts-loader',
        },
        {
            test: /\.css$/i,
            use: [{
                loader: MiniCssExtractPlugin.loader,
                options: {
                    hmr: isDev,
                },
            },
            'css-loader',
            ],
        },
        {
            test: /\.s[ac]ss$/,
            use: [{
                loader: MiniCssExtractPlugin.loader,
                options: {
                    publicPath: (resourcePath, context) => `${path.relative(path.dirname(resourcePath), context)}/`,
                },
            },
            'css-loader',
            'sass-loader',
            ],
        },
        {
            test: /\.(?:|gif|png|jpg|jpeg|svg)$/,
            type: 'asset/resource',
            // TODO: либо убрать хэширования только у svg, либо придумать как менять путь у svg
            generator: {
                // filename: 'img/[hash][ext][query]',
                filename: 'assets/img/[name][ext]',
            },
        },
        {
            test: /\.(?:|woff2)$/,
            type: 'asset/resource',
            generator: {
                filename: 'fonts/[hash][ext][query]',
            },
        },
        ],
    },
    output: {
        filename: 'bundle.js',
        publicPath: '',
        path: path.resolve(__dirname, 'dist'),
    },
    optimization: optimization(),
    devServer: {
        historyApiFallback: true,
        static: {
            directory: path.resolve(__dirname, 'dist'),
        },
        open: true,
        compress: true,
        hot: true,
        port: 3000,
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, 'src/index.html'),
            filename: 'index.html',
            minify: {
                collapseWhitespace: isProd,
            },
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: `./css/${filename('css')}`,
        }),
    ],
    resolve: {
        extensions: ['.ts', '.js'],
    },
    devtool: isProd ? false : 'source-map',
};
