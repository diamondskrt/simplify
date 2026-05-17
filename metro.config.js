const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');

const config = getDefaultConfig(__dirname);

// Исправляем резолвинг tslib для web
config.resolver.resolveRequest = (context, moduleName, platform) => {
  if (moduleName === 'tslib') {
    // Принудительно указываем на ES модуль или основной файл
    // Используйте require.resolve, чтобы найти точный путь в вашей файловой системе
    return context.resolveRequest(context, require.resolve('tslib/tslib.es6.js'), platform);
  }
  return context.resolveRequest(context, moduleName, platform);
};

module.exports = withNativeWind(config, { input: './global.css' });
