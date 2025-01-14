'use client';

<<<<<<< Updated upstream
import { AnimatePresence } from "framer-motion";
=======
import { AnimatePresence, motion } from "framer-motion";
>>>>>>> Stashed changes

export default function Animate({ children }: { children: React.ReactNode }) {
    return (
        <>
<<<<<<< Updated upstream
            {/* <AnimatePresence mode="wait" initial={false}> */}
                {children}
            {/* </AnimatePresence> */}
=======
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
>>>>>>> Stashed changes
        </>
    )
}