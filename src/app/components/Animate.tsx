'use client';

import { AnimatePresence, motion } from 'framer-motion';

export default function Animate({ children }: { children: React.ReactNode }) {
    return (
        <>
            {/* <AnimatePresence mode="wait" initial={false}> */}
                {children}
            {/* </AnimatePresence> */}
        </>
    )
}

export function Animate1({ children }: { children: React.ReactNode }) {
    return (
        <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{
                type: "spring",
                stiffness: 260,
                damping: 100,
        }}>
            {children}
        </motion.div>
    )
}
