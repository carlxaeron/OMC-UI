import theme from '../theme';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from '@mui/material/styles';
import { ThirdwebProvider } from "thirdweb/react";
import AppBar from './components/AppBar';
import './assets/styles.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Open Missionary Community",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </head>
      <ThemeProvider theme={theme}>
        <body className={inter.className}>
            <AppRouterCacheProvider>
              <ThirdwebProvider>
                  <AppBar />
                  {children}
              </ThirdwebProvider>
            </AppRouterCacheProvider>
        </body>
      </ThemeProvider>
    </html>
  );
}
