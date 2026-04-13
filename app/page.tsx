import Image from "next/image";
import {Project, projects} from "./_lib/data"

const featured = projects[0]

export default function Home() {
  return (
    <>
        <h1 className="text-3xl dark:text-zinc-50">Most Recent Project</h1>
        <div className="grid grid-cols-2 max-md:grid-cols-1 gap-10 p-5 w-full">
          <Image
            className="w-full h-auto object-cover aspect-[2 / 1] rounded-md ring-3 shadow-lg/50 min-w-0"
            src={featured.images[1]}
            alt={featured.images[1].alt}
            width={featured.images[1].width}
            height={featured.images[1].height}
          />
          <div className="flex flex-col justify-center">
          <h2 className="text-2xl font-medium">{featured.title}</h2>
          <p className="text-lg dark:text-zinc-50">
            {featured.shortdesc}
          </p>
          </div>
        </div>
    </>
  );
}
