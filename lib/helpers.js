module.exports = function (self, options) {
  // Useful in determining if there is sufficient
  // contrast between text and colors. Used for the 'Color'
  // component type

  self.apos.templates.addHelpers({
    hexToRGB: (hex) => {
      let r = parseInt(hex.slice(1, 3), 16);
      let g = parseInt(hex.slice(3, 5), 16);
      let b = parseInt(hex.slice(5, 7), 16);
      if ((r * 0.299 + g * 0.587 + b * 0.114) > 120) {
        return false;
      } else {
        return true;
      }
    }
  });
};
