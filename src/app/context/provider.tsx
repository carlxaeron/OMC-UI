'use client';

import { ThemeProvider } from "@material-tailwind/react";
import React, { createContext, useState } from "react";

export const Context = createContext({});

export default function Provider(props: { children: any; data: any; }) {
    

    return (
        <Context.Provider value={{
            ...props.data,
        }}>
            <ThemeProvider>
                {props.children}
            </ThemeProvider>
        </Context.Provider>
    )
}