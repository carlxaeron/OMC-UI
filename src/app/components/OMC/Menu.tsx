import { sanityFetch } from '@/sanity/client';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import { SanityDocument } from 'next-sanity';
import Link from "next/link";

type Menu2Props = {
    mobile: boolean,
}

const PAGES_QUERY = `*[_type == 'menuType'] | order(order) {
    title,
    "link": Page->slug.current,
    _id,
  }`;

export default async function Menu2(props: Menu2Props) {
    const pages = await sanityFetch<SanityDocument[]>({query: PAGES_QUERY});
    console.log(pages);

    return (
        <>
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