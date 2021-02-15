import React from 'react';
import { Story } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button, { ButtonProps } from './Button';

const OverviewTemplate: Story<ButtonProps> = args => (
    <Button {...args} onClick={action('Button clicked')}>
        Button
    </Button>
);

export default {
    title: 'Button',
    component: Button,
};

export const Overview = OverviewTemplate.bind({});
Overview.argType = {
    size: {
        control: {
            type: 'select',
        },
    },
    connotation: {
        control: {
            type: 'select',
        },
    },
    prominence: {
        control: {
            type: 'select',
        },
    },
    disabled: {
        control: {
            type: 'boolean',
        },
    },
};

export const Connotation = (() => {
    return (
        <div className="flex flex-col sm:flex-row items-center">
            <Button className="mb-2 sm:mb-0 sm:mr-2" connotation="brand">
                Brand
            </Button>
            <Button className="mb-2 sm:mb-0 sm:mr-2" connotation="positive">
                Positive
            </Button>
            <Button className="mb-2 sm:mb-0 sm:mr-2" connotation="callout">
                Callout
            </Button>
            <Button className="mb-2 sm:mb-0 sm:mr-2" connotation="neutral">
                Neutral
            </Button>
            <Button className="mb-2 sm:mb-0 sm:mr-2" connotation="warning">
                Warning
            </Button>
            <Button connotation="negative">Negative</Button>
        </div>
    );
}).bind({});
Connotation.parameters = {
    controls: { hideNoControlsWarning: true },
};

export const Prominence = (() => {
    return (
        <div className="flex flex-row">
            <Button className="mr-2" prominence="subtle">
                Subtle
            </Button>
            <Button className="mr-2" prominence="default">
                Default
            </Button>
            <Button prominence="prominent">Prominent</Button>
        </div>
    );
}).bind({});
Prominence.parameters = {
    controls: { hideNoControlsWarning: true },
};

export const Size = (() => {
    return (
        <div className="flex flex-row items-center">
            <Button className="mr-2" size="table">
                Table
            </Button>
            <Button className="mr-2" size="form">
                Form
            </Button>
            <Button size="hero">Hero</Button>
        </div>
    );
}).bind({});
Size.parameters = {
    controls: { hideNoControlsWarning: true },
};
