'use client';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import React from 'react';
import getLPTheme from '../getLPTheme';
import { PaletteMode } from '@mui/material';

export default function Theme(props: { children: any; }) {
    const [mode, setMode] = React.useState<PaletteMode>('light');
    const [showCustomTheme, setShowCustomTheme] = React.useState(true);
    const LPtheme = createTheme(getLPTheme(mode));
    const defaultTheme = createTheme({ palette: { mode } });

    return (
        <ThemeProvider theme={showCustomTheme ? LPtheme : defaultTheme}>
            <>{props.children}</>
        </ThemeProvider>
    )
}