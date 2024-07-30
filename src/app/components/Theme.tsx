'use client';

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

export default function Theme(props:any) {
  const router = useRouter();
  const pathname = usePathname();

  const links = [
    {title: 'About', path: '/page/about'},
    {title: 'Services', path: '/page/services'},
    {title: 'Projects', path: '/page/projects'},
    {title: 'Podcast', path: '/page/podcast'},
    {title: 'Blog', path: '/page/blog'},
  ];

  const getLinks = () => {
    return links.map((link) => {
      return <Link key={link.title} className={`${pathname === link.path && 'underline '}text-[#111418] text-sm font-medium leading-normal`} href={link.path}>{link.title}</Link>
    });
  }

  return (
    <div className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden" style={{ fontFamily: 'Epilogue, "Noto Sans", sans-serif' }}>
      <div className="layout-container flex h-full grow flex-col">
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f0f2f4] px-10 py-3">
          <div onClick={() => router.push('/')} className="cursor-pointer flex items-center gap-4 text-[#111418]">
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
            <div className="flex items-center gap-9">
              {getLinks()}
            </div>
            <button
              className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 bg-[#f0f2f4] text-[#111418] gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5"
            >
              <div className="text-[#111418]" data-icon="ShoppingBag" data-size="20px" data-weight="regular">
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                  <path
                    d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,160H40V56H216V200ZM176,88a48,48,0,0,1-96,0,8,8,0,0,1,16,0,32,32,0,0,0,64,0,8,8,0,0,1,16,0Z"
                  ></path>
                </svg>
              </div>
            </button>
          </div>
        </header>
        <div className="@[960px]:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            {props.children}
          </div>
        </div>
      </div>
    </div>
  )
}