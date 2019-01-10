module.exports = {
  extend: 'apostrophe-custom-pages',
  name: 'pk-pattern-library',
  label: 'Pattern Library',
  slug: '/styleguide',
  construct: function (self, options, callback) {

    const config = require('./lib/config.js')(self, options);

    require('./lib/helpers.js')(self, options);
    require('./lib/routes.js')(self, options);
    require('./lib/tasks')(self, { config: config });

    return callback(null);
  },
  afterConstruct: function (self) {
    self.pushAsset('script', 'markupToggle', { when: 'always' });
    self.pushAsset('script', 'navigationToggle', { when: 'always' });
    self.pushAsset('script', 'toggleFullWidth', { when: 'always' });
  }
};
