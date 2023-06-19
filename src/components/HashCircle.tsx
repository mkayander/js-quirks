"use client";

import { HashItem } from "@/components/HashItem";
import { Switch } from "@/components/Switch";
import React, { useEffect, useState } from "react";

const getRandomDegree = () => {
  return Math.floor(Math.random() * 360);
};

type HashItemData = {
  id: string;
  rotation: number;
};

type HashCircleProps = {
  size?: number;
  items?: number;
};

export const HashCircle: React.FC<HashCircleProps> = ({ size = 428 }) => {
  const [items, setItems] = useState<HashItemData[]>([]);
  const [isGenerating, setIsGenerating] = useState(true);

  useEffect(() => {
    if (!isGenerating) return;

    const interval = setInterval(() => {
      setItems((items) => [
        ...items,
        {
          id: Math.random().toString(36).slice(2, 9),
          rotation: getRandomDegree(),
        },
      ]);
    }, 1500);

    return () => clearInterval(interval);
  }, [isGenerating]);

  return (
    <div className="flex flex-col space-y-8">
      <Switch
        checked={isGenerating}
        onChange={setIsGenerating}
        label={"Generate Hash Items"}
      />
      <div
        style={{
          width: size,
          height: size,
        }}
        className="relative flex flex-col items-center justify-center rounded-full border-4 border-indigo-300 shadow-xl shadow-indigo-300/20"
      >
        <span>Hash Circle</span>

        {items.map(({ id, rotation }) => (
          <HashItem key={id} rotation={rotation} />
        ))}
      </div>
    </div>
  );
};
