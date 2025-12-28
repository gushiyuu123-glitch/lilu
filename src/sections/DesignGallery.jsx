import { useEffect, useRef, useState } from "react";
import "../styles/design-gallery.css";

export default function DesignGallery() {
  const spacerRef = useRef(null);
  const trackRef = useRef(null);
  const rafRef = useRef(null);

  const [isActive, setIsActive] = useState(false);
  const [showEndCopy, setShowEndCopy] = useState(false);

  // タイマー掃除用
  const timerRef = useRef(null);

  /* =========================
     横スクロール制御
  ========================= */
  useEffect(() => {
    const spacer = spacerRef.current;
    const track = trackRef.current;
    if (!spacer || !track) return;

    const update = () => {
      const maxX = track.scrollWidth - window.innerWidth;

      // 燃料（高さ）
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
     END COPY（spacer到達で遅れて出す）
  ========================= */
  useEffect(() => {
    const spacer = spacerRef.current;
    if (!spacer) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        // 既に出てたら何もしない
        if (timerRef.current) return;

        // ★少し遅らせる（ここで100%正しく発火する）
        timerRef.current = setTimeout(() => {
          setShowEndCopy(true);
          timerRef.current = null;
        }, 360);

        io.disconnect(); // 一回きり
      },
      {
        threshold: 0.01,                // 軽く触れたら発火
        rootMargin: "-20% 0px -60% 0px"  // “入った感”の位置調整
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
      {/* スクロール燃料（ここが監視対象） */}
      <section ref={spacerRef} className="design-gallery-spacer" />

      {/* ギャラリー本体（fixed） */}
      <div className={`gallery-fixed ${isActive ? "is-active" : ""}`}>
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
          <p className={`gallery-end-copy ${showEndCopy ? "is-show" : ""}`}>
            静かに、選ばれる指先へ。
          </p>
        </div>
      </div>
    </>
  );
}
