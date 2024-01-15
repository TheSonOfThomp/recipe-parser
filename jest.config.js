/** @type {import('jest').Config} */
const config = {
  verbose: true,
  testPathIgnorePatterns: ["<rootDir>/dist"],
  testEnvironment: "jsdom"
};

module.exports = config;