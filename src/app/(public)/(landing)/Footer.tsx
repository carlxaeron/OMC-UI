'use client';

import Link from "next/link";
import { mapping } from "./mapping";
import { linkBlank } from "./Header";
import React, { useContext } from "react";
import { Context } from "@/app/context/provider";
import MenuComponent from "./MenuComponent";

export default function Footer() {
  const ctx = useContext(Context);

  return (
    <>
      <footer className="flex justify-center">
        <div className="flex max-w-[960px] flex-1 flex-col">
          <footer className="flex flex-col gap-6 px-5 py-10 text-center @container">
            <div className="flex flex-wrap items-center justify-center gap-6 @[480px]:flex-row @[480px]:justify-around">
              <MenuComponent type='footer' />
            </div>
            <p className="text-[#60758a] text-base font-normal leading-normal">© {new Date().getFullYear()} {process.env.NEXT_PUBLIC_TITLE}</p>
          </footer>
        </div>
      </footer>
    </> 
  )
}