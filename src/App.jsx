import Nav from "./components/Nav";

import Hero from "./sections/Hero";
import AfterHero from "./sections/AfterHero";
import DesignGallery from "./sections/DesignGallery";
import Feature from "./sections/Feature";
import MenuPrice from "./sections/MenuPrice";
import Exterior from "./sections/Exterior";
import ClosingCopy from "./sections/ClosingCopy";
import Reservation from "./sections/Reservation";
import Footer from "./sections/Footer";

export default function App() {
  return (
    <>
      {/* 固定ナビ */}
      <Nav />

      {/* ===== TOP / HERO ===== */}
      <main id="top">
        <Hero />
      </main>

      {/* ===== CONCEPT ===== */}
      <section id="concept">
        <AfterHero />
      </section>

      {/* ===== GALLERY ===== */}
      <section id="gallery">
        <DesignGallery />
      </section>

      {/* ===== FEATURE ===== */}
      <section id="feature">
        <Feature />
      </section>

      {/* ===== MENU ===== */}
      <section id="menu">
        <MenuPrice />
      </section>

      {/* ===== ACCESS ===== */}
      <section id="access">
        <Exterior />
      </section>

      {/* ===== CLOSING ===== */}
      <ClosingCopy />

      {/* ===== RESERVATION ===== */}
      <section id="reservation">
        <Reservation />
      </section>

      {/* ===== FOOTER ===== */}
      <Footer />
    </>
  );
}
