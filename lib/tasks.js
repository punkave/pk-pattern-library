const fs = require('fs-extra');
const _ = require('lodash');
const chalk = require('chalk');
const log = console.log;

module.exports = function(self, options) {

  // Pass in our config from our app.js
  // If a local data.json is found, it is merged with the
  // boilerplate data.json shipped with this module

  const config = options.config;

  // Define the 'create' task

  self.apos.tasks.add(self.__meta.name, 'create',
    'Usage: node app ' + self.__meta.name + ':create group component\n\n' +
    'This task will scaffold a new component view, and data.json configuration.',
    function (apos, argv, callback) {
      return self.createComponent(callback);
    }
  );

  // Creates a folder structure with a 'component.html',
  // and 'markdown.html' file, using the ${group} and ${name}
  // values specified when calling the task

  self.createComponent = function (callback) {
    const name = self.__meta.name;
    const argv = self.apos.argv;
    const dir = `./lib/modules/${name}`;
    if (argv._.length !== 3) {
      // eslint-disable-next-line
      return callback('Incorrect number of arguments.');
    }
    var group = argv._[1];
    var component = argv._[2];

    // Ensure the directory exists

    fs.ensureDirSync(dir + `/views/components/${group}/${component}`, (err) => {
      if (err) {
        return callback(err);
      }
    });

    // Create a blank component.html file within the directory


    fs.writeFile(dir + `/views/components/${group}/${component}/component.html`, (err) => {
      if (err) {
        return callback(err);
      }
    });

    // Create a blank markup.html file within the directory

    fs.writeFile(dir + `/views/components/${group}/${component}/markup.html`, (err) => {
      if (err) {
        return callback(err);
      }
    });

    // If there is no group by that name, create a new group within the array.

    if (!config.groups.find(x => x.name === `${group}`)) {
      config.groups.push({
        /* eslint-disable */
        "name": `${group}`,
        "title": `${group}`,
        "description": null,
        "components": []
        /* eslint-enable */
      });
    }

    // Push the component into the array of components, within the group.

    let configGroup = config.groups.find(x => x.name === `${group}`);
    configGroup.components.push({
      /* eslint-disable */
      "name": `${group}/${component}`,
      "title": `${component}`,
      "description": null,
      "options": {
          "size": "half"
      /* eslint-enable */
      }
    });

    // Merge the two configs and save.

    fs.writeFileSync(`${dir}/data.json`, JSON.stringify(config, null, 2), 'utf8');
    log(chalk.green('Component created successfully'));
    return callback(null);
  };
}
