import Image from "next/image";
import Link from "next/link";
import {projects} from "./_lib/data"

const featured = projects[0]

export default function Home() {
  return (
    <section className="w-full">
        <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-8 text-center">Most Recent Project</h1>
        <div className="bg-white dark:bg-neutral-800 rounded-2xl overflow-hidden border border-zinc-200 dark:border-neutral-700 shadow-lg">
          <div className="aspect-video overflow-hidden">
            <Image
              className="w-full h-full object-cover"
              src={featured.images[1].src}
              alt={featured.images[1].alt}
              width={featured.images[1].width}
              height={featured.images[1].height}
            />
          </div>
          <div className="p-8">
            <h2 className="text-3xl text-zinc-900 dark:text-zinc-50 font-bold mb-4">{featured.title}</h2>
            <p className="text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed mb-6">
              {featured.shortdesc}
            </p>
            <Link 
              href={`/projects/${featured.slug}`}
              className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200 hover:shadow-lg"
            >
              View Project
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
    </section>
  );
}
