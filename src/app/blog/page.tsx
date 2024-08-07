'use client';

import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function BlogPage() {
    useEffect(() => {
        redirect("/");
    }, []);

    return (
        <div>
            <h1>Blog</h1>
        </div>
    );
}