import "../styles/exterior.css";

export default function Exterior() {
  return (
    <section className="exterior">
      <div className="exterior-inner">

        {/* テキスト（先） */}
        <div className="exterior-text">
          <p className="exterior-eyebrow">EXTERIOR</p>

          <h2 className="exterior-title">
            白い扉を目印に、<br />
            お越しください。
          </h2>

          <p className="exterior-note">
            静かな通りに、<br />
            ひっそりと佇んでいます。
          </p>
        </div>

        {/* 画像（後） */}
        <div className="exterior-image">
          <img
            src="/images/salon-interior.png"
            alt="サロン外観"
            loading="lazy"
          />
        </div>

      </div>
    </section>
  );
}
