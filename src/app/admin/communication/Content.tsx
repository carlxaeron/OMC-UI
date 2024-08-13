'use client';

import { Pagination } from "@/app/components/admin/Pagination";
import Review from "@/app/components/admin/Review";
import { Context } from "@/app/context/provider";
import { Button, Checkbox, Option, Select, Tab, Tabs, TabsBody, TabsHeader } from "@material-tailwind/react";
import { useContext, useState } from "react";
import MessagesTab from "./tabs/Messages";

export default function Content() {
  const ctx:any = useContext(Context);
  const isMobile = ctx.width <= 768;
  const [activeTab, setActiveTab] = useState("Reviews");
  const [showFilter, setShowFilter] = useState(false);

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

  const Filter = () => {
    const filter = (
      <div className="flex flex-col md:flex-row gap-4">
          <div className="md:w-auto w-1/2">
            <Checkbox label={<span className="text-sm text-black">Has a Comment</span>} />
          </div>
          <div className="md:w-auto w-1/2">
            <Checkbox label={<span className="text-sm text-black">Not Answered</span>} />
          </div>
          <div className="md:w-52 w-full">
            <Select variant="standard" label="Rating">
              <Option>All</Option>
            </Select>
          </div>
          <div className="md:w-52 w-full">
            <Select variant="standard" label="Sort By">
              <Option>All</Option>
            </Select>
          </div>
          <div className="flex-1 flex align-center justify-end">
            <Button color="blue" className="md:w-auto w-full">Export to CSV</Button>
          </div>
        </div>
    )

    return (
      <>
        {!isMobile && filter}
        {isMobile && (
          <div className="mt-4">
            {showFilter && filter}
            <Button className="w-full mt-4" color="blue" onClick={() => setShowFilter(!showFilter)}>{showFilter ? 'Hide' : 'Show'} Filter </Button>
          </div>
        )}
      </>
    )
  }

  const TabsBodyBody = ({children}: {children: React.ReactNode}) => (
    <div className="flex flex-col gap-6">
      {children}
    </div>
  )

  return (
    <section>
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
              className={`${activeTab === value ? "text-gray-900" : ""} md:w-auto`}
            >
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody className="md:pr-20 flex flex-col gap-4 pt-4">
          { activeTab === "Messages" && <MessagesTab /> }
          { activeTab === "Reviews" && (
            <>
              <Filter />
              <TabsBodyBody>
                {[...Array(5)].map((_, index) => (
                  <Review key={index} />
                ))}
                <div className="flex justify-center">
                  <Pagination />
                </div>
              </TabsBodyBody>
            </>
          ) }
        </TabsBody>
      </Tabs>
    </section>
  );
}