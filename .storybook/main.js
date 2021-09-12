const path = require('path')

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-create-react-app',
    'storybook-addon-designs',
    '@storybook/addon-a11y',
  ],
  webpackFinal: async (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@components': path.resolve('src/components'),
      '@atoms': path.resolve('src/components/atoms'),
      '@molecules': path.resolve('src/components/molecules'),
      '@organisms': path.resolve('src/components/organisms'),
      '@pages': path.resolve('src/components/pages'),
      '@hooks': path.resolve('src/hooks'),
      '@utils': path.resolve('src/utils'),
      '@assets': path.resolve('src/assets'),
      '@store': path.resolve('src/store'),
      '@epicfirebase': path.resolve('src/firebase'),
      '@epictypes': path.resolve('src/types'),
    }
    return config
  },
}
