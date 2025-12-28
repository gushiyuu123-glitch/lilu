import "../styles/footer.css";

export default function Footer() {
  return (
    <footer
      className="footer"
      itemScope
      itemType="https://schema.org/NailSalon"
    >
      <div className="footer-inner">

        {/* 店名 */}
        <p className="footer-brand" itemProp="name">
          LILU nail salon
        </p>

        {/* 情報 */}
        <div className="footer-info">
          <p itemProp="postalCode">〒000-0000</p>

          {/* 住所（schema 正式構造） */}
          <p
            itemProp="address"
            itemScope
            itemType="https://schema.org/PostalAddress"
          >
            <span itemProp="addressRegion">沖縄県</span>
            <span itemProp="addressLocality">○○市</span>
            <span itemProp="streetAddress">○○町 1-2-3</span>
          </p>

          <p>
            <span itemProp="openingHours">10:00 − 20:00</span>（不定休）
          </p>
        </div>

        {/* 補助予約リンク */}
        <div className="footer-reserve">
          <a href="#" className="footer-link">LINEで予約</a>
          <span className="footer-sep">／</span>
          <a href="#" className="footer-link">Web予約</a>
        </div>

        {/* クレジット */}
        <p className="footer-credit">
          Design & Development by{" "}
          <a
            href="https://gushikendesign.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            GUSHIKEN DESIGN
          </a>
        </p>

        {/* コピーライト */}
        <p className="footer-copy">
          © LILU nail salon
        </p>

      </div>
    </footer>
  );
}
