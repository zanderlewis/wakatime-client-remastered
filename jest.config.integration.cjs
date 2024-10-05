const sharedConfig = require('./jest.config.shared.cjs');

const config = {
  testMatch: ['**/**.integration.test.js'],
  ...sharedConfig,
};

module.exports = config;
