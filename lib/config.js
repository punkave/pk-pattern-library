const _ = require('lodash');

module.exports = function (self, options) {

  // Main configuration that determines the module name,
  // and merges both default and local data.json files.

  // Grab the name, and find the module in the chain.
  const name = self.__meta.name;
  const dir = _.find(self.__meta.chain, { 'name': self.__meta.name }).dirname;

  // Retrieve the default data.json
  const masterConfig = require('../data.json')

  var localConfig;

  // Make sure there is either a local config,
  // or an empty object.
  try {
  localConfig = require(`${dir}/data.json`);
  } catch(error) {
    localConfig = {};
  }

  // Merge the default and local configurations.
  return config = _.merge(masterConfig, localConfig);

}
