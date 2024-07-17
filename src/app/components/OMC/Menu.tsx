import { sanityClient } from "@/app/sanityClient";
import { AwaitedReactNode, JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, useEffect, useState } from "react";
// import { sanityFetch } from "@/sanity/client";
// import { SanityDocument } from "next-sanity";
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import Link from "next/link";
import Menu2 from "./Menu2";
// import { useNavigate } from 'react-router-dom';

interface PageData {
    _id: any;
    title: string;
    link: string;
}

export default function Menu(props: any) {
    const [pages, setPages] = useState<PageData[]>([]);
    // const navigate = useNavigate(); // Initialize useNavigate

    useEffect(() => {
        const fetchData = async () => {
            const PAGES_QUERY = `*[_type == 'menuType'] | order(order) {
  title,
  "link": Page->slug.current,
  _id,
}`;
            //   const pages = await sanityFetch<SanityDocument[]>({query: PAGES_QUERY});
            const pages = await sanityClient.fetch(PAGES_QUERY);
            setPages(pages);
        }
        fetchData();
    }, []);

    return (
        <>
            <Menu2 mobile={false} />
            { pages.map(page => ( <MenuItem
                // onClick={() => navigate(page.link ?? '/')}
                sx={props.mobile && { py: '6px', px: '12px' }}
                key={page._id}
            >
                <Link href={page.link || '/'}>
                    { !props.mobile && (<Typography variant="body2" color="text.primary">
                    {page.title}
                    </Typography>) }
                    { props.mobile && page.title }
                </Link>
            </MenuItem> )) }
        </>
    )
}