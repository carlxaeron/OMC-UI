import { sanityClient } from "@/app/sanityClient";
import { AwaitedReactNode, JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, useEffect } from "react";
// import { sanityFetch } from "@/sanity/client";
// import { SanityDocument } from "next-sanity";
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';

export default async function Menu() {
    const PAGES_QUERY = `*[_type == 'menuType'] | order(order) {
  Page->{
    title,
    _id,
  }
}`;
    //   const pages = await sanityFetch<SanityDocument[]>({query: PAGES_QUERY});
    const pages = await sanityClient.fetch(PAGES_QUERY);

    return (
        <>
            { pages.map((page: { _id: Key | null | undefined; Page: { title: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; }; }) => ( <MenuItem
                // onClick={() => scrollToSection('features')}
                sx={{ py: '6px', px: '12px' }}
                key={page._id}
            >
                <Typography variant="body2" color="text.primary">
                {page.Page.title}
                </Typography>
            </MenuItem> )) }
        </>
    )
}