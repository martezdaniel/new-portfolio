import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

// tailwind docs: https://tailwindcss.com/docs/installation/using-vite

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Daniel Martez - Portfolio",
  description: "My portfolio website",
};

export const viewport = { // will ensure that the content appears normal and viewable on every screen
  width: 'device-width',
  initialScale: 1,
};

const navLinks = [
  {id: 0, name: "Home", href: "/"} ,
  {id: 1, name: "About", href: "/about"} ,
  {id: 2, name: "Projects", href: "/projects"}
]

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* header and nav bar */}
        <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
          <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black">
            <div className="flex flex-col items-center gap-6 text-center">
              <h1 className="text-4xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
                Daniel Martez: Portfolio
              </h1>
              <nav>
                {navLinks.map(
                  (x) =>
                    <Link className="p-5 text-lg" key={x.id} href={x.href}>{x.name}</Link>
                )}
              </nav>
              {children}
              {/* footer */}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
