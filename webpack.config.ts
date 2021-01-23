import webpack from "webpack";
import "webpack-dev-server";
import { resolve, join } from "path";

const config: webpack.Configuration = {
  // モード値を production に設定すると最適化された状態で、
  // development に設定するとソースマップ有効でJSファイルが出力される
  mode: "development",

  // メインとなるJavaScriptファイル（エントリーポイント）
  entry: "./src/main.ts",
  // ファイルの出力設定
  output: {
    //  出力ファイルのディレクトリ名
    path: join(__dirname, "dist"),
    // 出力ファイル名
    filename: "main.js",
  },
  module: {
    rules: [
      {
        // 拡張子 .ts もしくは .tsx の場合
        test: /\.tsx?$/,
        // TypeScript をコンパイルする
        use: "ts-loader",
      },
    ],
  },
  // import 文で .ts や .tsx ファイルを解決するため
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  // ES5(IE11等)向けの指定（webpack 5以上で必要）
  target: ["web", "es5"],
  devtool: "inline-source-map",
  watchOptions: {
    ignored: /node_modules/,
  },
  devServer: {
    contentBase: join(__dirname, "dist"),
    compress: true,
    port: 8080,
    inline: true,
    hot: true,
    open: true,
    watchContentBase: true,
  },
};

export default config;
