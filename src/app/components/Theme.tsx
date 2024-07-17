'use client';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import React, { useContext } from 'react';
import getLPTheme from '../getLPTheme';
import { PaletteMode } from '@mui/material';
import { Context } from '../context/provider';

export default function Theme(props: { children: any; }) {
    const { mode } = useContext(Context);
    console.log(mode);
    const [showCustomTheme, setShowCustomTheme] = React.useState(true);
    const LPtheme = createTheme(getLPTheme(mode));
    const defaultTheme = createTheme({ palette: { mode } });

    return (
        <ThemeProvider theme={showCustomTheme ? LPtheme : defaultTheme}>
            <>{props.children}</>
        </ThemeProvider>
    )
}