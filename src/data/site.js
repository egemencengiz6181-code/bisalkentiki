// Merkezi içerik — BİS Alkent Anaokulu
export const CONTACT = {
  phone: "+90 542 520 55 30",
  phoneHref: "tel:+905425205530",
  email: "admissions@bisalkent.com",
  address: "Karaağaç, Sırtköy Bulvarı No:27, Büyükçekmece / İstanbul",
  addressShort: "Sırtköy Bulvarı No:27, Büyükçekmece",
  mapQuery: "Sırtköy Bulvarı No:27 Büyükçekmece İstanbul",
  instagram: "https://instagram.com/bisalkent",
  instagramHandle: "@bisalkent",
};

// Kurumsal vurgu bandı
export const QUOTE = "En yüksek eğitim standartları";

// "Bize ulaşabilirsiniz" hizmet kartları
export const CONTACT_FOR = [
  { icon: "edit", title: "Kayıt Kabul", text: "Ön kayıt koşulları, kontenjanlar ve başvuru takvimi hakkında bilgi alın." },
  { icon: "info", title: "İşlemler", text: "Kayıt evrakları, ücretlendirme ve süreçle ilgili tüm sorularınız için." },
  { icon: "pin", title: "Kampüs Ziyareti", text: "Kampüsümüzü keşfedin, öğretmenlerimizle tanışın; sınıflarımızı birlikte gezelim." },
];

export const NAV = [
  { to: "/", label: "Ana Sayfa" },
  { to: "/hakkimizda", label: "Hakkımızda" },
  { to: "/anaokulu", label: "Anaokulu" },
  { to: "/yaklasim", label: "Eğitim Yaklaşımı" },
  { to: "/kampus", label: "Kampüs & Galeri" },
  { to: "/haberler", label: "Haberler" },
  { to: "/iletisim", label: "İletişim" },
];

const N = (n) => `/images/new/unnamed-${n}.jpg`;

// Tam ekran hero slider — gerçek kampüs görselleri
export const HERO_SLIDES = [
  { img: N(24), eyebrow: "Alkent Anaokulu Kampüs", title: "Işıkla ve merakla tasarlanmış bir dünya" },
  { img: N(28), eyebrow: "Spor & Hareket", title: "Geniş oyun ve spor alanları" },
  { img: N(21), eyebrow: "Yaratıcılık", title: "Hayal gücünü besleyen köşeler" },
  { img: N(22), eyebrow: "Modern Mimari", title: "Çocuk ölçeğinde, sıcacık mekânlar" },
  { img: N(32), eyebrow: "Kütüphane", title: "Öğrenmeyi sevdiren alanlar" },
];

// Kampüs galerisi — gerçek fotoğraflar
export const GALLERY_PHOTOS = [
  { img: N(24), cap: "Işıkla dolu giriş atriumu", tall: true },
  { img: N(20), cap: "Doğa sınıfımız" },
  { img: N(21), cap: "Kuş temalı okuma köşesi" },
  { img: N(28), cap: "Spor ve oyun salonu", tall: true },
  { img: N(26), cap: "Tırmanma ve hareket" },
  { img: N(22), cap: "Kemerli koridorlar" },
  { img: N(32), cap: "Kütüphane köşesi" },
  { img: N(25), cap: "Amfi ve buluşma alanı", tall: true },
  { img: N(31), cap: "Yaratıcı sınıflar" },
  { img: N(30), cap: "Sınıflarımız" },
  { img: N(29), cap: "Hareket atölyesi" },
  { img: N(27), cap: "Renkli koridorlar" },
];

// Sayfa hero / breadcrumb arka planları (soluk kullanılır)
export const BG = {
  about: N(24),
  preschool: N(20),
  approach: N(21),
  campus: N(22),
  news: N(25),
  contact: N(27),
  cta: N(28),
};

