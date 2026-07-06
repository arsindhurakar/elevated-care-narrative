import type { Metadata } from "next";
import ThemeProvider from "@/components/providers/ThemeProvider";

export const metadata: Metadata = {
  title: "Dr. Sony Sherpa - Obstetrician & Gynecologist",
  description:
    "Personal portfolio of Dr. Sony Sherpa, MD FRCOG — consultant obstetrician and gynecologist.",
  openGraph: {
    title: "Dr. Sony Sherpa - Obstetrician & Gynecologist",
    description:
      "Twenty-three years devoted to high-risk pregnancy, minimally invasive surgery, and respectful maternity care.",
    type: "profile",
    images: [
      "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/dcf023cc-600f-478b-be25-735af9983dec/id-preview-ccab288f--c8187026-24d4-4604-af01-123c1e041a02.lovable.app-1783320822753.png",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Sony Sherpa - Obstetrician & Gynecologist",
    description:
      "Personal portfolio of Dr. Sony Sherpa, MD FRCOG — consultant obstetrician and gynecologist.",
    images: [
      "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/dcf023cc-600f-478b-be25-735af9983dec/id-preview-ccab288f--c8187026-24d4-4604-af01-123c1e041a02.lovable.app-1783320822753.png",
    ],
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