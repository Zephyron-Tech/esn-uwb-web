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
  description: "Erasmus Student Network UWB Pilsen",
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
