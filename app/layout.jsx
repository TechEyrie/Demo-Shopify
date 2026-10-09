import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata = {
  title: "V2 3D Printing - Precision 3D Printed Toys & Collectibles",
  description:
    "Precision multi-color 3D printed articulated toys made from 100% non-toxic, eco-friendly filaments. Ultra-smooth kinetic action with zero loose parts or assembly required.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={jakarta.variable}>
      <body className="bg-surface font-sans text-body-md text-on-surface antialiased">
        {/*
          The icon font stays a real stylesheet link: next/font/google can't
          express Material Symbols' opsz/wght/FILL/GRAD axes. React 19 hoists
          these into <head>. The original loaded this stylesheet twice.
        */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font -- That rule targets the Pages Router, where a font link in a page only loads for that page. This is the root layout, so it loads for every route. */}
        <link
          rel="stylesheet"
          precedence="default"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
        />
        {children}
      </body>
    </html>
  );
}
