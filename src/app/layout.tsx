import Menu from "./components/OMC/Menu"
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { ThirdwebProvider } from 'thirdweb/react';
import CssBaseline from '@mui/material/CssBaseline';
import Hero from './components/Hero';
import AppBar from "./components/AppBar";
import Theme from "./components/Theme";
import Provider from "./context/provider";
import { Metadata, ResolvingMetadata } from "next";
import Container from '@mui/material/Container';
import { sanityFetch } from "@/sanity/client";
import { mapping } from "./mapping";
import '@/app/global.css';

type Props = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

let settings: any;

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const [data]: any = await sanityFetch({ query: mapping.SETTINGS });

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

  const [data]: any = await sanityFetch({ query: mapping.SETTINGS });
  settings = data;

  const desktopMenu = await sanityFetch({ query: mapping.MENU });
  console.log(desktopMenu);
  const mobileMenu = await sanityFetch({ query: mapping.MENU_MOBILE });

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </head>
      <body>
        <AppRouterCacheProvider>
          <Provider data={{ desktopMenu, mobileMenu }}>
            <Theme>
              <ThirdwebProvider>
                <CssBaseline />
                <AppBar menu={{
                  desktop: <Menu mobile={false} />,
                  mobile: <Menu mobile={true} />,
                  settings,
                }} />
                <Hero />
                <main>
                  <Container>
                    {children}
                  </Container>
                </main>
              </ThirdwebProvider>
            </Theme>
          </Provider>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
