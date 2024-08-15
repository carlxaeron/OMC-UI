import { Metadata, ResolvingMetadata } from "next";
import Header from "../components/public/Header";
import Footer from "../components/public/Footer";

type Props = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

let settings: any;

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // const [data]: any = await sanityFetch({ query: mapping.SETTINGS });
  const data: any = {
    title: process.env.NEXT_PUBLIC_HIDE ? 'Testing' : process.env.NEXT_PUBLIC_TITLE,
  };

  const title = data.title || 'Title';
  const description = data.siteDescription || 'Description';

  settings = data;

  return {
    title: {
      template: `%s | ${title}`,
      default: title,
    },
    description,
  };
}

export default async function PublicLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}