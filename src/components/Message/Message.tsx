import React, { ReactElement } from 'react';
import Bell from '../../icons/Bell';
import CheckCircle from '../../icons/CheckCircle';
import ExclamationCirle from '../../icons/ExclamationCircle';
import ExclamationTriangle from '../../icons/ExclamationTriangle';
import Home from '../../icons/Home';
import InformationCirle from '../../icons/InformationCircle';
import { Connotation } from '../../theme/Connotation';
import { Prominence } from '../../theme/Prominence';

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
    brand: <Home className="h-6 w-6 text-brand"></Home>,
    positive: <CheckCircle className="h-6 w-6 text-positive"></CheckCircle>,
    callout: <Bell className="h-6 w-6 text-callout"></Bell>,
    neutral: <InformationCirle className="h-6 w-6 text-neutral"></InformationCirle>,
    warning: <ExclamationTriangle className="h-6 w-6 text-warning"></ExclamationTriangle>,
    negative: <ExclamationCirle className="h-6 w-6 text-negative"></ExclamationCirle>,
    none: <Home className="h-6 w-6 text-primary"></Home>,
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
