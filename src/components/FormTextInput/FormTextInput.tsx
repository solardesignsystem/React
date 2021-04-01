import React, { forwardRef } from 'react';
import TextInput, { TextInputProps } from '../TextInput/TextInput';
import { ExclamationCircleIcon } from '@heroicons/react/solid';

export interface FormTextInputProps extends TextInputProps {
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

const FormTextInput = forwardRef<HTMLInputElement, FormTextInputProps>(
    ({ id, title, description, errorDescription, required, connotation = 'neutral', children, ...otherProps }, ref) => {
        if (description) {
            otherProps['aria-describedby'] = `${id}-description`;
        }
        if (errorDescription) {
            otherProps['aria-describedby'] = `${id}-errorDescription`;
            otherProps['aria-invalid'] = true;
        }

        return (
            <div>
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
                    <TextInput ref={ref} id={id} connotation={errorDescription ? 'negative' : connotation} required={required} {...otherProps}>
                        {{
                            leftContent: children?.leftContent,
                            rightContent: errorDescription ? <ExclamationCircleIcon className="h-5 w-5 text-negative"></ExclamationCircleIcon> : children?.rightContent,
                        }}
                    </TextInput>
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
