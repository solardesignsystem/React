import React, { useState } from 'react';
import { Story } from '@storybook/react';
import FormPicker, { FormPickerProps } from './FormPicker';

const OverviewTemplate: Story<FormPickerProps> = args => {
    const [value, setValue] = useState('Select an Option');

    return (
        <FormPicker
            {...args}
            title="A Picker"
            required
            options={[
                { title: 'Option A', value: 'A' },
                { title: 'Option B', value: 'B' },
                { title: 'Option C', value: 'C' },
            ]}
            value={value}
            onChange={newValue => {
                setValue(newValue);
            }}
        ></FormPicker>
    );
};

export default {
    title: 'Form Picker',
    component: FormPicker,
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
