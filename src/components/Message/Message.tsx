import React, { ReactElement } from 'react';
import { Connotation } from '../../theme/Connotation';
import { Prominence } from '../../theme/Prominence';
import { HomeIcon, CheckCircleIcon, BellIcon, InformationCircleIcon, ExclamationCircleIcon, ExclamationIcon } from '@heroicons/react/solid';

export interface MessageProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * The connotation of the message.
     */
    connotation?: Connotation;

    /**
     * The prominence of the message.
     */
    prominence?: Prominence;
}

const connotationClassNames: { [K in Connotation]: string } = {
    brand: 'bg-brand',
    positive: 'bg-positive',
    callout: 'bg-callout',
    neutral: 'bg-neutral',
    warning: 'bg-warning',
    negative: 'bg-negative',
    none: 'bg-tertiary-fill',
};

const icon: { [K in Connotation]: ReactElement } = {
    brand: <HomeIcon className="h-6 w-6 text-brand"></HomeIcon>,
    positive: <CheckCircleIcon className="h-6 w-6 text-positive"></CheckCircleIcon>,
    callout: <BellIcon className="h-6 w-6 text-callout"></BellIcon>,
    neutral: <InformationCircleIcon className="h-6 w-6 text-neutral"></InformationCircleIcon>,
    warning: <ExclamationIcon className="h-6 w-6 text-warning"></ExclamationIcon>,
    negative: <ExclamationCircleIcon className="h-6 w-6 text-negative"></ExclamationCircleIcon>,
    none: <HomeIcon className="h-6 w-6 text-primary"></HomeIcon>,
};

const Button: React.FC<MessageProps> = ({ children, className, connotation = 'neutral', prominence = 'default', ...otherProps }) => {
    return (
        <div className={`rounded-2 ${connotationClassNames[connotation]} p-3 ${className}`} {...otherProps}>
            <div className="flex">
                <div className="flex-shrink-0">{icon[connotation]}</div>
                <div className="ml-2 text-primary">{children}</div>
            </div>
        </div>
    );
};

export default Button;
