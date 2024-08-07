'use client';

import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function ProjectsPage() {
    useEffect(() => {
        redirect("/");
    }, []);

    return (
        <div>
            <h1>Projects</h1>
        </div>
    );
}