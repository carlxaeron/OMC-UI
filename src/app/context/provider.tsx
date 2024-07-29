'use client';

import React, { createContext, useState } from "react";

export const Context = createContext({});

export default function Provider(props: { children: any; data: any; }) {
    const [settings, setSettings] = useState({
        title: process.env.NEXT_PUBLIC_TITLE,
    });

    return (
        <Context.Provider value={{
            ...props.data,
            settings,
            setSettings,
        }}>
            <>{props.children}</>
        </Context.Provider>
    )
}