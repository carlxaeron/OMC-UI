'use client';

import { Button } from "@material-tailwind/react";
import Aside from "./Aside";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useStore } from "@/app/context/provider";
import { Logo } from "../(landing)/Header";


export default function Template({ children }: { children: React.ReactNode }) {
  const storeState = useStore((state) => state.state);
  const storeAction = useStore((state) => state);

  return (
    <>
      <section className="flex flex-row">
        <Aside />
        <div className="flex-1 p-4">
          <div className="md:hidden flex gap-2 z-10 sticky top-0 left-0 bg-white pt-2 pb-4">
            <Button onClick={e => {
              e.preventDefault();
              storeAction.toggleHomeMenu();
            }}>
              <FontAwesomeIcon icon={faBars} />
            </Button>
            <Logo />
          </div>
          {children}
        </div>
      </section>
    </>
  );
}