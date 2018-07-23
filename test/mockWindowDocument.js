import { JSDOM } from 'jsdom';

const documentHTML = '<!doctype html><html><body></body></html>';
global.document = new JSDOM(documentHTML);
global.window = document.parentWindow;

Object.defineProperty(global.document.documentElement, 'clientWidth', {
  get() {
    return 1024;
  },
  enumerable: true,
  configurable: true,
});

Object.defineProperties(window.HTMLElement.prototype, {
  offsetLeft: {
    get: function() {
      return parseFloat(window.getComputedStyle(this).marginLeft) || 0;
    },
  },
  offsetTop: {
    get: function() {
      return parseFloat(window.getComputedStyle(this).marginTop) || 0;
    },
  },
  offsetHeight: {
    get: function() {
      return parseFloat(window.getComputedStyle(this).height) || 0;
    },
  },
  offsetWidth: {
    get: function() {
      if (this.getAttribute('data-testid') === 'rcs-block') {
        return 600;
      } else if (this.getAttribute('data-testid') === 'rcs-fixed-buttons') {
        return 44;
      } else {
        return 0;
      }
    },
  },
});

global.window.resizeTo = width => {
  Object.defineProperty(global.document.documentElement, 'clientWidth', {
    get() {
      return width;
    },
  });

  global.window.dispatchEvent(new Event('resize'));
};
