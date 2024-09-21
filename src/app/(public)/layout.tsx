'use client';

import { usePathname } from "next/navigation";
import { useContext, useEffect } from "react";
import { Context, useStore } from "../context/provider";
import { useRouter } from "next/navigation";
import { CheckRegister } from "./(landing)/register/Contents";

export default function Layout({ children }: { children: React.ReactNode }) {
  const storeState = useStore((state) => state.state);
  const storeAction = useStore((state) => state);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if(storeState.userCredential) {
      if(CheckRegister(storeState, storeAction)) {
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