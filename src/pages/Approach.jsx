import Icon from "../components/Icon.jsx";
import Reveal, { Stagger, StaggerItem } from "../components/Reveal.jsx";
import { PageHero, CTABand, SectionHeading } from "../components/Shared.jsx";
import { APPROACH, BG } from "../data/site.js";
import "./pages.css";
import "./approach.css";

const PRINCIPLES = [
  { icon: "play", title: "Oyun, en ciddi iştir", text: "Oyun; çocuğun dünyayı anlamlandırma, deneme ve öğrenme biçimidir. Programımızın kalbinde bu vardır." },
  { icon: "sun", title: "Merak yönlendirir", text: "Çocuğun sorusu, günün rotasını belirleyebilir. Öğretmen bir rehber, çevre ise üçüncü öğretmendir." },
  { icon: "users", title: "Birlikte büyürüz", text: "Öğrenme sosyaldir. İş birliği, paylaşma ve empati; her etkinliğin doğal bir parçasıdır." },
  { icon: "globe", title: "İki dilde zenginlik", text: "İngilizce, ders değil yaşamdır; şarkı, oyun ve hikâyelerle günün içine dokunur." },
];

const COMPARE = [
  "Ezber yerine anlama", "Not yerine gelişim", "Sıra yerine keşif",
  "Rekabet yerine iş birliği", "Sessizlik yerine merak", "Tek tip yerine bireysellik",
];

export default function Approach() {
  return (
    <>
      <PageHero
        eyebrow="Eğitim Yaklaşımımız"
        title="Öğrenmeyi bir oyun, okulu bir sevinç kılıyoruz"
        subtitle="Yaklaşımımız; çocuğun doğal merakını harekete geçirmek ve aktif katılımı teşvik etmek üzerine kuruludur."
        image={BG.approach}
        accent="var(--terra)"
      />

      {/* Principles */}
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Temel İlkeler"
            title="Bir felsefe, dört sütun"
            text="Her sınıf kararı, bu ilkelerden beslenir ve çocuğu merkeze alır."
          />
          <Stagger className="principles" style={{ marginTop: "3rem" }}>
            {PRINCIPLES.map((p) => (
              <StaggerItem key={p.title} className="card principle">
                <span className="principle__icon"><Icon name={p.icon} size={26} /></span>
                <div>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Method steps */}
      <section className="section bg-pine">
        <div className="container">
          <SectionHeading
            light center
            eyebrow="Yöntemimiz"
            title="Keşiften düşünceye"
            text="Her çocuğun gelişimi düzenli gözlemlenir; aileyle şeffaf ve sürekli bir iş birliği kurulur."
          />
          <Stagger className="method" style={{ marginTop: "3rem" }}>
            {APPROACH.map((a) => (
              <StaggerItem key={a.no} className="method__card">
                <span className="method__no">{a.no}</span>
                <h3>{a.title}</h3>
                <p>{a.text}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Compare / philosophy */}
      <section className="section">
        <div className="container split split--reverse">
          <Reveal className="split__media">
            <img src="/images/new/unnamed-26.jpg" alt="Tırmanma ve hareket" />
          </Reveal>
          <Reveal delay={0.1} className="prose">
            <span className="eyebrow">Farkımız</span>
            <h2 style={{ margin: "0.7rem 0 1.2rem" }}>Neyi, neden farklı yapıyoruz?</h2>
            <p style={{ marginBottom: "1.6rem" }}>
              Okul öncesi, hayatın en hızlı öğrenilen dönemidir. Biz bu dönemi; baskıyla değil,
              neşe ve anlamla dolduruyoruz. İşte önceliklerimiz:
            </p>
            <ul className="compare">
              {COMPARE.map((c) => (
                <li key={c}><Icon name="star" size={16} /> {c}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Family partnership */}
      <section className="section bg-cream2">
        <div className="container partner">
          <Reveal className="partner__copy">
            <span className="eyebrow">Aile İş Birliği</span>
            <h2 style={{ margin: "0.7rem 0 1rem" }}>Çocuğun yanında, ailenin de yanında</h2>
            <p className="lead">
              Gelişim; okul ve ev el ele verdiğinde güçlenir. Düzenli gözlem paylaşımları, açık
              iletişim ve etkinliklerle aileyi öğrenme yolculuğunun bir parçası kılıyoruz.
            </p>
          </Reveal>
          <Stagger className="partner__stats">
            {[
              { icon: "users", t: "Düzenli görüşmeler", s: "Gelişim şeffaf paylaşılır" },
              { icon: "heart", t: "Sıcak iletişim", s: "Her soruya açık kapı" },
              { icon: "palette", t: "Aile etkinlikleri", s: "Birlikte üretme zamanları" },
            ].map((x) => (
              <StaggerItem key={x.t} className="card partner__stat">
                <span className="feature__icon"><Icon name={x.icon} size={22} /></span>
                <strong>{x.t}</strong>
                <span>{x.s}</span>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <CTABand
        title="Yaklaşımımızı yerinde görün"
        text="Bir kampüs ziyaretinde sınıflarımızı gezin, öğretmenlerimizle tanışın ve atmosferi hissedin."
      />
    </>
  );
}
