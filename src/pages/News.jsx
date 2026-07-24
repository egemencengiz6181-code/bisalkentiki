import { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "../components/Icon.jsx";
import Reveal, { Stagger, StaggerItem } from "../components/Reveal.jsx";
import { PageHero, CTABand } from "../components/Shared.jsx";
import { NEWS, BG } from "../data/site.js";
import "./pages.css";
import "./news.css";

// Ana haberler + ek içerikler
const ALL = [
  ...NEWS,
  { tag: "Pedagoji", date: "Haziran 2026", title: "Doğada öğrenmenin faydaları", excerpt: "Açık hava etkinlikleri çocukların dikkatini, dayanıklılığını ve merakını nasıl güçlendiriyor?", color: "var(--sky)" },
  { tag: "Etkinlik", date: "Mayıs 2026", title: "Aile atölyesi: Birlikte üretiyoruz", excerpt: "Ebeveynler ve çocuklar el ele; sanat, müzik ve oyun dolu bir gün planlıyoruz.", color: "var(--terra)" },
  { tag: "Duyuru", date: "Nisan 2026", title: "Kayıt takvimimiz güncellendi", excerpt: "2026–2027 dönemi için başvuru adımları ve önemli tarihler yayında.", color: "var(--pine)" },
];

const CATS = ["Tümü", "Duyuru", "Etkinlik", "Pedagoji"];

export default function News() {
  const [cat, setCat] = useState("Tümü");
  const list = cat === "Tümü" ? ALL : ALL.filter((n) => n.tag === cat);
  const featured = ALL[0];

  return (
    <>
      <PageHero
        eyebrow="Haberler & Blog"
        title="Alkent'ten güncel, ilham ve duyurular"
        subtitle="Etkinliklerimiz, pedagoji üzerine yazılarımız ve kayıt duyurularımız; hepsi tek bir yerde."
        image={BG.news}
        accent="var(--gold)"
      />

      {/* Featured */}
      <section className="section">
        <div className="container">
          <Reveal className="feat">
            <div className="feat__media">
              <img src="/images/new/unnamed-24.jpg" alt={featured.title} />
              <span className="feat__flag">Öne Çıkan</span>
            </div>
            <div className="feat__body">
              <div className="newscard__top" style={{ "--acc": featured.color }}>
                <span className="newscard__tag">{featured.tag}</span>
                <span className="newscard__date">{featured.date}</span>
              </div>
              <h2>{featured.title}</h2>
              <p className="lead">{featured.excerpt}</p>
              <p>
                Yaşam boyu öğrenmenin neşeli başlangıcı Büyükçekmece'ye geliyor. Sınırlı
                kontenjanla açtığımız erken kayıt döneminde, çocuğunuz için bir yer ayırmak ve
                kampüsümüzü keşfetmek üzere bize ulaşabilirsiniz.
              </p>
              <Link to="/iletisim" className="btn" style={{ marginTop: "1rem" }}>
                Ön kayıt için iletişime geç <Icon name="arrow" size={17} className="arrow" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Filter + grid */}
      <section className="section bg-cream2">
        <div className="container">
          <div className="news-filter">
            {CATS.map((c) => (
              <button
                key={c}
                className={`news-filter__btn ${cat === c ? "is-active" : ""}`}
                onClick={() => setCat(c)}
              >
                {c}
              </button>
            ))}
          </div>
          <Stagger className="cols-3" style={{ marginTop: "2.2rem" }} key={cat}>
            {list.map((n) => (
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
    </>
  );
}
