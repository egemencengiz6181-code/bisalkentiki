import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Icon from "../components/Icon.jsx";
import Reveal, { Stagger, StaggerItem } from "../components/Reveal.jsx";
import { PageHero, CTABand, SectionHeading } from "../components/Shared.jsx";
import { useSite, useT } from "../i18n/LangContext.jsx";
import "./pages.css";

export default function Preschool() {
  const [open, setOpen] = useState(0);
  const t = useT();
  const { AGE_GROUPS, DAY_FLOW, FAQ, BG, CURRICULUM } = useSite();

  return (
    <>
      <PageHero
        eyebrow={t("preschool.eyebrow")}
        title={t("preschool.title")}
        subtitle={t("preschool.subtitle")}
        image={BG.preschool}
        accent="var(--gold)"
      />

      {/* Approach summary */}
      <section className="section">
        <div className="container split split--reverse">
          <Reveal className="split__media">
            <img src="/images/new/unnamed-21.jpg" alt={t("preschool.imgalt")} />
            <div className="imgtag" style={{ top: 18, right: -14 }}>
              <Icon name="play" size={20} /> {t("preschool.imgtag")}
            </div>
          </Reveal>
          <Reveal delay={0.1} className="prose">
            <span className="eyebrow">{t("preschool.philosophy.eyebrow")}</span>
            <h2 style={{ margin: "0.7rem 0 1.2rem" }}>{t("preschool.philosophy.title")}</h2>
            <p>{t("preschool.philosophy.p1")}</p>
            <p>{t("preschool.philosophy.p2")}</p>
          </Reveal>
        </div>
      </section>

      {/* Age groups detailed */}
      <section className="section bg-cream2">
        <div className="container">
          <SectionHeading
            center
            eyebrow={t("preschool.ages.eyebrow")}
            title={t("preschool.ages.title")}
            text={t("preschool.ages.text")}
          />
          <Stagger className="cols-3" style={{ marginTop: "3rem" }}>
            {AGE_GROUPS.map((g) => (
              <StaggerItem key={g.code} className="agecard" style={{ "--tint": g.tint, "--acc": g.color }}>
                <div className="agecard__top">
                  <span className="agecard__age">{g.age}</span>
                  <span className="agecard__code" lang="en">{g.code}</span>
                </div>
                <h3>{g.title}</h3>
                <p>{g.desc}</p>
                <ul className="agecard__list">
                  {g.points.map((pt) => (<li key={pt}><Icon name="star" size={14} /> {pt}</li>))}
                </ul>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Curriculum areas */}
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow={t("preschool.curriculum.eyebrow")}
            title={t("preschool.curriculum.title")}
            text={t("preschool.curriculum.text")}
          />
          <Stagger className="features" style={{ marginTop: "3rem" }}>
            {CURRICULUM.map((c) => (
              <StaggerItem key={c.title} className="card feature">
                <span className="feature__icon"><Icon name={c.icon} size={24} /></span>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Day flow timeline */}
      <section className="section bg-cream2">
        <div className="container">
          <SectionHeading
            center
            eyebrow={t("preschool.day.eyebrow")}
            title={t("preschool.day.title")}
            text={t("preschool.day.text")}
          />
          <div className="timeline" style={{ marginTop: "3rem" }}>
            {DAY_FLOW.map((d, i) => (
              <Reveal key={d.time} delay={i * 0.05} className="tl-row">
                <div className="tl-time">{d.time}</div>
                <div className="tl-body">
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Nutrition strip */}
      <section className="section">
        <div className="container split">
          <Reveal className="split__media">
            <img src="/images/nutrition.jpg" alt={t("preschool.nutrition.imgalt")} />
          </Reveal>
          <Reveal delay={0.1} className="prose">
            <span className="eyebrow">{t("preschool.nutrition.eyebrow")}</span>
            <h2 style={{ margin: "0.7rem 0 1.2rem" }}>{t("preschool.nutrition.title")}</h2>
            <p>{t("preschool.nutrition.text")}</p>
            <div className="chips" style={{ marginTop: "1.4rem" }}>
              <span className="chip-pill"><Icon name="leaf" size={15} /> {t("preschool.nutrition.chip1")}</span>
              <span className="chip-pill"><Icon name="heart" size={15} /> {t("preschool.nutrition.chip2")}</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-cream2">
        <div className="container">
          <SectionHeading center eyebrow={t("preschool.faq.eyebrow")} title={t("preschool.faq.title")} />
          <div className="faq" style={{ marginTop: "2.5rem" }}>
            {FAQ.map((f, i) => (
              <div key={f.q} className={`faq__item ${open === i ? "is-open" : ""}`}>
                <button className="faq__q" onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}>
                  {f.q}<span className="faq__plus">+</span>
                </button>
                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      className="faq__a"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <p>{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
