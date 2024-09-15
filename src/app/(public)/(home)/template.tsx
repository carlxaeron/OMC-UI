'use client';

import { Button } from "@material-tailwind/react";
import Aside from "./Aside";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <section className="flex flex-row">
        <Aside />
        <div className="flex-1 p-4">
          {children}
        </div>
      </section>
    </>
  );
}