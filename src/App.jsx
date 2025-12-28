import { useEffect, useState } from "react";

import Nav from "./components/Nav";

import Hero from "./sections/Hero";
import AfterHero from "./sections/AfterHero";
import DesignGallery from "./sections/DesignGallery";       // PC
import DesignGallerySP from "./sections/DesignGallerySP";   // SP
import Feature from "./sections/Feature";
import MenuPrice from "./sections/MenuPrice";
import Exterior from "./sections/Exterior";
import ClosingCopy from "./sections/ClosingCopy";
import Reservation from "./sections/Reservation";
import Footer from "./sections/Footer";

export default function App() {
  const [isSP, setIsSP] = useState(false);

  useEffect(() => {
    const check = () => setIsSP(window.innerWidth <= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <>
      <Nav />

      <main id="top">
        <Hero />
      </main>

      <section id="concept">
        <AfterHero />
      </section>

      {/* ===== GALLERY（ここだけ分岐） ===== */}
      <section id="gallery">
        {isSP ? <DesignGallerySP /> : <DesignGallery />}
      </section>

      <section id="feature">
        <Feature />
      </section>

      <section id="menu">
        <MenuPrice />
      </section>

      <section id="access">
        <Exterior />
      </section>

      <ClosingCopy />

      <section id="reservation">
        <Reservation />
      </section>

      <Footer />
    </>
  );
}
