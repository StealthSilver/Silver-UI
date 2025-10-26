import type { Metadata } from "next";
import { SITE } from "../config/site.config";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import ThemeHeadIcons from "./components/ThemeHeadIcon";
import ClientWrapper from "./components/ClientWrapper";
import { Ubuntu, Roboto, Public_Sans } from "next/font/google";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-ubuntu",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
});

const publicSans = Public_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-public-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `Silver UI | Not your orthodox component library`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  openGraph: {
    title: SITE.name,
    description: SITE.description,
    url: SITE.url,
    siteName: SITE.name,
    images: [
      {
        url: SITE.ogImage,
        width: 1200,
        height: 630,
        alt: SITE.name,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    creator: SITE.twitterHandle,
    images: [SITE.ogImage],
  },
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${ubuntu.variable} ${roboto.variable} ${publicSans.variable}`}
    >
      <head>
        <ThemeHeadIcons />
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          value={{ light: "light", dark: "dark" }}
        >
          <ClientWrapper>{children}</ClientWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
