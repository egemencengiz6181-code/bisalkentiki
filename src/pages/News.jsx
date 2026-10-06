import { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "../components/Icon.jsx";
import Reveal, { Stagger, StaggerItem } from "../components/Reveal.jsx";
import { PageHero, CTABand } from "../components/Shared.jsx";
import { useSite, useT } from "../i18n/LangContext.jsx";
import "./pages.css";
import "./news.css";

export default function News() {
  const t = useT();
  const { NEWS, NEWS_CATS, NEWS_FEATURED_BODY, BG } = useSite();

  // Filtre, dilden bağımsız `key` üzerinden çalışır
  const [cat, setCat] = useState("all");
  const list = cat === "all" ? NEWS : NEWS.filter((n) => n.cat === cat);
  const featured = NEWS[0];

  return (
    <>
      <PageHero
        eyebrow={t("news.eyebrow")}
        title={t("news.title")}
        subtitle={t("news.subtitle")}
        image={BG.news}
        accent="var(--gold)"
      />

      {/* Featured */}
      <section className="section">
        <div className="container">
          <Reveal className="feat">
            <div className="feat__media">
              <img src="/images/new/unnamed-24.jpg" alt={featured.title} />
              <span className="feat__flag">{t("news.featured")}</span>
            </div>
            <div className="feat__body">
              <div className="newscard__top" style={{ "--acc": featured.color }}>
                <span className="newscard__tag">{featured.tag}</span>
                <span className="newscard__date">{featured.date}</span>
              </div>
              <h2>{featured.title}</h2>
              <p className="lead">{featured.excerpt}</p>
              <p>{NEWS_FEATURED_BODY}</p>
              <Link to="/iletisim" className="btn" style={{ marginTop: "1rem" }}>
                {t("news.contactBtn")} <Icon name="arrow" size={17} className="arrow" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Filter + grid */}
      <section className="section bg-cream2">
        <div className="container">
          <div className="news-filter">
            {NEWS_CATS.map((c) => (
              <button
                key={c.key}
                className={`news-filter__btn ${cat === c.key ? "is-active" : ""}`}
                onClick={() => setCat(c.key)}
              >
                {c.label}
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
                <Link to="/haberler" className="linkline">
                  {t("common.readMore")} <Icon name="arrow" size={15} className="arrow" />
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <CTABand />
    </>
  );
}
