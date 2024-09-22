'use client';

import { ThemeProvider } from "@material-tailwind/react";
import React, { createContext, useEffect, useState } from "react";
import { app, db, UserData } from "../etc/firebase";
import { useRouter } from "next/navigation";
import { create } from "zustand";

export const Context = createContext({});

const defaultState = {
    userCredential: null,
    userData: null,
    isDoneCheckingLogin: false,
    homeMenuOpen: false,
    landingMenuOpen: false,
    isMobile: false,
    firebase: {
        app,
        db,
    },
    registerStep: 0,
    landingEmail: '',
    cform: {},
}

export const useStore = create(
    (set:any, get:any) => ({
        state: defaultState,
        is: {
            loggedIn: () => !!get().state.userCredential,
            withData: () => !!get().state.userData,
            withCountry: () => !!get().state.userData?.country,
            withOtherInfo: () => !!get().state.userData?.otherInfo,
        },
        logout: () => set(() => ({ state: defaultState })),
        setState: (newState: any) => set((state:any) => ({ state: {...state.state, ...newState} })),
        setRegisterStep: (step: number) => set((state:any) => ({ state: {...state.state, registerStep: step} })),
        toggleHomeMenu: (open?: boolean) => set((state:any) => ({ state: {...state.state, homeMenuOpen: open !== undefined ? open : !state.state.homeMenuOpen} })),
        toggleLandingMenu: (open?: boolean) => set((state:any) => ({ state: {...state.state, landingMenuOpen: open !== undefined ? open : !state.state.landingMenuOpen} })),
        setCform: (cform: any) => set((state:any) => ({ state: {...state.state, cform: {...state.state.cform, ...cform}} })),
    })
);

export default function Provider(props: { children: any; data: any; }) {
    const [state, setState2] = useState(defaultState);
    const router = useRouter();
    const storeState = useStore((state) => state.state);
    const storeAction = useStore((state) => state);

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
            storeAction.setState({
                isMobile: window.innerWidth <= 768,
            });
        };
        window.addEventListener("resize", handleResize);
        handleResize();

        // return () => {
        //     window.removeEventListener("resize", handleResize);
        // };
    }, []);

    useEffect(() => {
        if (storeAction.is.loggedIn()) {
            const uid = storeState.userCredential?.user?.uid;
            UserData.findUserByUid(uid).then((userData) => {
                if (userData) {
                    storeAction.setState({
                        userData,
                    });
                }
                storeAction.setState({
                    isDoneCheckingLogin: true,
                });
            }).catch((e) => { 
                storeAction.setState({
                    isDoneCheckingLogin: true,
                });
                console.error(e);
            });
        }
            
    }, [storeState.userCredential]);

    useEffect(() => {
        if(process.env.NODE_ENV !== 'production') console.log('STATE', state);
    }, process.env.NODE_ENV !== 'production' ? [state] : []);

    useEffect(() => {
        if(process.env.NODE_ENV !== 'production') {
            console.log('useStore STATE', storeState);
            console.log('useStore ACTION', storeAction);
        }
    }, process.env.NODE_ENV !== 'production' ? [storeState] : []);

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