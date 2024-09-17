'use client';

import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { Card, CardBody } from "@material-tailwind/react";
import { useRouter } from "next/navigation";
import React, { use, useContext, useState } from "react";
import { mapping } from "./mapping";
import { Context } from "@/app/context/provider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { Logo } from "./Header";

export default function MenuComponent(props:any) {
  const isFooter = props.type === 'footer';
  const isAside= props.type === 'aside';
  const isHeader= !props.type;

  const ctx = useContext(Context);
  const [openMenu, setOpenMenu]:[any, any] = useState({});
  const router = useRouter();

  const Atag = (props:any) => {
    const { children, ...rest } = props;
    if(props.tag === 'div') {
      rest.className = `${rest.className} cursor-pointer`;
    } else {
      rest.className = `${rest.className} ${isAside && 'justify-center'}`;
    }
    return React.createElement(props.tag, rest, children);
  }

  const linkBlank = (item:any, ctx = {}) => {
    if(item.metadata.loggedIn === false && ctx?.isLoggedIn()) {
      return true;
    } else if(item.metadata.loggedIn === true && !ctx?.isLoggedIn()) {
      return true;
    }
  }

  const isOpen = (index:number) => openMenu[`menu-${index}`]?.open === true;
  const handleMenuClick = (event:React.MouseEvent<HTMLAnchorElement>, data:any, i:number) => {
    if(!data?.children) return;
    else {
      event.preventDefault();
      // event.stopPropagation();
      setOpenMenu({[`menu-${i}`]: { open: openMenu[`menu-${i}`]?.open !== true }});
    }
  }

  const handleRedirect = (event:React.MouseEvent<HTMLAnchorElement>, data: { path: string }) => {
    event.preventDefault();
    const href = data.path;
    if (href) {
      router.push(href);
    }
    setOpenMenu({});
  };

  const ReturnHtml = () => (ctx?.isMobile && isHeader) || (!ctx.isMobile && isAside) ? <></> : mapping.map((item, index) => linkBlank(item, ctx) ? <React.Fragment key={index}></React.Fragment> : (
    <Atag key={index} tag={item.children ? 'div' : 'a'} 
      className={`text-[#111418] text-sm font-medium leading-normal flex items-center gap-2 relative p-2 rounded-lg ${!isFooter && item?.metadata?.class || ''}`} 
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

          if (isAside) {
            ctx?.toggleLandingMenu(false);
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
  ))

  return ctx?.isMobile && isAside ? <aside className={`${!ctx?.landingMenuOpen && 'hidden'} px-4 absolute left-0 top-0 min-w-[300px] bg-white z-50 h-full`}>
    <div className="sticky top-0 left-0">
      <div className="mt-4">
        <Logo />
      </div>
      <FontAwesomeIcon className="top-0 right-0 absolute" icon={faClose} onClick={e => {
        e.preventDefault();
        ctx?.toggleLandingMenu();
      }} />
      <div className="flex flex-col gap-4 mt-2">
        <ReturnHtml />
      </div>
    </div>
  </aside> : <ReturnHtml />;
}