'use client';

import { Button, Card, CardBody, CardFooter, CardHeader, Typography } from "@material-tailwind/react";

export default function Dashboard() {
  const data = [
    { title: "1K", content: "Life Time Courses Commission" },
    { title: "800", content: "Life Time Courses Commission" },
    { title: "200", content: "Life Time Pending Commission" }
  ];

  return (
    <section className="md:flex gap-4">
      <div className="md:w-[35%]">
        {data.map((item, index) => (
          <Card key={index} className="w-full mb-4">
            <CardBody className="flex gap-4 text-black">
              <img src="/assets/images/graph.svg" />
              <div>
                <div className="font-bold text-lg">
                  ${item.title}
                </div>
                <div className="text-xs">
                  {item.content}
                </div>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
      <div className="md:w-[65%]">
        <Card className="w-full mb-4 md:h-[calc(100%-17px)]">
          <CardBody className="flex gap-4 text-black justify-center">
            <img src="/assets/images/graph2.svg" className="w-full sm:max-h-[260px]" /> 
          </CardBody>
        </Card>
      </div>
    </section>
  );
}