'use client';

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

export default function Theme(props:any) {
  const router = useRouter();
  const pathname = usePathname();
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  const links = [
    {title: 'About', path: '/about'},
    {title: 'Services', path: '/services'},
    {title: 'Projects', path: '/projects'},
    {title: 'Contact', path: '/contact'},
    {title: 'Daily Bread of Life', path: '/daily-bread-of-life'},
    // {title: 'Podcast', path: '/podcast'},
    // {title: 'Blog', path: '/blog'},
  ];

  const getLinks = () => {
    return links.map((link) => {
      return <Link onClick={() => setIsMobileNavOpen(false)} key={link.title} className={`${pathname === link.path ? 'underline ' : ''}text-[#111418] text-sm font-medium leading-normal`} href={link.path}>{link.title}</Link>
    });
  }

  const buttons = (conf:any) => <div style={conf.desktop ? {justifyContent: 'space-between'} : {}} className={`${conf.desktop ? 'md:flex hidden' : 'flex w-full pl-2 justify-end'} gap-2`}>
    <button
      onClick={() => router.push('/donate')}
      className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#1980e6] text-white text-sm font-bold leading-normal tracking-[0.015em]"
    >
      <span className="truncate">Donate</span>
    </button>
    <button
      className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#f0f2f4] text-[#111418] text-sm font-bold leading-normal tracking-[0.015em]"
    >
      <span className="truncate">Join</span>
    </button>
  </div>
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden" style={{ fontFamily: 'Epilogue, "Noto Sans", sans-serif' }}>
      <div className="layout-container flex h-full grow flex-col md:pt-[65px] pt-[45px]">
        <header className="fixed left-0 top-0 w-full bg-white z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f0f2f4] md:px-10 px-4 py-3">
          <div onClick={() => {router.push('/');  setIsMobileNavOpen(false);}} className="cursor-pointer flex items-center gap-4 text-[#111418]">
            <div className="size-4">
              <svg  viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_6_330)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z"
                    fill="currentColor"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_6_330"><rect width="48" height="48" fill="white"></rect></clipPath>
                </defs>
              </svg>
            </div>
            <h2 className="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em]">Dr. Krizz Chan</h2>
          </div>
          <div className="flex flex-1 justify-end gap-8">
            <div className="md:flex items-center gap-9 hidden">
              {getLinks()}
            </div>
            {buttons({desktop: true})}
            <button
              className="md:flex hidden max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 bg-[#f0f2f4] text-[#111418] gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5"
            >
              <div className="text-[#111418]" data-icon="ShoppingBag" data-size="20px" data-weight="regular">
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                  <path
                    d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,160H40V56H216V200ZM176,88a48,48,0,0,1-96,0,8,8,0,0,1,16,0,32,32,0,0,0,64,0,8,8,0,0,1,16,0Z"
                  ></path>
                </svg>
              </div>
            </button>
            <button
              className="md:hidden flex items-center justify-center w-10 h-10 bg-[#f0f2f4] text-[#111418] rounded-md"
              onClick={toggleMobileNav}
            >
              <FontAwesomeIcon icon={isMobileNavOpen ? faTimes : faBars} width="20" height="20" />
            </button>
          </div>
          {isMobileNavOpen && (
            <div className="top-[100%] w-full z-50 bg-white absolute left-0 md:hidden flex flex-col gap-4 py-2 items-end pr-4">
              {getLinks()}
              {buttons({desktop: false})}
            </div>
          )}
        </header>
        <div className="md:px-40 px-0 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            {props.children}
          </div>
        </div>
      </div>
    </div>
  )
}