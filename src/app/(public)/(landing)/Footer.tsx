import Link from "next/link";
import { mapping } from "./mapping";

export default function Footer() {
  return (
    <>
      <footer className="flex justify-center">
        <div className="flex max-w-[960px] flex-1 flex-col">
          <footer className="flex flex-col gap-6 px-5 py-10 text-center @container">
            <div className="flex flex-wrap items-center justify-center gap-6 @[480px]:flex-row @[480px]:justify-around">
              { mapping.map((item, index) => (
                <Link className="text-[#60758a] text-base font-normal leading-normal min-w-20" key={index} href={item.path}>{item.metadata.title}</Link>
              )) }
            </div>
            <p className="text-[#60758a] text-base font-normal leading-normal">© {new Date().getFullYear()} {process.env.NEXT_PUBLIC_TITLE}</p>
          </footer>
        </div>
      </footer>
    </> 
  )
}