/* eslint no-console:0  */
require('core-js/fn/object/assign');
const webpack = require('webpack');
const config = require('./webpack.config');
const express = require('express');
const Dashboard = require('webpack-dashboard');
const DashboardPlugin = require('webpack-dashboard/plugin');
const path = require('path');

const app = express();
const compiler = webpack(config);
var dashboard = new Dashboard();
compiler.apply(new DashboardPlugin(dashboard.setData));

app.use(require('webpack-dev-middleware')(compiler, {
  quiet: true,
  publicPath: config.output.publicPath,
}));

app.use(require('webpack-hot-middleware')(compiler, {
  log: () => {},
}));

app.use('/js', express.static('js'));
app.use('/assets', express.static('src/assets'));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname+'/src/', 'index.html'));
});

app.listen(3000, function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:3000');
});