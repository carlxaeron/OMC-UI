'use client';

import { Button } from "@material-tailwind/react";
import Aside from "./Aside";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Context } from "@/app/context/provider";
import { useContext } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  const ctx = useContext(Context);

  return (
    <>
      <section className="flex flex-row">
        <Aside />
        <div className="flex-1 p-4">
          { !ctx?.homeMenuOpen && (
            <div className="md:hidden">
              <Button onClick={e => {
                e.preventDefault();
                ctx?.toggleHomeMenu();
              }}>
                <FontAwesomeIcon icon={faBars} />
              </Button>
            </div>
          ) }
          {children}
        </div>
      </section>
    </>
  );
}