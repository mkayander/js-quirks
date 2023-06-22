import React from "react";

export const Ripple = () => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const target = (e.target as HTMLSpanElement)
      .parentNode as HTMLButtonElement;
    if (!target) return;

    const ripple = target.querySelector(".ripple") as HTMLSpanElement;

    const diameter = Math.max(target.clientWidth, target.clientHeight);
    const radius = diameter / 2;

    ripple.style.left = `${e.clientX - (target.offsetLeft + radius)}px`;
    ripple.style.top = `${e.clientY - (target.offsetTop + radius)}px`;

    // Reset animation
    ripple.style.animationName = "none";
    requestAnimationFrame(() => {
      setTimeout(() => {
        ripple.style.animationName = "";
      }, 0);
    });
  };

  return (
    <span
      style={{
        animationName: "none",
      }}
      className="ripple absolute block aspect-square w-full scale-0 animate-ripple rounded-full bg-white/30 opacity-0"
      onClick={handleClick}
    />
  );
};
