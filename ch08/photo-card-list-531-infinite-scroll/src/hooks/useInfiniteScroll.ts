import { useCallback, useEffect, useRef, useState } from "react";

export const useInfiniteScroll = <T>(source: T[], limit: number) => {
  const [infiniteData, setInfiniteData] = useState<T[]>([]);
  const currentIndexRef = useRef<number>(0);
  const limitRef = useRef<number>(limit);
  const sourceRef = useRef<T[]>(source);

  const getNextData = useCallback(() => {
    console.log("###");
    const slicedSource = sourceRef.current.slice(currentIndexRef.current, currentIndexRef.current + limitRef.current);
    setInfiniteData((infiniteData) => infiniteData.concat(slicedSource));
    currentIndexRef.current += 24;
  }, [currentIndexRef, limitRef, sourceRef]);

  useEffect(() => {
    getNextData();
    const scrollBottom = () => {
      const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
      // 페이지 바닥 근처로 스크롤했을 때
      if (scrollTop + clientHeight >= scrollHeight - 1) {
        getNextData();
      }
    };

    window.addEventListener("scroll", scrollBottom);

    return () => {
      window.removeEventListener("scroll", scrollBottom);
    };
  }, [getNextData]);

  return infiniteData;
};
