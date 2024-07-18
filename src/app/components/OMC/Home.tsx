'use client';

import { sanityClient } from "@/app/etc/sanityClient";
import { useEffect } from "react";

export default function Home() {
  const fetchData = async () => {
    // const data2 = await sanityClient.fetch(`*[_type == "pageType" && title == "Home"]{}`);
    // console.log(data2);
    const data = await sanityClient.fetch(`*[_type == "pageType" && title == "Home"]{
      contents[]->{
        content[]{
          ...,
          _type == 'reference' => {
            ...,
            'id':@,
          }
        },
        'test': _type == 'mediaType' => {...},
      }
    }`);
    console.log(data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  fetchData();

  return (
    <div>
      {/* <h1>Home</h1> */}
    </div>
  )
}


// ->{
//   'a':content[_type != 'reference']{
//     ...,
//   },
//   'b':content[_type == 'reference']->,
// },