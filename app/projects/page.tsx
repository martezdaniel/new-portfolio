import { projects } from "../_lib/data"
import Link from "next/link"
import Image from "next/image"

export default function Projects() {
   return (
   <section className="w-full">
    <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-8 text-center">Projects</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map(project => (
         <Link
         key={project.key}
         href={`/projects/${project.slug}`}
         className="group block rounded-xl overflow-hidden bg-white dark:bg-neutral-800 border border-zinc-200 dark:border-neutral-700 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
         >
            <div className="aspect-video overflow-hidden">
              <Image
              key={project.images[0].key}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              src={project.images[0].src}
              alt={project.images[0].alt}
              width={project.images[0].width}
              height={project.images[0].height}
              />
            </div>
            <div className="p-6 text-center">
               <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 mb-3 group-hover:text-zinc-700 dark:group-hover:text-zinc-300 transition-colors">
                  {project.title}
               </h2>
               <h4 className="font-semibold text-sm text-zinc-900 mb-3 dark:text-zinc-50 group-hover:text-zinz-700 dark:group-hover:text-zinc-300 transition-colors">
                  {project.years}
               </h4>
               <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                  {project.shortdesc}
               </p>
            </div>
         </Link>
      ))}
    </div>
   </section>
   )
}