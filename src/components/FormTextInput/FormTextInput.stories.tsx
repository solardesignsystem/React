import React from 'react';
import { Story } from '@storybook/react';
import FormTextInput, { FormTextInputProps } from './FormTextInput';

const OverviewTemplate: Story<FormTextInputProps> = args => <FormTextInput {...args}></FormTextInput>;

export default {
    title: 'Form Text Input',
    component: FormTextInput,
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
