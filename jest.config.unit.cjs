const sharedConfig = require('./jest.config.shared.cjs');

const config = {
  testMatch: ['**/**.unit.test.js'],
  ...sharedConfig,
};

module.exports = config;
