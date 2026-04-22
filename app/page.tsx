import Image from "next/image";
import {Project, projects} from "./_lib/data"

const featured = projects[0]

export default function Home() {
  return (
    <>
        <h1 className="text-3xl dark:text-zinc-50">Most Recent Project</h1>
        <div className="grid gap-10 w-full p-10">
          <Image
            className="w-full h-auto block object-cover aspect-[2/1] rounded-md ring-3 shadow-lg/50"
            src={featured.images[1]}
            alt={featured.images[1].alt}
            width={featured.images[1].width}
            height={featured.images[1].height}
          />
          <div className="flex flex-col justify-center gap-4">
          <h2 className="text-2xl text-zinc-700 dark:text-zinc-50 font-medium">{featured.title}</h2>
          <p className="text-lg text-zinc-700 dark:text-zinc-300">
            {featured.shortdesc}
          </p>
          </div>
        </div>
    </>
  );
}
