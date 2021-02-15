import { withInfo } from '@storybook/addon-info';
import { addDecorator, addParameters } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { themes } from '@storybook/theming';
import React from 'react';
import Layout from './Layout';
import logo from '../assets/logo.svg';
import logoDark from '../assets/logo-dark.svg';

addDecorator(storyFn => <Layout>{storyFn()}</Layout>);
addDecorator(
    withInfo({
        styles: base => ({
            ...base,
            infoBody: {
                ...base.infoBody,
                backgroundColor: 'transparent',
                color: 'var(--color-primary-text)',
            },
            source: {
                h1: {
                    margin: '20px 0',
                    padding: '0 0 5px 0',
                    fontSize: '25px',
                    borderBottom: '1px solid var(--color-divider)',
                },
            },
        }),
        inline: true,
        source: true,
        propTables: false,
        propTablesExclude: [Layout],
    }),
);

addParameters({
    darkMode: {
        dark: {
            ...themes.dark,
            brandTitle: 'Solar Design System',
            brandUrl: 'https://solardesignsystem.com',
            brandImage: logoDark,
        },
        light: {
            ...themes.normal,
            brandTitle: 'Solar Design System',
            brandUrl: 'https://solardesignsystem.com',
            brandImage: logo,
        },
    },
    backgrounds: { disable: true },
    previewTabs: {
        'storybook/docs/panel': {
            hidden: true,
        },
    },
    viewport: {
        viewports: INITIAL_VIEWPORTS,
    },
});
