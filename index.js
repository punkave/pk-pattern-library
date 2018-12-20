const fs = require('fs-extra');
const _ = require('lodash');

module.exports = {
  extend: 'apostrophe-custom-pages',
  name: 'pk-pattern-library',
  label: 'Pattern Library',
  slug: '/styleguide',
  construct: function (self, options, callback) {
    self.apos.templates.addHelpers({
      hexToRGB: (hex) => {
        let r = parseInt(hex.slice(1, 3), 16);
        let g = parseInt(hex.slice(3, 5), 16);
        let b = parseInt(hex.slice(5, 7), 16);
        if ((r * 0.299 + g * 0.587 + b * 0.114) > 186) {
          return false;
        } else {
          return true;
        }
      }
    });
    const name = self.__meta.name;
    const dir = _.find(self.__meta.chain, { 'name': self.__meta.name }).dirname;
    const masterConfig = require('./data.json')
    var localConfig;
    try {
    localConfig = require(`${dir}/data.json`);
    } catch(error) {
      localConfig = {};
    }
    const config = _.merge(masterConfig, localConfig);
    self.apos.app.get(self.options.slug, function (req, res) {
      return self.sendPage(req, self.renderer('styleguide'),
        {
          'config': config,
          'slug': self.options.slug
        }
      );
    });
    self.apos.app.get(self.options.slug + '/:group/:component', function (req, res) {
      let group = req.params.group;
      let component = req.params.component;
      return self.sendPage(req, self.renderer(`components/${group}/${component}/component.html`));
    });
    self.apos.tasks.add(self.__meta.name, 'create',
      'Usage: node app ' + self.__meta.name + ':create group component\n\n' +
      'This task will scaffold a new component view, and data.json configuration.',
      function (apos, argv, callback) {
        return self.createComponent(callback);
      }
    );
    self.createComponent = function (callback) {
      const argv = self.apos.argv;
      const dir = `./lib/modules/${name}`;
      if (argv._.length !== 3) {
        // eslint-disable-next-line
        return callback('Incorrect number of arguments.');
      }
      var group = argv._[1];
      var component = argv._[2];
      console.log(component);
      fs.ensureDirSync(dir + `/views/components/${group}/${component}`, (err) => {
        if (err) {
          return callback(err);
        }
      });
      fs.writeFile(dir + `/views/components/${group}/${component}/component.html`, (err) => {
        if (err) {
          return callback(err);
        }
      });
      fs.writeFile(dir + `/views/components/${group}/${component}/markup.html`, (err) => {
        if (err) {
          return callback(err);
        }
      });
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
      fs.writeFileSync(`${dir}/data.json`, JSON.stringify(config, null, 2), 'utf8');
      return callback(null);
    };
    return callback(null);
  },
  afterConstruct: function (self) {
    self.pushAsset('script', 'markupToggle', { when: 'always' });
    self.pushAsset('script', 'navigationToggle', { when: 'always' });
    self.pushAsset('script', 'toggleFullWidth', { when: 'always' });
  }
};
