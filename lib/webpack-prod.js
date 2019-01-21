const pkWebpack = require('pk-webpack');
const path = require('path');
const appRoot = path.resolve(__dirname, '../');
pkWebpack(
  {
    'appRoot': appRoot,
    'env': 'prod'
  }
);
