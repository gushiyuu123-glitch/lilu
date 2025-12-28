import { useEffect, useRef, useState } from "react";
import "../styles/design-gallery.css";

export default function DesignGallery() {
  const spacerRef = useRef(null);
  const trackRef = useRef(null);
  const rafRef = useRef(null);
  const timerRef = useRef(null);

  const [isActive, setIsActive] = useState(false);
  const [showEndCopy, setShowEndCopy] = useState(false);

  /* =========================
     横スクロール制御（PC ONLY）
  ========================= */
  useEffect(() => {
    // ★ SPでは完全停止
    if (window.matchMedia("(max-width: 768px)").matches) return;

    const spacer = spacerRef.current;
    const track = trackRef.current;
    if (!spacer || !track) return;

    const update = () => {
      const maxX = track.scrollWidth - window.innerWidth;

      // スクロール燃料
      spacer.style.height = `${maxX + window.innerHeight}px`;

      const start = spacer.offsetTop;
      const end = start + maxX;

      const onScroll = () => {
        if (rafRef.current) return;

        rafRef.current = requestAnimationFrame(() => {
          const y = window.scrollY;
          const active = y >= start && y < end;
          setIsActive(active);

          if (!active) {
            rafRef.current = null;
            return;
          }

          const x = Math.min(Math.max(y - start, 0), maxX);
          track.style.transform = `translate3d(-${x}px, 0, 0)`;

          rafRef.current = null;
        });
      };

      window.addEventListener("scroll", onScroll, { passive: true });
      onScroll();

      return () => window.removeEventListener("scroll", onScroll);
    };

    const cleanup = update();
    window.addEventListener("resize", update);

    return () => {
      cleanup && cleanup();
      window.removeEventListener("resize", update);
    };
  }, []);

  /* =========================
     END COPY（PCのみ・一度きり）
  ========================= */
  useEffect(() => {
    // ★ SPでは不要
    if (window.matchMedia("(max-width: 768px)").matches) return;

    const spacer = spacerRef.current;
    if (!spacer) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        if (timerRef.current) return;

        timerRef.current = setTimeout(() => {
          setShowEndCopy(true);
          timerRef.current = null;
        }, 360);

        io.disconnect();
      },
      {
        threshold: 0.01,
        rootMargin: "-20% 0px -60% 0px",
      }
    );

    io.observe(spacer);

    return () => {
      io.disconnect();
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
    };
  }, []);

  return (
    <>
      {/* スクロール燃料（PCのみ意味を持つ） */}
      <section ref={spacerRef} className="design-gallery-spacer" />

      {/* ギャラリー本体 */}
      <div
        className={`gallery-fixed ${
          isActive ? "is-active" : ""
        } ${showEndCopy ? "show-end-copy" : ""}`}
      >
        <div className="gallery-bg" />
        <div className="gallery-typo-vertical">NAIL DESIGN</div>
        <h2 className="gallery-title">GALLERY</h2>

        <div className="gallery-track" ref={trackRef}>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
            <figure className="gallery-item" key={n}>
              <img src={`/images/gallery-${n}.png`} alt="" />
              <figcaption>Design #{n}</figcaption>
            </figure>
          ))}
        </div>

        <div className="gallery-end">
          <p className="gallery-end-copy">
            静かに、選ばれる指先へ。
          </p>
        </div>
      </div>
    </>
  );
}
