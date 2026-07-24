import { useEffect, useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { NAV, CONTACT } from "../data/site.js";
import Icon from "./Icon.jsx";
import TreeMark from "./TreeMark.jsx";
import "./navbar.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState(false);
  const [search, setSearch] = useState(false);
  const [q, setQ] = useState("");
  const navigate = useNavigate();

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

  const results = q.trim()
    ? NAV.filter((n) => n.label.toLocaleLowerCase("tr").includes(q.toLocaleLowerCase("tr")))
    : NAV;

  const go = (to) => { setSearch(false); setQ(""); navigate(to); };

  return (
    <>
      <header className={`hdr ${scrolled ? "hdr--solid" : ""}`}>
        {/* Üst utility bar */}
        <div className="hdr__top">
          <div className="container hdr__top-inner">
            <a href="https://www.bisi.k12.tr/tr-TR/" target="_blank" rel="noreferrer" className="hdr__util">BİS Okulları</a>
            <Link to="/kampus" className="hdr__util">Kampüslerimiz</Link>
            <Link to="/iletisim" className="hdr__util">İletişim Formu</Link>
            <button className="hdr__iconbtn" aria-label="Ara" onClick={() => setSearch(true)}>
              <Icon name="search" size={17} />
            </button>
            <span className="hdr__lang"><span className="hdr__flag">TR</span></span>
          </div>
        </div>

        {/* Ana bar */}
        <div className="container hdr__main">
          <button className="hdr__menu" onClick={() => setMenu(true)} aria-label="Menüyü aç">
            <span className="hdr__burger"><i /><i /><i /></span>
            <span className="hdr__menutext">MENÜ</span>
          </button>

          <Link to="/" className="hdr__logo" aria-label="Ana sayfa">
            <img src="/bis-logo-white.png" alt="BİS Alkent" className="hdr__logo-light" />
            <img src="/bis-logo.png" alt="BİS Alkent" className="hdr__logo-dark" />
          </Link>

          <Link to="/iletisim" className="hdr__info">
            <span className="hdr__infotext">BİLGİ FORMU</span>
            <span className="hdr__infoic"><Icon name="info" size={16} /></span>
          </Link>
        </div>
      </header>

      {/* Yan dikey sekme */}
      <Link to="/iletisim" className="sidetab">
        <Icon name="edit" size={15} />
        <span>Bilgi Formu</span>
      </Link>

      {/* Arama overlay */}
      <AnimatePresence>
        {search && (
          <motion.div className="searchbox" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <button className="searchbox__close" onClick={() => setSearch(false)} aria-label="Kapat">×</button>
            <motion.div
              className="container searchbox__inner"
              initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <form onSubmit={(e) => { e.preventDefault(); if (results[0]) go(results[0].to); }}>
                <div className="searchbox__field">
                  <Icon name="search" size={22} />
                  <input autoFocus value={q} onChange={(e) => setQ(e.target.value)} placeholder="Sayfalarda ara…" />
                </div>
              </form>
              <div className="searchbox__results">
                {results.map((r) => (
                  <button key={r.to} className="searchbox__result" onClick={() => go(r.to)}>
                    {r.label}<Icon name="arrow" size={16} />
                  </button>
                ))}
                {!results.length && <p className="searchbox__empty">Sonuç bulunamadı.</p>}
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
              <img src="/bis-logo-white.png" alt="BİS Alkent" className="menuover__logo" />
              <button className="menuover__close" onClick={() => setMenu(false)} aria-label="Kapat">
                <span /><span />
              </button>
            </div>
            <div className="container menuover__body">
              <nav className="menuover__nav">
                {NAV.map((item, i) => (
                  <motion.div
                    key={item.to}
                    initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }}
                    transition={{ delay: 0.06 * i + 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <NavLink to={item.to} end={item.to === "/"} className="menuover__link" onClick={() => setMenu(false)}>
                      <span className="menuover__num">0{i + 1}</span>
                      {item.label}
                    </NavLink>
                  </motion.div>
                ))}
              </nav>
              <motion.div
                className="menuover__side"
                initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.35, duration: 0.6 }}
              >
                <span className="menuover__eyebrow">İletişim</span>
                <a href={CONTACT.phoneHref} className="menuover__contact"><Icon name="phone" size={18} /> {CONTACT.phone}</a>
                <a href={`mailto:${CONTACT.email}`} className="menuover__contact"><Icon name="mail" size={18} /> {CONTACT.email}</a>
                <span className="menuover__contact"><Icon name="pin" size={18} /> {CONTACT.address}</span>
                <a href={CONTACT.instagram} target="_blank" rel="noreferrer" className="menuover__ig">
                  <Icon name="instagram" size={18} /> {CONTACT.instagramHandle}
                </a>
                <Link to="/iletisim" className="btn btn-gold menuover__cta" onClick={() => setMenu(false)}>
                  Ön Kayıt Formu <Icon name="arrow" size={16} className="arrow" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
