import React from 'react';
import { Story } from '@storybook/react';
import BasicTabs, { BasicTabsProps } from './BasicTabs';
import { TabPane } from './Tabs';

const OverviewTemplate: Story<BasicTabsProps> = args => (
    <BasicTabs {...args} titles={['Tab 1', 'Tab 2', 'Tab 3']}>
        <TabPane>Content 1</TabPane>
        <TabPane>Content 2</TabPane>
        <TabPane>Content 3</TabPane>
    </BasicTabs>
);

export default {
    title: 'Basic Tabs',
    component: BasicTabs,
};

export const Overview = OverviewTemplate.bind({});
Overview.argType = {
    title: {
        control: {
            type: 'text',
        },
    },
    description: {
        control: {
            type: 'text',
        },
    },
    errorDescription: {
        control: {
            type: 'text',
        },
    },
};
