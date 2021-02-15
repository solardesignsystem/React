import React from 'react';
import ExclamationCirle from '../../icons/ExclamationCircle';
import TextInput, { TextInputProps } from '../TextInput/TextInput';

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

const FormTextInput: React.FC<FormTextInputProps> = ({ id, title, description, errorDescription, required, connotation = 'neutral', ...otherProps }) => {
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
            <div className="mt-2 relative">
                <TextInput id={id} connotation={errorDescription ? 'negative' : connotation} required={required} {...otherProps}></TextInput>
                {errorDescription ? (
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                        <ExclamationCirle className="h-5 w-5 text-negative"></ExclamationCirle>
                    </div>
                ) : null}
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
};

export default FormTextInput;
