"use client";

import React, { useEffect, useState } from "react";

type HashItemProps = {
  rotation: number;
};

export const HashItem: React.FC<HashItemProps> = ({ rotation }) => {
  const [isInitialised, setIsInitialised] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsInitialised(true);
    }, 100);
  }, []);

  return (
    <div
      style={{
        transform: `rotate(${isInitialised ? rotation : 0}deg)`,
      }}
      className="pointer-events-none absolute h-full w-full transition-transform duration-1000"
    >
      <div
        style={{
          left: "50%",
          transform: "translate(-50%, -50%)",
          top: -1.5,
          height: 32,
        }}
        className="pointer-events-auto absolute z-20 w-2 cursor-pointer rounded-full bg-blue-100 text-2xl font-bold opacity-80 shadow-[0_0_12px] shadow-cyan-500/30 transition-all hover:w-3 hover:bg-blue-400 hover:opacity-100"
      />
    </div>
  );
};
