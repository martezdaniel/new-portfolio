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
        <div className="flex min-h-screen bg-zinc-50 font-sans justify-center dark:bg-neutral-900">
          {/* Sticky header */}
          <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-neutral-900/95 backdrop-blur-sm border-b border-zinc-200 dark:border-neutral-800 shadow-sm">
            <div className="max-w-4xl mx-auto px-8 py-6">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <h1 className="text-2xl font-bold tracking-tight text-black dark:text-zinc-50">
                  Daniel Martez: Portfolio
                </h1>
                <nav className="flex gap-1">
                  {navLinks.map((x) => (
                    <Link 
                      className="px-4 py-2 text-base font-medium rounded-md hover:bg-zinc-100 dark:hover:bg-neutral-800 dark:text-zinc-50 transition-colors duration-200" 
                      key={x.id} 
                      href={x.href}
                    >
                      {x.name}
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
          </header>
          
          <main className="flex min-h-screen w-full max-w-4xl justify-center pt-32 pb-16 px-8 bg-white dark:bg-neutral-900">
            <div className="flex flex-col gap-12 w-full">
              <div className="mt-8">
              {children}
              </div>
              {/* footer */}
              <footer className="mt-auto pt-12 border-t border-zinc-200 dark:border-neutral-800">
                <div className="flex gap-4 justify-center">
                  <Link
                    href={"https://www.linkedin.com/in/daniel-martez-23a2912b0/"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg hover:bg-zinc-100 dark:hover:bg-neutral-800 transition-colors duration-200"
                  >
                    <Image
                      className="dark:invert"
                      src="/linkedin.png"
                      alt="LinkedIn icon from https://www.flaticon.com/"
                      width={32}
                      height={32}
                    />
                  </Link>
                  <Link 
                    href={"https://github.com/martezdaniel"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg hover:bg-zinc-100 dark:hover:bg-neutral-800 transition-colors duration-200"
                  >
                    <Image
                      className="dark:invert"
                      src="/github.png"
                      alt="GitHub icon from https://www.flaticon.com/"
                      width={32}
                      height={32}
                    />
                  </Link>
                </div>
                <p className="dark:text-zinc-400 text-zinc-600 text-center text-sm mt-6">Created and deployed using Vercel</p>
              </footer>
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
