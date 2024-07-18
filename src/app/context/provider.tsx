'use client';

import React, { createContext } from "react";
import { PaletteMode } from '@mui/material';

export const Context = createContext({});

export default function Provider(props: { children: any; }) {
    const [mode, setMode] = React.useState<PaletteMode>('light');
    const nph = process.env.NEXT_PUBLIC_HIDE;
    const [hideProj, setHideProj] = React.useState((typeof nph === 'string' && nph === 'true' ? true : (nph === 'false' ? false : false)) || false);

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