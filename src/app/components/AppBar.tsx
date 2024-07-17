'use client';

import React from "react";
import AppAppBar from "./AppAppBar";
import { PaletteMode } from '@mui/material';

type AppBarProps = {
    menu: any;
}

export default function AppBar(props: AppBarProps) {
    const [mode, setMode] = React.useState<PaletteMode>('light');
    const toggleColorMode = () => {
        setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
    };

    return (
        <>
            <AppAppBar menu={props.menu} mode={mode} toggleColorMode={toggleColorMode} />
        </>
    )
}