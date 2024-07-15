import { sanityFetch } from "@/sanity/client";
import { SanityDocument } from "next-sanity";

export default async function IndexPage() {
  const PAGES_QUERY = `*[_type == 'pageType']{
    title,
    slug,
    _key,
  }`;
  const pages = await sanityFetch<SanityDocument[]>({query: PAGES_QUERY});
  console.log(pages);

  const HOME_QUERY = `*[_type == 'pageType' && title == 'Home'][0]{
    contents[]->{
      content[]
    }
  }`;
  const home = await sanityFetch<SanityDocument[]>({query: HOME_QUERY});
  console.log(home);

  return (
    <main>
      { pages.map(page => ( <h1 key={page._key}>{page.title}</h1> )) }
      <h1>123</h1>
    </main>
  )
}
