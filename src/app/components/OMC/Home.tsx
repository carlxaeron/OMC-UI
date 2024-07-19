'use client';

import { sanityClient } from "@/app/etc/sanityClient";
import React, { useEffect } from "react";
import SanityRenderer from "../SanityRenderer";
import { mapping } from "@/app/mapping";

export default function Home() {
  const [data, setData] = React.useState<any>(null);

  const fetchData = async () => {
    const resp = await sanityClient.fetch(mapping.HOME);
    // console.log(data);
    setData(resp[0].contents[0].content);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <SanityRenderer data={data} />
    </>
  )
}


// ->{
//   'a':content[_type != 'reference']{
//     ...,
//   },
//   'b':content[_type == 'reference']->,
// },