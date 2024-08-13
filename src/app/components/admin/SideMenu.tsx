'use client';

import { Context } from "@/app/context/provider";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartBar, faBook, faComments, faDollarSign, faCog } from '@fortawesome/free-solid-svg-icons';
import { Avatar } from "@material-tailwind/react";
import { useRouter } from "next/navigation";

export function SideMenu() {
  const ctx:any = React.useContext(Context);
  const router = useRouter();

  const isMobile = ctx.width <= 768;
  const classes = {
    nav: `md:w-[240px] ${isMobile ? 'bg-white w-[60px]' : 'bg-[#0F172A]'} h-auto`,
  }

  function LinkComp(props: any) {
    const ctx:any = React.useContext(Context);
    const isMobile = ctx.width <= 768;
  
    const handleClick = (e: any, props: any) => {
      e.preventDefault();
      router.push(props.link);
    }
  
    return (
      <li className={`group ml-[2px] ${props.active ? '' : 'hover:ml-0'}`}>
        <a href={props.link || "#"} onClick={e => handleClick(e, props)} className={`
          block px-4 py-1 group-hover:border-blue-500 group-hover:border-l-[2px] group-hover:text-blue-500
          ${props.active ? 'border-blue-500 border-l-[2px] text-blue-500' : (isMobile ? 'text-[#CBD5E1] text-center' : 'text-white')}`}><span className={`mr-${isMobile ? '0' : 4} ${props.active && !isMobile ? 'text-blue-500' : ''}`}>{props.side}</span>{ctx.width <= 768 ? '' : process.env.NEXT_PUBLIC_HIDE ? 'Testing Link' : props.text}</a>
      </li>
    );
  }

  return (
    <nav className={classes.nav}>
      <div className="w-full flex flex-col min-h-full">
        {/* Logo */}
        { !isMobile && (
          <div className="flex p-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            {/* <img src="/logo.svg" alt="Logo" className={`h-auto ${process.env.NEXT_PUBLIC_HIDE ? 'opacity-0' : ''}`} /> */}
            <h2 className="text-white font-bold text-2xl">{process.env.NEXT_PUBLIC_TITLE}</h2>
          </div>
        ) }

        {/* Navigation links */}
        <nav className="mt-4">
          <ul className="space-y-2">
            <LinkComp link='/admin' text="Dashboard" active={true} side={<FontAwesomeIcon icon={faChartBar} />} />
            <LinkComp link="/admin/courses" text="Courses" active={undefined} side={<FontAwesomeIcon icon={faBook} />} />
            <LinkComp link='/admin/communication' text="Communication" active={undefined} side={<FontAwesomeIcon icon={faComments} />} />
            <LinkComp link="/admin/revenue" text="Revenue" active={undefined} side={<FontAwesomeIcon icon={faDollarSign} />} />
            <LinkComp link="" text="Setting" active={undefined} side={<FontAwesomeIcon icon={faCog} />} />
          </ul>
        </nav>
        <div className="flex-col flex justify-end flex-1 md:p-4 p-1">
          <div>
            <Avatar src={`/assets/images/avatar${isMobile ? '' : '-white'}.svg`} alt="User Avatar" />
            <span className="md:text-white block md:inline text-black md:ml-2 text-xs md:text-lg">Hi, User</span>
          </div>
        </div>
      </div>
    </nav>
  );
}