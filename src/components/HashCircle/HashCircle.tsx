import { HashItem } from "@/components/HashCircle/HashItem";
import React from "react";
import { HashCircleProps } from "./hashingTypes";

export const HashCircle: React.FC<HashCircleProps> = ({
  size = 428,
  items,
}) => {
  return (
    <div
      style={{
        width: size,
        height: size,
      }}
      className="relative flex flex-col items-center justify-center rounded-full border-4 border-indigo-300 shadow-xl shadow-indigo-300/20"
    >
      <span>Hash Circle</span>

      {items?.map(({ id, rotation }) => (
        <HashItem key={id} rotation={rotation} />
      ))}
    </div>
  );
};
