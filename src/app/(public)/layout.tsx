'use client';

import { usePathname } from "next/navigation";
import { use, useContext, useEffect } from "react";
import { Context } from "../context/provider";
import { useRouter } from "next/navigation";
import { CheckRegister } from "./(landing)/register/Contents";

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const ctx = useContext(Context);
  const router = useRouter();

  useEffect(() => {
    if(ctx?.isLoggedIn()) {
      if(CheckRegister(ctx)) {
        if(pathname !== "/register/") {
          router.push("/register");
        }
      }
    }
  }, [pathname])

  return <>
    { children }
  </>
}