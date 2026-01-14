// src/components/Nav.jsx
import { useEffect, useState } from "react";
import "../styles/nav.css";

export default function Nav() {
  const [open, setOpen] = useState(false);

  // SPメニュー開閉時のスクロールロック
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  // ESCキーで閉じる（安心設計）
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <header className="nav">
        <div className="nav-inner">
          {/* UIラベル */}
   <a href="#top" className="nav-logo">
  <span className="nav-logo-mark">LILU</span>
  <span className="nav-logo-text"> nail salon</span>
</a>

          {/* PC Menu */}
          <nav className="nav-links">
            <a href="#concept">CONCEPT</a>
            <a href="#gallery">GALLERY</a>
            <a href="#menu">MENU</a>
            <a href="#access">ACCESS</a>
            <a href="#reservation" className="is-accent">
              RESERVATION
            </a>
          </nav>

          {/* SP Toggle */}
          <button
            className={`nav-toggle ${open ? "is-open" : ""}`}
            onClick={() => setOpen(!open)}
            aria-label="menu"
            aria-expanded={open}
          >
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* SP Drawer */}
      <div className={`nav-drawer ${open ? "is-open" : ""}`}>
        <a onClick={() => setOpen(false)} href="#concept">CONCEPT</a>
        <a onClick={() => setOpen(false)} href="#gallery">GALLERY</a>
        <a onClick={() => setOpen(false)} href="#menu">MENU</a>
        <a onClick={() => setOpen(false)} href="#access">ACCESS</a>
        <a onClick={() => setOpen(false)} href="#reservation">RESERVATION</a>
      </div>
    </>
  );
}
