import React from 'react';
import { Story } from '@storybook/react';
import ButtonLink, { ButtonLinkProps } from './ButtonLink';

const OverviewTemplate: Story<ButtonLinkProps> = args => (
    <ButtonLink {...args} href="https://google.com" target="_blank">
        Google
    </ButtonLink>
);

export default {
    title: 'Button Link',
    component: ButtonLink,
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
};

export const Connotation = (() => {
    return (
        <div className="flex flex-col sm:flex-row items-center">
            <ButtonLink className="mb-2 sm:mb-0 sm:mr-2" connotation="brand">
                Brand
            </ButtonLink>
            <ButtonLink className="mb-2 sm:mb-0 sm:mr-2" connotation="positive">
                Positive
            </ButtonLink>
            <ButtonLink className="mb-2 sm:mb-0 sm:mr-2" connotation="callout">
                Callout
            </ButtonLink>
            <ButtonLink className="mb-2 sm:mb-0 sm:mr-2" connotation="neutral">
                Neutral
            </ButtonLink>
            <ButtonLink className="mb-2 sm:mb-0 sm:mr-2" connotation="warning">
                Warning
            </ButtonLink>
            <ButtonLink connotation="negative">Negative</ButtonLink>
        </div>
    );
}).bind({});
Connotation.parameters = {
    controls: { hideNoControlsWarning: true },
};

export const Prominence = (() => {
    return (
        <div className="flex flex-row">
            <ButtonLink className="mr-2" prominence="subtle">
                Subtle
            </ButtonLink>
            <ButtonLink className="mr-2" prominence="default">
                Default
            </ButtonLink>
            <ButtonLink prominence="prominent">Prominent</ButtonLink>
        </div>
    );
}).bind({});
Prominence.parameters = {
    controls: { hideNoControlsWarning: true },
};

export const Size = (() => {
    return (
        <div className="flex flex-row items-center">
            <ButtonLink className="mr-2" size="table">
                Table
            </ButtonLink>
            <ButtonLink className="mr-2" size="form">
                Form
            </ButtonLink>
            <ButtonLink size="hero">Hero</ButtonLink>
        </div>
    );
}).bind({});
Size.parameters = {
    controls: { hideNoControlsWarning: true },
};
