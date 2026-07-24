import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Icon from "../components/Icon.jsx";
import Reveal, { Stagger, StaggerItem } from "../components/Reveal.jsx";
import { PageHero, CTABand, SectionHeading } from "../components/Shared.jsx";
import { AGE_GROUPS, DAY_FLOW, FAQ, BG } from "../data/site.js";
import "./pages.css";

const CURRICULUM = [
  { icon: "book", title: "Dil & Okuryazarlık", text: "Türkçe ve İngilizce; hikâyeler, şarkılar ve dramayla doğal biçimde." },
  { icon: "sprout", title: "Matematik & Mantık", text: "Sayı sezgisi, örüntüler ve problem çözme; somut materyallerle." },
  { icon: "palette", title: "Sanat & Yaratıcılık", text: "Resim, kolaj, kil ve serbest üretim; kendini ifade etme özgürlüğü." },
  { icon: "leaf", title: "Fen & Doğa", text: "Deneyler, bahçe ve doğa gözlemleriyle keşif ve merak." },
  { icon: "music", title: "Müzik & Hareket", text: "Ritim, dans ve grup oyunlarıyla bedensel ve işitsel gelişim." },
  { icon: "heart", title: "Sosyal-Duygusal", text: "Duyguları tanıma, empati ve arkadaşlık; öz düzenleme becerileri." },
];

export default function Preschool() {
  const [open, setOpen] = useState(0);

  return (
    <>
      <PageHero
        eyebrow="Anaokulu Programı"
        title="Oyunla, keşifle, sevgiyle öğrenme"
        subtitle="Doğumdan 5 yaşına kadar uzanan okul öncesi dönem, çocuğun geleceğe dair öğrenme becerilerinin ve özgüveninin temelini attığı kritik bir evredir."
        image={BG.preschool}
        accent="var(--gold)"
      />

      {/* Approach summary */}
      <section className="section">
        <div className="container split split--reverse">
          <Reveal className="split__media">
            <img src="/images/new/unnamed-21.jpg" alt="Yaratıcı okuma köşesi" />
            <div className="imgtag" style={{ top: 18, right: -14 }}>
              <Icon name="play" size={20} /> Oyunla öğrenme
            </div>
          </Reveal>
          <Reveal delay={0.1} className="prose">
            <span className="eyebrow">Öğrenme Felsefemiz</span>
            <h2 style={{ margin: "0.7rem 0 1.2rem" }}>Çocuklar; oyun oynayarak, keşfederek ve deneyimleyerek öğrenir</h2>
            <p>
              Programımız; çocukların bilişsel, sosyal, duygusal, fiziksel ve iletişim
              becerilerinin dengeli gelişimini amaçlar. Hem sınıf içi hem sınıf dışı etkinlikler
              yapılandırılarak yaratıcılık, problem çözme ve eleştirel düşünme desteklenir.
            </p>
            <p>
              Amacımız; güvenli bir ortamda kendini ifade edebilen, öğrenmeyi seven ve çevresiyle
              sağlıklı ilişkiler kurabilen bireyler yetiştirmektir.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Age groups detailed */}
      <section className="section bg-cream2">
        <div className="container">
          <SectionHeading
            center
            eyebrow="Yaş Grupları"
            title="Her gelişim evresine özel"
            text="EYFS erken çocukluk çerçevesinden ilham alan üç kademe; her çocuğun kendi ritminde ilerlemesini sağlar."
          />
          <Stagger className="cols-3" style={{ marginTop: "3rem" }}>
            {AGE_GROUPS.map((g) => (
              <StaggerItem key={g.code} className="agecard" style={{ "--tint": g.tint, "--acc": g.color }}>
                <div className="agecard__top">
                  <span className="agecard__age">{g.age}</span>
                  <span className="agecard__code">{g.code}</span>
                </div>
                <h3>{g.title}</h3>
                <p>{g.desc}</p>
                <ul className="agecard__list">
                  {g.points.map((pt) => (<li key={pt}><Icon name="star" size={14} /> {pt}</li>))}
                </ul>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Curriculum areas */}
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Öğrenme Alanları"
            title="Bütünsel bir gelişim müfredatı"
            text="Altı temel alan, günün içinde birbirine dokunarak zengin bir öğrenme dokusu oluşturur."
          />
          <Stagger className="features" style={{ marginTop: "3rem" }}>
            {CURRICULUM.map((c) => (
              <StaggerItem key={c.title} className="card feature">
                <span className="feature__icon"><Icon name={c.icon} size={24} /></span>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Day flow timeline */}
      <section className="section bg-cream2">
        <div className="container">
          <SectionHeading
            center
            eyebrow="Bir Günümüz"
            title="Neşeyle başlar, keşifle dolar"
            text="Öngörülebilir ama hiç sıkıcı olmayan bir akış; çocuklara güven, bize esneklik verir."
          />
          <div className="timeline" style={{ marginTop: "3rem" }}>
            {DAY_FLOW.map((d, i) => (
              <Reveal key={d.time} delay={i * 0.05} className="tl-row">
                <div className="tl-time">{d.time}</div>
                <div className="tl-body">
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Nutrition strip */}
      <section className="section">
        <div className="container split">
          <Reveal className="split__media">
            <img src="/images/nutrition.jpg" alt="Sağlıklı beslenme" />
          </Reveal>
          <Reveal delay={0.1} className="prose">
            <span className="eyebrow">Sağlıklı Beslenme</span>
            <h2 style={{ margin: "0.7rem 0 1.2rem" }}>İyi öğrenmenin temeli, iyi beslenmektir</h2>
            <p>
              Taze, dengeli ve mevsiminde hazırlanan menülerle çocuklarımızın gün boyu enerjik ve
              mutlu kalmasını sağlıyoruz. Beslenme zamanları; paylaşmayı, sofra kültürünü ve
              sağlıklı alışkanlıkları öğrenmenin de bir parçası.
            </p>
            <div className="chips" style={{ marginTop: "1.4rem" }}>
              <span className="chip-pill"><Icon name="leaf" size={15} /> Taze & mevsiminde</span>
              <span className="chip-pill"><Icon name="heart" size={15} /> Dengeli menüler</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-cream2">
        <div className="container">
          <SectionHeading center eyebrow="Sık Sorulanlar" title="Merak edilenler" />
          <div className="faq" style={{ marginTop: "2.5rem" }}>
            {FAQ.map((f, i) => (
              <div key={f.q} className={`faq__item ${open === i ? "is-open" : ""}`}>
                <button className="faq__q" onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}>
                  {f.q}<span className="faq__plus">+</span>
                </button>
                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      className="faq__a"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <p>{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
