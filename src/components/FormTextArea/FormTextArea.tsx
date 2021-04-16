import React, { forwardRef } from 'react';
import TextArea, { TextAreaProps } from '../TextArea/TextArea';
import { ExclamationCircleIcon } from '@heroicons/react/solid';

export interface FormTextAreaProps extends TextAreaProps {
    /**
     * The title of the form input.
     */
    title: string;
    /**
     * A description of the input.
     */
    description?: string;
    /**
     * A description of the error with the field value.
     */
    errorDescription?: string;
    /**
     * Whether or not the field is required.
     */
    required?: boolean;
}

const FormTextInput = forwardRef<HTMLTextAreaElement, FormTextAreaProps>(
    ({ id, title, description, errorDescription, required, connotation = 'neutral', children, className, ...otherProps }, ref) => {
        if (description) {
            otherProps['aria-describedby'] = `${id}-description`;
        }
        if (errorDescription) {
            otherProps['aria-describedby'] = `${id}-errorDescription`;
            otherProps['aria-invalid'] = true;
        }

        return (
            <div className={className}>
                <div className="flex justify-between items-baseline">
                    <label htmlFor={id} className="block text-headline font-medium text-primary">
                        {title}
                    </label>
                    {required !== undefined ? (
                        <span className="text-caption text-secondary" id={`id-${required ? 'required' : 'optional'}`}>
                            {required ? 'Required' : 'Optional'}
                        </span>
                    ) : null}
                </div>
                <div className="mt-2">
                    <TextArea ref={ref} id={id} connotation={errorDescription ? 'negative' : connotation} required={required} {...otherProps}>
                        {{
                            leftContent: children?.leftContent,
                            rightContent: errorDescription ? <ExclamationCircleIcon className="h-5 w-5 text-negative"></ExclamationCircleIcon> : children?.rightContent,
                        }}
                    </TextArea>
                </div>
                {description ? (
                    <p className="mt-2 text-footnote text-secondary" id={`${id}-description`}>
                        {description}
                    </p>
                ) : null}
                {errorDescription ? (
                    <p className="mt-2 text-footnote text-negative" id={`${id}-errorDescription`}>
                        {errorDescription}
                    </p>
                ) : null}
            </div>
        );
    },
);

export default FormTextInput;
