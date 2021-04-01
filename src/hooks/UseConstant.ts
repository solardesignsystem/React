import React from 'react';

type ResultBox<T> = { v: T };

const useConstant = <T>(fn: () => T): T => {
    const ref = React.useRef<ResultBox<T>>();

    if (!ref.current) {
        ref.current = { v: fn() };
    }

    return ref.current.v;
};

export default useConstant;
