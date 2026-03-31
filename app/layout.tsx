import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";

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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* header and nav bar */}
        <div className="flex min-h-screen bg-zinc-50 font-sans justify-center dark:bg-gray-900">
          <main className="flex min-h-screen w-full max-w-3xl items-center justify-between py-32 px-16 bg-white dark:bg-gray-900">
            <div className="flex flex-col gap-6">
              <div className="flex flex-row flex-wrap items-center justify-between w-full">
              <h1 className="text-2xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
                Daniel Martez: Portfolio
              </h1>
              <nav>
                {navLinks.map((x) => (
                  <Link className="p-5 text-lg dark:text-zinc-50" key={x.id} href={x.href}>
                    {x.name}
                  </Link>
                ))}
              </nav>
              </div>
              <div className="m-10">
              {children}
              </div>
              {/* footer */}
              <div className="flex p-[5%] justify-center">
                <Link
                  href={"https://www.linkedin.com/in/daniel-martez-23a2912b0/"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-5"
                >
                  <Image
                    className="dark:invert"
                    src="/linkedin.png"
                    alt="LinkedIn icon from https://www.flaticon.com/"
                    width={40}
                    height={40}
                  />
                </Link>
                <Link 
                  href={"https://github.com/martezdaniel"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-5"
                  >
                    <Image
                    className="dark:invert"
                    src="/github.png"
                    alt="GitHub icon from https://www.flaticon.com/"
                    width={40}
                    height={40}
                    />
                </Link>
              </div>
              <p className="dark:text-zinc-50 text-center">Created and deployed using Vercel</p>
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
