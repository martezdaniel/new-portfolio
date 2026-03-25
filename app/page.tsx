import Image from "next/image";
import {Project, projects} from "./_lib/data"

const featured = projects[0]

export default function Home() {
  return (
    <>
        <h1 className="text-2xl dark:text-zinc-50">Most Recent Project</h1>
        <div className="grid p-5">
          <Image
            className="w-full h-auto object-fill aspect-[2 / 1] rounded-md ring-3 shadow-lg/50"
            src={featured.images[1]}
            alt={featured.images[1].alt}
            width={featured.images[1].width}
            height={featured.images[1].height}
          />
          <div>
          <h2 className="text-xl font-medium">{featured.title}</h2>
          <p className="dark:text-zinc-50">
            {featured.shortdesc}
          </p>
          </div>
        </div>
    </>
  );
}
