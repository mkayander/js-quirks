import { NextPage } from "next";
import React from "react";

const getRandomDegree = () => {
  return Math.floor(Math.random() * 360);
};

type HashItemProps = {
  rotation: number;
};

const HashItem: React.FC<HashItemProps> = ({ rotation }) => {
  return (
    <div
      style={{
        transform: `rotate(${rotation}deg)`,
      }}
      className="pointer-events-none absolute h-full w-full"
    >
      <div
        style={{
          left: "50%",
          transform: "translate(-50%, -50%)",
          top: -1.5,
          height: 32,
        }}
        className="pointer-events-auto absolute z-20 w-2 cursor-pointer rounded-full bg-blue-100 text-2xl font-bold opacity-80 transition-all hover:w-3 hover:bg-blue-400 hover:opacity-100"
      />
    </div>
  );
};

type TopicPageProps = {};

const HashingPage: NextPage<TopicPageProps> = () => {
  const size = 428;

  return (
    <div className="flex flex-col items-center px-6">
      <h1 className="mb-24 text-center text-5xl">Consistent Hashing</h1>

      <div
        style={{
          width: size,
          height: size,
        }}
        className="relative flex flex-col items-center justify-center rounded-full border-4 border-indigo-300 shadow-xl shadow-indigo-300/20"
      >
        <span>Hash Circle</span>

        <HashItem rotation={0} />
        <HashItem rotation={getRandomDegree()} />
        <HashItem rotation={getRandomDegree()} />
        <HashItem rotation={getRandomDegree()} />
        <HashItem rotation={getRandomDegree()} />
      </div>
    </div>
  );
};

export default HashingPage;
