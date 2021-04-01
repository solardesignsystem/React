import React, { ReactNode } from 'react';
import { Connotation } from '../../theme/Connotation';
import { Prominence } from '../../theme/Prominence';

/**
 * The standard sizes of button links.
 */
export type ButtonLinkSize = 'table' | 'form' | 'hero';

export interface ButtonLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    /**
     * The connotation of the button.
     */
    connotation?: Connotation;

    /**
     * The prominence of the button.
     */
    prominence?: Prominence;

    /**
     * The size of the button.
     */
    size?: ButtonLinkSize;

    /**
     * The contents of the button.
     */
    children?: ReactNode;
}

const standardClasses =
    'inline-flex justify-center items-center font-bold shadow-sm transition duration-150 ease-in-out focus:outline-none focus:ring focus:ring-offset focus:ring-offset-primary disabled:opacity-50';

const sizeClasses: { [K in ButtonLinkSize]: string } = {
    table: 'px-2.5 py-1.5 rounded-1 text-caption',
    form: 'px-4 py-2 rounded-2 text-body',
    hero: 'px-6 py-3 rounded-2.5 text-title',
};

const connotationClasses: { [K in Connotation]: { [L in Prominence]: string } } = {
    brand: {
        prominent: 'text-inverse actionable bg-prominent-brand focus:ring-brand',
        default: 'text-brand actionable bg-brand focus:ring-brand',
        subtle: 'text-brand actionable bg-subtle-brand focus:ring-brand',
    },
    positive: {
        prominent: 'text-inverse actionable bg-prominent-positive focus:ring-positive',
        default: 'text-positive actionable bg-positive focus:ring-positive',
        subtle: 'text-positive actionable bg-subtle-positive focus:ring-positive',
    },
    callout: {
        prominent: 'text-inverse actionable bg-prominent-callout focus:ring-callout',
        default: 'text-callout actionable bg-callout focus:ring-callout',
        subtle: 'text-callout actionable bg-subtle-callout focus:ring-callout',
    },
    neutral: {
        prominent: 'text-inverse actionable bg-prominent-neutral focus:ring-neutral',
        default: 'text-neutral actionable bg-neutral focus:ring-neutral',
        subtle: 'text-neutral actionable bg-subtle-neutral focus:ring-neutral',
    },
    warning: {
        prominent: 'text-inverse actionable bg-prominent-warning focus:ring-warning',
        default: 'text-warning actionable bg-warning focus:ring-warning',
        subtle: 'text-warning actionable bg-subtle-warning focus:ring-warning',
    },
    negative: {
        prominent: 'text-inverse actionable bg-prominent-negative focus:ring-negative',
        default: 'text-negative actionable bg-negative focus:ring-negative',
        subtle: 'text-negative actionable bg-subtle-negative focus:ring-negative',
    },
    none: {
        prominent: 'text-inverse actionable bg-prominent-dull focus:ring-dull',
        default: 'text-dull actionable bg-dull focus:ring-dull',
        subtle: 'text-dull actionable bg-subtle-dull focus:ring-dull',
    },
};

/**
 * A link that looks like a button.
 */
const ButtonLink: React.FC<ButtonLinkProps> = ({ children, className, size = 'form', connotation = 'neutral', prominence = 'default', ...otherProps }) => {
    return (
        <a className={[standardClasses, sizeClasses[size], connotationClasses[connotation][prominence], className].join(' ')} {...otherProps}>
            {children}
        </a>
    );
};

export default ButtonLink;
