const { getDefaultConfig } = require('expo/metro-config');

const defaultConfig = getDefaultConfig(__dirname);

module.exports = {
  resolver: {
    assetExts: [...defaultConfig.resolver.assetExts, 'db'],
  },
};

async function openDatabase(pathToDatabaseFile) {
    if (!(await FileSystem.getInfoAsync(FileSystem.documentDirectory + 'SQLite')).exists) {
      await FileSystem.makeDirectoryAsync(FileSystem.documentDirectory + 'SQLite');
    }
    await FileSystem.downloadAsync(
      Asset.fromModule(require(pathToDatabaseFile)).uri,
      FileSystem.documentDirectory + 'SQLite/AAA.db'
    );
    return SQLite.openDatabase('AAA.db');
  }