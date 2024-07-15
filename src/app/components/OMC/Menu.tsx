import { sanityClient } from "@/app/sanityClient";
import { AwaitedReactNode, JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, useEffect, useState } from "react";
// import { sanityFetch } from "@/sanity/client";
// import { SanityDocument } from "next-sanity";
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';

interface Page {
    title: string;
    _id: string;
}

interface PageData {
    Page: Page;
}

export default function Menu(props: any) {
    useEffect(() => {
        const fetchData = async () => {
            const PAGES_QUERY = `*[_type == 'menuType'] | order(order) {
                Page->{
                  title,
                  _id,
                }
            }`;
            //   const pages = await sanityFetch<SanityDocument[]>({query: PAGES_QUERY});
            const pages = await sanityClient.fetch(PAGES_QUERY);
            setPages(pages);
        }
        fetchData();
    }, []);

    const [pages, setPages] = useState<PageData[]>([]);

    return (
        <>
            { pages.map(page => ( <MenuItem
                // onClick={() => scrollToSection('features')}
                sx={props.mobile && { py: '6px', px: '12px' }}
                key={props.mobile && page.Page._id}
            >
                { !props.mobile && (<Typography variant="body2" color="text.primary">
                {page.Page.title}
                </Typography>) }
                { props.mobile && page.Page.title }
            </MenuItem> )) }
        </>
    )
}