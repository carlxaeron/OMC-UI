'use client';

import { ThemeProvider } from "@material-tailwind/react";
import React, { createContext, useEffect, useState } from "react";
import { app, db, findUserByUid, UserData } from "../etc/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { set } from "date-fns";
import { CheckRegister } from "../(public)/(landing)/register/Contents";

export const Context = createContext({});

export default function Provider(props: { children: any; data: any; }) {
    const defaultState = {
        userCredential: null,
        userData: null,
        homeMenuOpen: false,
        landingMenuOpen: false,
        isMobile: false,
        firebase: {
            app,
            db,
        },
        registerStep: 0,
        landingEmail: '',
    }
    const [state, setState2] = useState(defaultState);
    const router = useRouter();

    const setState = async (newState:any) => {
        setState2({
            ...state,
            ...newState,
        })
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

        // SIZING
        const handleResize = () => {
            setState({
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
            const uid = state?.userCredential?.user?.uid;
            UserData.findUserByUid(uid).then((userData) => {
                console.log('userData', userData);
                if (userData) {
                    setState2({
                        ...state,
                        userData,
                    });
                }
            }).catch((e) => { console.error(e); });
        }
            
    }, [state?.userCredential]);

    useEffect(() => {
        if(process.env.NODE_ENV !== 'production') console.log('STATE', state);
    }, process.env.NODE_ENV !== 'production' ? [state] : []);

    const isLoggedIn = () => {
        return !!state?.userCredential;
    }

    const logout = () => {
        localStorage.removeItem("userCredential");
        setState(defaultState);
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

    const setRegisterStep = (step:number) => {
        setState({
            registerStep: step,
        });
    }

    const VALUE = {
        ...props.data,
        ...state,
        state,
        setState,
        isLoggedIn,
        logout,
        toggleHomeMenu,
        toggleLandingMenu,
        setRegisterStep,
        setState2,
    }

    return (
        <Context.Provider value={VALUE}>
            <ThemeProvider>
                {props.children}
            </ThemeProvider>
        </Context.Provider>
    )
}

export type ProviderValue = {
    userCredential: any;
    userData: any;
    homeMenuOpen: boolean;
    landingMenuOpen: boolean;
    isMobile: boolean;
    firebase: {
        app: any;
        db: any;
    };
    setState: (newState: any) => void;
    isLoggedIn: () => boolean;
    logout: () => void;
    toggleHomeMenu: (open?: boolean) => void;
    toggleLandingMenu: (open?: boolean) => void;
    setRegisterStep: (step: number) => void;
} | {} | undefined;