'use client';

import { ThemeProvider } from "@material-tailwind/react";
import React, { createContext, useEffect, useState } from "react";
import { app, db, findUserByUid } from "../etc/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { set } from "date-fns";

export const Context = createContext({});

export default function Provider(props: { children: any; data: any; }) {
    const [state, setState2] = useState({
        userCredential: null,
        userData: null,
        homeMenuOpen: false,
        landingMenuOpen: false,
        isMobile: false,
        firebase: {
            app,
            db,
        }
    });
    const router = useRouter();

    const setState = (newState:any) => {
        setState2({
            ...state,
            ...newState,
        });
    }

    useEffect(() => {
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

        const handleResize = () => {
            setState({
                ...state,
                isMobile: window.innerWidth <= 768,
            });
        };

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => {
            window.removeEventListener("resize", handleResize);
        };
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

    const toggleHomeMenu = (open = undefined) => {
        setState({
            homeMenuOpen: open !== undefined ? open : !state.homeMenuOpen,
        });
    }    
    const toggleLandingMenu = (open = undefined) => {
        setState({
            landingMenuOpen: open !== undefined ? open : !state.landingMenuOpen,
        });
    }    

    return (
        <Context.Provider value={{
            ...props.data,
            ...state,
            state,
            setState,
            isLoggedIn,
            logout,
            toggleHomeMenu,
            toggleLandingMenu,
        }}>
            <ThemeProvider>
                {props.children}
            </ThemeProvider>
        </Context.Provider>
    )
}