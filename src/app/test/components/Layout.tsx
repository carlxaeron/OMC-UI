'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Link href="/test/page1">Page 1</Link>
            <Link href="/test/page2">Page 2</Link>
            <motion.div
                initial={{ x: 300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 300, opacity: 0 }}
                transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
            }}>
                {children}
            </motion.div>
        </>
    );
}