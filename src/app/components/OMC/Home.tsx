'use client';

import { sanityClient } from "@/app/etc/sanityClient";
import React, { useEffect } from "react";
import SanityRenderer from "../SanityRenderer";
import { mapping } from "@/app/mapping";
import { Grid, Button } from '@mui/material';

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
            <Grid container>
              <Grid item sm={6} xs={12} spacing={12} sx={{textAlign: {sm: 'right'}, pr: {sm: 5}}}>
                <Button color="primary" variant="contained">Get Involved</Button>
              </Grid>
              <Grid item sm={6} xs={12} sx={{textAlign: {sm: 'left'}, pl: {sm: 5}}}>
                <Button color="secondary" variant="outlined">Learn More</Button>
              </Grid>
            </Grid>
          </section>
        ))}
    </>
  )
}