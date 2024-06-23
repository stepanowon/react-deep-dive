import { useEffect, useState } from "react";

const useMousePosition = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e) => setPosition({ x: e.pageX, y: e.pageY });
    window.addEventListener("mousemove", onMove);

    return () => {
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return position;
};

export { useMousePosition };
