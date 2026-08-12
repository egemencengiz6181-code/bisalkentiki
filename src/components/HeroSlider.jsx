import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Icon from "./Icon.jsx";
import { HERO_SLIDES } from "../data/site.js";
import "./hero-slider.css";

export default function HeroSlider() {
  const [i, setI] = useState(0);
  const [dir, setDir] = useState(1);
  const timer = useRef(null);
  const n = HERO_SLIDES.length;

  const goTo = (idx, d = 1) => { setDir(d); setI((idx + n) % n); };
  const next = () => goTo(i + 1, 1);
  const prev = () => goTo(i - 1, -1);

  useEffect(() => {
    timer.current = setInterval(() => setI((v) => (v + 1) % n), 6500);
    return () => clearInterval(timer.current);
  }, [n]);

  const reset = () => { clearInterval(timer.current); timer.current = setInterval(() => setI((v) => (v + 1) % n), 6500); };
  const slide = HERO_SLIDES[i];

  return (
    <section className="hs" aria-label="Kampüs tanıtımı">
      {/* Görsel katmanı */}
      <div className="hs__stage">
        <AnimatePresence initial={false}>
          <motion.div
            key={i}
            className="hs__slide"
            initial={{ opacity: 0, scale: 1.12 }}
            animate={{ opacity: 1, scale: 1.02 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ opacity: { duration: 1.1, ease: "easeInOut" }, scale: { duration: 7, ease: "linear" } }}
            style={{ backgroundImage: `url(${slide.img})` }}
          />
        </AnimatePresence>
        <div className="hs__veil" />
      </div>

      {/* İçerik */}
      <div className="container hs__content">
        <AnimatePresence mode="wait">
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="hs__eyebrow">{slide.eyebrow}</span>
            <h1 className="hs__title">{slide.title}</h1>
          </motion.div>
        </AnimatePresence>
        <motion.div
          className="hs__actions"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.7 }}
        >
          <Link to="/iletisim" className="btn btn-gold"><span>Ön Kayıt</span> <Icon name="arrow" size={16} className="arrow" /></Link>
          <Link to="/anaokulu" className="hs__ghost">Daha Fazlası</Link>
        </motion.div>
      </div>

      {/* Alt kontrol şeridi — sayaç, ilerleme, oklar */}
      <div className="hs__bar">
        <div className="container hs__bar-inner">
          <span className="hs__count">
            <em>{String(i + 1).padStart(2, "0")}</em>
            <i />
            {String(n).padStart(2, "0")}
          </span>

          <div className="hs__track" role="tablist" aria-label="Görseller">
            {HERO_SLIDES.map((s, idx) => (
              <button
                key={idx}
                role="tab"
                aria-selected={idx === i}
                className={`hs__seg ${idx === i ? "is-active" : ""}`}
                onClick={() => { goTo(idx, idx > i ? 1 : -1); reset(); }}
                aria-label={s.eyebrow}
              >
                <span />
              </button>
            ))}
          </div>

          <div className="hs__nav">
            <button className="hs__arrow" onClick={() => { prev(); reset(); }} aria-label="Önceki">
              <Icon name="chevronLeft" size={20} />
            </button>
            <button className="hs__arrow" onClick={() => { next(); reset(); }} aria-label="Sonraki">
              <Icon name="chevronRight" size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Aşağı işareti */}
      <div className="hs__scroll" aria-hidden="true">
        <span className="hs__scrolltext">Keşfet</span>
        <span className="hs__scrollline" />
      </div>
    </section>
  );
}
