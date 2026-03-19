import Image from "next/image";

export default function Home() {
  return (
    <>
        <h1 className="text-2xl dark:text-zinc-50">Most Recent Project</h1>
        <div className="grid p-5">
          <Image
            className="w-full h-auto object-fill aspect-[2 / 1] rounded-md ring-3 shadow-lg/50"
            src={"/photogallery2.png"}
            alt="Screenshot of Denver page from Vacation Photo Gallery website"
            width={1024}
            height={489}
          />
          <p className="dark:text-zinc-50">
            Small HTML project I created to showcase simple skills and display
            my favorite photos from places I’ve been to.
          </p>
        </div>
    </>
  );
}