export const AGE_GROUPS = [
  {
    code: "EYFS Junior",
    age: "3 - 4 Yaş",
    img: N(20),
    campuses: "Alkent | Zekeriyaköy | Bahçeşehir | Çamlıca",
    title: "Keşif Başlıyor",
    color: "var(--bis-green)",
    tint: "#eef2f0",
    desc: "İlk adımlar. Duyusal oyun, güvenli bağlanma ve rutinlerle çocuklar okulu sever, keşfetmeyi öğrenir.",
    points: ["Duyusal ve sezgisel öğrenme", "Öz bakım becerileri", "Oyunla İngilizce'ye ilk temas"],
  },
  {
    code: "EYFS",
    age: "4 - 5 Yaş",
    img: N(31),
    campuses: "Alkent | Zekeriyaköy | Bahçeşehir | Çamlıca",
    title: "Merak Çağı",
    color: "var(--bis-blue)",
    tint: "#eceef4",
    desc: "Sorular çoğalır. Proje temelli etkinlikler, erken okuryazarlık ve sayı sezgisiyle düşünme derinleşir.",
    points: ["Proje temelli keşif", "Erken okuryazarlık & matematik", "Sosyal-duygusal gelişim"],
  },
  {
    code: "Reception",
    age: "5 - 6 Yaş",
    img: N(30),
    campuses: "Alkent | Zekeriyaköy | Bahçeşehir | Çamlıca",
    title: "İlkokula Hazırlık",
    color: "var(--bis-cream-h)",
    tint: "#f5f1e9",
    desc: "Kendine güvenen öğrenciler. Okuryazarlık, problem çözme ve öz düzenleme becerileriyle ilkokula sağlam bir geçiş.",
    points: ["Okuma-yazma temeli", "Eleştirel düşünme", "Bağımsızlık & sorumluluk"],
  },
];

export const PILLARS = [
  {
    icon: "play",
    title: "Oyunla Öğrenme",
    text: "Çocuklarımız oyun oynayarak, keşfederek ve deneyimleyerek öğrenir. Doğal merak, her günün motorudur.",
  },
  {
    icon: "globe",
    title: "Uluslararası Bakış",
    text: "38 yıllık BİS birikimiyle; kültürel zenginliği anlayan, dünya vatandaşı bireyler yetişir.",
  },
  {
    icon: "leaf",
    title: "Doğayla Bağ",
    text: "Bahçe, doğa ve açık hava etkinlikleri günlük programın ayrılmaz parçasıdır.",
  },
  {
    icon: "heart",
    title: "Sosyal-Duygusal Denge",
    text: "Bilişsel, sosyal, duygusal, fiziksel ve iletişim becerileri dengeli biçimde desteklenir.",
  },
];

export const APPROACH = [
  {
    no: "01",
    title: "Merakı Ateşleyen Ortam",
    text: "Sınıflarımız birer davettir; çocuğun kendi sorusunu sormasına, denemesine ve keşfetmesine alan açar.",
  },
  {
    no: "02",
    title: "Oyun Temelli Pedagoji",
    text: "Yapılandırılmış oyunlar ve serbest keşif dengede tutulur; öğrenme çocuk için hep anlamlı kalır.",
  },
  {
    no: "03",
    title: "İki Dilli Zenginlik",
    text: "İngilizce, günlük yaşamın doğal bir parçası olarak; şarkılar, oyunlar ve hikâyelerle içselleşir.",
  },
  {
    no: "04",
    title: "Bireysel İzleme",
    text: "Her çocuğun gelişimi düzenli olarak gözlemlenir; aileyle şeffaf ve sürekli bir iş birliği kurulur.",
  },
];

export const DAY_FLOW = [
  { time: "08:30", title: "Neşeli Karşılama", text: "Güne şarkı ve sabah çemberiyle başlarız." },
  { time: "09:15", title: "Keşif Atölyeleri", text: "Sanat, fen ve duyusal istasyonlar." },
  { time: "10:30", title: "Bahçe & Doğa", text: "Açık havada hareket ve keşif zamanı." },
  { time: "11:30", title: "Hikâye & Dil", text: "İngilizce ve Türkçe hikâye, drama." },
  { time: "12:15", title: "Öğle & Dinlenme", text: "Sağlıklı beslenme ve sakin mola." },
  { time: "14:00", title: "Proje Zamanı", text: "Haftanın temasına dair yaratıcı projeler." },
  { time: "15:30", title: "Müzik & Hareket", text: "Ritim, dans ve grup oyunları." },
  { time: "16:00", title: "Uğurlama", text: "Günü paylaşarak, gülümseyerek bitiririz." },
];

