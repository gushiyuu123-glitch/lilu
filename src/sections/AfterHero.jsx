// src/components/AfterHero.jsx
import { useEffect, useRef } from "react";
import "../styles/afterHero.css";

export default function AfterHero() {
  const smokeRef = useRef(null);

  useEffect(() => {
    const el = smokeRef.current;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-active");
        } else {
          el.classList.remove("is-active");
        }
      },
      { threshold: 0.25 }
    );

    if (el) io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className="after-hero">
      {/* smoke layer */}
      <div
        ref={smokeRef}
        className="after-smoke"
        aria-hidden="true"
      />

      <div className="after-hero-inner">
        <p className="after-line small">LILU is</p>

        <p className="after-line main">
          あなたらしさを、<br />
          大切にするネイル。
        </p>

        <p className="after-line sub">
          流行や派手さよりも、<br />
          その人に自然に馴染むことを。
        </p>

        <p className="after-line micro">
          A nail salon that quietly values individuality.
        </p>
      </div>
    </section>
  );
}
