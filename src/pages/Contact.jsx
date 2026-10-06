import { useState } from "react";
import { motion } from "framer-motion";
import Icon from "../components/Icon.jsx";
import Reveal from "../components/Reveal.jsx";
import { PageHero } from "../components/Shared.jsx";
import { useSite, useT } from "../i18n/LangContext.jsx";
import "./pages.css";
import "./contact.css";

export default function Contact() {
  const t = useT();
  const { CONTACT, BG, AGE_OPTIONS } = useSite();

  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ parent: "", child: "", age: "", phone: "", email: "", note: "" });

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });
  const age = form.age || AGE_OPTIONS[0];

  const submit = (e) => {
    e.preventDefault();
    // Demo: gerçek gönderim backend gerektirir. Şimdilik e-posta taslağı açar.
    const lines = [
      `${t("contact.mail.parent")}: ${form.parent}`,
      `${t("contact.mail.child")}: ${form.child}`,
      `${t("contact.mail.age")}: ${age}`,
      `${t("contact.mail.phone")}: ${form.phone}`,
      `${t("contact.mail.email")}: ${form.email}`,
      `${t("contact.mail.note")}: ${form.note}`,
    ];
    const subject = encodeURIComponent(`${t("contact.mail.subject")} - ${form.child || form.parent}`);
    const body = encodeURIComponent(lines.join("\n"));
    window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <>
      <PageHero
        eyebrow={t("contact.eyebrow")}
        title={t("contact.title")}
        subtitle={t("contact.subtitle")}
        image={BG.contact}
        accent="var(--pine)"
      />

      <section className="section">
        <div className="container contact">
          {/* Info side */}
          <Reveal className="contact__info">
            <h2>{t("contact.info.title")}</h2>
            <p className="lead" style={{ marginBottom: "1.8rem" }}>{t("contact.info.lead")}</p>

            <a className="contact__row" href={CONTACT.phoneHref}>
              <span className="contact__ic"><Icon name="phone" size={20} /></span>
              <span><strong>{t("contact.label.phone")}</strong>{CONTACT.phone}</span>
            </a>
            <a className="contact__row" href={`mailto:${CONTACT.email}`}>
              <span className="contact__ic"><Icon name="mail" size={20} /></span>
              <span><strong>{t("contact.label.email")}</strong>{CONTACT.email}</span>
            </a>
            <a className="contact__row" href={`https://maps.google.com/?q=${encodeURIComponent(CONTACT.mapQuery)}`} target="_blank" rel="noreferrer">
              <span className="contact__ic"><Icon name="pin" size={20} /></span>
              <span><strong>{t("contact.label.address")}</strong>{CONTACT.address}</span>
            </a>
            <a className="contact__row" href={CONTACT.instagram} target="_blank" rel="noreferrer">
              <span className="contact__ic"><Icon name="instagram" size={20} /></span>
              <span><strong>{t("contact.label.instagram")}</strong>{CONTACT.instagramHandle}</span>
            </a>

            <div className="contact__hours">
              <Icon name="clock" size={18} />
              <span>{t("contact.hours")}</span>
            </div>
          </Reveal>

          {/* Form side */}
          <Reveal delay={0.1} className="contact__formwrap">
            {sent ? (
              <motion.div
                className="contact__done"
                initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
              >
                <span className="contact__check"><Icon name="heart" size={34} /></span>
                <h3>{t("contact.done.title")}</h3>
                <p>{t("contact.done.text")}</p>
                <button className="btn btn-ghost" onClick={() => setSent(false)}>{t("contact.done.again")}</button>
              </motion.div>
            ) : (
              <form className="contact__form" onSubmit={submit}>
                <h3>{t("contact.form.title")}</h3>
                <div className="field">
                  <label htmlFor="parent">{t("contact.form.parent")}</label>
                  <input id="parent" required value={form.parent} onChange={set("parent")} placeholder={t("contact.form.parentPh")} />
                </div>
                <div className="field-row">
                  <div className="field">
                    <label htmlFor="child">{t("contact.form.child")}</label>
                    <input id="child" value={form.child} onChange={set("child")} placeholder={t("contact.form.childPh")} />
                  </div>
                  <div className="field">
                    <label htmlFor="age">{t("contact.form.age")}</label>
                    <select id="age" value={age} onChange={set("age")}>
                      {AGE_OPTIONS.map((o) => <option key={o}>{o}</option>)}
                    </select>
                  </div>
                </div>
                <div className="field-row">
                  <div className="field">
                    <label htmlFor="phone">{t("contact.form.phone")}</label>
                    <input id="phone" required type="tel" value={form.phone} onChange={set("phone")} placeholder={t("contact.form.phonePh")} />
                  </div>
                  <div className="field">
                    <label htmlFor="email">{t("contact.form.email")}</label>
                    <input id="email" required type="email" value={form.email} onChange={set("email")} placeholder={t("contact.form.emailPh")} />
                  </div>
                </div>
                <div className="field">
                  <label htmlFor="note">{t("contact.form.note")}</label>
                  <textarea id="note" rows="3" value={form.note} onChange={set("note")} placeholder={t("contact.form.notePh")} />
                </div>
                <button type="submit" className="btn btn-gold" style={{ width: "100%", justifyContent: "center" }}>
                  {t("contact.form.submit")} <Icon name="arrow" size={17} className="arrow" />
                </button>
                <p className="contact__mini">{t("contact.form.mini")}</p>
              </form>
            )}
          </Reveal>
        </div>
      </section>

      {/* Map full */}
      <section className="section-tight">
        <div className="container">
          <iframe
            className="contact__map"
            title={t("contact.mapTitle")}
            loading="lazy"
            src={`https://maps.google.com/maps?q=${encodeURIComponent(CONTACT.mapQuery)}&z=14&output=embed`}
          />
        </div>
      </section>
    </>
  );
}
