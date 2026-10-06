import Icon from "../components/Icon.jsx";
import Reveal, { Stagger, StaggerItem } from "../components/Reveal.jsx";
import { PageHero, CTABand, SectionHeading } from "../components/Shared.jsx";
import { useSite, useT } from "../i18n/LangContext.jsx";
import "./pages.css";
import "./approach.css";

export default function Approach() {
  const t = useT();
  const { APPROACH, BG, APPROACH_PRINCIPLES, APPROACH_COMPARE, APPROACH_PARTNER } = useSite();

  return (
    <>
      <PageHero
        eyebrow={t("approach.eyebrow")}
        title={t("approach.title")}
        subtitle={t("approach.subtitle")}
        image={BG.approach}
        accent="var(--terra)"
      />

      {/* Principles */}
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow={t("approach.principles.eyebrow")}
            title={t("approach.principles.title")}
            text={t("approach.principles.text")}
          />
          <Stagger className="principles" style={{ marginTop: "3rem" }}>
            {APPROACH_PRINCIPLES.map((p) => (
              <StaggerItem key={p.title} className="card principle">
                <span className="principle__icon"><Icon name={p.icon} size={26} /></span>
                <div>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Method steps */}
      <section className="section bg-pine">
        <div className="container">
          <SectionHeading
            light center
            eyebrow={t("approach.method.eyebrow")}
            title={t("approach.method.title")}
            text={t("approach.method.text")}
          />
          <Stagger className="method" style={{ marginTop: "3rem" }}>
            {APPROACH.map((a) => (
              <StaggerItem key={a.no} className="method__card">
                <span className="method__no">{a.no}</span>
                <h3>{a.title}</h3>
                <p>{a.text}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Compare / philosophy */}
      <section className="section">
        <div className="container split split--reverse">
          <Reveal className="split__media">
            <img src="/images/new/unnamed-26.jpg" alt={t("approach.compare.imgalt")} />
          </Reveal>
          <Reveal delay={0.1} className="prose">
            <span className="eyebrow">{t("approach.compare.eyebrow")}</span>
            <h2 style={{ margin: "0.7rem 0 1.2rem" }}>{t("approach.compare.title")}</h2>
            <p style={{ marginBottom: "1.6rem" }}>{t("approach.compare.intro")}</p>
            <ul className="compare">
              {APPROACH_COMPARE.map((c) => (
                <li key={c}><Icon name="star" size={16} /> {c}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Family partnership */}
      <section className="section bg-cream2">
        <div className="container partner">
          <Reveal className="partner__copy">
            <span className="eyebrow">{t("approach.partner.eyebrow")}</span>
            <h2 style={{ margin: "0.7rem 0 1rem" }}>{t("approach.partner.title")}</h2>
            <p className="lead">{t("approach.partner.text")}</p>
          </Reveal>
          <Stagger className="partner__stats">
            {APPROACH_PARTNER.map((x) => (
              <StaggerItem key={x.title} className="card partner__stat">
                <span className="feature__icon"><Icon name={x.icon} size={22} /></span>
                <strong>{x.title}</strong>
                <span>{x.text}</span>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <CTABand title={t("approach.cta.title")} text={t("approach.cta.text")} />
    </>
  );
}
