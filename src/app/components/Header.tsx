'use client';

import React, { useContext } from "react";
import { Context } from "../context/provider";
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

export default function Header() {
  const ctx:any = useContext(Context);
  const pathName = usePathname();
  const router = useRouter();

  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e7edf3] px-10 py-3">
      <div className="flex items-center gap-4 text-[#0e141b]">
        <div className="size-4">
          <svg
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_6_535)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M47.2426 24L24 47.2426L0.757355 24L24 0.757355L47.2426 24ZM12.2426 21H35.7574L24 9.24264L12.2426 21Z"
                fill="currentColor"
              ></path>
            </g>
            <defs>
              <clipPath id="clip0_6_535">
                <rect width="48" height="48" fill="white"></rect>
              </clipPath>
            </defs>
          </svg>
        </div>
        <h2 className="text-[#0e141b] text-lg font-bold leading-tight tracking-[-0.015em]">
          {ctx.settings.title}
        </h2>
      </div>
      <div className="flex flex-1 justify-end gap-8">
        <div className="flex items-center gap-9">
          <Link href="/" className={`${pathName === '/' && 'underline'} text-[#0e141b] text-sm font-medium leading-normal`}>Home</Link>
          <Link href="/about" className={`${pathName === '/about' && 'underline'} text-[#0e141b] text-sm font-medium leading-normal`}>About</Link>
          <Link href="/services" className={`${pathName === '/services' && 'underline'} text-[#0e141b] text-sm font-medium leading-normal`}>Services</Link>
          <Link href="/projects" className={`${pathName === '/projects' && 'underline'} text-[#0e141b] text-sm font-medium leading-normal`}>Projects</Link>
          <Link href="/ministry" className={`${pathName === '/ministry' && 'underline'} text-[#0e141b] text-sm font-medium leading-normal`}>Ministry</Link>
          <Link href="/blog" className={`${pathName === '/blog' && 'underline'} text-[#0e141b] text-sm font-medium leading-normal`}>Blog</Link>
        </div>
        <div className="flex gap-2">
          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#1466b8] text-slate-50 text-sm font-bold leading-normal tracking-[0.015em]">
            <span className="truncate">Donate</span>
          </button>
          <button
            onClick={() => router.push('/signup/account')}
            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#e7edf3] text-[#0e141b] text-sm font-bold leading-normal tracking-[0.015em]">
            <span className="truncate">Join</span>
          </button>
          <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 bg-[#e7edf3] text-[#0e141b] gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5">
            <div
              className="text-[#0e141b]"
              data-icon="MagnifyingGlass"
              data-size="20px"
              data-weight="regular"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20px"
                height="20px"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
              </svg>
            </div>
          </button>
        </div>
      </div>
    </header>
  )
}