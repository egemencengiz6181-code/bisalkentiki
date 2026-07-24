import { useEffect, useRef, useState } from "react";

// Görünür olunca sayan sayaç (yalnızca sayı ise)
export default function Counter({ value, duration = 1600 }) {
  const numeric = /^\d+$/.test(String(value));
  const [display, setDisplay] = useState(numeric ? "0" : value);
  const ref = useRef(null);
  const done = useRef(false);

  useEffect(() => {
    if (!numeric) return;
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !done.current) {
          done.current = true;
          const target = parseInt(value, 10);
          const start = performance.now();
          const tick = (now) => {
            const p = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setDisplay(String(Math.round(eased * target)));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value, duration, numeric]);

  return <span ref={ref}>{display}</span>;
}
