import { faCalendar, faCalendarDays, faDonate, faHandHoldingUsd, faHandshake, faUsers, faWallet } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Squares2X2Icon, EnvelopeIcon, BellAlertIcon } from '@heroicons/react/24/outline';
import Link from "next/link";

export default function SideMenu() {

  const Li = ({ children = <></>, title, link, left, active }: { children?: React.ReactNode, title: string, link: string, left?: React.ReactNode, active?: boolean }) => (
    <li className={`flex flex-row gap-3 px-5 py-2 ${active && 'bg-[#333a48]'}`}>
      {left || ''}
      <span className='flex flex-1 justify-between'>
        <Link href={link}>{title}</Link>
        {children}
      </span>
    </li>
  )

  const Nav = ({ children, title }: { children: React.ReactNode, title: string }) => (
    <nav className="px-5 text-[#dee4ee]">
      <h2 className="text-sm text-gray-400 px-5 py-4 uppercase">{title}</h2>
      <ul>{children}</ul>
    </nav>
  )

  const Badge = ({ children, color }: { children: React.ReactNode, color: string }) => (
    <span className={`bg-${color}-500 text-white text-xs rounded-sm px-2 py-1`}>{children}</span>
  )

  return (
    <aside className="flex flex-col gap-5 w-[290px] bg-[#1c2434] text-white min-h-[100vh]">
      <h1 className="p-5 text-3xl font-bold">{process.env.NEXT_PUBLIC_TITLE} <span className="hidden md:inline">Admin</span></h1>
      <Nav title="Menu">
          <Li active title="Dashboard" link="/admin" left={<Squares2X2Icon className="h-6 w-6" />} />
          <Li active={false} title="Users" link="/admin" left={<FontAwesomeIcon className="h-5 w-6" icon={faUsers} />}><Badge color='blue'>456,000</Badge></Li>
          <Li active={false} title="Donations" link="/admin" left={<FontAwesomeIcon className="h-5 w-6" icon={faDonate} />} />
          <Li active={false} title="Funds" link="/admin" left={<FontAwesomeIcon className="h-5 w-6" icon={faWallet} />} />
          <Li active={false} title="Sponsors" link="/admin" left={<FontAwesomeIcon className="h-5 w-6" icon={faHandshake} />} />
          <Li active={false} title="Earnings" link="/admin" left={<FontAwesomeIcon className="h-5 w-6" icon={faHandHoldingUsd} />} />
          <Li active={false} title="Events" link="/admin/events" left={<FontAwesomeIcon className="h-5 w-6" icon={faCalendarDays} />} />
      </Nav>
      <Nav title="Support">
          <Li title="Inbox" link="/admin" left={<EnvelopeIcon className="h-6 w-6" />}><Badge color='red'>12</Badge></Li>
          <Li title="Notifications" link="/admin" left={<BellAlertIcon className="h-6 w-6" />}><Badge color='red'>24</Badge></Li>
      </Nav>
    </aside>
  )
}