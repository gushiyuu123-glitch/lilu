import { useEffect, useRef } from "react";
import "../styles/closing-copy.css";

export default function ClosingCopy() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-show");
          io.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className="closing-copy" ref={ref}>
      <p className="closing-copy-text">
        その<span>“らしさ”</span>が、<br />
        いちばん美しい。
      </p>
    </section>
  );
}
