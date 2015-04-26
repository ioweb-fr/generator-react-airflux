var gulp = require('gulp');
var webpack = require('webpack');
var WebpackDevServer = require("webpack-dev-server");
var gutil = require('gulp-util');
var WebpackErrorNotificationPlugin = require('webpack-error-notification');
var path = require("path");
var del = require("del");
var runSequence = require('run-sequence');

function webpackConfig(live) {
  return {
    eslint: {
      configFile: "./.eslintrc"
      //failOnWarning: true,
      //failOnError: true
    },
    entry: [
      'webpack-dev-server/client?http://0.0.0.0:3000', // WebpackDevServer host and port
      'webpack/hot/only-dev-server',
      "./web/app.jsx"
    ],
    output: {
      path: "./dist",
      publicPath: "/"
    },
    module: {
      preLoaders: [
      //  {test: /\.jsx?$/, loader: "eslint-loader", exclude: /node_modules/}
      ],
      loaders: [
        {test: /\.jsx?/, exclude: /node_modules/, loaders: ["react-hot", "babel-loader"]},
        {test: /\.jsx?/, include: /simod/, loaders: ["babel-loader"]},
        {test: /\.json/, loader: "json-loader"},
        {test: /\.(png|jpg|jpeg|gif|svg)/, loader: "url-loader?limit=10000"},
        {test: /\.woff2?/, loader: "url-loader?limit=100000"},
        {test: /\.(ttf|eot)/, loader: "file-loader"},
        {test: /\.html/, loader: "html-loader"},
        {test: /\.(css|less)/, loader: "style-loader!css-loader!less-loader"}
      ]
    },
    resolve: {
      root: path.join(__dirname, "web/app"),
      modulesDirectories: ["web_modules", "node_modules"],
      extensions: ["", ".web.js", ".js", ".jsx"]
    },
    plugins: [
      new webpack.DefinePlugin({
        "process.env": {
          NODE_ENV: JSON.stringify("dev"),
          IS_LIVE: live
        }
      }),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin(),
      new WebpackErrorNotificationPlugin( /* strategy */ ),
      new webpack.PrefetchPlugin("react"),
      new webpack.PrefetchPlugin("react/lib/ReactComponentBrowserEnvironment")
    ]
  };
}

gulp.task("default", ["webpack-dev-server"]);

gulp.task("build", function (cb) {
  runSequence("clean", "webpack:build", "copy-index", cb);
});

gulp.task("clean", function (cb) {
  del(["./dist"], cb);
});

gulp.task("copy-index", function () {
  return gulp.src('./index.html')
      .pipe(gulp.dest('./dist'));
});


gulp.task("webpack:build", function(callback) {
  webpack(webpackConfig(false), function(err, stats) {
    if(err) throw new gutil.PluginError("webpack:build", err);
    gutil.log("[webpack:build]", stats.toString({
      colors: true
    }));
    callback();
  });
});


gulp.task("webpack-dev-server", function(callback) {
  var myCfg = Object.create(webpackConfig(true));
  myCfg.devtool = "eval";
  myCfg.debug = true;
  myCfg.output.path = "/dist";
  new WebpackDevServer(webpack(myCfg), {
    stats: {
      colors: true
    },
    hot: true
  }).listen(3000, "localhost", function(err) {
      if(err) throw new gutil.PluginError("webpack-dev-server", err);
      gutil.log("[webpack-dev-server]", "http://localhost:3000/webpack-dev-server/index.html");
    });
});
