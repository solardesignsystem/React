import React from 'react';
import { Story } from '@storybook/react';
import { Connotation } from '../../theme/Connotation';

const OverviewTemplate = ({ size, color }) => {
    return (
        <p className={`text-${color ?? 'primary'} text-${size ?? 'body'} ${size === 'headline' ? 'font-semibold' : ''}${size === 'hero-title' ? ' font-extrabold' : ''}`}>
            The quick brown fox jumps over the lazy dog.
            <br />
            The quick brown fox jumps over the lazy dog.
        </p>
    );
};

export default {
    title: 'Typography',
};

export const Overview = OverviewTemplate.bind({});
Overview.argTypes = {
    size: {
        control: {
            type: 'select',
            options: ['caption', 'footnote', 'body', 'subheadline', 'headline', 'section-title', 'title', 'large-title', 'hero-title'],
        },
    },
    color: {
        control: {
            type: 'select',
            options: ['default', 'primary', 'secondary', 'inverse', 'brand', 'positive', 'callout', 'neutral', 'warning', 'negative'],
        },
    },
};

export const Size = (() => {
    return (
        <div>
            <p className="text-primary text-caption mb-2">Caption</p>
            <p className="text-primary text-footnote mb-2">Footnote</p>
            <p className="text-primary text-body mb-2">Body</p>
            <p className="text-primary text-subheadline mb-2">Subheadline</p>
            <p className="text-primary text-headline font-semibold mb-2">Headline</p>
            <p className="text-primary text-section-title mb-2">Section Title</p>
            <p className="text-primary text-title mb-2">Title</p>
            <p className="text-primary text-large-title mb-2">Large Title</p>
            <p className="text-primary text-hero-title font-extrabold">Hero Title</p>
        </div>
    );
}).bind({});
Size.parameters = {
    controls: { hideNoControlsWarning: true },
};

export const Color = (() => {
    return (
        <div>
            <p className="text-default text-body mb-2">Default</p>
            <p className="text-primary text-body mb-2">Primary</p>
            <p className="text-secondary text-body mb-2">Secondary</p>
            <p className="text-inverse text-body mb-2">Inverse</p>

            <p className="text-brand text-body mb-2">Brand</p>
            <p className="text-positive text-body mb-2">Positive</p>
            <p className="text-callout text-body mb-2">Callout</p>
            <p className="text-neutral text-body mb-2">Neutral</p>
            <p className="text-warning text-body mb-2">Warning</p>
            <p className="text-negative text-body mb-2">Negative</p>
        </div>
    );
}).bind({});
Color.parameters = {
    controls: { hideNoControlsWarning: true },
};
