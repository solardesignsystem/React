import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/outline';
import React, { ReactNode, useState } from 'react';

import { Tab, Tabs } from './Tabs';

export interface BasicTabsProps {
    titles: string[];
    initialTabIndex?: number;
    children: ReactNode[];
}

/**
 * A basic tabs component.
 */
const BasicTabs: React.FC<BasicTabsProps> = ({ children, titles, initialTabIndex }) => {
    const selection = useState(initialTabIndex ?? 0);

    return (
        <Tabs state={selection}>
            <div className="mb-4">
                <div className="sm:hidden">
                    <label htmlFor="tabs" className="sr-only">
                        Select a tab
                    </label>
                    <Listbox
                        as="div"
                        id="tabs"
                        value={`${selection[0]}`}
                        onChange={(value: any) => {
                            if (typeof value === 'string') {
                                selection[1](parseInt(value));
                            }
                        }}
                    >
                        {({ open }) => (
                            <>
                                <div className="relative mt-2">
                                    <span className="inline-block w-full rounded-2">
                                        <Listbox.Button className="cursor-default relative w-full rounded-2 border-hairline border-divider focus:border-divider bg-field pl-3 pr-10 py-2 text-left focus:outline-none focus:ring focus:ring-neutral focus:ring-offset focus:ring-offset-primary disabled:opacity-50 transition ease-in-out duration-150 text-body">
                                            <span className="block truncate text-primary">{titles[selection[0]]}</span>
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
                                        className="absolute mt-1 w-full rounded-2 elevated bg-primary shadow-container"
                                    >
                                        <Listbox.Options
                                            static
                                            className="max-h-60 rounded-2 py-1 text-body leading-6 shadow-xs overflow-auto focus:outline-none sm:text-sm sm:leading-5"
                                        >
                                            {titles.map((title, index) => (
                                                <Listbox.Option key={index} value={`${index}`}>
                                                    {({ selected, active }) => (
                                                        <div
                                                            className={`${
                                                                active ? 'text-inverse bg-prominent-neutral' : 'text-primary'
                                                            } cursor-default select-none relative py-2 pl-8 pr-4`}
                                                        >
                                                            <span className={`${selected ? 'font-semibold' : 'font-normal'} block truncate`}>{title}</span>
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
                            </>
                        )}
                    </Listbox>
                </div>
                <div className="hidden sm:block">
                    <nav className="relative z-0 rounded-3 shadow-default flex divide-x-default border-divider border-hairline" aria-label="Tabs">
                        {titles.map((title, index) => {
                            return (
                                <Tab>
                                    <button
                                        type="button"
                                        className={`${index === 0 ? 'rounded-l-3' : ''} ${
                                            index === titles.length - 1 ? 'rounded-r-3' : ''
                                        } group relative min-w-0 flex-1 overflow-hidden ${
                                            index === selection[0] ? 'bg-prominent-neutral text-inverse actionable' : 'bg-field text-primary hover:bg-fill-lg active:bg-fill-sm'
                                        } py-4 px-4 text-headline font-medium text-center focus:z-10 transition duration-150 ease-in-out focus:outline-none focus:ring focus:ring-neutral focus:ring-offset focus:ring-offset-primary disabled:opacity-50`}
                                        aria-current={index === 0 ? 'page' : undefined}
                                    >
                                        <span>{title}</span>
                                    </button>
                                </Tab>
                            );
                        })}
                    </nav>
                </div>
            </div>
            {children}
        </Tabs>
    );
};

export default BasicTabs;
