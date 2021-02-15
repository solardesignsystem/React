const path = require('path');

module.exports = {
    stories: ['../src/**/*.stories.tsx'],
    addons: ['@storybook/addon-essentials', '@storybook/addon-notes/register', '@storybook/addon-a11y', 'storybook-dark-mode'],
    webpackFinal: async config => {
        (config.module.rules = [
            ...config.module.rules,
            {
                test: /\.(ts|tsx)$/,
                use: [
                    {
                        loader: require.resolve('ts-loader'),
                    },
                    require.resolve('react-docgen-typescript-loader'),
                ],
            },
        ]),
            config.resolve.extensions.push('.ts', '.tsx');
        return config;
    },
};
