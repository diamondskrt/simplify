module.exports = function (api) {
  api.cache(true);

  return {
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '@': './',
            'tailwind.config': './tailwind.config.js',
          },

          root: ['./'],
        },
      ],
      'react-native-worklets/plugin',
    ],

    presets: [
      [
        'babel-preset-expo',
        {
          jsxImportSource: 'nativewind',
          unstable_transformImportMeta: true,
        },
      ],
      'nativewind/babel',
    ],
  };
};
