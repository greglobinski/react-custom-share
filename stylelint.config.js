module.exports = {
  processors: ['stylelint-processor-glamorous'],
  plugins: ['stylelint-order'],
  extends: 'stylelint-config-standard',
  rules: {
    'order/order': ['custom-properties', 'declarations'],
    'order/properties-alphabetical-order': true,
    'no-missing-end-of-source-newline': false,
  },
};
