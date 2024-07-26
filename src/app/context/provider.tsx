'use client';

import React, { createContext, useState } from "react";
import { PaletteMode } from '@mui/material';

export const Context = createContext({});

export default function Provider(props: { children: any; data: any; }) {
    const [mode, setMode] = useState<PaletteMode>('light');
    const nph = process.env.NEXT_PUBLIC_HIDE;
    const [hideProj, setHideProj] = useState((typeof nph === 'string' && nph === 'true' ? true : (nph === 'false' ? false : false)) || false);
    const [openModal, setOpenModal] = useState(false);
    const [loggedin, setLoggedin] = useState(false);

    return (
        <Context.Provider value={{
            mode,
            setMode,
            hideProj,
            setHideProj,
            openModal,
            setOpenModal,
            loggedin,
            setLoggedin,
            ...props.data,
        }}>
            <>{props.children}</>
        </Context.Provider>
    )
}