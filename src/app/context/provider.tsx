'use client';

import { ThemeProvider } from "@material-tailwind/react";
import { initializeApp } from "firebase/app";
import React, { createContext, useEffect, useState } from "react";
import { firebaseConfig } from "../etc/firebase";

export const Context = createContext({});

export default function Provider(props: { children: any; data: any; }) {
    const [state, setState] = useState({});

    useEffect(() => {
        const app = initializeApp(firebaseConfig);
        setState({
            firebase: app,
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