export const STATS = [
  { value: "38", suffix: "yıl", label: "BİS eğitim birikimi" },
  { value: "3–5", suffix: "yaş", label: "Okul öncesi dönem" },
  { value: "4", suffix: "kampüs", label: "Türkiye genelinde" },
  { value: "1", suffix: "aile", label: "Sıcak bir topluluk" },
];

export const CAMPUSES = [
  { name: "Alkent", addr: "Karaağaç, Sırtköy Bulvarı No:27, Büyükçekmece", tag: "Anaokulu", featured: true },
  { name: "Zekeriyaköy", addr: "Uskumruköy, 8. Cd. No:7, Sarıyer", tag: "İlkokul · Ortaokul · Lise" },
  { name: "Bahçeşehir", addr: "Pazartürk Cd. No:12, Başakşehir", tag: "Kampüs" },
  { name: "Çamlıca", addr: "Turistik Çamlıca Cd. No:54, Üsküdar", tag: "Kampüs" },
];

export const NEWS = [
  {
    cat: "duyuru",
    tag: "Duyuru",
    date: "Eylül 2026",
    title: "Alkent'te yeni bir başlangıç",
    excerpt: "Yaşam boyu öğrenmenin neşeli başlangıcı Büyükçekmece'ye geliyor. Erken kayıt kontenjanlarımız açıldı.",
    color: "var(--bis-green)",
  },
  {
    cat: "etkinlik",
    tag: "Etkinlik",
    date: "Ağustos 2026",
    title: "Açık Kapı Günleri",
    excerpt: "Kampüsümüzü keşfedin, öğretmenlerimizle tanışın ve çocuğunuz için sınıflarımızı birlikte gezelim.",
    color: "var(--bis-cream-h)",
  },
  {
    cat: "pedagoji",
    tag: "Pedagoji",
    date: "Temmuz 2026",
    title: "Oyunun gücü üzerine",
    excerpt: "Oyun neden okul öncesinde en güçlü öğrenme aracıdır? Uzman öğretmenlerimizin gözünden.",
    color: "var(--bis-blue)",
  },
  {
    cat: "pedagoji",
    tag: "Pedagoji",
    date: "Haziran 2026",
    title: "Doğada öğrenmenin faydaları",
    excerpt: "Açık hava etkinlikleri çocukların dikkatini, dayanıklılığını ve merakını nasıl güçlendiriyor?",
    color: "var(--bis-blue)",
  },
  {
    cat: "etkinlik",
    tag: "Etkinlik",
    date: "Mayıs 2026",
    title: "Aile atölyesi: Birlikte üretiyoruz",
    excerpt: "Ebeveynler ve çocuklar el ele; sanat, müzik ve oyun dolu bir gün planlıyoruz.",
    color: "var(--bis-cream-h)",
  },
  {
    cat: "duyuru",
    tag: "Duyuru",
    date: "Nisan 2026",
    title: "Kayıt takvimimiz güncellendi",
    excerpt: "2026–2027 dönemi için başvuru adımları ve önemli tarihler yayında.",
    color: "var(--bis-green)",
  },
];

// Haber filtresi — `key` dilden bağımsızdır, `label` çevrilir
export const NEWS_CATS = [
  { key: "all", label: "Tümü" },
  { key: "duyuru", label: "Duyuru" },
  { key: "etkinlik", label: "Etkinlik" },
  { key: "pedagoji", label: "Pedagoji" },
];

// Öne çıkan haberin gövde metni (Haberler sayfası)
export const NEWS_FEATURED_BODY =
  "Yaşam boyu öğrenmenin neşeli başlangıcı Büyükçekmece'ye geliyor. Sınırlı kontenjanla açtığımız erken kayıt döneminde, çocuğunuz için bir yer ayırmak ve kampüsümüzü keşfetmek üzere bize ulaşabilirsiniz.";

export const FAQ = [
  {
    q: "Hangi yaş gruplarını kabul ediyorsunuz?",
    a: "Okul öncesi programımız 3 yaş (EYFS Junior), 4 yaş (EYFS) ve 5 yaş (Reception) gruplarını kapsar.",
  },
  {
    q: "Eğitim dili nedir?",
    a: "Türkçe temelli, İngilizce'nin günlük yaşamın doğal bir parçası olarak yer aldığı zengin bir iki dilli ortam sunuyoruz.",
  },
  {
    q: "Kayıt süreci nasıl işliyor?",
    a: "İletişim formunu doldurup bize ulaşabilir, ardından bir kampüs ziyareti planlayarak süreci birlikte başlatabiliriz.",
  },
  {
    q: "BİS Okulları'nın parçası mısınız?",
    a: "Evet. Alkent Anaokulu, 38 yıllık uluslararası eğitim birikimine sahip BİS Okulları ailesinin bir üyesidir.",
  },
];


