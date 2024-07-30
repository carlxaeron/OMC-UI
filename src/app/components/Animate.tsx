'use client';

import { AnimatePresence } from "framer-motion";

export default function Animate({ children }: { children: React.ReactNode }) {
    return (
        <>
            {/* <AnimatePresence mode="wait" initial={false}> */}
                {children}
            {/* </AnimatePresence> */}
        </>
    )
}