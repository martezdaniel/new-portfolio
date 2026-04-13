'use client'
// import { useParams } from "next/navigation"
import { useRouter } from "next/router"

export default function ProjectPage() {
    // const params = useParams()
    const router = useRouter()
    return (
        <>
        <div className="m-10">
            <h1 className="text-2xl dark:text-zinc-50">Project Name: {router.query.slug}</h1>
        </div>
        </>
    )
}