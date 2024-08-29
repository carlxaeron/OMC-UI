'use client';

import SideMenu from "./SideMenu";
import Top from "./Top";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <section className="flex flex-row">
        <SideMenu />
        <section className="flex-1 bg-[#f1f5f9]">
          <Top />
          <div className="p-5">
            {children}
          </div>
        </section>
      </section>
    </>
  );
}