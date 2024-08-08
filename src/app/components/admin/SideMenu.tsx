'use client';

import React from "react";

function LinkComp(props: { link: string; text: React.ReactNode; active: any | boolean; }) {
  return (
    <li className={`group ml-[2px] ${props.active ? '' : 'hover:ml-0'}`}>
      <a href={props.link || "#"} className={`
        block px-4 py-1 text-white group-hover:border-blue-600 group-hover:border-l-[2px] group-hover:text-blue-600
        ${props.active ? 'border-blue-600 border-l-[2px] text-blue-600' : ''}`}>{process.env.NEXT_PUBLIC_HIDE ? 'Testing Link' : props.text}</a>
    </li>
  );
}

export function SideMenu() {
  return (
    <div className="w-full">
      {/* Logo */}
      <div className="flex p-4">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/logo.svg" alt="Logo" className={`h-auto ${process.env.NEXT_PUBLIC_HIDE ? 'opacity-0' : ''}`} />
      </div>

      {/* Navigation links */}
      <nav className="mt-4">
        <ul className="space-y-2">
          <LinkComp link="#" text="Dashboard" active={true} />
          <LinkComp link="#" text="Settings" active={undefined} />
          <LinkComp link="#" text="Profile" active={undefined} />
        </ul>
      </nav>
    </div>
  );
}