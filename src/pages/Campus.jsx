import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Icon from "../components/Icon.jsx";
import Reveal, { Stagger, StaggerItem } from "../components/Reveal.jsx";
import { PageHero, CTABand, SectionHeading } from "../components/Shared.jsx";
import { CAMPUSES, CONTACT, GALLERY_PHOTOS, BG } from "../data/site.js";
import "./pages.css";
import "./campus.css";

const GALLERY = GALLERY_PHOTOS.map((g) => ({ src: g.img, cap: g.cap }));

const FEATURES = [
  { icon: "sun", title: "Aydınlık Sınıflar", text: "Doğal ışıkla dolu, çocuk ölçeğinde tasarlanmış öğrenme alanları." },
  { icon: "leaf", title: "Açık Hava & Bahçe", text: "Keşif, hareket ve doğa etkinlikleri için güvenli dış mekânlar." },
  { icon: "palette", title: "Atölye Köşeleri", text: "Sanat, fen ve duyusal oyun istasyonları her sınıfın içinde." },
  { icon: "shield", title: "Güvenli Ortam", text: "Çocuk güvenliği önceliğiyle tasarlanmış, kontrollü kampüs." },
];

export default function Campus() {
  const [active, setActive] = useState(null);

  return (
    <>
      <PageHero
        eyebrow="Kampüs & Galeri"
        title="Keşfetmek için tasarlanmış bir dünya"
        subtitle="Büyükçekmece Alkent'teki kampüsümüz; çocukların güvenle keşfedebileceği, öğrenmenin her köşeye dokunduğu sıcak bir alan."
        image={BG.campus}
        accent="var(--sky)"
      />

      {/* Campus features */}
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Alkent Kampüsü"
            title="Her ayrıntı çocuk için"
            text="Mekânımız; üçüncü öğretmen olarak çocuğun merakını ve bağımsızlığını destekler."
          />
          <Stagger className="cols-4" style={{ marginTop: "3rem" }}>
            {FEATURES.map((f) => (
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
          <SectionHeading center eyebrow="Galeri" title="Bir bakışta hayatımız" />
          <Stagger className="gallery" style={{ marginTop: "3rem" }}>
            {GALLERY.map((g, i) => (
              <StaggerItem key={i} className="gtile" style={{ cursor: "zoom-in" }}>
                <button className="gtile__btn" onClick={() => setActive(g)}>
                  <img src={g.src} alt={g.cap} loading="lazy" />
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
            <span className="eyebrow">Konum</span>
            <h2 style={{ margin: "0.7rem 0 1rem" }}>Büyükçekmece'de, hemen yanı başınızda</h2>
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
              Haritada Aç <Icon name="pin" size={17} />
            </a>
          </Reveal>
          <Reveal delay={0.1} className="split__media">
            <iframe
              className="map"
              title="BİS Alkent konum"
              loading="lazy"
              src={`https://maps.google.com/maps?q=${encodeURIComponent(CONTACT.mapQuery)}&z=14&output=embed`}
            />
          </Reveal>
        </div>
      </section>

      {/* Other campuses */}
      <section className="section bg-cream2">
        <div className="container">
          <SectionHeading center eyebrow="BİS Ailesi" title="Türkiye genelinde kampüslerimiz" />
          <Stagger className="campuses" style={{ marginTop: "3rem" }}>
            {CAMPUSES.map((c) => (
              <StaggerItem key={c.name} className={`card campus ${c.featured ? "campus--featured" : ""}`}>
                {c.featured && <span className="campus__flag">Anaokulu · Siz buradasınız</span>}
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
            <button className="lightbox__close" onClick={() => setActive(null)} aria-label="Kapat">×</button>
          </motion.div>
        )}
      </AnimatePresence>

      <CTABand />
    </>
  );
}
