import Link from "next/link";
import React from "react";
import { UrlObject } from "url";

type TopicItemProps = {
  href: string | UrlObject;
  title: string;
  description: string;
};

const TopicItem: React.FC<TopicItemProps> = ({ href, title, description }) => {
  return (
    <Link
      href={href}
      className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
    >
      <h2 className="mb-3 text-2xl font-semibold">
        {title}{" "}
        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
          -&gt;
        </span>
      </h2>
      <p className="m-0 max-w-[30ch] text-sm opacity-50">{description}</p>
    </Link>
  );
};

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-start p-24">
      <div className="relative mb-24 flex place-items-center before:pointer-events-none before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
        <h2 className="text-3xl">Choose a topic</h2>
      </div>

      <div className="mb-32 grid gap-8 text-center sm:mb-0 sm:grid-cols-2 sm:text-left">
        <TopicItem
          href="https://nextjs.org/learn"
          title="Next.JS"
          description="Learn about Next.js in an interactive course with&nbsp;quizzes!"
        />

        <TopicItem
          href="/topic/hashing"
          title="Hashing"
          description="Learn about hashing and its applications."
        />
      </div>
    </div>
  );
}
