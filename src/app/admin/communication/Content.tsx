'use client';

import CourseCard from "@/app/components/admin/CourseCard";
import { Card, Tab, TabPanel, Tabs, TabsBody, TabsHeader } from "@material-tailwind/react";
import { useState } from "react";

export default function Content() {
  const [activeTab, setActiveTab] = useState("Reviews");
  const data = [
    {
      label: "Reviews",
      value: "Reviews",
      desc: `It really matters and then like it really doesn't matter.
      What matters is the people who are sparked by it. And the people 
      who are like offended by it, it doesn't matter.`,
    },
    {
      label: "Messages",
      value: "Messages",
      desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
    },
    {
      label: "Notification",
      value: "Notification",
      desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
    },
  ];
  return (
    <>
      <Tabs value={activeTab}>
        <TabsHeader
          className="rounded-none border-b border-blue-gray-50 bg-transparent p-0"
          indicatorProps={{
            className:
              "bg-transparent border-b-2 border-gray-900 shadow-none rounded-none",
          }}
        >
          {data.map(({ label, value }) => (
            <Tab
              key={value}
              value={value}
              onClick={() => setActiveTab(value)}
              className={`${activeTab === value ? "text-gray-900" : ""} w-auto`}
            >
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody>
          
        </TabsBody>
      </Tabs>
      {/* <Card>

      </Card> */}
    </>
  );
}