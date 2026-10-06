import Icon from "../components/Icon.jsx";
import TreeMark from "../components/TreeMark.jsx";
import Reveal, { Stagger, StaggerItem } from "../components/Reveal.jsx";
import { PageHero, CTABand, SectionHeading } from "../components/Shared.jsx";
import { useSite, useT } from "../i18n/LangContext.jsx";
import "./pages.css";

export default function About() {
  const t = useT();
  const { BG, ABOUT_VALUES, ABOUT_CHIPS } = useSite();

  return (
    <>
      <PageHero
        eyebrow={t("about.eyebrow")}
        title={t("about.title")}
        subtitle={t("about.subtitle")}
        image={BG.about}
        accent="var(--pine)"
      />

      {/* Intro */}
      <section className="section">
        <div className="container split">
          <Reveal className="prose">
            <span className="eyebrow">{t("about.intro.eyebrow")}</span>
            <h2 style={{ margin: "0.7rem 0 1.2rem" }}>{t("about.intro.title")}</h2>
            <p>{t("about.intro.p1")}</p>
            <p>{t("about.intro.p2")}</p>
            <div className="chips" style={{ marginTop: "1.6rem" }}>
              {ABOUT_CHIPS.map((c) => (
                <span className="chip-pill" key={c.label}>
                  <Icon name={c.icon} size={15} /> {c.label}
                </span>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.1} className="split__media">
            <img src="/images/new/unnamed-24.jpg" alt={t("about.imgalt")} />
            <div className="imgtag" style={{ bottom: 18, left: -14 }}>
              <TreeMark size={30} /> {t("about.imgtag")}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section bg-cream2">
        <div className="container">
          <SectionHeading
            center
            eyebrow={t("about.vm.eyebrow")}
            title={t("about.vm.title")}
            text={t("about.vm.text")}
          />
          <div className="mv" style={{ marginTop: "3rem" }}>
            <Reveal className="mv__card mv__card--vision">
              <TreeMark size={140} color="#fff" className="mv__icon" />
              <h3>{t("about.vision.title")}</h3>
              <p>{t("about.vision.text")}</p>
            </Reveal>
            <Reveal delay={0.12} className="mv__card mv__card--mission">
              <Icon name="heart" size={140} className="mv__icon" />
              <h3>{t("about.mission.title")}</h3>
              <p>{t("about.mission.text")}</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow={t("about.values.eyebrow")}
            title={t("about.values.title")}
            text={t("about.values.text")}
          />
          <Stagger className="features" style={{ marginTop: "3rem" }}>
            {ABOUT_VALUES.map((v) => (
              <StaggerItem key={v.title} className="card feature">
                <span className="feature__icon"><Icon name={v.icon} size={24} /></span>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <CTABand title={t("about.cta.title")} text={t("about.cta.text")} />
    </>
  );
}
