module.exports = {
  extend: 'apostrophe-custom-pages',
  name: 'pk-pattern-library',
  label: 'Pattern Library',
  slug: '/styleguide',
  construct: function (self, options, callback) {
    const config = require('./lib/config.js')(self, options);
    require('./lib/helpers.js')(self, options);
    require('./lib/routes.js')(self, { config: config });
    require('./lib/tasks')(self, { config: config });
    return callback(null);
  },
  afterConstruct: function (self) {
    self.pushAsset('script', 'always', { when: 'always' });
    self.pushAsset('stylesheet', 'vendor/highlight', { when: 'always' });
    self.pushAsset('stylesheet', 'vendor/skeleton', { when: 'always' });
    self.pushAsset('stylesheet', 'always', { when: 'always' });
  }
};
