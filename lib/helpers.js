const convert = require('color-convert');

module.exports = function (self, options) {
  self.apos.templates.addHelpers({
    isObject: (value) => {
      if (typeof value === 'object') {
        return true;
      }
      return false;
    },
    hexToCmyk: (hex) => {
      return convert.hex.cmyk(hex);
    }
  });
};
