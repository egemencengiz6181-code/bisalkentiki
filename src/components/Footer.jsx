import { Link } from "react-router-dom";
import { CONTACT, CAMPUSES } from "../data/site.js";
import { MENU } from "../data/institutional.js";
import Icon from "./Icon.jsx";
import "./footer.css";

export default function Footer() {
  const year = 2026;
  return (
    <footer className="footer">
      {/* Kampüsler şeridi — bisalkent.com footer yapısı */}
      <div className="footer__campuses">
        <div className="container footer__campgrid">
          {CAMPUSES.map((c) => (
            <div className={`campcol ${c.featured ? "campcol--on" : ""}`} key={c.name}>
              <span className="campcol__ic"><Icon name="pin" size={16} /></span>
              <h4>{c.name} <em>Kampüs</em></h4>
              <p>{c.addr}</p>
              <span className="campcol__tag">{c.tag}</span>
            </div>
          ))}
        </div>
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
            <Icon name="instagram" size={17} /> {CONTACT.instagramHandle}
          </a>
        </div>

        {MENU.groups.map((g) => (
          <div className="footer__col" key={g.title}>
            <h4>{g.title}</h4>
            <ul>
              {g.items.map((it) => (
                <li key={it.label}>
                  {it.href
                    ? <a href={it.href} target="_blank" rel="noreferrer">{it.label}</a>
                    : <Link to={it.to}>{it.label}</Link>}
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="footer__col footer__cta">
          <h4>İletişim</h4>
          <ul className="footer__contact">
            <li><a href={CONTACT.phoneHref}><Icon name="phone" size={15} /> {CONTACT.phone}</a></li>
            <li><a href={`mailto:${CONTACT.email}`}><Icon name="mail" size={15} /> {CONTACT.email}</a></li>
            <li><span><Icon name="pin" size={15} /> {CONTACT.address}</span></li>
          </ul>
          <Link to="/iletisim" className="btn btn-gold footer__ctabtn">
            <span>Ön Kayıt</span> <Icon name="arrow" size={15} className="arrow" />
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
