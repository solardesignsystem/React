import { Listbox, Transition } from '@headlessui/react';
import React from 'react';
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/outline';
import { ExclamationCircleIcon } from '@heroicons/react/solid';

export interface FormPickerProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * The title of the picker.
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

type FormPickerType<TType> = React.FC<
    FormPickerProps & {
        /**
         * The options available in the picker.
         */
        options: { title: string; value: TType }[];
        /**
         * The current value of the picker.
         */
        value: TType;
        /**
         * Called on value change.
         */
        onChange(value: TType): void;
        disabled?: boolean;
    }
>;

/**
 * A basic button that performs an action on click / tap.
 */
const FormPicker: FormPickerType<string> = ({ id = 'picker', options, title, required, value, onChange, description, errorDescription, ...otherProps }) => {
    const selectedTitle = () => {
        const matches = options.filter(option => option.value === value);
        if (matches.length > 0) {
            return matches[0].title;
        }
        return 'Select an Option';
    };

    return (
        <Listbox as="div" value={value} onChange={onChange} {...otherProps}>
            {({ open }) => (
                <>
                    <Listbox.Label>
                        <div className="flex justify-between items-baseline">
                            <div className="block text-headline font-medium text-primary">{title}</div>
                            {required !== undefined ? (
                                <span className="text-caption text-secondary" id={`id-${required ? 'required' : 'optional'}`}>
                                    {required ? 'Required' : 'Optional'}
                                </span>
                            ) : null}
                        </div>
                    </Listbox.Label>
                    <div className="relative mt-2">
                        <span className="inline-block w-full rounded-2">
                            <Listbox.Button className="cursor-default relative w-full rounded-2 border-hairline border-divider focus:border-divider bg-field pl-3 pr-10 py-2 text-left focus:outline-none focus:ring focus:ring-neutral focus:ring-offset focus:ring-offset-primary disabled:opacity-50 transition ease-in-out duration-150 text-body">
                                <span className="block truncate text-primary">{selectedTitle()}</span>
                                {errorDescription ? (
                                    <span className="absolute inset-y-0 right-0 pr-8 flex items-center pointer-events-none">
                                        <ExclamationCircleIcon className="h-5 w-5 text-negative"></ExclamationCircleIcon>
                                    </span>
                                ) : null}
                                <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                    <ChevronDownIcon className="h-5 w-5 text-secondary"></ChevronDownIcon>
                                </span>
                            </Listbox.Button>
                        </span>

                        <Transition
                            show={open}
                            leave="transition ease-in duration-100"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                            className="absolute mt-1 w-full rounded-2 elevated bg-primary border-hairline border-divider shadow-container z-50 overflow-scroll max-h-48"
                        >
                            <Listbox.Options static className="max-h-60 rounded-2 py-1 text-body leading-6 shadow-container overflow-auto focus:outline-none sm:leading-5">
                                {options.map(option => (
                                    <Listbox.Option
                                        key={option.value}
                                        value={option.value}
                                        className="focus:outline-none focus:ring focus:ring-neutral focus:ring-offset focus:ring-offset-primary disabled:opacity-50 transition ease-in-out duration-150"
                                    >
                                        {({ selected, active }) => (
                                            <div className={`${active ? 'text-inverse bg-prominent-neutral' : 'text-primary'} cursor-default select-none relative py-2 pl-8 pr-4`}>
                                                <span className={`${selected ? 'font-semibold' : 'font-normal'} block truncate`}>{option.title}</span>
                                                {selected && (
                                                    <span className={`${active ? 'text-inverse' : 'text-neutral'} absolute inset-y-0 left-0 flex items-center pl-1.5`}>
                                                        <CheckIcon className="h-5 w-5"></CheckIcon>
                                                    </span>
                                                )}
                                            </div>
                                        )}
                                    </Listbox.Option>
                                ))}
                            </Listbox.Options>
                        </Transition>
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
                </>
            )}
        </Listbox>
    );
};

export default FormPicker;
