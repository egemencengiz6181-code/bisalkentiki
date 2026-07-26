import { useState } from "react";
import { useParams } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Icon from "../components/Icon.jsx";
import TreeMark from "../components/TreeMark.jsx";
import Reveal, { Stagger, StaggerItem } from "../components/Reveal.jsx";
import { PageHero, CTABand, SectionHeading } from "../components/Shared.jsx";
import { PAGES } from "../data/institutional.js";
import NotFound from "./NotFound.jsx";
import "./pages.css";
import "./content.css";

function Prose({ b }) {
  const body = (
    <Reveal className="prose">
      {b.eyebrow && <span className="eyebrow">{b.eyebrow}</span>}
      {b.heading && <h2 style={{ margin: "0.7rem 0 1.2rem" }}>{b.heading}</h2>}
      {b.paragraphs?.map((p, i) => <p key={i}>{p}</p>)}
      {b.chips && (
        <div className="chips" style={{ marginTop: "1.6rem" }}>
          {b.chips.map((c) => <span key={c} className="chip-pill"><Icon name="star" size={15} /> {c}</span>)}
        </div>
      )}
    </Reveal>
  );
  if (!b.image) return <div className="container">{body}</div>;
  return (
    <div className={`container split ${b.imageSide === "right" ? "split--reverse" : ""}`}>
      {body}
      <Reveal delay={0.1} className="split__media">
        <img src={b.image} alt="" loading="lazy" />
      </Reveal>
    </div>
  );
}

function Features({ b }) {
  return (
    <div className="container">
      <SectionHeading eyebrow={b.eyebrow} title={b.heading} text={b.text} />
      <Stagger className={b.items.length > 4 ? "cols-3" : "features"} style={{ marginTop: "3rem" }}>
        {b.items.map((it) => (
          <StaggerItem key={it.title} className="card feature">
            <span className="feature__icon"><Icon name={it.icon} size={24} /></span>
            <h3>{it.title}</h3>
            <p>{it.text}</p>
          </StaggerItem>
        ))}
      </Stagger>
    </div>
  );
}

function GroupList({ b }) {
  return (
    <div className="container">
      <SectionHeading eyebrow={b.eyebrow} title={b.heading} text={b.text} />
      <Stagger className="cols-3" style={{ marginTop: "3rem" }}>
        {b.groups.map((g) => (
          <StaggerItem key={g.title} className="card glist">
            <span className="feature__icon"><Icon name={g.icon} size={22} /></span>
            <h3>{g.title}</h3>
            <ul className="glist__ul">
              {g.items.map((it) => <li key={it}><Icon name="star" size={14} /> {it}</li>)}
            </ul>
          </StaggerItem>
        ))}
      </Stagger>
    </div>
  );
}

function Numbered({ b }) {
  return (
    <div className="container">
      <SectionHeading eyebrow={b.eyebrow} title={b.heading} text={b.text} />
      <Stagger className="cols-3 numbered" style={{ marginTop: "3rem" }}>
        {b.items.map((it, i) => (
          <StaggerItem key={it.title} className="card numcard">
            <span className="numcard__no">{String(i + 1).padStart(2, "0")}</span>
            <h3>{it.title}</h3>
            <p>{it.text}</p>
          </StaggerItem>
        ))}
      </Stagger>
    </div>
  );
}

function Cards({ b }) {
  return (
    <div className="container">
      <SectionHeading eyebrow={b.eyebrow} title={b.heading} text={b.text} />
      <Stagger className="cols-4" style={{ marginTop: "3rem" }}>
        {b.items.map((it) => (
          <StaggerItem key={it.title} className={`card orgcard ${it.featured ? "orgcard--featured" : ""}`}>
            {it.featured && <span className="orgcard__flag">Siz buradasınız</span>}
            <span className="orgcard__tag">{it.tag}</span>
            <h3>{it.title}</h3>
            <p>{it.text}</p>
          </StaggerItem>
        ))}
      </Stagger>
    </div>
  );
}

function TwoCards({ b }) {
  return (
    <div className="container">
      <div className="mv">
        {b.items.map((it, i) => (
          <Reveal key={it.kind} delay={i * 0.12} className={`mv__card mv__card--${it.kind === "mission" ? "mission" : "vision"}`}>
            {it.icon === "tree" ? <TreeMark size={140} color="#fff" className="mv__icon" /> : <Icon name={it.icon} size={140} className="mv__icon" />}
            <h3>{it.title}</h3>
            <p>{it.text}</p>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

function Callout({ b }) {
  return (
    <div className="container">
      <Reveal className="callout">
        <TreeMark size={44} color="var(--gold)" />
        <p>{b.text}</p>
      </Reveal>
    </div>
  );
}

function Faq({ b }) {
  const [open, setOpen] = useState(0);
  return (
    <div className="container">
      {b.heading && <SectionHeading center eyebrow={b.eyebrow} title={b.heading} />}
      <div className="faq" style={{ marginTop: b.heading ? "2.5rem" : 0 }}>
        {b.items.map((f, i) => (
          <div key={f.q} className={`faq__item ${open === i ? "is-open" : ""}`}>
            <button className="faq__q" onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}>
              {f.q}<span className="faq__plus">+</span>
            </button>
            <AnimatePresence initial={false}>
              {open === i && (
                <motion.div className="faq__a" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}>
                  <p>{f.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}

function Legal({ b }) {
  return (
    <div className="container legalwrap">
      {b.sections.map((s, i) => (
        <Reveal key={i} className="legal">
          {s.heading && <h3 className="legal__h">{s.heading}</h3>}
          {s.paragraphs?.map((p, j) => <p key={j} className="legal__p">{p}</p>)}
          {s.table && (
            <table className="legal__table"><tbody>
              {s.table.map(([k, v]) => <tr key={k}><th>{k}</th><td>{v}</td></tr>)}
            </tbody></table>
          )}
          {s.items && (
            <ul className="legal__ul">
              {s.items.map((it) => <li key={it}>{it}</li>)}
            </ul>
          )}
        </Reveal>
      ))}
    </div>
  );
}

const RENDER = {
  prose: Prose, features: Features, groupList: GroupList, numbered: Numbered,
  cards: Cards, twoCards: TwoCards, callout: Callout, faq: Faq, legal: Legal,
};

export default function ContentPage() {
  const { slug } = useParams();
  const page = PAGES[slug];
  if (!page) return <NotFound />;

  return (
    <>
      <PageHero eyebrow={page.eyebrow} title={page.title} subtitle={page.subtitle} image={page.hero} accent={page.accent} />
      {page.blocks.map((b, i) => {
        const Comp = RENDER[b.type];
        if (!Comp) return null;
        const alt = i % 2 === 1;
        return (
          <section key={i} className={`section ${alt ? "bg-cream2" : ""}`}>
            <Comp b={b} />
          </section>
        );
      })}
      <CTABand />
    </>
  );
}
