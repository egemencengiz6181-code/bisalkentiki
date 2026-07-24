import { Link } from "react-router-dom";
import Icon from "../components/Icon.jsx";
import TreeMark from "../components/TreeMark.jsx";

export default function NotFound() {
  return (
    <section className="section" style={{ minHeight: "70vh", display: "grid", placeItems: "center", textAlign: "center", paddingTop: "10rem" }}>
      <div className="container" style={{ maxWidth: 560 }}>
        <TreeMark size={120} color="var(--pine)" style={{ margin: "0 auto 1.5rem", opacity: 0.7 }} />
        <span className="eyebrow" style={{ justifyContent: "center", display: "inline-flex" }}>404</span>
        <h1 style={{ margin: "0.8rem 0 1rem", fontSize: "clamp(2.2rem,5vw,3.4rem)" }}>Bu sayfa keşfe çıkmış</h1>
        <p className="lead" style={{ marginBottom: "2rem" }}>
          Aradığınız sayfayı bulamadık. Birlikte ana sayfaya dönelim ve keşfe oradan devam edelim.
        </p>
        <Link to="/" className="btn btn-gold">Ana Sayfaya Dön <Icon name="arrow" size={17} className="arrow" /></Link>
      </div>
    </section>
  );
}
