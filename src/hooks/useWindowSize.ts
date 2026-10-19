import { useEffect, useState } from "react";

interface WindowSize {
  resize: number | undefined;
}

export function useWindowSize() {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    resize: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({ resize: window.innerWidth });
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}
