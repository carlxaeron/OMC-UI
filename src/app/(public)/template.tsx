'use client';

import Header from "./Header";
import { Button } from "@material-tailwind/react";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <section className="container mx-auto">
        {children}
      </section>
    </>
  );
}