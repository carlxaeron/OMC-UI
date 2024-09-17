'use client';

import { Card, CardBody } from "@material-tailwind/react";
import { mapping } from "./mapping";
import {
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { DefaultIcon } from "@/app/components/FontIcon";
import { Context } from "@/app/context/provider";

export default function Header() {
  const router = useRouter();
  const ctx = useContext(Context);

  const [openMenu, setOpenMenu]:[any, any] = useState({});

  useEffect(() => {
    if(ctx?.isLoggedIn()) {
      console.log(ctx);
    }
  }, []);

  const isOpen = (index:number) => openMenu[`menu-${index}`]?.open === true;
  const handleMenuClick = (event:React.MouseEvent<HTMLAnchorElement>, data:any, i:number) => {
    if(!data?.children) return;
    else {
      event.preventDefault();
      // event.stopPropagation();
      setOpenMenu({[`menu-${i}`]: { open: openMenu[`menu-${i}`]?.open !== true }});
    }
  }

  const Atag = (props:any) => {
    const { children, ...rest } = props;
    if(props.tag === 'div') {
      rest.className = `${rest.className} cursor-pointer`;
    }
    // if(!props.onClick) {
    //   debugger;
    //   rest.onClick = (e:React.MouseEvent<HTMLAnchorElement>) => {
    //     e.preventDefault();
    //     router.push(props.href);
    //     debugger;
    //   }
    // } else debugger;
    return React.createElement(props.tag, rest, children);
  }

  const handleRedirect = (event:React.MouseEvent<HTMLAnchorElement>, data: { path: string }) => {
    event.preventDefault();
    const href = data.path;
    if (href) {
      router.push(href);
    }
    setOpenMenu({});
  };

  const linkBlank = (item:any) => {
    if(item.metadata.loggedIn === false && ctx?.isLoggedIn()) {
      return true;
    } else if(item.metadata.loggedIn === true && !ctx?.isLoggedIn()) {
      return true;
    }
  }

  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f0f2f4] px-4 py-3">
      <div onClick={() => router.push('/')} className="flex items-center gap-4 text-[#111418] cursor-pointer">
        <div className="size-4">
          <DefaultIcon />
        </div>
        <h2 className="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em]">{process.env.NEXT_PUBLIC_TITLE}</h2>
      </div>
      <div className="flex flex-1 justify-end gap-8">
        <div className="flex items-center gap-4">
          { mapping.map((item, index) => linkBlank(item) ? <React.Fragment key={index}></React.Fragment> : (
            <Atag key={index} tag={item.children ? 'div' : 'a'} 
              className={`text-[#111418] text-sm font-medium leading-normal flex items-center gap-2 relative p-2 rounded-lg ${item?.metadata?.class || ''}`} 
              href={item.path} 
              onClick={(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => 
                {
                  e.preventDefault();

                  if(Object.keys(openMenu).length < 1){
                    handleMenuClick(e, item, index);
                  }
                  if(item.metadata.title === 'Logout') {
                    ctx?.logout();
                  }
                  else {
                    router.push(item.path);
                  }
                }
              }
            >{item.metadata.title}
              { item.children && (
                <>
                  <ChevronDownIcon
                    strokeWidth={2.5}
                    className={`hidden h-3 w-3 transition-transform lg:block ${
                      isOpen(index) !== true ? "rotate-180" : ""
                    }`}
                  />
                  { isOpen(index) === true && (
                    <Card className="absolute top-0 right-0 top-full">
                      <CardBody>
                        <ul>
                          { item.children.map((child, index2) => (
                            <li key={index2}>
                              <a href={child.path} onClick={e => handleRedirect(e, child)}>{child.metadata.title}</a>
                            </li>
                          )) }
                        </ul>
                      </CardBody>
                    </Card>
                  ) }
                </>
              ) }
            </Atag>
          ))}
          { ctx?.isLoggedIn() && (
            <h3 className="text-[#111418] text-lg font-bold leading-normal">Hi {ctx?.state?.userData?.first_name} {ctx?.state?.userData?.last_name}</h3>
          ) }
        </div>
        {/* <div className="flex gap-2">
          <button
            className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 bg-[#f0f2f4] text-[#111418] gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5"
          >
            <div className="text-[#111418]" data-icon="MagnifyingGlass" data-size="20px" data-weight="regular">
              <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                <path
                  d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"
                ></path>
              </svg>
            </div>
          </button>
          <button
            className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 bg-[#f0f2f4] text-[#111418] gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5"
          >
            <div className="text-[#111418]" data-icon="User" data-size="20px" data-weight="regular">
              <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                <path
                  d="M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"
                ></path>
              </svg>
            </div>
          </button>
          <button
            className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 bg-[#f0f2f4] text-[#111418] gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5"
          >
            <div className="text-[#111418]" data-icon="Gift" data-size="20px" data-weight="regular">
              <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                <path
                  d="M216,72H180.92c.39-.33.79-.65,1.17-1A29.53,29.53,0,0,0,192,49.57,32.62,32.62,0,0,0,158.44,16,29.53,29.53,0,0,0,137,25.91a54.94,54.94,0,0,0-9,14.48,54.94,54.94,0,0,0-9-14.48A29.53,29.53,0,0,0,97.56,16,32.62,32.62,0,0,0,64,49.57,29.53,29.53,0,0,0,73.91,71c.38.33.78.65,1.17,1H40A16,16,0,0,0,24,88v32a16,16,0,0,0,16,16v64a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V136a16,16,0,0,0,16-16V88A16,16,0,0,0,216,72ZM149,36.51a13.69,13.69,0,0,1,10-4.5h.49A16.62,16.62,0,0,1,176,49.08a13.69,13.69,0,0,1-4.5,10c-9.49,8.4-25.24,11.36-35,12.4C137.7,60.89,141,45.5,149,36.51Zm-64.09.36A16.63,16.63,0,0,1,96.59,32h.49a13.69,13.69,0,0,1,10,4.5c8.39,9.48,11.35,25.2,12.39,34.92-9.72-1-25.44-4-34.92-12.39a13.69,13.69,0,0,1-4.5-10A16.6,16.6,0,0,1,84.87,36.87ZM40,88h80v32H40Zm16,48h64v64H56Zm144,64H136V136h64Zm16-80H136V88h80v32Z"
                ></path>
              </svg>
            </div>
          </button>
        </div>
        <div
          className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
          style={{ backgroundImage: `url("https://cdn.usegalileo.ai/stability/d8375e4c-28e0-4b2d-89fe-50874d073c66.png")` }}
        >
        </div> */}
      </div>
    </header>
  );
}