const pkWebpack = require('pk-webpack');
const path = require('path');
const appRoot = path.resolve(__dirname, '../');
return pkWebpack(
  {
    "appRoot": appRoot,
    "env": "prod"
  }
);
