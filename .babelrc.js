//const isTest = String(process.env.NODE_ENV) === 'test';

module.exports = {
  plugins: ['transform-class-properties', 'transform-object-rest-spread', 'transform-react-jsx'],
  presets: ['env', 'react'],
  //presets: [['env', { modules: isTest ? 'commonjs' : false }], 'react'],
};
