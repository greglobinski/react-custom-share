//const isTest = String(process.env.NODE_ENV) === 'test';

module.exports = {
  plugins: [
    'transform-class-properties',
    'transform-object-rest-spread',
    'transform-react-jsx',
    'syntax-dynamic-import',
    'dynamic-import-node',
  ],
  presets: ['env', 'react'],
};
