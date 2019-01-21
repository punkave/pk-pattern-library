module.exports = function (self, options) {
  // The main route that handles rendering the styleguide.
  // Looks for a slug config. If none is present, defaults to
  // '/styleguide'

  self.apos.app.get(self.options.slug, function (req, res) {
    return self.sendPage(req, self.renderer('styleguide'),
      {
        'config': options.config,
        'slug': self.options.slug
      }
    );
  });

  // Create a route that takes a 'group' and 'component',
  // and returns the rendered component.html that it correlates with.
  // Useful in rendering full screen versions of components.

  self.apos.app.get(self.options.slug + '/:group/:component', function (req, res) {
    let group = req.params.group;
    let component = req.params.component;
    return self.sendPage(req, self.renderer(`components/${group}/${component}/component.html`));
  });
};