// ---------------------------------------------------------------------------
// BİS kurumsal şablon verileri (biscamlica.k12.tr / bisbahcesehir.k12.tr ile
// aynı ana sayfa düzenini beslemek için)
// ---------------------------------------------------------------------------

// Üst cream şeritteki kurumsal bağlantılar
export const TOPBAR_LINKS = [
  { label: "BİS Okulları", to: "/kurumsal-yapi" },
  { label: "Kampüslerimiz", to: "/kampus" },
  { label: "İletişim", to: "/iletisim" },
];

// logoFooter — The British School Istanbul ailesi
export const BIS_FAMILY = [
  { name: "BIS Schools", note: "Ulusal Okullar", href: "https://www.bisi.k12.tr/tr-TR/" },
  { name: "BISS", note: "British International School Istanbul", href: "https://www.bis.k12.tr" },
  { name: "BIS STEAM", note: "Etiler STEAM Kampüsü", href: "https://www.bis.k12.tr" },
];

// Ana sayfa video / kampüs turu bandı
export const TOUR = {
  img: N(25),
  eyebrow: "Kampüs Turu",
  title: "Alkent Kampüsü'nü keşfedin",
  text: "Işıkla dolu atrium, doğa sınıfı, kütüphane ve spor salonu — çocuk ölçeğinde tasarlanmış her köşe.",
  to: "/kampus",
};

// NOT: Aşağıdaki görüşler şu an okulun kendi pedagoji ekibinin sözleridir.
// Referans BİS sitelerinde bu alanda gerçek veli yorumları yer alır; yayına
// almadan önce gerçek veli görüşleriyle değiştirilmelidir.
export const TESTIMONIALS = [
  {
    text: "Her çocuk kendi hızında öğrenir. Bizim işimiz o hızı fark etmek, ona alan açmak ve doğru anda doğru soruyu sormaktır.",
    name: "BİS Alkent Pedagoji Ekibi",
    role: "Okul Öncesi Koordinasyonu",
  },
  {
    text: "Oyun, okul öncesinde bir mola değil; öğrenmenin ta kendisidir. Sınıflarımızı bu inançla kurguluyoruz.",
    name: "BİS Alkent Pedagoji Ekibi",
    role: "EYFS Programı",
  },
  {
    text: "İngilizce bir ders saati değil, günün doğal bir parçası. Şarkıyla, hikâyeyle, oyunla içselleşiyor.",
    name: "BİS Alkent Pedagoji Ekibi",
    role: "İki Dilli Eğitim",
  },
  {
    text: "Aileyle kurulan şeffaf iş birliği, çocuğun gelişimindeki en güçlü destektir. Kapımız her zaman açık.",
    name: "BİS Alkent Pedagoji Ekibi",
    role: "Rehberlik ve Aile İletişimi",
  },
  {
    text: "38 yıllık BİS birikimi; öğretmen seçiminden menüye, güvenlikten müfredata kadar tek ve ortak bir kalite standardı anlamına gelir.",
    name: "BİS Alkent Pedagoji Ekibi",
    role: "Kurumsal Kalite",
  },
  {
    text: "Doğa, dördüncü öğretmenimizdir. Bahçe ve açık hava etkinlikleri günlük programın ayrılmaz parçasıdır.",
    name: "BİS Alkent Pedagoji Ekibi",
    role: "Açık Hava Eğitimi",
  },
];


// ---------------------------------------------------------------------------
// Sayfa içi liste içerikleri (bileşenlerden veri katmanına taşındı)
// ---------------------------------------------------------------------------

