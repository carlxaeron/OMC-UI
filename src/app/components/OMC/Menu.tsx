'use client';
// import { client, sanityFetch } from '@/sanity/client';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
// import { SanityDocument } from 'next-sanity';
import Link from "next/link";
import React, { useEffect } from 'react';
import { sanityClient } from "@/app/etc/sanityClient";

type Menu2Props = {
    mobile: boolean,
}

const PAGES_QUERY = `*[_type == 'menuType'] | order(order) {
    title,
    "link": Page->slug.current,
    _id,
  }`;

interface PageData {
    _id: any;
    title: string;
    link: string;
}

// export default async function Menu2(props: Menu2Props) {
export default function Menu2(props: Menu2Props) {
    // const pages = await sanityFetch<SanityDocument[]>({query: PAGES_QUERY});

    const [pages, setPages] = React.useState<PageData[]>([]);
    useEffect(() => {
        const fetchData = async () => {
            await sanityClient.fetch(PAGES_QUERY).then((pages) => {
                setPages(pages);
            });
        };
        fetchData();
    }, []);

    return (
        <>
            {pages.map(page => (<MenuItem
                // onClick={() => navigate(page.link ?? '/')}
                sx={props.mobile && { py: '6px', px: '12px' }}
                key={page._id}
            >
                <Link href={page.link || '/'}>
                    {!props.mobile && (<Typography variant="body2" color="text.primary">
                        {page.title}
                    </Typography>)}
                    {props.mobile && page.title}
                </Link>
            </MenuItem>))}
        </>
    )
}