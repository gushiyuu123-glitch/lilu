import "../styles/Feature.css";

export default function Feature() {
  return (
    <section className="feature">
      <div className="feature-inner">

        {/* 左：ビジュアル */}
        <div className="feature-visual">
          <img
            src="/images/salon-interior1.png"
            alt="ネイルサロンの店内"
            loading="lazy"
          />
        </div>

        {/* 右：テキスト */}
        <div className="feature-content">
          <p className="feature-eyebrow">FEATURE</p>

          <h3 className="feature-title">
            それぞれのペースで、<br />
            心地よく過ごせる空間です。
          </h3>

          <div className="feature-list">
            <div className="feature-item">
              <h4>01. 落ち着いた空間</h4>
              <p>
                静かに過ごしたい方も、
                お話ししながら楽しみたい方も、
                無理なくお過ごしいただけます。
              </p>
            </div>

            <div className="feature-item">
              <h4>02. その人に合わせたご提案</h4>
              <p>
                デザインや長さ、仕上がりの印象まで、
                その日の気分や生活に合わせてご提案します。
              </p>
            </div>

            <div className="feature-item">
              <h4>03. 初めての方でも安心</h4>
              <p>
                ネイルが初めての方にも、
                工程や仕上がりを丁寧にお伝えしながら進めます。
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
