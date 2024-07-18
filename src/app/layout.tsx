import Menu from "./components/OMC/Menu"
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { ThirdwebProvider } from 'thirdweb/react';
import CssBaseline from '@mui/material/CssBaseline';
import Hero from './components/Hero';
import AppBar from "./components/AppBar";
import Theme from "./components/Theme";
import Provider from "./context/provider";
import { Metadata } from "next";
import Container from '@mui/material/Container';

export const metadata: Metadata = {
  title: {
    template: '%s | Open Missionary Community',
    default: 'Open Missionary Community',
  },
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </head>
      <body>
        <AppRouterCacheProvider>
          <Provider>
            <Theme>
              <ThirdwebProvider>
                <CssBaseline />
                <AppBar menu={{
                  desktop: <Menu mobile={false} />,
                  mobile: <Menu mobile={true} />,
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
