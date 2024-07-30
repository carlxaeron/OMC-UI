'use client';

import React, { useContext, useState } from "react";
import { Context } from "../context/provider";
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  const ctx:any = useContext(Context);
  const pathName = usePathname();
  const router = useRouter();

  const links = [
    {title: 'Home', path: '/'},
    {title: 'About', path: '/about'},
    {title: 'Services', path: '/services'},
    {title: 'Projects', path: '/projects'},
    {title: 'Ministry', path: '/ministry'},
    {title: 'Blog', path: '/blog'},
  ];

  const getLinks = () => {
    return links.map((link) => {
      return <Link onClick={() => setIsMobileNavOpen(false)} key={link.title} className={`${pathName === link.path ? 'underline ' : ''}text-[#111418] text-sm font-medium leading-normal`} href={link.path}>{link.title}</Link>
    });
  }

  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  const buttons = (data:any) => <>
    <button className={`md:flex hidden min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#1466b8] text-slate-50 text-sm font-bold leading-normal tracking-[0.015em]`}>
      <span className="truncate">Donate</span>
    </button>
    <button
      onClick={() => router.push('/signup/account')}
      className={`md:flex hidden min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#e7edf3] text-[#0e141b] text-sm font-bold leading-normal tracking-[0.015em]`}>
      <span className="truncate">Join</span>
    </button>
    <button className={`md:flex hidden max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 bg-[#e7edf3] text-[#0e141b] gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5`}>
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
  </>

  return (
    <header className="fixed left-0 top-0 w-full bg-white z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e7edf3] md:px-10 px-4 py-3">
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
        <div className="md:flex items-center gap-9 hidden">
          {getLinks()}
        </div>
        <div className="flex gap-2">
          {buttons({ desktop: true })}
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 bg-[#f0f2f4] text-[#111418] rounded-md"
            onClick={toggleMobileNav}
          >
            <FontAwesomeIcon icon={isMobileNavOpen ? faTimes : faBars} width="20" height="20" />
          </button>
        </div>
      </div>
      {isMobileNavOpen && (
        <div className="top-[100%] w-full z-50 bg-white absolute left-0 md:hidden flex flex-col gap-4 py-2 items-end pr-4">
          {getLinks()}
          {buttons({ desktop: false })}
        </div>
      )}
    </header>
  )
}