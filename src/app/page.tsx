// import { sanityFetch } from "@/sanity/client";
// import { SanityDocument } from "next-sanity";

import DemoPage from "./demo/page";
import Container from '@mui/material/Container';

export default function IndexPage() {
  // const PAGES_QUERY = `*[_type == 'pageType']{
  //   title,
  //   slug,
  //   _id,
  // }`;
  // const pages = await sanityFetch<SanityDocument[]>({query: PAGES_QUERY});
  // console.log(pages);

  // const HOME_QUERY = `*[_type == 'pageType' && title == 'Home'][0]{
  //   contents[]->{
  //     content[]
  //   }
  // }`;
  // const home = await sanityFetch<SanityDocument[]>({query: HOME_QUERY});
  // console.log(home);

  return (
    <main>
      {/* { pages.map(page => ( <h1 key={page._id}>{page.title}</h1> )) }
      <h1>123</h1> */}
      <Container maxWidth="lg">
        <DemoPage />
      </Container>
    </main>
  )
}
