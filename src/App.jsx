import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Preschool from "./pages/Preschool.jsx";
import Approach from "./pages/Approach.jsx";
import Campus from "./pages/Campus.jsx";
import News from "./pages/News.jsx";
import Contact from "./pages/Contact.jsx";
import ContentPage from "./pages/ContentPage.jsx";
import NotFound from "./pages/NotFound.jsx";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
  }, [pathname]);
  return null;
}

function Page({ children }) {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
    >
      {children}
    </motion.main>
  );
}

export default function App() {
  const location = useLocation();
  return (
    <>
      <div className="grain" aria-hidden="true" />
      <ScrollToTop />
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Page><Home /></Page>} />
          <Route path="/hakkimizda" element={<Page><About /></Page>} />
          <Route path="/anaokulu" element={<Page><Preschool /></Page>} />
          <Route path="/yaklasim" element={<Page><Approach /></Page>} />
          <Route path="/kampus" element={<Page><Campus /></Page>} />
          <Route path="/haberler" element={<Page><News /></Page>} />
          <Route path="/iletisim" element={<Page><Contact /></Page>} />
          <Route path="/:slug" element={<Page><ContentPage /></Page>} />
          <Route path="*" element={<Page><NotFound /></Page>} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  );
}
