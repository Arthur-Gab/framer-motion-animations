import { useEffect, useRef } from "react";

type Ref = {
  current: HTMLElement;
};

export const useDimensions = (ref: Ref) => {
  const dimensions = useRef({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    dimensions.current.width = ref.current.offsetWidth;
    dimensions.current.height = ref.current.offsetHeight;
  }, []);

  return dimensions.current;
};
