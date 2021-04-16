import React, { ReactNode, useCallback, useState, forwardRef } from 'react';
import { Connotation } from '../../theme/Connotation';

export interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    /**
     * The connotation of the text input.
     */
    connotation?: Connotation;
    /**
     * Additional content of the text field.
     */
    children?: {
        leftContent?: ReactNode;
        rightContent?: ReactNode;
    };
}

const standardClasses =
    'shadow-sm block w-full sm:text-body border-divider focus:border-divider rounded-2 overflow-hidden bg-field text-primary transition duration-150 ease-in-out focus:outline-none focus:ring focus:ring-offset focus:ring-offset-primary disabled:opacity-50';

const connotationClasses: { [K in Connotation]: string } = {
    brand: 'focus:ring-brand',
    positive: 'focus:ring-positive',
    callout: 'focus:ring-callout',
    neutral: 'focus:ring-neutral',
    warning: 'focus:ring-warning',
    negative: 'focus:ring-negative',
    none: 'focus:ring-dull',
};

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(({ className, connotation = 'neutral', children, ...otherProps }, ref) => {
    // MARK: - Properties

    const leftRef = useCallback(node => {
        if (node !== null) {
            setPaddingLeft(node.getBoundingClientRect().width + 4);
        } else {
            setPaddingLeft(12);
        }
    }, []);

    const rightRef = useCallback(node => {
        if (node !== null) {
            setPaddingRight(node.getBoundingClientRect().width + 4);
        } else {
            setPaddingRight(12);
        }
    }, []);

    const [paddingLeft, setPaddingLeft] = useState<number | undefined>(12);
    const [paddingRight, setPaddingRight] = useState<number | undefined>(12);

    // MARK: - DOM

    return (
        <div className="relative">
            {children?.leftContent ? (
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none" ref={leftRef}>
                    {children.leftContent}
                </div>
            ) : null}
            <textarea
                ref={ref}
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
});

export default TextArea;
