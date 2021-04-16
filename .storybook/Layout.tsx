import React, { ReactNode } from 'react';
import '../src/css/index.css';

interface Props {
    children: ReactNode;
}

const Layout = ({ children }: Props) => {
    return (
        <div id="modal-root" className="p-2">
            {children}
        </div>
    );
};

export default Layout;
