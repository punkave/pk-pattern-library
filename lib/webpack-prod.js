const pkWebpack = require('pk-webpack');
const path = require('path');
const appRoot = path.resolve(__dirname, '../');

const config = {
  'mode': 'production'
};

pkWebpack(appRoot, config);
