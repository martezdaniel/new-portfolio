import { projects } from "@/app/_lib/data";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function ProjectPage({params}: {params: {slug: string}}) {
    const project = projects.find(p => p.slug === params.slug)

    if (!project) {
        notFound()
    }

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold">{project.title}</h1>
            <div>
            {project.collaborators && (
                    <h3>
                        Collaborators: {project.collaborators.map((c, index, arr) => (
                            <span key={c.key}>
                                {c.name}
                                {index < arr.length - 1 && ", "} {/* Checks the index of the array to add commas to the end of each name except for the last one*/}
                            </span>
                        ))}
                    </h3>
            )}
            </div>
            <p className="text-zinc-700 dark:text-zinc-300">{project.description}</p>
            <div className="flex gap-4">
                {project.links.map(link => (
                    <Link
                    key={link.key}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                    >
                    {link.label}
                    </Link>
                ))}
            </div>
            <div className="grid gap-4">
                {project.images.map(image => (
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
    )
}