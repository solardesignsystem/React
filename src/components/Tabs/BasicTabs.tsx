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
                    <select
                        id="tabs"
                        name="tabs"
                        onChange={event => {
                            selection[1](parseInt(event.target.value));
                        }}
                        className="block w-full border-divider rounded-2 bg-secondary text-primary transition duration-150 ease-in-out focus:outline-none focus:ring focus:ring-neutral focus:ring-offset focus:ring-offset-primary disabled:opacity-50"
                    >
                        {titles.map((title, index) => {
                            return (
                                <option selected={index === selection[0]} value={index}>
                                    {title}
                                </option>
                            );
                        })}
                    </select>
                </div>
                <div className="hidden sm:block">
                    <nav className="relative z-0 rounded-3 shadow-default flex divide-x-default" aria-label="Tabs">
                        {titles.map((title, index) => {
                            return (
                                <Tab>
                                    <button
                                        type="button"
                                        className={`${index === 0 ? 'rounded-l-3' : ''} ${
                                            index === titles.length - 1 ? 'rounded-r-3' : ''
                                        } group relative min-w-0 flex-1 overflow-hidden ${
                                            index === selection[0] ? 'bg-prominent-neutral text-inverse actionable' : 'bg-secondary text-primary hover:bg-fill-lg active:bg-primary'
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
