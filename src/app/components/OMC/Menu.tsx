'use client';
// import { client, sanityFetch } from '@/sanity/client';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
// import { SanityDocument } from 'next-sanity';
import Link from "next/link";
import React, { useContext, useEffect } from 'react';
import { sanityClient } from "@/app/etc/sanityClient";
import { Context } from '@/app/context/provider';
import { mapping } from '@/app/mapping';

type MenuProps = {
    mobile: boolean,
}

interface PageData {
    _id: any;
    title: string;
    link: string;
}

// export default async function Menu2(props: Menu2Props) {
export default function Menu(props: MenuProps) {
    const ctx: any = useContext(Context);
    // const pages = await sanityFetch<SanityDocument[]>({query: PAGES_QUERY});

    const [pages, setPages] = React.useState<PageData[]>([]);
    useEffect(() => {
        const fetchData = async () => {
            await sanityClient.fetch(mapping.MENU).then((pages) => {
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
                <Link href={`${page.link || '/'}${ctx.hideProj ? `?${page.title}` : ''}`}>
                    {!props.mobile && (<Typography variant="body2" color="text.primary">
                        {ctx.hideProj ? 'Test' : page.title}
                    </Typography>)}
                    {props.mobile && page.title}
                </Link>
            </MenuItem>))}
        </>
    )
}