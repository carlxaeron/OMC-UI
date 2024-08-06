import Provider from "./context/provider";
import { Metadata, ResolvingMetadata } from "next";
import { sanityFetch } from "@/sanity/client";
import { mapping } from "./mapping";
import '@/app/global.css';
import AnimatePresence from "./components/Animate";
import { FaTachometerAlt, FaUsers, FaCog, FaBook, FaComments } from 'react-icons/fa';

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
      </head>
      <body>
      <AnimatePresence>
          <Provider data={{}}>
            <div className="flex h-screen">
              <aside className="w-64 bg-black text-white flex flex-col">
                <div className="p-4 text-lg font-bold">Admin Panel</div>
                <nav className="flex-1">
                  <ul>
                    <li className="p-4 hover:bg-gray-700 flex items-center">
                      <FaTachometerAlt className="mr-2" />
                      <a href="#">Dashboard</a>
                    </li>
                    <li className="p-4 hover:bg-gray-700 flex items-center">
                      <FaBook className="mr-2" />
                      <a href="#">Courses</a>
                    </li>
                    <li className="p-4 hover:bg-gray-700 flex items-center">
                      <FaComments className="mr-2" />
                      <a href="#">Communication</a>
                    </li>
                    <li className="p-4 hover:bg-gray-700 flex items-center">
                      <FaUsers className="mr-2" />
                      <a href="#">Users</a>
                    </li>
                    <li className="p-4 hover:bg-gray-700 flex items-center">
                      <FaCog className="mr-2" />
                      <a href="#">Settings</a>
                    </li>
                  </ul>
                </nav>
              </aside>
              <main className="flex-1 p-8">
                {children}
              </main>
            </div>
          </Provider>
        </AnimatePresence>
      </body>
    </html>
  )
}
