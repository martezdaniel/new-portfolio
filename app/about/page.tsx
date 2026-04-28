/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <section className="w-full max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-8 text-center">
        About
      </h1>
      <div className="bg-white dark:bg-neutral-800 rounded-2xl p-8 border border-zinc-200 dark:border-neutral-700 shadow-lg">
        <div className="space-y-6 text-left text-base leading-8 text-zinc-700 dark:text-zinc-300">
          <p>
            My name is Daniel Martez. I currently live in Central Florida and
            graduated from UCF in the Spring of 2024, where I studied and
            obtained my bachelor's in Digital Media.
          </p>
          <p>
            I was introduced to basic HTML coding in my freshman year of high
            school in a digital design class that I took, and I always found it
            really cool that you can write code in a text file and it would
            display as a web page that you can view and interact with. Over
            time, every now and then I would try and experiment with HTML, and
            would try and make very simple pages based on my hobbies. It wasn't
            until I enrolled into UCF where I started to take web development
            more seriously, as it was a huge part of my Digital Media degree. I
            learned and enhanced my skills with HTML, CSS, JavaScript, and even
            into things that I never would have imagined using, such as React,
            WordPress, and PHP.
          </p>
          <p>
            In my time at UCF, I also learned a lot about marketing, working as
            a team, and how to develop full-fledged ideas for projects that
            could help the public. It taught me that developing isn't just
            typing out code and making things work properly on a screen, but
            that it's a giant process that needs a purpose, and that starts with
            you.
          </p>
          <p>
            Now post-graduation, my goals now are to bring what I've learned
            into wherever I go. I have goals to keep creating projects in and
            out of the workplace moving forward, and to create not only to show
            my skills, but to also provide a purpose, no matter the
            significance.
          </p>
          <p>
            My passion for web development grows every day and I like to use it
            as an opportunity to be creative and give my all to make the best
            product possible.
          </p>
        </div>
        <Image
          src={"/headshot.jpg"}
          alt="Headshot photo of Daniel Martez"
          width={614}
          height={911}
          className="w-48 h-48 rounded-full object-cover mx-auto my-8 shadow-md"
        />
        <Link
          href={
            "https://drive.google.com/file/d/170wRPKMWtLP01b9MVKhvturvrvuIq2Ao/view?usp=drive_link"
          }
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 flex place-self-center gap-2 px-6 py-3 rounded-lg border-2 border-zinc-300 dark:border-neutral-600 font-medium hover:bg-zinc-100 dark:hover:bg-neutral-700 transition-all duration-200 hover:shadow-md"
        >
          My Resume
        </Link>
      </div>
    </section>
  );
}
