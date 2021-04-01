import React, { createContext, useState, useMemo, useContext, cloneElement, isValidElement, ReactNode } from 'react';

import useConstant from '../../hooks/UseConstant';

type TabsStateType = [number, React.Dispatch<React.SetStateAction<number>>];

const TabsState = createContext<TabsStateType>(([0, (value: number) => {}] as unknown) as TabsStateType);
const Elements = createContext({ tabs: 0, panels: 0 });

interface TabsProps {
    state?: TabsStateType;
    children: ReactNode;
}

export const Tabs: React.FC<TabsProps> = ({ state: outerState, children }) => {
    const innerState = useState(0);
    const elements = useConstant(() => ({ tabs: 0, panels: 0 }));
    const state = outerState || innerState;

    return (
        <Elements.Provider value={elements}>
            <TabsState.Provider value={state}>{children}</TabsState.Provider>
        </Elements.Provider>
    );
};

export const useTabState = () => {
    const [activeIndex, setActive] = useContext(TabsState);
    const elements = useContext(Elements);

    const tabIndex = useConstant(() => {
        const currentIndex = elements.tabs;
        elements.tabs += 1;

        return currentIndex;
    });

    const onClick = useConstant(() => () => setActive(tabIndex));

    const state = useMemo(
        () => ({
            isActive: activeIndex === tabIndex,
            onClick,
        }),
        [activeIndex, onClick, tabIndex],
    );

    return state;
};

export const usePanelState = () => {
    const [activeIndex] = useContext(TabsState);
    const elements = useContext(Elements);

    const panelIndex = useConstant(() => {
        const currentIndex = elements.panels;
        elements.panels += 1;

        return currentIndex;
    });

    return panelIndex === activeIndex;
};

interface TabProps {
    children: ReactNode;
}

export const Tab: React.FC<TabProps> = ({ children }) => {
    const state = useTabState();

    if (typeof children === 'function') {
        return children(state);
    }

    return isValidElement(children) ? cloneElement(children, state) : children;
};

interface TabPaneProps {
    active?: boolean;
    children: ReactNode;
}

export const TabPane: React.FC<TabPaneProps> = ({ active, children }) => {
    const isActive = usePanelState();

    return isActive || active ? <div>{children}</div> : <span></span>;
};
