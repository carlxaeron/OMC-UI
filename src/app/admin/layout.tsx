import Provider from "@/app/context/provider";
import { Metadata, ResolvingMetadata } from "next";
import '@/app/global.css';
import { SideMenu } from "@/app/components/admin/SideMenu";

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
    title: process.env.NEXT_PUBLIC_HIDE ? 'Testing' : 'Dr Krizz Online',
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
      <body className={process.env.NEXT_PUBLIC_HIDE && "w-[1366px]"}>
        <Provider data={{}}>
          <main className="flex">
            <nav className="w-[240px] bg-black h-screen">
              <SideMenu />
            </nav>
            <section className="w-[calc(100%-240px)] p-4">
              {children}
            </section>
          </main>
        </Provider>
      </body>
    </html>
  )
}
