import { useState } from "react";
import { motion } from "framer-motion";
import Icon from "../components/Icon.jsx";
import Reveal from "../components/Reveal.jsx";
import { PageHero } from "../components/Shared.jsx";
import { CONTACT, BG } from "../data/site.js";
import "./pages.css";
import "./contact.css";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ parent: "", child: "", age: "3 yaş (EYFS Junior)", phone: "", email: "", note: "" });

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    // Demo: gerçek gönderim backend gerektirir. Şimdilik e-posta taslağı açar.
    const body = `Veli: ${form.parent}%0AÇocuk: ${form.child}%0AYaş: ${form.age}%0ATelefon: ${form.phone}%0AE-posta: ${form.email}%0ANot: ${form.note}`;
    window.location.href = `mailto:${CONTACT.email}?subject=Ön Kayıt Başvurusu - ${encodeURIComponent(form.child || form.parent)}&body=${body}`;
    setSent(true);
  };

  return (
    <>
      <PageHero
        eyebrow="İletişim & Ön Kayıt"
        title="Neşeli başlangıç bir mesaj uzağınızda"
        subtitle="Formu doldurun, size ulaşalım ve çocuğunuz için bir kampüs ziyareti planlayalım. Kontenjanlar sınırlıdır."
        image={BG.contact}
        accent="var(--pine)"
      />

      <section className="section">
        <div className="container contact">
          {/* Info side */}
          <Reveal className="contact__info">
            <h2>Bize ulaşın</h2>
            <p className="lead" style={{ marginBottom: "1.8rem" }}>
              Sorularınız, kayıt süreci veya kampüs ziyareti için buradayız. Size en kısa sürede
              dönüş yapmaktan mutluluk duyarız.
            </p>

            <a className="contact__row" href={CONTACT.phoneHref}>
              <span className="contact__ic"><Icon name="phone" size={20} /></span>
              <span><strong>Telefon</strong>{CONTACT.phone}</span>
            </a>
            <a className="contact__row" href={`mailto:${CONTACT.email}`}>
              <span className="contact__ic"><Icon name="mail" size={20} /></span>
              <span><strong>E-posta</strong>{CONTACT.email}</span>
            </a>
            <a className="contact__row" href={`https://maps.google.com/?q=${encodeURIComponent(CONTACT.mapQuery)}`} target="_blank" rel="noreferrer">
              <span className="contact__ic"><Icon name="pin" size={20} /></span>
              <span><strong>Adres</strong>{CONTACT.address}</span>
            </a>
            <a className="contact__row" href={CONTACT.instagram} target="_blank" rel="noreferrer">
              <span className="contact__ic"><Icon name="instagram" size={20} /></span>
              <span><strong>Instagram</strong>{CONTACT.instagramHandle}</span>
            </a>

            <div className="contact__hours">
              <Icon name="clock" size={18} />
              <span>Hafta içi 08:30 – 17:00 · Ziyaret için randevu alınız</span>
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
                <h3>Teşekkürler!</h3>
                <p>Başvurunuz e-posta uygulamanızda hazırlandı. Göndermeniz yeterli — en kısa sürede size döneceğiz.</p>
                <button className="btn btn-ghost" onClick={() => setSent(false)}>Yeni başvuru</button>
              </motion.div>
            ) : (
              <form className="contact__form" onSubmit={submit}>
                <h3>Ön Kayıt Formu</h3>
                <div className="field">
                  <label htmlFor="parent">Veli Adı Soyadı</label>
                  <input id="parent" required value={form.parent} onChange={set("parent")} placeholder="Adınız Soyadınız" />
                </div>
                <div className="field-row">
                  <div className="field">
                    <label htmlFor="child">Çocuğun Adı</label>
                    <input id="child" value={form.child} onChange={set("child")} placeholder="Çocuğunuzun adı" />
                  </div>
                  <div className="field">
                    <label htmlFor="age">Yaş Grubu</label>
                    <select id="age" value={form.age} onChange={set("age")}>
                      <option>3 yaş (EYFS Junior)</option>
                      <option>4 yaş (EYFS)</option>
                      <option>5 yaş (Reception)</option>
                    </select>
                  </div>
                </div>
                <div className="field-row">
                  <div className="field">
                    <label htmlFor="phone">Telefon</label>
                    <input id="phone" required type="tel" value={form.phone} onChange={set("phone")} placeholder="05xx xxx xx xx" />
                  </div>
                  <div className="field">
                    <label htmlFor="email">E-posta</label>
                    <input id="email" required type="email" value={form.email} onChange={set("email")} placeholder="ornek@email.com" />
                  </div>
                </div>
                <div className="field">
                  <label htmlFor="note">Mesajınız (opsiyonel)</label>
                  <textarea id="note" rows="3" value={form.note} onChange={set("note")} placeholder="Eklemek istedikleriniz..." />
                </div>
                <button type="submit" className="btn btn-gold" style={{ width: "100%", justifyContent: "center" }}>
                  Başvuruyu Gönder <Icon name="arrow" size={17} className="arrow" />
                </button>
                <p className="contact__mini">Bilgileriniz yalnızca kayıt süreci için kullanılır.</p>
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
            title="BİS Alkent Anaokulu konum"
            loading="lazy"
            src={`https://maps.google.com/maps?q=${encodeURIComponent(CONTACT.mapQuery)}&z=14&output=embed`}
          />
        </div>
      </section>
    </>
  );
}
