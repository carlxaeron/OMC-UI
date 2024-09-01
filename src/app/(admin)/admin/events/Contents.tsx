import Link from "next/link";

const Events = [
  {
    id: 1,
    title: "Sunday Service",
    date: "2022-10-02",
    location: "Church Sanctuary",
  },
  {
    id: 2,
    title: "Bible Study",
    date: "2022-10-05",
    location: "Fellowship Hall",
  },
  {
    id: 3,
    title: "Youth Group Meeting",
    date: "2022-10-07",
    location: "Youth Room",
  },
  {
    id: 4,
    title: "Community Outreach",
    date: "2022-10-09",
    location: "Local Park",
  },
  {
    id: 5,
    title: "Prayer Meeting",
    date: "2022-10-12",
    location: "Prayer Room",
  },
];

export function EventsDashboard() {
  return (<section className="flex flex-col gap-4">
    <ul className="flex flex-col gap-3 text-sm">
      {Events.map((event) => (
        <li key={event.id} className="flex flex-col gap-1">
          <h3>{event.title}</h3>
          <p>{event.date} - {event.location}</p>
        </li>
      ))}
    </ul>
    <Link className="text-blue-500" href="/admin/events">View All</Link>
  </section>);
}

export default function Contents() {
  return (<h1>Upcoming Events.</h1>);
}