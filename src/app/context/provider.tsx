'use client';

import React, { createContext, useEffect, useState } from "react";

export const Context = createContext({});

export default function Provider(props: { children: any; data: any; }) {
    const [width, setWidth] = useState<number | undefined>(undefined);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const handleResize = () => {
                setWidth(window.innerWidth);
            };

            // Set initial width
            setWidth(window.innerWidth);

            window.addEventListener("resize", handleResize);

            return () => {
                window.removeEventListener("resize", handleResize);
            };
        }
    }, []);

    return (
        <Context.Provider value={{
            ...props.data,
            width, // Add width to the context value
        }}>
            <>{props.children}</>
        </Context.Provider>
    )
}