// Hakkımızda — değerler ve rozetler
export const ABOUT_VALUES = [
  { icon: "shield", title: "Güven & Şefkat", text: "Çocuklarımız kendini güvende ve sevildiğini hissettiği bir ortamda büyür." },
  { icon: "globe", title: "Kültürel Zenginlik", text: "Uluslararası bir bakış açısıyla; farklılıklara saygı ve merak besleriz." },
  { icon: "sprout", title: "Sürekli Gelişim", text: "Hem çocuklar hem kurum olarak her gün daha iyisini hedefleriz." },
  { icon: "users", title: "Topluluk Ruhu", text: "Aileler, öğretmenler ve çocuklar; hep birlikte tek bir topluluğuz." },
  { icon: "leaf", title: "Doğaya Saygı", text: "Çevre bilinci ve doğayla bağ, günlük yaşamın bir parçasıdır." },
  { icon: "star", title: "Yüksek Standart", text: "İlham veren bir ortamda, en yüksek akademik ve pedagojik standartlar." },
];

export const ABOUT_CHIPS = [
  { icon: "star", label: "38 yıllık deneyim" },
  { icon: "globe", label: "Uluslararası anlayış" },
  { icon: "users", label: "4 kampüs" },
];

// Eğitim yaklaşımı sayfası
export const APPROACH_PRINCIPLES = [
  { icon: "play", title: "Oyun, en ciddi iştir", text: "Oyun; çocuğun dünyayı anlamlandırma, deneme ve öğrenme biçimidir. Programımızın kalbinde bu vardır." },
  { icon: "sun", title: "Merak yönlendirir", text: "Çocuğun sorusu, günün rotasını belirleyebilir. Öğretmen bir rehber, çevre ise üçüncü öğretmendir." },
  { icon: "users", title: "Birlikte büyürüz", text: "Öğrenme sosyaldir. İş birliği, paylaşma ve empati; her etkinliğin doğal bir parçasıdır." },
  { icon: "globe", title: "İki dilde zenginlik", text: "İngilizce, ders değil yaşamdır; şarkı, oyun ve hikâyelerle günün içine dokunur." },
];

export const APPROACH_COMPARE = [
  "Ezber yerine anlama",
  "Not yerine gelişim",
  "Sıra yerine keşif",
  "Rekabet yerine iş birliği",
  "Sessizlik yerine merak",
  "Tek tip yerine bireysellik",
];

export const APPROACH_PARTNER = [
  { icon: "users", title: "Düzenli görüşmeler", text: "Gelişim şeffaf paylaşılır" },
  { icon: "heart", title: "Sıcak iletişim", text: "Her soruya açık kapı" },
  { icon: "palette", title: "Aile etkinlikleri", text: "Birlikte üretme zamanları" },
];

// Kampüs sayfası
export const CAMPUS_FEATURES = [
  { icon: "sun", title: "Aydınlık Sınıflar", text: "Doğal ışıkla dolu, çocuk ölçeğinde tasarlanmış öğrenme alanları." },
  { icon: "leaf", title: "Açık Hava & Bahçe", text: "Keşif, hareket ve doğa etkinlikleri için güvenli dış mekânlar." },
  { icon: "palette", title: "Atölye Köşeleri", text: "Sanat, fen ve duyusal oyun istasyonları her sınıfın içinde." },
  { icon: "shield", title: "Güvenli Ortam", text: "Çocuk güvenliği önceliğiyle tasarlanmış, kontrollü kampüs." },
];

// Anaokulu sayfası — öğrenme alanları
export const CURRICULUM = [
  { icon: "book", title: "Dil & Okuryazarlık", text: "Türkçe ve İngilizce; hikâyeler, şarkılar ve dramayla doğal biçimde." },
  { icon: "sprout", title: "Matematik & Mantık", text: "Sayı sezgisi, örüntüler ve problem çözme; somut materyallerle." },
  { icon: "palette", title: "Sanat & Yaratıcılık", text: "Resim, kolaj, kil ve serbest üretim; kendini ifade etme özgürlüğü." },
  { icon: "leaf", title: "Fen & Doğa", text: "Deneyler, bahçe ve doğa gözlemleriyle keşif ve merak." },
  { icon: "music", title: "Müzik & Hareket", text: "Ritim, dans ve grup oyunlarıyla bedensel ve işitsel gelişim." },
  { icon: "heart", title: "Sosyal-Duygusal", text: "Duyguları tanıma, empati ve arkadaşlık; öz düzenleme becerileri." },
];

// İletişim formu — yaş grubu seçenekleri
export const AGE_OPTIONS = [
  "3 yaş (EYFS Junior)",
  "4 yaş (EYFS)",
  "5 yaş (Reception)",
];
