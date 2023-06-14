import { TopicItem } from "@/components";

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
