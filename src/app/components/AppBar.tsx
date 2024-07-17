'use client';

import React, { useContext } from "react";
import AppAppBar from "./AppAppBar";
import { PaletteMode } from '@mui/material';
import { Context } from "../context/provider";

type AppBarProps = {
    menu: any;
}

export default function AppBar(props: AppBarProps) {
    // const [mode, setMode] = React.useState<PaletteMode>('light');
    const { mode, setMode } = useContext(Context);
    const toggleColorMode = () => {
        setMode((prev: string) => (prev === 'dark' ? 'light' : 'dark'));
    };

    return (
        <>
            <AppAppBar menu={props.menu} mode={mode} toggleColorMode={toggleColorMode} />
        </>
    )
}