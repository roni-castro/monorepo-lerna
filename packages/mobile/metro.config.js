const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');

const packagesRoot = path.resolve(__dirname, '..');
const projectRoot = __dirname;
const config = getDefaultConfig(projectRoot);

module.exports = {
  ...config,
  watchFolders: [packagesRoot], // Watch all files within the monorepo
  resolver: {
    nodeModulesPaths: [
      // Let Metro know where to resolve packages, and in what order
      path.resolve(projectRoot, 'node_modules'),
      path.resolve(packagesRoot, 'node_modules'),
    ],
  },
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
};
