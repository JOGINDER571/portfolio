import { useEffect, useRef, useState } from "react";

export function useScrollTopVisible(threshold = 200) {
  const [visible, setVisible] = useState(false);
  const ticking = useRef(false);

  useEffect(() => {
    function onScroll() {
      if (!ticking.current) {
        ticking.current = true;
        requestAnimationFrame(() => {
          setVisible(window.scrollY > threshold);
          ticking.current = false;
        });
      }
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return visible;
}


