import Provider from "./context/provider";
import { Metadata, ResolvingMetadata } from "next";
import { sanityFetch } from "@/sanity/client";
import { mapping } from "./mapping";
import '@/app/global.css';
import AnimatePresence from "./components/Animate";
import Template from "./components/Template";

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

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" /> */}
      </head>
      <body>
        <AnimatePresence>
          <Provider data={{}}>
            {/* <ThirdwebProvider> */}
            <Template>
              <main>
                {children}
              </main>
            </Template>
            {/* </ThirdwebProvider> */}
          </Provider>
        </AnimatePresence>
      </body>
    </html>
  )
}
