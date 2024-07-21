'use client';

import { sanityClient } from "@/app/etc/sanityClient";
import React, { useEffect } from "react";
import SanityRenderer from "../SanityRenderer";
import { mapping } from "@/app/mapping";

export default function Home() {
  const [data, setData] = React.useState<any>([]);

  const fetchData = async () => {
    await sanityClient.fetch(mapping.HOME).then((resp) => {
      setData([]);
      const arr: any[] = [];
      resp[0].contents.forEach((c: any) => {
        arr.push(c);
      });
      setData(arr);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
      <>
        {data.map((newData: any) => (
          <section id={newData.sectionId} key={newData.sectionId} style={{ textAlign: 'center' }}>
            {/* eslint-disable-next-line react/jsx-key */}
            <SanityRenderer data={newData.content} />
          </section>
        ))}
    </>
  )
}