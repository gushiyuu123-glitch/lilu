import { useState } from "react";
import "../styles/menu-price.css";

export default function MenuPrice() {
  const [open, setOpen] = useState(false);

  return (
    <section className="menu">
      <div className="menu-inner">

        <p className="menu-eyebrow">MENU & PRICE</p>

        <h2 className="menu-title">料金の目安について</h2>

        <p className="menu-lead">
          デザインや長さによって料金は前後します。<br />
          施術前にしっかりご説明しますので、<br />
          ご不安なことは何でもご相談ください。
        </p>

        <div className="menu-list">

          <div className="menu-row">
            <div className="menu-image">
              <img src="/images/menu-simple1.png" alt="" />
            </div>
            <div className="menu-text">
              <span className="menu-price">¥6,600〜</span>
              <h3>シンプルネイル</h3>
              <p>
                さりげなく、日常になじむデザイン。<br />
                オフィスや普段使いにおすすめです。
              </p>
            </div>
          </div>

          <hr />

          <div className="menu-row reverse">
            <div className="menu-image">
              <img src="/images/nail-11.png" alt="" />
            </div>
            <div className="menu-text">
              <span className="menu-price">¥8,800〜</span>
              <h3>デザインネイル</h3>
              <p>
                その日の気分を、指先に。<br />
                色や雰囲気を相談しながら決めていきます。
              </p>
            </div>
          </div>

          <hr />

          <div className="menu-row">
            <div className="menu-image">
              <img src="/images/menu-care11.png" alt="" />
            </div>
            <div className="menu-text">
              <span className="menu-price">¥3,300〜</span>
              <h3>オフ・ケア</h3>
              <p>
                爪をいたわる時間も大切に。<br />
                ケアのみのご相談も可能です。
              </p>
            </div>
          </div>

        </div>

        <div className="menu-sub">
          <button
            className={`menu-sub-toggle ${open ? "is-open" : ""}`}
            onClick={() => setOpen(!open)}
            aria-expanded={open}
          >
            OTHER MENU
            <span className="menu-sub-icon" />
          </button>

          <div className={`menu-sub-panel ${open ? "is-open" : ""}`}>
            <p className="menu-sub-list">
              ・ワンカラー<br />
              ・グラデーション<br />
              ・フレンチネイル<br />
              ・長さ出し<br />
              ・パーツ追加<br />
              ・リペア
            </p>

            <p className="menu-sub-note">
              ※ 詳細はご来店時にご相談ください
            </p>
          </div>
        </div>

        <p className="menu-note-bottom">
          ※ 表示価格は目安です。内容により前後する場合があります。
        </p>

      </div>
    </section>
  );
}
