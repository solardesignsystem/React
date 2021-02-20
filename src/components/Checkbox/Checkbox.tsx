import React from 'react';
import { Connotation } from '../../theme/Connotation';

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
    /**
     * The connotation of the button.
     */
    connotation?: Connotation;
    /**
     * The title of the form input.
     */
    title: string;
}

const connotationClasses: { [K in Connotation]: string } = {
    brand: 'text-brand',
    positive: 'text-positive',
    callout: 'text-callout',
    neutral: 'text-neutral',
    warning: 'text-warning',
    negative: 'text-negative',
    none: 'text-dull',
};

const Checkbox: React.FC<CheckboxProps> = ({ id, className, title, connotation = 'neutral', ...otherProps }) => {
    return (
        <div className={['flex items-center', className].join(' ')}>
            <input
                id={id}
                name="remember_me"
                type="checkbox"
                className={[
                    'h-6 w-6 shadow-sm transition duration-150 ease-in-out focus:ring-neutral border-separator rounded-1 focus:outline-none focus:ring focus:ring-offset focus:ring-offset-primary disabled:opacity-50',
                    connotationClasses[connotation],
                ].join(' ')}
            />
            <label htmlFor={id} className="ml-2 block text-headline font-medium text-primary">
                {title}
            </label>
        </div>
    );
};

export default Checkbox;
