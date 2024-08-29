import { Squares2X2Icon, EnvelopeIcon } from '@heroicons/react/24/solid'
import Link from "next/link";

export default function SideMenu() {

  const Li = ({ children = <></>, title, link, left, active }: { children?: React.ReactNode, title: string, link: string, left?: React.ReactNode, active?: boolean }) => (
    <li className={`flex flex-row gap-3 px-5 py-2 ${active && 'bg-[#333a48]'}`}>
      {left || ''}
      <Link href={link}>{title}</Link>
      {children}
    </li>
  )

  return (
    <aside className="flex flex-col gap-5 w-[290px] bg-[#1c2434] text-white min-h-[100vh]">
      <h1 className="p-5 text-3xl font-bold">{process.env.NEXT_PUBLIC_TITLE} Admin</h1>
      <nav className="px-5 text-[#dee4ee]">
        <ul>
          <Li active title="Dashboard" link="/admin" left={<Squares2X2Icon className="h-6 w-6" />} />
          <Li title="Messages" link="/admin" left={<EnvelopeIcon className="h-6 w-6" />} />
        </ul>
      </nav>
    </aside>
  )
}