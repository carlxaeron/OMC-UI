import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
// import { ThirdwebProvider } from 'thirdweb/react';
import Provider from "./context/provider";
import { Metadata, ResolvingMetadata } from "next";
import { sanityFetch } from "@/sanity/client";
import { mapping } from "./mapping";
import '@/app/global.css';
import Header from './components/Header';

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
  const data:any = {};

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
        <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin="" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          rel="stylesheet"
          as="style"
          // onLoad="this.rel='stylesheet'"
          href="https://fonts.googleapis.com/css2?display=swap&amp;family=Noto+Sans%3Awght%40400%3B500%3B700%3B900&amp;family=Public+Sans%3Awght%40400%3B500%3B700%3B900"
        />

        <title>Galileo Design</title>
        <link rel="icon" type="image/x-icon" href="data:image/x-icon;base64," />

        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
      </head>
      <body>
        <AppRouterCacheProvider>
          <Provider data={{}}>
              {/* <ThirdwebProvider> */}
                <main className="relative flex size-full min-h-screen flex-col bg-slate-50 group/design-root overflow-x-hidden"
                style={{ fontFamily: "Public Sans, Noto Sans, sans-serif" }}>
                  <div className="layout-container flex h-full grow flex-col">
                    <Header />
                    {children}
                  </div>
                </main>
              {/* </ThirdwebProvider> */}
          </Provider>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
