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
                { title: 'Option D', value: 'D' },
                { title: 'Option E', value: 'E' },
                { title: 'Option F', value: 'F' },
                { title: 'Option G', value: 'G' },
                { title: 'Option H', value: 'H' },
                { title: 'Option I', value: 'I' },
                { title: 'Option J', value: 'J' },
                { title: 'Option K', value: 'K' },
                { title: 'Option L', value: 'L' },
                { title: 'Option M', value: 'M' },
                { title: 'Option N', value: 'N' },
                { title: 'Option O', value: 'O' },
                { title: 'Option P', value: 'P' },
                { title: 'Option Q', value: 'Q' },
                { title: 'Option R', value: 'R' },
                { title: 'Option S', value: 'S' },
                { title: 'Option T', value: 'T' },
                { title: 'Option U', value: 'U' },
                { title: 'Option V', value: 'V' },
                { title: 'Option W', value: 'W' },
                { title: 'Option X', value: 'X' },
                { title: 'Option Y', value: 'Y' },
                { title: 'Option Z', value: 'Z' },
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
