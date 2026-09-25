import { Link } from "react-router-dom";
import { CONTACT, CAMPUSES, BIS_FAMILY } from "../data/site.js";
import Icon from "./Icon.jsx";
import "./footer.css";

/* Kardeş BİS şubelerinin footer'ıyla aynı iki katmanlı yapı:
   .botFooter (lacivert gradyan, kampüs adresleri + iletişim + yasal satır)
   .logoFooter (gray zemin, BİS ailesi) + .logoFooterDivider (kuruluş satırı) */

export default function Footer() {
  const year = 2026;

  const mapHref = (addr) =>
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(addr)}`;

  return (
    <footer className="ftr">
      {/* ---------------- botFooter ---------------- */}
      <div className="ftr__bot">
        <div className="container">
          <div className="ftr__cols">
            {CAMPUSES.map((c) => (
              <div className="ftrcol" key={c.name}>
                <a href={mapHref(c.addr)} target="_blank" rel="noreferrer" className="ftrcol__ic" aria-label={`${c.name} konumu`}>
                  <Icon name="pin" size={20} />
                </a>
                <div>
                  <h4>{c.name} Kampüsü</h4>
                  <p>{c.addr}</p>
                </div>
              </div>
            ))}

            <div className="ftrcol ftrcol--contact">
              <div>
                <h4>İletişim</h4>
                <p><a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></p>
                <p><a href={CONTACT.phoneHref}>{CONTACT.phone}</a></p>
              </div>
            </div>
          </div>

          <div className="ftr__legal">
            <p>
              © {year} BİS Alkent Anaokulu &nbsp;|&nbsp; Özel BİS Alkent Anaokulu &nbsp;|&nbsp;
              <Link to="/kvkk"> KVKK Aydınlatma Metni </Link>&nbsp;|&nbsp;
              <Link to="/sss"> Sıkça Sorulan Sorular </Link>&nbsp;|&nbsp;
              <a href="https://britishschool.istanbul/careers?lang=tr&source=bisi" target="_blank" rel="noreferrer"> Kariyer </a>
            </p>
            <ul className="ftr__social">
              <li>
                <a href={CONTACT.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
                  <Icon name="instagram" size={16} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ---------------- logoFooter ---------------- */}
      <div className="ftr__logos">
        <div className="container">
          <img src="/bis-logo.png" alt="BİS Schools" className="ftr__logos-mark" />
          <p>The British School Istanbul ailesi</p>
          <ul>
            {BIS_FAMILY.map((b) => (
              <li key={b.name}>
                <a href={b.href} target="_blank" rel="noreferrer">
                  <strong>{b.name}</strong>
                  <span>{b.note}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="ftr__divider">
          <h1>BİS ALKENT, THE BRITISH SCHOOL İSTANBUL'UN BİR KURULUŞUDUR.</h1>
        </div>
      </div>
    </footer>
  );
}
