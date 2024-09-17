'use client';

import { ThemeProvider } from "@material-tailwind/react";
import React, { createContext, useEffect, useState } from "react";
import { app, db, findUserByUid } from "../etc/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useRouter } from "next/navigation";

export const Context = createContext({});

export default function Provider(props: { children: any; data: any; }) {
    const [state, setState2] = useState({});
    const router = useRouter();

    const setState = (newState:any) => {
        // if (newState?.userCredential) {
        // //     console.log("User signed in:", newState.userCredential.user);
        // //     localStorage.setItem("userCredential", JSON.stringify(newState.userCredential));

        //     findUserByUid(newState.userCredential.user.uid).then((userData) => {
        // //         localStorage.setItem("userData", JSON.stringify(userData));
        //         setState2({
        //             ...state,
        //             userData,
        //         });
        //     }).catch((e) => { console.error(e); });

        // }
        
        setState2({
            ...state,
            ...newState,
        });
    }

    useEffect(() => {
        setState({
            firebase: {
                app,
                db,
            }
        });

        // if (localStorage.getItem("userCredential")) {
        //     setState({
        //         userCredential: JSON.parse(localStorage.getItem("userCredential") || "{}"),
        //     });
        // }
        // if (localStorage.getItem("userData")) {
        //     setState({
        //         userData: JSON.parse(localStorage.getItem("userData") || "{}"),
        //     });
        // }
    }, []);

    useEffect(() => {
        if (state?.userCredential) {
            findUserByUid(state?.userCredential.user.uid).then((userData) => {
        //         localStorage.setItem("userData", JSON.stringify(userData));
                setState2({
                    ...state,
                    userData,
                });
            }).catch((e) => { console.error(e); });
        }
            
    }, [state?.userCredential]);

    const isLoggedIn = () => {
        return !!state?.userCredential;
    }

    const logout = () => {
        localStorage.removeItem("userCredential");
        setState({
            userCredential: null,
        });
        router.push('/');
    }

    

    return (
        <Context.Provider value={{
            ...props.data,
            state,
            setState,
            isLoggedIn,
            logout,
        }}>
            <ThemeProvider>
                {props.children}
            </ThemeProvider>
        </Context.Provider>
    )
}