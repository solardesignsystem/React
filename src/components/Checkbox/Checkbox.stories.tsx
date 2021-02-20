import React from 'react';
import { Story } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Checkbox, { CheckboxProps } from './Checkbox';

const OverviewTemplate: Story<CheckboxProps> = args => <Checkbox {...args}></Checkbox>;

export default {
    title: 'Checkbox',
    component: Checkbox,
};

export const Overview = OverviewTemplate.bind({});
Overview.argType = {
    size: {
        control: {
            type: 'select',
        },
    },
    title: {
        control: {
            type: 'text',
        },
    },
    disabled: {
        control: {
            type: 'boolean',
        },
    },
};
