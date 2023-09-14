import { useCallback, useRef } from "react";

export const useDebounce = <T extends (...args: any[]) => any>(
  callback: T,
  delay: number
) => {
  const timeoutId = useRef<number | undefined>(undefined);

  return useCallback(
    (...args: Parameters<T>) => {
      clearTimeout(timeoutId.current);

      setTimeout(() => {
        callback(...args);
      }, delay);
    },
    [callback, delay]
  );
};
