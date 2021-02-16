import React, { ReactNode, useEffect, useRef, useState } from 'react';
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

const TextInput: React.FC<TextInputProps> = ({ className, connotation = 'neutral', type = 'text', children, ...otherProps }) => {
    // MARK: - Properties

    const leftRef = useRef<HTMLDivElement>(null);
    const rightRef = useRef<HTMLDivElement>(null);

    const [paddingLeft, setPaddingLeft] = useState<number | undefined>(undefined);
    const [paddingRight, setPaddingRight] = useState<number | undefined>(undefined);

    useEffect(() => {
        setPaddingLeft(leftRef.current ? leftRef.current.clientWidth + 4 : undefined);
        setPaddingRight(rightRef.current ? rightRef.current.clientWidth + 4 : undefined);
    }, [children?.leftContent, children?.rightContent]);

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
