import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Icon from "../components/Icon.jsx";
import HeroSlider from "../components/HeroSlider.jsx";
import { AGE_GROUPS, NEWS, QUOTE, CONTACT_FOR, TESTIMONIALS, TOUR } from "../data/site.js";
import "./home.css";

/* ---------------------------------------------------------------------------
   Ana sayfa düzeni, kardeş BİS şubelerinin (biscamlica.k12.tr /
   bisbahcesehir.k12.tr / bisi.k12.tr) kurumsal şablonuyla birebir aynı sırayı
   izler:  hero slider → alıntı bandı → bölüm kartları → bölüm listesi + haberler
   → kampüs turu bandı → görüşler → bilgi formu bandı
--------------------------------------------------------------------------- */

export default function Home() {
  return (
    <div className="home">
      {/* 1 — TAM GENİŞLİK HERO SLIDER */}
      <HeroSlider />

      {/* 2 — ALINTI BANDI (bannerQuote) */}
      <section className="bq">
        <div className="container bq__inner">
          <span className="bq__mark" aria-hidden="true">“</span>
          <h2 className="bq__text">{QUOTE}</h2>
          <span className="bq__mark" aria-hidden="true">”</span>
        </div>
      </section>

      {/* 3 — BÖLÜMLERİMİZ: görsel zeminli kartlar (mainDivisionCard) */}
      <section className="divs">
        <div className="container">
          <h2 className="secTitle">Bölümlerimiz</h2>
          <div className="divs__grid">
            {AGE_GROUPS.map((g, idx) => (
              <div key={g.code} className="divs__cell" style={{ "--d": `${idx * 0.12}s` }}>
                <Link to="/anaokulu" className="dcard" style={{ backgroundImage: `url(${g.img})` }}>
                  <div className="dcard__inner">
                    <h3>{g.code}</h3>
                    <p>{g.age}</p>
                    <span className="dcard__btn">DAHA FAZLASI</span>
                  </div>
                </Link>
                <p className="dcard__campuses">
                  <Icon name="pin" size={13} /> {g.campuses}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4 — BÖLÜM LİSTESİ (pill satırlar) + HABERLER */}
      <section className="hsplit">
        <div className="container hsplit__grid">
          <div className="hsplit__left">
            {AGE_GROUPS.map((g) => (
              <Link to="/anaokulu" className="prow" key={g.code}>
                <span className="prow__img" style={{ backgroundImage: `url(${g.img})` }} />
                <span className="prow__pill">
                  <span className="prow__title">{g.code}</span>
                  <span className="prow__age">{g.age}</span>
                  <Icon name="arrow" size={16} className="prow__arrow" />
                </span>
              </Link>
            ))}
          </div>

          <div className="hsplit__right">
            <div className="newsHead">
              <h2 className="secTitle secTitle--left">Haberler</h2>
              <Link to="/haberler" className="newsHead__all">TÜMÜ <Icon name="arrow" size={14} /></Link>
            </div>
            <NewsCarousel />
          </div>
        </div>
      </section>

      {/* 5 — KAMPÜS TURU BANDI */}
      <section className="tour">
        <div className="tour__media" style={{ backgroundImage: `url(${TOUR.img})` }} aria-hidden="true" />
        <div className="tour__veil" aria-hidden="true" />
        <div className="container tour__content">
          <Link to={TOUR.to} className="tour__play" aria-label={TOUR.title}>
            <Icon name="play" size={34} />
          </Link>
          <span className="tour__eyebrow">{TOUR.eyebrow}</span>
          <h2 className="tour__title">{TOUR.title}</h2>
          <p className="tour__text">{TOUR.text}</p>
        </div>
      </section>

      {/* 6 — GÖRÜŞLER (owl-carousel karşılığı) */}
      <Testimonials />

      {/* 7 — BİLGİ FORMU BANDI (enquirySection) */}
      <section className="enq">
        <div className="container enq__grid">
          <div className="enq__left">
            <p className="enq__lead">
              Aşağıda belirtilen talepleriniz için bizimle form üzerinden iletişime geçebilirsiniz.
            </p>
            <div className="enq__items">
              {CONTACT_FOR.map((c) => (
                <span className="enq__item" key={c.title}>
                  <Icon name={c.icon} size={20} /> {c.title}
                </span>
              ))}
            </div>
          </div>
          <div className="enq__right">
            <Link to="/iletisim" className="enq__btn">Bilgi Formu</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ---------------- Haberler karüseli (carousel-indicators) ---------------- */
function NewsCarousel() {
  const [i, setI] = useState(0);
  const n = NEWS.length;

  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % n), 7000);
    return () => clearInterval(t);
  }, [n]);

  const item = NEWS[i];
  return (
    <div className="ncar">
      <div className="ncar__item" key={i}>
        <span className="ncar__date">{item.date} · {item.tag}</span>
        <h3 className="ncar__title">{item.title}</h3>
        <p className="ncar__text">{item.excerpt}</p>
        <Link to="/haberler" className="ncar__link">DEVAMINI OKU <Icon name="arrow" size={14} /></Link>
      </div>
      <div className="ncar__dots" role="tablist">
        {NEWS.map((_, idx) => (
          <button
            key={idx}
            role="tab"
            aria-selected={idx === i}
            aria-label={`Haber ${idx + 1}`}
            className={idx === i ? "is-active" : ""}
            onClick={() => setI(idx)}
          />
        ))}
      </div>
    </div>
  );
}

/* ---------------- Görüşler karüseli ---------------- */
function Testimonials() {
  const [i, setI] = useState(0);
  const per = 3;
  const pages = Math.ceil(TESTIMONIALS.length / per);

  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % pages), 9000);
    return () => clearInterval(t);
  }, [pages]);

  const shown = TESTIMONIALS.slice(i * per, i * per + per);
  return (
    <section className="tst">
      <div className="container">
        <h2 className="secTitle">Bizim Hakkımızda</h2>
        <div className="tst__grid">
          {shown.map((t) => (
            <blockquote className="tst__card" key={t.text}>
              <span className="tst__mark" aria-hidden="true">“</span>
              <p>{t.text}</p>
              <footer>
                <strong>{t.name}</strong>
                <span>{t.role}</span>
              </footer>
            </blockquote>
          ))}
        </div>
        <div className="tst__dots" role="tablist">
          {Array.from({ length: pages }).map((_, idx) => (
            <button
              key={idx}
              role="tab"
              aria-selected={idx === i}
              aria-label={`Görüş grubu ${idx + 1}`}
              className={idx === i ? "is-active" : ""}
              onClick={() => setI(idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
