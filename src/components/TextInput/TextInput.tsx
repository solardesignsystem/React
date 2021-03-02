import React, { ReactNode, useEffect, useCallback, useState } from 'react';
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
    children?: {
        leftContent?: ReactNode;
        rightContent?: ReactNode;
    };
}

const standardClasses =
    'shadow-sm block w-full sm:text-body border-divider focus:border-divider rounded-2 bg-secondary text-primary transition duration-150 ease-in-out focus:outline-none focus:ring focus:ring-offset focus:ring-offset-primary disabled:opacity-50';

const connotationClasses: { [K in Connotation]: string } = {
    brand: 'focus:ring-brand',
    positive: 'focus:ring-positive',
    callout: 'focus:ring-callout',
    neutral: 'focus:ring-neutral',
    warning: 'focus:ring-warning',
    negative: 'focus:ring-negative',
    none: 'focus:ring-dull',
};

const TextInput: React.FC<TextInputProps> = ({ className, connotation = 'neutral', type = 'text', children, ...otherProps }) => {
    // MARK: - Properties

    const leftRef = useCallback(node => {
        if (node !== null) {
            setPaddingLeft(node.getBoundingClientRect().width + 4);
        } else {
            setPaddingLeft(4);
        }
    }, []);

    const rightRef = useCallback(node => {
        if (node !== null) {
            setPaddingRight(node.getBoundingClientRect().width + 4);
        } else {
            setPaddingRight(4);
        }
    }, []);

    const [paddingLeft, setPaddingLeft] = useState<number | undefined>(4);
    const [paddingRight, setPaddingRight] = useState<number | undefined>(4);

    // MARK: - DOM

    return (
        <div className="relative">
            {children?.leftContent ? (
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none" ref={leftRef}>
                    {children.leftContent}
                </div>
            ) : null}
            <input
                type={type}
                className={[standardClasses, connotationClasses[connotation], className ?? ''].join(' ')}
                style={{ paddingLeft: paddingLeft, paddingRight: paddingRight }}
                {...otherProps}
            />
            {children?.rightContent ? (
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none" ref={rightRef}>
                    {children.rightContent}
                </div>
            ) : null}
        </div>
    );
};

export default TextInput;
