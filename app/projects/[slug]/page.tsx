'use client'
import { useParams } from "next/navigation"

export default function ProjectPage() {
    const params = useParams()
    return (
        <>
        <div className="m-10">
            <h1 className="text-2xl dark:text-zinc-50">Project Name: {params.slug}</h1>
        </div>
        </>
    )
}