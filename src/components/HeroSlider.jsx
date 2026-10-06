import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useSite, useT } from "../i18n/LangContext.jsx";
import "./hero-slider.css";

/* Kardeş BİS şubelerindeki #homeBanner owl-carousel'in karşılığı:
   tam genişlik görsel + çapraz tram gölge + ortalanmış caption + DAHA FAZLASI */

export default function HeroSlider() {
  const t = useT();
  const { HERO_SLIDES } = useSite();
  const [i, setI] = useState(0);
  const timer = useRef(null);
  const n = HERO_SLIDES.length;

  useEffect(() => {
    timer.current = setInterval(() => setI((v) => (v + 1) % n), 6500);
    return () => clearInterval(timer.current);
  }, [n]);

  const goTo = (idx) => {
    setI((idx + n) % n);
    clearInterval(timer.current);
    timer.current = setInterval(() => setI((v) => (v + 1) % n), 6500);
  };

  /* Mobilde parmakla kaydırma — yatay hareket dikeyden baskınsa slayt değişir,
     değilse sayfa kaydırması serbest bırakılır. */
  const touch = useRef(null);

  const onTouchStart = (e) => {
    const t = e.touches[0];
    touch.current = { x: t.clientX, y: t.clientY };
  };

  const onTouchEnd = (e) => {
    if (!touch.current) return;
    const t = e.changedTouches[0];
    const dx = t.clientX - touch.current.x;
    const dy = t.clientY - touch.current.y;
    touch.current = null;
    if (Math.abs(dx) < 45 || Math.abs(dx) < Math.abs(dy)) return;
    goTo(dx < 0 ? i + 1 : i - 1);
  };

  const slide = HERO_SLIDES[i];

  return (
    <section
      className="hs"
      aria-label={t("hero.aria")}
      aria-roledescription="carousel"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      onTouchCancel={() => { touch.current = null; }}
    >
      <div className="hs__stage">
        <AnimatePresence initial={false}>
          <motion.div
            key={i}
            className="hs__slide"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1.02 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ opacity: { duration: 1.1, ease: "easeInOut" }, scale: { duration: 7, ease: "linear" } }}
            style={{ backgroundImage: `url(${slide.img})` }}
          />
        </AnimatePresence>
        <div className="hs__shadow" aria-hidden="true" />
      </div>

      <div className="container hs__caption">
        <AnimatePresence mode="wait">
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="hs__title">{slide.title}</h1>
            <p className="hs__sub">{slide.eyebrow}</p>
          </motion.div>
        </AnimatePresence>
        <Link to="/anaokulu" className="hs__btn">{t("hero.more")}</Link>
      </div>

      <div className="hs__dots" role="tablist" aria-label={t("hero.slides")}>
        {HERO_SLIDES.map((s, idx) => (
          <button
            key={idx}
            role="tab"
            aria-selected={idx === i}
            aria-label={s.eyebrow}
            className={idx === i ? "is-active" : ""}
            onClick={() => goTo(idx)}
          />
        ))}
      </div>
    </section>
  );
}
