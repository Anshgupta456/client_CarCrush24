import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import Providers from "../components/Providers";

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "CarCrush24 - Vehicle Scrapping & Recycling",
  description: "Safe, responsible and eco-friendly vehicle disposal for two-wheelers, cars and commercial trucks across India.",
  icons: {
    icon: "/carcrush.ico",
    shortcut: "/carcrush.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${inter.variable} h-full scroll-smooth antialiased`}
    >
      <head>
        <link rel="icon" href="/carcrush.ico" sizes="any" />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-[#F8F9F5] text-[#131A15]">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
