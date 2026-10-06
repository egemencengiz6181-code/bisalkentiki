import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Icon from "../components/Icon.jsx";
import Reveal, { Stagger, StaggerItem } from "../components/Reveal.jsx";
import { PageHero, CTABand, SectionHeading } from "../components/Shared.jsx";
import { useSite, useT } from "../i18n/LangContext.jsx";
import "./pages.css";
import "./campus.css";

export default function Campus() {
  const [active, setActive] = useState(null);
  const t = useT();
  const { CAMPUSES, CONTACT, GALLERY_PHOTOS, BG, CAMPUS_FEATURES } = useSite();

  return (
    <>
      <PageHero
        eyebrow={t("campus.eyebrow")}
        title={t("campus.title")}
        subtitle={t("campus.subtitle")}
        image={BG.campus}
        accent="var(--sky)"
      />

      {/* Campus features */}
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow={t("campus.features.eyebrow")}
            title={t("campus.features.title")}
            text={t("campus.features.text")}
          />
          <Stagger className="cols-4" style={{ marginTop: "3rem" }}>
            {CAMPUS_FEATURES.map((f) => (
              <StaggerItem key={f.title} className="card feature">
                <span className="feature__icon"><Icon name={f.icon} size={24} /></span>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Gallery */}
      <section className="section bg-cream2">
        <div className="container">
          <SectionHeading center eyebrow={t("campus.gallery.eyebrow")} title={t("campus.gallery.title")} />
          <Stagger className="gallery" style={{ marginTop: "3rem" }}>
            {GALLERY_PHOTOS.map((g, i) => (
              <StaggerItem key={i} className="gtile" style={{ cursor: "zoom-in" }}>
                <button className="gtile__btn" onClick={() => setActive({ src: g.img, cap: g.cap })}>
                  <img src={g.img} alt={g.cap} loading="lazy" />
                  <span className="gtile__cap">{g.cap}</span>
                </button>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Location */}
      <section className="section">
        <div className="container split">
          <Reveal className="prose">
            <span className="eyebrow">{t("campus.location.eyebrow")}</span>
            <h2 style={{ margin: "0.7rem 0 1rem" }}>{t("campus.location.title")}</h2>
            <p>{CONTACT.address}</p>
            <div className="loc-lines">
              <a href={CONTACT.phoneHref} className="loc-line"><Icon name="phone" size={18} /> {CONTACT.phone}</a>
              <a href={`mailto:${CONTACT.email}`} className="loc-line"><Icon name="mail" size={18} /> {CONTACT.email}</a>
              <a href={CONTACT.instagram} target="_blank" rel="noreferrer" className="loc-line"><Icon name="instagram" size={18} /> {CONTACT.instagramHandle}</a>
            </div>
            <a
              className="btn"
              style={{ marginTop: "1.6rem" }}
              href={`https://maps.google.com/?q=${encodeURIComponent(CONTACT.mapQuery)}`}
              target="_blank" rel="noreferrer"
            >
              {t("campus.openMap")} <Icon name="pin" size={17} />
            </a>
          </Reveal>
          <Reveal delay={0.1} className="split__media">
            <iframe
              className="map"
              title={t("campus.mapTitle")}
              loading="lazy"
              src={`https://maps.google.com/maps?q=${encodeURIComponent(CONTACT.mapQuery)}&z=14&output=embed`}
            />
          </Reveal>
        </div>
      </section>

      {/* Other campuses */}
      <section className="section bg-cream2">
        <div className="container">
          <SectionHeading center eyebrow={t("campus.family.eyebrow")} title={t("campus.family.title")} />
          <Stagger className="campuses" style={{ marginTop: "3rem" }}>
            {CAMPUSES.map((c) => (
              <StaggerItem key={c.name} className={`card campus ${c.featured ? "campus--featured" : ""}`}>
                {c.featured && <span className="campus__flag">{t("campus.youAreHere")}</span>}
                <h3>{c.name}</h3>
                <span className="campus__tag">{c.tag}</span>
                <p>{c.addr}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {active && (
          <motion.div
            className="lightbox"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <motion.figure
              initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <img src={active.src} alt={active.cap} />
              <figcaption>{active.cap}</figcaption>
            </motion.figure>
            <button className="lightbox__close" onClick={() => setActive(null)} aria-label={t("common.close")}>×</button>
          </motion.div>
        )}
      </AnimatePresence>

      <CTABand />
    </>
  );
}
