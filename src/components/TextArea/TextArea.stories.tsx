import React from 'react';
import { Story } from '@storybook/react';
import TextArea, { TextAreaProps } from './TextArea';

const OverviewTemplate: Story<TextAreaProps> = args => <TextArea {...args}></TextArea>;

export default {
    title: 'Text Area',
    component: TextArea,
};

export const Overview = OverviewTemplate.bind({});
Overview.argTypes = {
    placeholder: {
        control: {
            type: 'text',
        },
    },
};
