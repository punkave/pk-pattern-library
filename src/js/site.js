import markupToggle from './modules/markupToggle';
import navigationToggle from './modules/navigationToggle';

const PKPL = {};
PKPL.markupToggle = markupToggle;
PKPL.navigationToggle = navigationToggle;

if (!window.namespace) {
  window.PKPL = PKPL;
}

Object.keys(PKPL).forEach((key) => {
  if (PKPL[key].hasOwnProperty('init')) {
    PKPL[key].init();
  }
});
