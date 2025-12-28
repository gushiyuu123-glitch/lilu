import "../styles/reservation.css";

export default function Reservation() {
  return (
    <section className="reservation">
      <div className="reservation-inner">

        <p className="reservation-eyebrow">RESERVATION</p>

        <h2 className="reservation-title">
          ご予約について
        </h2>

        <p className="reservation-lead">
          空き状況のご確認やご予約は、<br />
          下記よりお気軽にご連絡ください。
        </p>

        {/* 予約導線 */}
        <div className="reservation-links">

          <a
            href="#"
            className="reservation-link"
          >
            LINEで予約する
          </a>

          <span className="reservation-separator">／</span>

          <a
            href="#"
            className="reservation-link"
          >
            Web予約
          </a>

        </div>

        {/* 安心文 */}
        <p className="reservation-note">
          ※ 施術内容に迷われている場合も、<br />
          事前にご相談いただけます。
        </p>

      </div>
    </section>
  );
}
