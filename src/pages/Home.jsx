import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Icon from "../components/Icon.jsx";
import TreeMark from "../components/TreeMark.jsx";
import Counter from "../components/Counter.jsx";
import Reveal, { Stagger, StaggerItem } from "../components/Reveal.jsx";
import { CTABand } from "../components/Shared.jsx";
import HeroSlider from "../components/HeroSlider.jsx";
import { PILLARS, AGE_GROUPS, APPROACH, STATS, NEWS, CONTACT, GALLERY_PHOTOS } from "../data/site.js";
import "./home.css";

export default function Home() {
  return (
    <div className="home">
      {/* ---------------- HERO SLIDER ---------------- */}
      <HeroSlider />

      {/* ---------------- WELCOME INTRO ---------------- */}
      <section className="section welcome">
        <div className="container welcome__grid">
          <Reveal className="welcome__left">
            <span className="eyebrow">Hoş geldiniz</span>
            <h2 className="welcome__title">
              Yaşam boyu öğrenmenin <em>neşeli başlangıcı</em>, Büyükçekmece Alkent'te.
            </h2>
          </Reveal>
          <Reveal delay={0.12} className="welcome__right">
            <p className="lead">
              3–5 yaş için, oyunla öğrenen, meraklı ve özgüvenli çocuklar yetiştiren bir anaokulu.
              38 yıllık uluslararası BİS birikimi; sıcacık, ışıkla dolu ve çocuk ölçeğinde
              tasarlanmış mekânlarla artık kapınızda.
            </p>
            <div className="welcome__meta">
              <a href={CONTACT.phoneHref}><Icon name="phone" size={16} /> {CONTACT.phone}</a>
              <a href={CONTACT.instagram} target="_blank" rel="noreferrer"><Icon name="instagram" size={16} /> {CONTACT.instagramHandle}</a>
            </div>
          </Reveal>
        </div>
        <div className="container">
          <Reveal className="welcome__strip" delay={0.15}>
            {["Uluslararası birikim", "İki dilli ortam", "Oyun temelli pedagoji", "Doğayla iç içe", "Sıcak topluluk"].map((t) => (
              <span key={t} className="welcome__chip"><TreeMark size={16} color="var(--pine)" /> {t}</span>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ---------------- PILLARS ---------------- */}
      <section className="section pillars">
        <div className="container">
          <div className="pillars__head">
            <Reveal>
              <span className="eyebrow">Neden BİS Alkent</span>
              <h2>Çocuğun doğal merakını<br />besleyen bir yuva</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="lead max-46">
                Çocuklarımız; oyun oynayarak, keşfederek ve deneyimleyerek öğrenir.
                Her ayrıntı, bu neşeli öğrenme yolculuğu için tasarlandı.
              </p>
            </Reveal>
          </div>
          <Stagger className="grid pillars__grid">
            {PILLARS.map((p) => (
              <StaggerItem key={p.title} className="card pillar">
                <span className="pillar__icon"><Icon name={p.icon} size={26} /></span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ---------------- PROGRAM / AGE GROUPS ---------------- */}
      <section className="section program">
        <div className="container">
          <div className="program__head">
            <Reveal>
              <span className="eyebrow">Yaş Grupları</span>
              <h2>Her yaşa özel, gelişime<br />duyarlı bir program</h2>
            </Reveal>
            <Reveal delay={0.1} className="program__headlink">
              <Link to="/anaokulu" className="linkline">Tüm programı gör <Icon name="arrow" size={16} className="arrow" /></Link>
            </Reveal>
          </div>
          <Stagger className="grid program__grid">
            {AGE_GROUPS.map((g) => (
              <StaggerItem key={g.code} className="agecard" style={{ "--tint": g.tint, "--acc": g.color }}>
                <div className="agecard__top">
                  <span className="agecard__age">{g.age}</span>
                  <span className="agecard__code">{g.code}</span>
                </div>
                <h3>{g.title}</h3>
                <p>{g.desc}</p>
                <ul className="agecard__list">
                  {g.points.map((pt) => (
                    <li key={pt}><Icon name="star" size={14} /> {pt}</li>
                  ))}
                </ul>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ---------------- APPROACH (split) ---------------- */}
      <section className="section approach-home">
        <div className="container approach-home__grid">
          <Reveal className="approach-home__media">
            <img src="/images/new/unnamed-21.jpg" alt="Yaratıcı okuma köşesi" />
            <div className="approach-home__badge">
              <TreeMark size={40} color="#fff" />
              <div><strong>Keşif</strong><span>her gün yeni bir macera</span></div>
            </div>
          </Reveal>
          <div className="approach-home__copy">
            <Reveal>
              <span className="eyebrow">Eğitim Yaklaşımımız</span>
              <h2>Öğrenmeyi bir oyun,<br />okulu bir sevinç kılıyoruz</h2>
            </Reveal>
            <div className="approach-home__list">
              {APPROACH.map((a, i) => (
                <Reveal key={a.no} delay={0.08 * i} className="approach-item">
                  <span className="approach-item__no">{a.no}</span>
                  <div>
                    <h3>{a.title}</h3>
                    <p>{a.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.2}>
              <Link to="/yaklasim" className="btn">Yaklaşımı derinlemesine gör <Icon name="arrow" size={17} className="arrow" /></Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------------- STATS ---------------- */}
      <section className="stats">
        <div className="container">
          <Stagger className="stats__grid">
            {STATS.map((s) => (
              <StaggerItem key={s.label} className="stat">
                <div className="stat__value"><Counter value={s.value} /><em>{s.suffix}</em></div>
                <p>{s.label}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ---------------- GALLERY PREVIEW ---------------- */}
      <section className="section gallery-home">
        <div className="container">
          <div className="sh sh--center">
            <Reveal>
              <span className="eyebrow">Kampüsümüzden</span>
              <h2>Keşif için tasarlanmış<br />bir dünya</h2>
            </Reveal>
          </div>
          <Stagger className="gallery-home__grid">
            {GALLERY_PHOTOS.slice(0, 6).map((g, i) => (
              <StaggerItem key={i} className={`gh-tile ${g.tall ? "gh-tile--tall" : ""}`}>
                <img src={g.img} alt={g.cap} loading="lazy" />
                <span className="gh-tile__cap">{g.cap}</span>
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal className="text-center" delay={0.1}>
            <Link to="/kampus" className="btn btn-ghost">Tüm galeriyi gör <Icon name="arrow" size={16} className="arrow" /></Link>
          </Reveal>
        </div>
      </section>

      {/* ---------------- NEWS ---------------- */}
      <section className="section news-home">
        <div className="container">
          <div className="program__head">
            <Reveal>
              <span className="eyebrow">Haberler</span>
              <h2>Alkent'ten güncel</h2>
            </Reveal>
            <Reveal delay={0.1} className="program__headlink">
              <Link to="/haberler" className="linkline">Tümü <Icon name="arrow" size={16} className="arrow" /></Link>
            </Reveal>
          </div>
          <Stagger className="grid news-home__grid">
            {NEWS.map((n) => (
              <StaggerItem key={n.title} className="card newscard">
                <div className="newscard__top" style={{ "--acc": n.color }}>
                  <span className="newscard__tag">{n.tag}</span>
                  <span className="newscard__date">{n.date}</span>
                </div>
                <h3>{n.title}</h3>
                <p>{n.excerpt}</p>
                <Link to="/haberler" className="linkline">Devamını oku <Icon name="arrow" size={15} className="arrow" /></Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <CTABand />
    </div>
  );
}
