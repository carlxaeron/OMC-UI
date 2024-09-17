'use client';

import { AnimatePresence, motion } from "framer-motion";

export default function Animate({ children }: { children: React.ReactNode }) {
    return (
        <>
            <AnimatePresence mode="wait" initial={false}>
                <motion.div
                    key={children?.key} // Ensure each child has a unique key
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                >
                    {children}
                </motion.div>
            </AnimatePresence>
        </>
    )
}