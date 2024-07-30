import Provider from "./context/provider";
import { Metadata, ResolvingMetadata } from "next";
import { sanityFetch } from "@/sanity/client";
import { mapping } from "./mapping";
import '@/app/global.css';
import Header from './components/Header';
import Head from "./components/Head";

type Props = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

let settings: any;
let resp: any;

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // const [data]: any = await sanityFetch({ query: mapping.SETTINGS });
  const data:any = {};

  const title = data.title || process.env.TITLE || 'Title';
  const description = data.siteDescription || process.env.TITLE || 'Description';

  settings = data;

  resp = {
    title: {
      template: `%s | ${title}`,
      default: title,
    },
    description,
  };

  return resp;
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head />
      <body>
          <Provider data={{}}>
              {/* <ThirdwebProvider> */}
                <main className="relative flex size-full min-h-screen flex-col bg-slate-50 group/design-root overflow-x-hidden"
                style={{ fontFamily: "Public Sans, Noto Sans, sans-serif" }}>
                  <div className="layout-container flex h-full grow flex-col md:pt-[65px] pt-[45px]">
                    <Header />
                    <div className="@[480px]:px-40 flex flex-1 justify-center py-5">
                      <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
                        {children}
                      </div>
                    </div>
                  </div>
                </main>
              {/* </ThirdwebProvider> */}
          </Provider>
      </body>
    </html>
  )
}
