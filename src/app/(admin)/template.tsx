'use client';

import SideMenu from "./SideMenu";
import Top from "./Top";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <section className="flex flex-row">
        <SideMenu />
        <section className="flex-1 flex-col bg-[#f1f5f9]">
          <Top />
          <div className="p-5 xl:p-8 flex-auto">
            {children}
          </div>
        </section>
      </section>
    </>
  );
}