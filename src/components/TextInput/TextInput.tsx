import React, { ReactNode } from 'react';
import { Connotation } from '../../theme/Connotation';

export interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    /**
     * The connotation of the text input.
     */
    connotation?: Connotation;
    /**
     * The type of input.
     */
    type: 'text' | 'email' | 'password' | 'search' | 'tel' | 'number' | 'url';
    /**
     * Additional content of the text field.
     */
    children: {
        leadingIcon?: ReactNode;
        trailingIcon?: ReactNode;
    };
}

const standardClasses =
    'shadow-sm block w-full sm:text-body border-default focus:border-default rounded-2 bg-secondary text-primary transition duration-150 ease-in-out focus:outline-none focus:ring focus:ring-offset focus:ring-offset-primary disabled:opacity-50';

const connotationClasses: { [K in Connotation]: string } = {
    brand: 'focus:ring-brand',
    positive: 'focus:ring-positive',
    callout: 'focus:ring-callout',
    neutral: 'focus:ring-neutral',
    warning: 'focus:ring-warning',
    negative: 'focus:ring-negative',
    none: 'focus:ring-dull',
};

const TextInput: React.FC<TextInputProps> = ({ className, connotation = 'neutral', type = 'text', ...otherProps }) => {
    return <input type={type} className={[standardClasses, connotationClasses[connotation], className ?? ''].join(' ')} {...otherProps} />;
};

export default TextInput;
