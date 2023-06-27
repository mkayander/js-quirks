"use client";

import { Switch } from "@/components";
import { Button } from "@/components/atoms/Button";
import { HashCircle } from "@/components/molecules/HashCircle/HashCircle";
import { HashCircle3D } from "@/components/molecules/HashCircle/HashCircle3D";
import React, { useEffect, useState } from "react";
import { HashCircleProps, HashItemData } from "./hashingTypes";

const getRandomDegree = () => {
  return Math.floor(Math.random() * 360);
};

export const HashCircleView: React.FC<HashCircleProps> = ({ size = 428 }) => {
  const [items, setItems] = useState<HashItemData[]>([]);
  const [isGenerating, setIsGenerating] = useState(true);
  const [is3DMode, setIs3DMode] = useState(true);

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

  const handleResetItems = () => {
    setItems([]);
  };

  const CircleComponent = is3DMode ? HashCircle3D : HashCircle;

  return (
    <div className="flex w-full flex-col items-center space-y-8">
      <div className="flex w-full flex-row flex-wrap justify-between gap-4">
        <div className="flex flex-row items-center gap-12">
          <Switch
            checked={isGenerating}
            onChange={setIsGenerating}
            label="Generate Hash Items"
          />
          <Button onClick={handleResetItems}>Reset</Button>
        </div>
        <Switch checked={is3DMode} onChange={setIs3DMode} label="3D" />
      </div>
      <CircleComponent size={size} items={items} />
    </div>
  );
};
