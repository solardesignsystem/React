import React from 'react';
import { Story } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Message, { MessageProps } from './Message';

const OverviewTemplate: Story<MessageProps> = args => <Message {...args}>Message Text</Message>;

export default {
    title: 'Message',
    component: Message,
};

export const Overview = OverviewTemplate.bind({});
Overview.argType = {
    connotation: {
        control: {
            type: 'select',
        },
    },
};

export const Connotation = (() => {
    return (
        <div className="flex flex-col sm:flex-row items-center">
            <Message className="mb-2 sm:mb-0 sm:mr-2" connotation="brand">
                Brand
            </Message>
            <Message className="mb-2 sm:mb-0 sm:mr-2" connotation="positive">
                Positive
            </Message>
            <Message className="mb-2 sm:mb-0 sm:mr-2" connotation="callout">
                Callout
            </Message>
            <Message className="mb-2 sm:mb-0 sm:mr-2" connotation="neutral">
                Neutral
            </Message>
            <Message className="mb-2 sm:mb-0 sm:mr-2" connotation="warning">
                Warning
            </Message>
            <Message connotation="negative">Negative</Message>
        </div>
    );
}).bind({});
Connotation.parameters = {
    controls: { hideNoControlsWarning: true },
};
