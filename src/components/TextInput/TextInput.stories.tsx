import React from 'react';
import { Story } from '@storybook/react';
import TextInput, { TextInputProps } from './TextInput';

const OverviewTemplate: Story<TextInputProps> = args => <TextInput {...args}></TextInput>;

export default {
    title: 'Text Input',
    component: TextInput,
};

export const Overview = OverviewTemplate.bind({});
Overview.argType = {
    placeholder: {
        control: {
            type: 'text',
        },
    },
};
