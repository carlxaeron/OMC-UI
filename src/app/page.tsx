import { sanityFetch } from "@/sanity/client";
import { SanityDocument } from "next-sanity";
import Button from '@mui/material/Button'; // Import the Button component from the appropriate library

import DemoPage from "./demo/page";
import Container from '@mui/material/Container';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Open Missionary Community",
  description: "",
};

export default async function IndexPage() {
  // const PAGES_QUERY = `*[_type == 'pageType']{
  //   title,
  //   slug,
  //   _id,
  // }`;
  // const pages = await sanityFetch<SanityDocument[]>({query: PAGES_QUERY});
  // console.log(pages);

  const HOME_QUERY = `*[_type == 'pageType' && title == 'Home'][0]{
    contents[]->{
      content[]
    }
  }`;
  const home = await sanityFetch<SanityDocument[]>({query: HOME_QUERY});
  console.log(home);

  return (
    <main>
      {/* { pages.map(page => ( <h1 key={page._id}>{page.title}</h1> )) }
      <h1>123</h1> */}
      <Container maxWidth="lg">
        <DemoPage />
        <Button>Test</Button>
      </Container>
    </main>
  )
}
