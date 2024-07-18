'use client';

import { sanityClient } from "@/app/etc/sanityClient";
import React, { useEffect } from "react";
import SanityRenderer from "../SanityRenderer";

export default function Home() {
  const [data, setData] = React.useState<any>(null);

  const fetchData = async () => {
    const resp = await sanityClient.fetch(`*[_type == "pageType" && title == "Home"]{
      contents[]->{
        content[]{
          ...,
          _type == 'reference' => {
            ...*[_id == ^._ref && _type == 'mediaItemType'][0]{
              description,
              media{
                asset{
                  ...,
                  'image':*[_id == ^._ref][0],
                },
              },
              title,
            },
          }
        },
      }
    }`);
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