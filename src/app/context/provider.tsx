'use client';

import { ThemeProvider } from "@material-tailwind/react";
import React, { createContext, useEffect, useState } from "react";
import { app, db } from "../etc/firebase";

export const Context = createContext({});

export default function Provider(props: { children: any; data: any; }) {
    const [state, setState] = useState({});

    useEffect(() => {
        setState({
            firebase: {
                app,
                db,
            }
        });
    }, []);

    return (
        <Context.Provider value={{
            ...props.data,
            state,
            setState,
        }}>
            <ThemeProvider>
                {props.children}
            </ThemeProvider>
        </Context.Provider>
    )
}