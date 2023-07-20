import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/config";

export function buildLoaders ({isDev}: BuildOptions):webpack.RuleSetRule[] {
    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            // Creates `style` nodes from JS strings
            isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            // Translates CSS into CommonJS
            {
                loader: "css-loader",
                options: {
                    modules: {
                        auto: (resPath:string) => Boolean(resPath.includes('.module.')),
                        localIdentName: isDev
                            ? '[path][name]__[local]--[hash:base64:5]'
                            : '[hash:base64:8]'
                    },

                }
            },
            // Compiles Sass to CSS
            "sass-loader",
        ]
    }

    // если в проекте не TS, а JS то еще нужен babel-loader, который переделает на старый  js
    const typesLoader =  {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        }

    return [
        typesLoader,
        cssLoader
    ]
}
