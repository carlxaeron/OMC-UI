'use client';

import { sanityClient } from "@/app/etc/sanityClient";
import React, { useEffect } from "react";
import SanityRenderer from "@/app/components/SanityRenderer";
import { mapping } from "@/app/mapping";
import { Grid, Button } from '@mui/material';
import { useRouter } from "next/navigation";
import './Home.module.css';

export default function Home() {
  const [data, setData] = React.useState<any>([]);
  const router = useRouter();

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
      <section id='home'>
        {data.map((newData: any) => (
          <section id={newData.sectionId} key={newData.sectionId} style={{ textAlign: 'center' }}>
            {/* eslint-disable-next-line react/jsx-key */}
            <SanityRenderer data={newData.content} />
          </section>
        ))}
        <Grid container>
          <Grid item xs={6} spacing={12} sx={{pb: 5, textAlign: {xs: 'left', sm: 'right'}, pr: {sm: 5}}}>
            <Button color="primary" variant="contained" onClick={() => router.push('/auth/login')}>Get Involved</Button>
          </Grid>
          <Grid item xs={6} sx={{pb: {sm: 5, xs: 0}, textAlign: {xs: 'right', sm: 'left'}, pl: {sm: 5}}}>
            <Button color="secondary" variant="outlined">Learn More</Button>
          </Grid>
        </Grid>
    </section>
  )
}