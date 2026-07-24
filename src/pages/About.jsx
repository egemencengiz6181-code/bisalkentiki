import Icon from "../components/Icon.jsx";
import TreeMark from "../components/TreeMark.jsx";
import Reveal, { Stagger, StaggerItem } from "../components/Reveal.jsx";
import { PageHero, CTABand, SectionHeading } from "../components/Shared.jsx";
import { BG } from "../data/site.js";
import "./pages.css";

const VALUES = [
  { icon: "shield", title: "Güven & Şefkat", text: "Çocuklarımız kendini güvende ve sevildiğini hissettiği bir ortamda büyür." },
  { icon: "globe", title: "Kültürel Zenginlik", text: "Uluslararası bir bakış açısıyla; farklılıklara saygı ve merak besleriz." },
  { icon: "sprout", title: "Sürekli Gelişim", text: "Hem çocuklar hem kurum olarak her gün daha iyisini hedefleriz." },
  { icon: "users", title: "Topluluk Ruhu", text: "Aileler, öğretmenler ve çocuklar; hep birlikte tek bir topluluğuz." },
  { icon: "leaf", title: "Doğaya Saygı", text: "Çevre bilinci ve doğayla bağ, günlük yaşamın bir parçasıdır." },
  { icon: "star", title: "Yüksek Standart", text: "İlham veren bir ortamda, en yüksek akademik ve pedagojik standartlar." },
];

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="Hakkımızda"
        title="Uluslararası birikimle nitelikli eğitim"
        subtitle="BİS Alkent Anaokulu, 38 yıllık uluslararası eğitim deneyimine sahip BİS Okulları ailesinin en genç ve en neşeli üyesi."
        image={BG.about}
        accent="var(--pine)"
      />

      {/* Intro */}
      <section className="section">
        <div className="container split">
          <Reveal className="prose">
            <span className="eyebrow">BİS Okulları</span>
            <h2 style={{ margin: "0.7rem 0 1.2rem" }}>Kırk yıla yaklaşan bir eğitim geleneği</h2>
            <p>
              BİS Okulları, kuruluşundan bu yana Türk ve yabancı öğrencileri bir arada ağırlayan,
              uluslararası bir eğitim anlayışını benimseyen bir kurumdur. Amacımız; mutlu,
              özgüvenli ve global bakış açısına sahip dünya vatandaşları yetiştirmektir.
            </p>
            <p>
              Alkent şubemiz, bu köklü birikimi okul öncesi döneme taşıyor. Büyükçekmece'de,
              çocukların hayata dair ilk adımlarını neşe, keşif ve sevgiyle atmalarını sağlayan
              sıcak bir yuva kuruyoruz.
            </p>
            <div className="chips" style={{ marginTop: "1.6rem" }}>
              <span className="chip-pill"><Icon name="star" size={15} /> 38 yıllık deneyim</span>
              <span className="chip-pill"><Icon name="globe" size={15} /> Uluslararası anlayış</span>
              <span className="chip-pill"><Icon name="users" size={15} /> 4 kampüs</span>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="split__media">
            <img src="/images/new/unnamed-24.jpg" alt="Işıkla dolu giriş atriumu" />
            <div className="imgtag" style={{ bottom: 18, left: -14 }}>
              <TreeMark size={30} /> Köklerimiz derinde
            </div>
          </Reveal>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section bg-cream2">
        <div className="container">
          <SectionHeading
            center
            eyebrow="Vizyon & Misyon"
            title="Neye inanıyoruz?"
            text="Uluslararası dayanışma ve iş birliği anlayışının, daha iyi öğrenme ortamları yarattığına inanıyoruz."
          />
          <div className="mv" style={{ marginTop: "3rem" }}>
            <Reveal className="mv__card mv__card--vision">
              <TreeMark size={140} color="#fff" className="mv__icon" />
              <h3>Vizyonumuz</h3>
              <p>
                Kültürel zenginliği takdir eden, uluslararası çevreye duyarlı; akademik ve sosyal
                potansiyelini tam anlamıyla gerçekleştiren, yaşam boyu öğrenen ve global toplumda
                sorumluluk sahibi bireyler yetiştirmek.
              </p>
            </Reveal>
            <Reveal delay={0.12} className="mv__card mv__card--mission">
              <Icon name="heart" size={140} className="mv__icon" />
              <h3>Misyonumuz</h3>
              <p>
                İlham verici bir ortamda en yüksek standartlarda eğitim sunmak; hoşgörü, saygı,
                dürüstlük ve şefkati besleyerek; uyumlu, düşünen ve sorgulayan bireyler
                hazırlamak.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Değerlerimiz"
            title="Her kararımızın arkasındaki pusula"
            text="Sınıftaki her etkinlik, her selamlaşma ve her keşif; bu değerlerden güç alır."
          />
          <Stagger className="features" style={{ marginTop: "3rem" }}>
            {VALUES.map((v) => (
              <StaggerItem key={v.title} className="card feature">
                <span className="feature__icon"><Icon name={v.icon} size={24} /></span>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <CTABand
        title="Ailemize katılın"
        text="BİS Alkent topluluğunun bir parçası olmak için sizi kampüsümüzde ağırlamaktan mutluluk duyarız."
      />
    </>
  );
}
