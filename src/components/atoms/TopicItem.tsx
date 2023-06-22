"use client";

import Link from "next/link";
import React from "react";
import { UrlObject } from "url";

const haloSize = 216;
const haloOffset = haloSize / 2;

type TopicItemProps = {
  href: string | UrlObject;
  title: string;
  description: string;
};

export const TopicItem: React.FC<TopicItemProps> = ({
  href,
  title,
  description,
}) => {
  const [mouseHovering, setMouseHovering] = React.useState(false);
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 });

  const handleMouseEnter = () => setMouseHovering(true);
  const handleMouseLeave = () => setMouseHovering(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // calculate inner position of cursor
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({ x, y });
  };

  return (
    <Link
      href={href}
      className="group relative overflow-hidden rounded-lg border border-transparent transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="px-5 py-4">
        <span
          style={{
            height: haloSize,
            width: haloSize,
            left: mousePos.x - haloOffset,
            top: mousePos.y - haloOffset,
            opacity: mouseHovering ? 0.3 : 0,
          }}
          className="pointer-events-none absolute -z-10 rounded-full bg-gradient-radial from-indigo-400 blur-2xl transition-opacity"
        />
        <h2 className="mb-3 text-2xl font-semibold">
          {title}{" "}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
        <p className="m-0 max-w-[30ch] text-sm opacity-50">{description}</p>
      </div>
    </Link>
  );
};
