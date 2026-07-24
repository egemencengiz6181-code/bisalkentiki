import { Link } from "react-router-dom";
import { NAV, CONTACT } from "../data/site.js";
import Icon from "./Icon.jsx";
import "./footer.css";

export default function Footer() {
  const year = 2026;
  return (
    <footer className="footer">
      <div className="footer__wave" aria-hidden="true">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path d="M0 60C240 10 480 10 720 45S1200 110 1440 60V120H0Z" fill="var(--pine-700)" />
        </svg>
      </div>

      <div className="container footer__inner">
        <div className="footer__brand">
          <div className="footer__brandtop">
            <img src="/bis-logo.png" alt="BİS Schools" className="footer__logo" />
            <div>
              <strong>BİS Alkent</strong>
              <span>Anaokulu</span>
            </div>
          </div>
          <p className="footer__tag">
            Yaşam boyu öğrenmenin neşeli başlangıcı. 38 yıllık BİS birikimiyle
            Büyükçekmece'de okul öncesi eğitim.
          </p>
          <a href={CONTACT.instagram} target="_blank" rel="noreferrer" className="footer__ig">
            <Icon name="instagram" size={18} /> {CONTACT.instagramHandle}
          </a>
        </div>

        <div className="footer__col">
          <h4>Keşfet</h4>
          <ul>
            {NAV.map((n) => (
              <li key={n.to}><Link to={n.to}>{n.label}</Link></li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h4>İletişim</h4>
          <ul className="footer__contact">
            <li><a href={CONTACT.phoneHref}><Icon name="phone" size={16} /> {CONTACT.phone}</a></li>
            <li><a href={`mailto:${CONTACT.email}`}><Icon name="mail" size={16} /> {CONTACT.email}</a></li>
            <li><span><Icon name="pin" size={16} /> {CONTACT.address}</span></li>
          </ul>
        </div>

        <div className="footer__col footer__cta">
          <h4>Ön kayıt başladı</h4>
          <p>Kontenjanlar sınırlı. Çocuğunuz için bir yer ayıralım.</p>
          <Link to="/iletisim" className="btn btn-gold">
            Başvuru Yap <Icon name="arrow" size={16} className="arrow" />
          </Link>
        </div>
      </div>

      <div className="container footer__bottom">
        <span>© {year} BİS Alkent Anaokulu · BİS Okulları ailesinin bir üyesidir.</span>
        <span className="footer__made">İstanbul'da sevgiyle ✿</span>
      </div>
    </footer>
  );
}
