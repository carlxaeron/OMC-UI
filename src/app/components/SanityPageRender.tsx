'use client';

// import { Metadata } from "next";
import React, { useEffect } from "react";
import { sanityClient } from "../etc/sanityClient";
import { mapping } from "../mapping";
import SanityRenderer from "../components/SanityRenderer";

// export const metadata: Metadata = {
//   title: "Page",
//   description: "",
// };

export default function SanityPageRender(props: any) {
  const [data, setData] = React.useState<any>([]);

  const fetchData = async (fd: { where: any; } | undefined) => {
    let f:any = false;
    const propsWhere = props?.where || fd?.where || false;
    if(props?.params?.slug) {
      f = mapping.SLUG(props?.params?.slug)
    } else if (propsWhere) {
      f = mapping.SECTION(props)
    }

    await sanityClient.fetch(f).then((resp) => {
      console.log(resp);
      setData([]);
      if(resp.length > 0) {
        const arr: any[] = [];
        const cont = resp[0].contents || resp;
        cont.forEach((c: any) => {
          arr.push(c);
        });
        setData(arr);
      }
    });
  };

  useEffect(() => {
    fetchData({
      where: props?.params?.slug || props?.where || false
    });
  }, []);

  return (
      <>
        {data.map((newData: any) => (
          <section id={newData.sectionId} key={newData.sectionId}>
            {/* eslint-disable-next-line react/jsx-key */}
            <SanityRenderer data={newData.content} />
          </section>
        ))}
    </>
  )
}