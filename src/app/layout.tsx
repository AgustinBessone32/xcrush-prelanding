import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { QueryClient } from "@tanstack/react-query";
import type { GetServerSideProps, Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import defaultTheme from "./defaultTheme";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Xcrush.ai – Your Ultimate AI Girlfriend Experience | Real Chat, Exclusive Content & Custom Characters",
  description:
    "Discover a new level of intimacy with xcrush.ai’s AI girlfriends. Chat, connect, and customize your own virtual partner with exclusive content, personalized interactions, and immersive experiences tailored to your desires. Join now to explore the future of companionship!",
  alternates: {
    canonical: "https://xcrush.ai/",
  },
  robots: {
    index: process?.env?.ENVIROMENT === "PRODUCTION" ? true : false,
    googleBot: {
      index: process?.env?.ENVIROMENT === "PRODUCTION" ? true : false,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "Xcrush",
    description: `Discover a new level of intimacy with xcrush.ai’s AI girlfriends. Chat, connect, and customize your own virtual partner with exclusive content, personalized interactions, and immersive experiences tailored to your desires. Join now to explore the future of companionship!`,
    images: "https://d1znn43udvfjm3.cloudfront.net/assets/Logo.jpg",
  },
  metadataBase: new URL("https://d1znn43udvfjm3.cloudfront.net"),
  openGraph: {
    title:
      "Xcrush.ai – Your Ultimate AI Girlfriend Experience | Real Chat, Exclusive Content & Custom Characters",
    type: "website",
    description: `Discover a new level of intimacy with xcrush.ai’s AI girlfriends. Chat, connect, and customize your own virtual partner with exclusive content, personalized interactions, and immersive experiences tailored to your desires. Join now to explore the future of companionship!`,
    url: "https://xcrush.ai/",
    siteName: "Xcrush",
    images: "https://d1znn43udvfjm3.cloudfront.net/assets/Logo.jpg",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <Script id="fb-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '1020169062936759');
                fbq('track', 'PageView');`}
        </Script>

        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400..800&display=swap"
          rel="stylesheet"
        ></link>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=0"
        />
        <link rel="apple-touch-icon" href="/icon.png"></link>
        <link rel="apple-touch-icon-precomposed" href="/icon.png"></link>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <>
        <body className={inter.className}>
          <main>
            <NextIntlClientProvider messages={messages}>
              <AppRouterCacheProvider>
                <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>
              </AppRouterCacheProvider>
            </NextIntlClientProvider>
          </main>
        </body>
      </>
    </html>
  );
}
