import type { Metadata } from "next";
import { Lato } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const lato = Lato({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "700"],
  variable: "--font-lato",
});

const kelsonSans = localFont({
  src: [
    {
      path: './fonts/KelsonSans-Normal.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/KelsonSans-Bold.otf',
      weight: '700',
      style: 'normal',
    }
  ],
  variable: '--font-kelson-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "ESN UWB Pilsen",
  description: "Erasmus Student Network UWB Pilsen — Students Helping Students. Making your exchange semester in Pilsen unforgettable.",
  openGraph: {
    title: "ESN UWB Pilsen",
    description: "Students Helping Students — Making your Erasmus experience unforgettable",
    url: "https://esnpilsen.cz",
    siteName: "ESN UWB Pilsen",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ESN UWB Pilsen — Erasmus Student Network",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ESN UWB Pilsen",
    description: "Students Helping Students — Making your Erasmus experience unforgettable",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        id="outstatic"
        className={`${lato.variable} ${kelsonSans.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
