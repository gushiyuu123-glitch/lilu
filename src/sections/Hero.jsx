import "../styles/hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg" />

      {/* 空気 */}
      <img src="/images/hero-sub-1.png" className="hero-sub s1" alt="" />
      <img src="/images/hero-sub-2.png" className="hero-sub s2" alt="" />
      <img src="/images/hero-sub-3.png" className="hero-sub s3" alt="" />

      {/* 主役 */}
      <img src="/images/hero-main.png" className="hero-main" alt="" />

      {/* ロゴ */}
      <h1 className="hero-logo">LILU</h1>
    </section>
  );
}
