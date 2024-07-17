'use client';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import React, { useContext } from 'react';
import getLPTheme from '../getLPTheme';
import { PaletteMode } from '@mui/material';
import { Context } from '../context/provider';

export default function Theme(props: { children: any; }) {
    const ctx:any = useContext(Context);
    console.log(ctx.mode);
    const [showCustomTheme, setShowCustomTheme] = React.useState(true);
    const LPtheme = createTheme(getLPTheme(ctx.mode));
    const defaultTheme = createTheme({ palette: { mode: ctx.mode } });

    return (
        <ThemeProvider theme={showCustomTheme ? LPtheme : defaultTheme}>
            <>{props.children}</>
        </ThemeProvider>
    )
}