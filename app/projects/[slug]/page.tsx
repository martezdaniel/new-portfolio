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
        <div>
            <h1>{project.title}</h1>
        </div>
    )
}