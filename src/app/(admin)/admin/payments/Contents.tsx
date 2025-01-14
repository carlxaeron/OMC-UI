import Link from "next/link";
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode } from "react";

const Events: any = [
  {
    id: 1,
    title: "New Payment Method Added",
    date: "2022-09-01",
    location: "Online",
  },
  {
    id: 2,
    title: "Payment Processing Upgrade",
    date: "2022-09-05",
    location: "Headquarters",
  },
  {
    id: 3,
    title: "Payment Gateway Maintenance",
    date: "2022-09-10",
    location: "Data Center",
  },
  {
    id: 4,
    title: "Payment Fraud Detection System Update",
    date: "2022-09-15",
    location: "Security Department",
  },
  {
    id: 5,
    title: "New Payment API Integration",
    date: "2022-09-20",
    location: "Development Team",
  },
];

export function PaymentsDashboard() {
  return (<section className="flex flex-col gap-4">
    <ul className="flex flex-col gap-3 text-sm">
      {Events.map((event: { id: Key | null | undefined; title: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; date: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; location: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; }) => (
        <li key={event.id} className="flex flex-col gap-1">
          <h3>{event.title}</h3>
          <p>{event.date} - {event.location}</p>
        </li>
      ))}
    </ul>
    <Link className="text-blue-500" href="/admin/payments">View All</Link>
  </section>);
}

export default function Contents() {
  return (<h1>Payment Notifs.</h1>);
}