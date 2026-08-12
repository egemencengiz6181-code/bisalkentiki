import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Icon from "./Icon.jsx";
import Reveal from "./Reveal.jsx";
import "./shared.css";

// İç sayfa başlığı
export function PageHero({ eyebrow, title, subtitle, image, accent = "var(--pine)" }) {
  return (
    <section className="phero" style={{ "--accent": accent }}>
      <div className="phero__bg" aria-hidden="true">
        {image && <img src={image} alt="" />}
        <div className="phero__veil" />
      </div>
      <div className="container phero__inner">
        <Reveal>
          {eyebrow && <span className="eyebrow phero__eyebrow">{eyebrow}</span>}
          <h1 className="phero__title">{title}</h1>
          {subtitle && <p className="lead phero__sub max-60">{subtitle}</p>}
        </Reveal>
      </div>
    </section>
  );
}

export function SectionHeading({ eyebrow, title, text, center, light }) {
  return (
    <Reveal className={`sh ${center ? "sh--center" : ""} ${light ? "sh--light" : ""}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="sh__title">{title}</h2>
      {text && <p className="lead sh__text max-60">{text}</p>}
    </Reveal>
  );
}

export function CTABand({
  title = "Çocuğunuz için neşeli bir başlangıç",
  text = "Ön kayıt kontenjanlarımız açıldı. Kampüsümüzü keşfetmek ve süreci başlatmak için bize ulaşın.",
}) {
  return (
    <section className="section">
      <div className="container">
        <motion.div
          className="ctaband"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="ctaband__content">
            <span className="eyebrow ctaband__eyebrow">Ön Kayıt Başladı</span>
            <h2>{title}</h2>
            <p>{text}</p>
            <div className="ctaband__actions">
              <Link to="/iletisim" className="btn btn-gold">
                <span>Başvuru Yap</span> <Icon name="arrow" size={15} className="arrow" />
              </Link>
              <Link to="/anaokulu" className="btn btn-white"><span>Programı İncele</span></Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
