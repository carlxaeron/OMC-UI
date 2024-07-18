'use client';

import React, { createContext } from "react";
import { PaletteMode } from '@mui/material';

export const Context = createContext({});

export default function Provider(props: { children: any; }) {
    const [mode, setMode] = React.useState<PaletteMode>('light');
    const [hideProj, setHideProj] = React.useState(process.env.NEXT_PUBLIC_HIDE || false);

    return (
        <Context.Provider value={{
            mode,
            setMode,
            hideProj,
            setHideProj,
        }}>
            <>{props.children}</>
        </Context.Provider>
    )
}