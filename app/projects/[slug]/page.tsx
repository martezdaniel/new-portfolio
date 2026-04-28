import { projects } from "@/app/_lib/data";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default async function ProjectPage({params}: {params: Promise<{slug: string}>}) {
    // putting slug in curly brackets destructures the variable to keep it all on same line. it still awaits the promise for each project page
    const {slug} = await params
    const project = projects.find(p => p.slug === slug)

    if (!project) {
        notFound()
    }

    return (
      <div className="space-y-6">
        <Link href="/projects" className="mt-8 inline-flex items-center gap-2 px-4 py-3 rounded-lg border-2 border-zinc-300 dark:border-neutral-600 font-medium hover:bg-zinc-100 dark:hover:bg-neutral-700 transition-all duration-200 hover:shadow-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
            />
          </svg>
          Projects
        </Link>
        <h1 className="text-3xl font-bold">{project.title}</h1>
        <div>
          {project.collaborators && (
            <h3 className="font-medium">
              Collaborators:{" "}
              {project.collaborators.map((c, index, arr) => (
                <span key={c.key}>
                  {c.name}
                  {index < arr.length - 1 && ", "}{" "}
                  {/* Checks the index of the array to add commas to the end of each name except for the last one*/}
                </span>
              ))}
            </h3>
          )}
        </div>
        <p className="text-zinc-700 dark:text-zinc-300 leading-8">
          {project.description}
        </p>
        {/* Project Buttons */}
        <div className="flex grid grid-cols-2 grid-rows-2 lg:grid-cols-1 lg:grid-rows-1 gap-4 justify-center">
          {project.links.map((link) => (
            <Link
              key={link.key}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
          {project.images.map((image) => (
            <Image
              key={image.key}
              className="rounded-lg"
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
            />
          ))}
        </div>
      </div>
    );
}