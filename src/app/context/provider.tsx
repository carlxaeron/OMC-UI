'use client';

import React, { createContext, useState } from "react";

export const Context = createContext({});

export default function Provider(props: { children: any; data: any; }) {
    

    return (
        <Context.Provider value={{
            ...props.data,
        }}>
            <>{props.children}</>
        </Context.Provider>
    )
}