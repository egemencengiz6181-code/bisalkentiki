import { useEffect, useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useLang, useMenu, useSite, useT } from "../i18n/LangContext.jsx";
import Icon from "./Icon.jsx";
import TreeMark from "./TreeMark.jsx";
import "./navbar.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState(false);
  const [search, setSearch] = useState(false);
  const [q, setQ] = useState("");
  const navigate = useNavigate();

  const t = useT();
  const { lang, setLang } = useLang();
  const { CONTACT, TOPBAR_LINKS } = useSite();
  const MENU = useMenu();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menu || search ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menu, search]);

  const ALL_LINKS = [...MENU.primary, ...MENU.groups.flatMap((g) => g.items)].filter((x) => x.to);
  const locale = lang === "en" ? "en" : "tr";
  const results = q.trim()
    ? ALL_LINKS.filter((n) => n.label.toLocaleLowerCase(locale).includes(q.toLocaleLowerCase(locale)))
    : ALL_LINKS.slice(0, 8);

  const go = (to) => { setSearch(false); setQ(""); navigate(to); };

  return (
    <>
      <header className={`hdr ${scrolled ? "hdr--solid" : ""}`}>
        {/* Üst cream şerit — referanstaki .firstNav */}
        <div className="hdr__top">
          <div className="container hdr__top-inner">
            <nav className="hdr__toplinks">
              {TOPBAR_LINKS.map((l) => (
                <Link key={l.label} to={l.to} className="hdr__util">{l.label}</Link>
              ))}
            </nav>
            <button className="hdr__util hdr__iconbtn" aria-label={t("nav.search")} onClick={() => setSearch(true)}>
              <Icon name="search" size={14} />
            </button>
            <div className="hdr__lang" role="group" aria-label={t("lang.label")}>
              <button
                type="button"
                lang="tr"
                className={`hdr__langbtn ${lang === "tr" ? "is-active" : ""}`}
                aria-pressed={lang === "tr"}
                onClick={() => setLang("tr")}
              >
                {t("lang.tr")}
              </button>
              <span className="hdr__langsep" aria-hidden="true" />
              <button
                type="button"
                lang="en"
                className={`hdr__langbtn ${lang === "en" ? "is-active" : ""}`}
                aria-pressed={lang === "en"}
                onClick={() => setLang("en")}
              >
                {t("lang.en")}
              </button>
            </div>
          </div>
        </div>

        {/* Ana bar */}
        <div className="container hdr__main">
          <button className="hdr__menu" onClick={() => setMenu(true)} aria-label={t("nav.openMenu")}>
            <span className="hdr__burger"><i /><i /><i /></span>
            <span className="hdr__menutext">{t("nav.menu")}</span>
          </button>

          <Link to="/" className="hdr__logo" aria-label={t("nav.home")}>
            <img src="/bis-logo-white.png" alt="BIS Alkent" className="hdr__logo-img" />
          </Link>

          <Link to="/iletisim" className="hdr__info">
            <span className="hdr__infotext">{t("nav.enquiry")}</span>
            <span className="hdr__infoic"><Icon name="arrow" size={15} /></span>
          </Link>
        </div>
      </header>

      {/* Arama overlay */}
      <AnimatePresence>
        {search && (
          <motion.div className="searchbox" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <button className="searchbox__close" onClick={() => setSearch(false)} aria-label={t("common.close")}>×</button>
            <motion.div
              className="container searchbox__inner"
              initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <form onSubmit={(e) => { e.preventDefault(); if (results[0]) go(results[0].to); }}>
                <div className="searchbox__field">
                  <Icon name="search" size={22} />
                  <input autoFocus value={q} onChange={(e) => setQ(e.target.value)} placeholder={t("nav.searchPlaceholder")} />
                </div>
              </form>
              <div className="searchbox__results">
                {results.map((r) => (
                  <button key={r.to} className="searchbox__result" onClick={() => go(r.to)}>
                    {r.label}<Icon name="arrow" size={16} />
                  </button>
                ))}
                {!results.length && <p className="searchbox__empty">{t("nav.noResults")}</p>}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Tam ekran menü */}
      <AnimatePresence>
        {menu && (
          <motion.div className="menuover" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
            <div className="menuover__bg" aria-hidden="true">
              <TreeMark size={620} color="rgba(255,255,255,0.04)" className="menuover__tree" />
            </div>
            <div className="container menuover__head">
              <img src="/bis-logo-white.png" alt="BIS Alkent" className="menuover__logo" />
              <button className="menuover__close" onClick={() => setMenu(false)} aria-label={t("common.close")}>
                <span /><span />
              </button>
            </div>
            <div className="container menuover__body">
              <nav className="menuover__nav">
                {MENU.primary.map((item, i) => (
                  <motion.div
                    key={item.to}
                    initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }}
                    transition={{ delay: 0.05 * i + 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <NavLink to={item.to} end={item.to === "/"} className="menuover__link" onClick={() => setMenu(false)}>
                      <span className="menuover__num">0{i + 1}</span>
                      {item.label}
                    </NavLink>
                  </motion.div>
                ))}
              </nav>

              <motion.div
                className="menuover__groups"
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }}
              >
                {MENU.groups.map((g) => (
                  <div key={g.title} className="menuover__group">
                    <span className="menuover__eyebrow">{g.title}</span>
                    <ul>
                      {g.items.map((it) => (
                        <li key={it.label}>
                          {it.href ? (
                            <a href={it.href} target="_blank" rel="noreferrer" className="menuover__sublink">{it.label}</a>
                          ) : (
                            <NavLink to={it.to} end={it.to === "/"} className="menuover__sublink" onClick={() => setMenu(false)}>{it.label}</NavLink>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </motion.div>

              <motion.div
                className="menuover__side"
                initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4, duration: 0.6 }}
              >
                <span className="menuover__eyebrow">{t("nav.contact")}</span>
                <a href={CONTACT.phoneHref} className="menuover__contact"><Icon name="phone" size={18} /> {CONTACT.phone}</a>
                <a href={`mailto:${CONTACT.email}`} className="menuover__contact"><Icon name="mail" size={18} /> {CONTACT.email}</a>
                <span className="menuover__contact"><Icon name="pin" size={18} /> {CONTACT.address}</span>
                <a href={CONTACT.instagram} target="_blank" rel="noreferrer" className="menuover__ig">
                  <Icon name="instagram" size={18} /> {CONTACT.instagramHandle}
                </a>
                <Link to="/iletisim" className="btn btn-gold menuover__cta" onClick={() => setMenu(false)}>
                  {t("nav.preRegister")} <Icon name="arrow" size={16} className="arrow" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
