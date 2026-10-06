import { Link } from "react-router-dom";
import { useSite, useT } from "../i18n/LangContext.jsx";
import Icon from "./Icon.jsx";
import "./footer.css";

/* Kardeş BİS şubelerinin footer'ıyla aynı iki katmanlı yapı:
   .ftr__bot (lacivert gradyan, kampüs adresleri + iletişim + yasal satır)
   .ftr__logos (gray zemin, BİS ailesi) + .ftr__divider (kuruluş satırı) */

export default function Footer() {
  const year = 2026;
  const t = useT();
  const { CONTACT, CAMPUSES, BIS_FAMILY } = useSite();

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
                <a
                  href={mapHref(c.addr)}
                  target="_blank"
                  rel="noreferrer"
                  className="ftrcol__ic"
                  aria-label={`${c.name} — ${t("footer.location")}`}
                >
                  <Icon name="pin" size={20} />
                </a>
                <div>
                  <h4>{c.name} {t("footer.campusSuffix")}</h4>
                  <p>{c.addr}</p>
                </div>
              </div>
            ))}

            <div className="ftrcol ftrcol--contact">
              <div>
                <h4>{t("footer.contact")}</h4>
                <p><a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></p>
                <p><a href={CONTACT.phoneHref}>{CONTACT.phone}</a></p>
              </div>
            </div>
          </div>

          <div className="ftr__legal">
            <p>
              © {year} {t("footer.schoolName")} &nbsp;|&nbsp; {t("footer.legalName")} &nbsp;|&nbsp;
              <Link to="/kvkk"> {t("footer.kvkk")} </Link>&nbsp;|&nbsp;
              <Link to="/sss"> {t("footer.faq")} </Link>&nbsp;|&nbsp;
              <a href="https://britishschool.istanbul/careers?source=bisi" target="_blank" rel="noreferrer"> {t("footer.careers")} </a>
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
          <img src="/bis-logo.png" alt="BIS Schools" className="ftr__logos-mark" />
          <p><span lang="en">The British School Istanbul</span> {t("footer.familySuffix")}</p>
          <ul>
            {BIS_FAMILY.map((b) => (
              <li key={b.name}>
                <a href={b.href} target="_blank" rel="noreferrer">
                  <strong lang="en">{b.name}</strong>
                  <span>{b.note}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="ftr__divider">
          {/* Zaten büyük harfle yazılı: text-transform İ/I dönüşümü yapmaz */}
          <h1>{t("footer.foundedBy")}</h1>
        </div>
      </div>
    </footer>
  );
}
