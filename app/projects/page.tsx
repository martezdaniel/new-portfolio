import { projects } from "../_lib/data"
import Link from "next/link"
import Image from "next/image"

export default function Projects() {
   return (
   <>
    <h1 className="text-3xl text-zinc-700 dark:text-zinc-50">Projects</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-10">
      {projects.map(project => (
         <Link
         key={project.key}
         href={`/projects/${project.slug}`}
         className="block rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
         >
            <Image
            key={project.images[0].key}
            className="w-full height-48 object-cover"
            src={project.images[0].src}
            alt={project.images[0].alt}
            width={project.images[0].width}
            height={project.images[0].height}
            />
            <div className="p-4">
               <h2 className="text-xl font-semibold text-zinc-700 dark:text-zinc-50 mb-2">
                  {project.title}
               </h2>
               <p className="text-zinc-600 dark:text-zinc-400 text-sm">
                  {project.shortdesc}
               </p>
            </div>
         </Link>
      ))}
    </div>
    </>
   )
}