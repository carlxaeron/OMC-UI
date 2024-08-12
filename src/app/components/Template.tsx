'use client';

import { ThemeProvider } from "@material-tailwind/react";

export default function Template({ children }: { children: any }) {
  return <ThemeProvider>{children}</ThemeProvider>
}