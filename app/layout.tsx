import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import HeadScripts, { BodyScripts } from "@/components/scripts";
import { Toaster } from "@/components/ui/toaster";

const dmSans = DM_Sans({
  // variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "700", "800", "900", "1000"],
});

export const metadata: Metadata = {
  title: "Lumio AI",
  description: "Discover how Lumio AI provides custom AI workers to transform businesses, ensuring guaranteed ROI through intelligent automation and tailored solutions.",
  keywords: ["Custom AI solutions", "AI for businesses", "intelligent automation", "AI workers", "Lumio AI"],
  openGraph: {
    title: "Lumio AI",
    description: "Discover how Lumio AI provides custom AI workers to transform businesses, ensuring guaranteed ROI through intelligent automation and tailored solutions.",
    url: "https://www.teamlumio.ai/",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <HeadScripts />
        <link
          rel="icon"
          href="/images/logos/favicon-light.ico"
          media="(prefers-color-scheme: light)"
        />
        {/* Favicon for Dark Mode */}
        <link
          rel="icon"
          href="/images/logos/favicon-dark.ico"
          media="(prefers-color-scheme: dark)"
        />
      </head>
      <body className={`${dmSans.className} antialiased`}>
        <Header />
        {children}
        <Footer />
        <Toaster />
        <BodyScripts />
      </body>
    </html>
  );
}
