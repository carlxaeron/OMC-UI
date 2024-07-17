'use client';

import React, { createContext } from "react";
import { PaletteMode } from '@mui/material';

export const Context = createContext({});

export default function Provider(props: { children: any; }) {
    const [mode, setMode] = React.useState<PaletteMode>('light');

    return (
        <Context.Provider value={{
            mode,
            setMode,
        }}>
            <>{props.children}</>
        </Context.Provider>
    )
}