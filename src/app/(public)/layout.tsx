import type { Metadata } from "next";

import ThemeProvider from "@/components/providers/ThemeProvider";

export const metadata: Metadata = {
  metadataBase: new URL("https://drsonysherpa.com.np"),

  title: "Dr. Sony Sherpa - Obstetrician & Gynecologist",
  description:
    "Personal portfolio of Dr. Sony Sherpa, MD/MS - consultant obstetrician and gynecologist.",

  openGraph: {
    title: "Dr. Sony Sherpa - Obstetrician & Gynecologist",
    description:
      "Eight years devoted to high-risk pregnancy, minimally invasive surgery, and respectful maternity care.",
    url: "https://drsonysherpa.com.np",
    siteName: "Dr. Sony Sherpa",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Dr. Sony Sherpa",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Dr. Sony Sherpa - Obstetrician & Gynecologist",
    description:
      "Personal portfolio of Dr. Sony Sherpa, MD/MS - consultant obstetrician and gynecologist.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-full flex flex-col">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
