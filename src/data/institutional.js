// bisi.k12.tr'den alınan kurumsal & akademik sayfa içerikleri —
// BİS Alkent Anaokulu bağlamına uyarlanmış, içerikler birebir korunarak.
const N = (n) => `/images/new/unnamed-${n}.jpg`;

export const PAGES = {
  // ============ KURUMSAL ============
  "kurumsal-yapi": {
    group: "Kurumsal",
    eyebrow: "Kurumsal Yapı",
    title: "The British School Istanbul ailesi",
    subtitle: "BİS Alkent Anaokulu, köklü bir eğitim geleneğinin en genç üyesi olarak güçlü bir kurumsal çatının parçasıdır.",
    hero: N(24),
    accent: "var(--pine)",
    blocks: [
      {
        type: "prose",
        eyebrow: "Bir arada, tek bir vizyon",
        heading: "Güçlü bir çatının parçası",
        paragraphs: [
          "The British School Istanbul çatısı altında; farklı yaş gruplarına ve ihtiyaçlara yönelik, ortak kalite standartlarıyla yönetilen okullar yer alır. BİS Alkent Anaokulu da bu ailenin okul öncesi odaklı yeni üyesidir.",
          "Tüm yerleşkelerimizde öğretmen seçimi, müfredat ve politikalar tek ve ortak kalite standartları üzerinden yürütülür. Böylece hangi kampüste olursa olsun her çocuk aynı özenle karşılanır.",
        ],
        image: N(22),
        imageSide: "right",
      },
      {
        type: "cards",
        eyebrow: "Okullarımız",
        heading: "Aynı ailenin okulları",
        items: [
          { title: "BİS Schools", tag: "Ulusal Okullar", text: "Zekeriyaköy, Bahçeşehir ve Çamlıca kampüsleriyle Türk ve çift uyruklu öğrencilere MEB müfredatı çerçevesinde eğitim." },
          { title: "BİS Alkent Anaokulu", tag: "Okul Öncesi · Yeni", text: "Büyükçekmece Alkent'te, 3–5 yaş için okul öncesi odaklı yeni kampüsümüz.", featured: true },
          { title: "British International School İstanbul", tag: "Uluslararası", text: "Zekeriyaköy Forest Kampüsü'nde, yabancı pasaport sahibi öğrencilere yönelik uluslararası statüdeki okulumuz." },
          { title: "British International STEAM School", tag: "STEAM", text: "Etiler STEAM Kampüsü'nde, bilim ve teknoloji odaklı eğitim anlayışı." },
        ],
      },
    ],
  },

  "bis-hakkinda": {
    group: "Kurumsal",
    eyebrow: "BİS Hakkında",
    title: "İkinci kez; daha da güçlü",
    subtitle: "BİS Schools, çocukların aileden getirdiği değerleri okul ortamında bilgi, beceri ve deneyimle perçinler.",
    hero: N(22),
    accent: "var(--pine)",
    blocks: [
      {
        type: "prose",
        eyebrow: "BİS Ne Anlama Gelir?",
        heading: "Beğenileni bir kez daha, daha güçlü yaşatmak",
        paragraphs: [
          "Türk Dil Kurumu'na (TDK) göre \"BİS\", beğenilen veya takdir edilen bir şeyin ikinci kez tekrarlanması anlamına gelir. BİS Schools olarak bu anlamı, eğitim felsefemizin merkezine yerleştiriyoruz.",
          "Bizim için \"ikinci kez\", eğitimin ilk olarak aile ve toplumda başladığı, okulun ise bu temelin üzerine inşa edilen tamamlayıcı ve güçlendirici bir rol üstlendiği anlamını taşır. BİS olarak görevimiz; çocukların aileden getirdiği değerleri, okul ortamında bilgi, beceri ve deneyimle perçinlemektir.",
          "Otuz dokuz yılı aşkın eğitim tecrübemiz ve yüksek kalite standartlarımızla, okullarımızda aynı güçlü eğitim anlayışını sürdürmeyi taahhüt ediyoruz.",
        ],
        image: N(24),
        imageSide: "left",
      },
      {
        type: "groupList",
        eyebrow: "Neden BİS Schools?",
        heading: "Yalnızca akademik değil; çok yönlü bir deneyim",
        text: "BİS Schools, öğrencilerine güvenli, destekleyici ve çok yönlü bir okul deneyimi sunar.",
        groups: [
          { icon: "leaf", title: "Güçlü Öğrenme Ortamı", items: ["Doğayla iç içe, açık hava eğitimlerine uygun lokasyon", "Kütüphaneler ve modern teknolojiyle donatılmış alanlar", "Bilim ve keşif atölyeleri", "Her hava koşuluna uygun spor sahaları", "Güvenli zeminli oyun ve aktivite alanları"] },
          { icon: "globe", title: "Kapsayıcı ve Çok Kültürlü Yapı", items: ["Türk, yabancı ve çift uyruklu öğrencilerin birlikte eğitim aldığı çok kültürlü ortam", "Doğal kültürel etkileşimi güçlendiren dengeli öğrenci profili"] },
          { icon: "users", title: "Öğrenci Odaklı Eğitim Anlayışı", items: ["Farklılaştırılmış öğrenme modeli", "Akademik ve sosyal gelişimi destekleyen bireysel takip sistemi"] },
          { icon: "heart", title: "Akademik ve Psikolojik Destek", items: ["İngilizce Akademik Destek Programı", "Öğrenme Destek Birimi çalışmaları", "Psikolojik Danışmanlık ve Rehberlik Birimi"] },
          { icon: "star", title: "Nitelikli Eğitim Kadrosu", items: ["Deneyimli ve alanında uzman öğretmen kadrosu", "Anadili İngilizce olan öğretmenlerle eğitim", "Güvenli eğitim teknolojileri"] },
          { icon: "sprout", title: "Sağlıklı Beslenme ve Okul Yaşamı", items: ["Gıda mühendisi gözetiminde hazırlanan öğünler", "Glutensiz ve vejetaryen menü seçenekleri", "Aktif Okul Aile Birliği çalışmaları", "Okul sonrası kulüp ve aktiviteler"] },
        ],
      },
      {
        type: "callout",
        text: "BİS Schools, öğrencilerini yalnızca bugüne değil; geleceğe, hayata ve dünyaya hazırlayan bir eğitim yaklaşımı benimser.",
      },
    ],
  },

  "vizyon-misyon": {
    group: "Kurumsal",
    eyebrow: "Vizyon ve Misyon",
    title: "Neye inanıyoruz?",
    subtitle: "Uluslararası dayanışma ve iş birliği anlayışının, daha iyi öğrenme ortamları yarattığına inanıyoruz.",
    hero: N(21),
    accent: "var(--pine)",
    blocks: [
      {
        type: "twoCards",
        items: [
          { kind: "vision", icon: "tree", title: "Vizyonumuz", text: "Kültürel zenginliği takdir eden, uluslararası çevreye duyarlı; akademik ve sosyal potansiyelini tam anlamıyla gerçekleştiren, yaşam boyu öğrenen ve global toplumda sorumluluk sahibi bireyler yetiştirmek." },
          { kind: "mission", icon: "heart", title: "Misyonumuz", text: "İlham verici bir ortamda en yüksek standartlarda eğitim sunmak; hoşgörü, saygı, dürüstlük ve şefkati besleyerek; uyumlu, düşünen ve sorgulayan bireyler hazırlamak." },
        ],
      },
      {
        type: "features",
        eyebrow: "Değerlerimiz",
        heading: "Her kararımızın arkasındaki pusula",
        items: [
          { icon: "shield", title: "Güven & Şefkat", text: "Çocuklar kendini güvende ve sevildiğini hissettiği bir ortamda büyür." },
          { icon: "globe", title: "Kültürel Zenginlik", text: "Uluslararası bakış açısıyla; farklılıklara saygı ve merak besleriz." },
          { icon: "sprout", title: "Sürekli Gelişim", text: "Hem çocuklar hem kurum olarak her gün daha iyisini hedefleriz." },
          { icon: "users", title: "Topluluk Ruhu", text: "Aileler, öğretmenler ve çocuklar; hep birlikte tek bir topluluğuz." },
          { icon: "leaf", title: "Doğaya Saygı", text: "Çevre bilinci ve doğayla bağ, günlük yaşamın bir parçasıdır." },
          { icon: "star", title: "Yüksek Standart", text: "İlham veren bir ortamda, en yüksek pedagojik standartlar." },
        ],
      },
    ],
  },

  "saglik-guvenlik": {
    group: "Kurumsal",
    eyebrow: "Sağlık ve Güvenlik",
    title: "Önce çocuğun güvenliği ve sağlığı",
    subtitle: "Kampüsümüzde her ayrıntı, çocuklarımızın güvenli ve sağlıklı bir ortamda büyümesi için tasarlanmıştır.",
    hero: N(23),
    accent: "var(--pine)",
    blocks: [
      {
        type: "prose",
        eyebrow: "Sağlık",
        heading: "Sağlığı yakından takip ediyoruz",
        paragraphs: [
          "Okulun ilk haftasında, öğrencinin sağlığı hakkında bilgi edinmek amacıyla formlar gönderilmektedir. Bu formlar aracılığıyla öğrencinin kullandığı ilaçlar, sağlık geçmişi ve alerjik durumu gibi konularda bilgi toplanır.",
          "Kampüsümüzde, çocuğunuzun sağlığı ile ilgili sorularınızı yanıtlayabilecek bir okul hemşiresi bulunur. Alerjili veya takip edilmesi gereken durumlar için ilgili personel ve sağlık kuruluşlarıyla iş birliği içinde hareket edilir.",
        ],
      },
      {
        type: "features",
        eyebrow: "Güvenlik",
        heading: "7/24 güvenli bir kampüs",
        items: [
          { icon: "shield", title: "7/24 Kamera & Görevli", text: "Kampüs, güvenlik kameralarıyla izlenir ve günün her saatinde güvenlik görevlileri görev yapar." },
          { icon: "users", title: "Fotoğraflı Kimlik", text: "Velilere fotoğraflı okul kimlik kartı verilir; kartı olmayan kişilerden girişte kimlik talep edilir." },
          { icon: "heart", title: "Alım Rutini", text: "Çocuğun okuldan alınma rutininde değişiklik olduğunda okul mutlaka haberdar edilmelidir." },
          { icon: "phone", title: "Güncel İletişim", text: "Tanınmayan bir kişi geldiğinde veli aranır; bu nedenle iletişim numaralarının güncel olması önemlidir." },
        ],
      },
    ],
  },

  "kvkk": {
    group: "Kurumsal",
    eyebrow: "KVKK",
    title: "Kişisel Verilerin İşlenmesine İlişkin Aydınlatma Metni",
    subtitle: "6698 Sayılı Kişisel Verilerin Korunması Kanunu kapsamında aydınlatma yükümlülüğü.",
    hero: N(27),
    accent: "var(--navy)",
    blocks: [
      {
        type: "legal",
        sections: [
          { paragraphs: ["Bu metin, BİSİ ULUSLARARASI ÖZEL EĞİTİM HİZMETLERİ TİCARET ANONİM ŞİRKETİ'nin 6698 Sayılı Kişisel Verilerin Korunması Kanunu'nun 10. maddesi kapsamında aydınlatma yükümlülüğünü yerine getirmek amacıyla hazırlanmıştır."] },
          { heading: "A – Veri Sorumlusunun Künyesi", table: [
            ["Unvan", "BİSİ ULUSLARARASI ÖZEL EĞİTİM HİZMETLERİ TİCARET ANONİM ŞİRKETİ"],
            ["MERSİS No", "0723012263500012"],
            ["Adres", "Maslak Mah. Büyükdere Cad. Spring Giz Plaza K:5 Sarıyer, İstanbul"],
            ["Telefon", "0212 286 69 50"],
            ["Faks", "0212 286 69 80"],
            ["E-Posta", "communications@bis.k12.tr"],
          ] },
          { heading: "B – İşlenen Kişisel Veriler", items: [
            "Kimlik Bilgileri: Ad, soyad, imza, T.C. kimlik numarası, pasaport bilgileri",
            "İletişim Bilgileri: Adres, telefon, cep telefonu, e-posta, faks",
            "Fotoğraf ve Görsel Kayıtlar: Vesikalık fotoğraf, güvenlik kamerası görüntüleri",
            "Öğrenci Verileri: Öğrenci numarası, notlar, projeler, sınav puanları, akademik başarı",
            "Sağlık Verileri: Sağlık durumu bilgileri, alerjiler, takip edilmesi gereken hastalıklar",
            "Mali Bilgiler: Banka hesap bilgileri, ödeme dekontları, ödeme bilgileri",
            "Diğer Veriler: Sosyal-ekonomik durum, meslek bilgileri, geçiş puanları",
          ] },
          { heading: "C – Genel İlkeler", items: [
            "Güncel, belirli, açık ve meşru amaçlar için işlenmesi",
            "Hukuka ve dürüstlük kurallarına uygun olma",
            "İşlendikleri amaçla bağlantılı, sınırlı ve ölçülü olma",
            "İlgili mevzuatta öngörülen süre kadar muhafaza edilme",
          ] },
          { heading: "D – Verilerin İşlenme Amaçları", paragraphs: [
            "Öğrenci ve yasal temsilci verileri; kayıt işlemleri, eğitim hizmetlerinin sunulması ve öğrenci takibi amacıyla işlenir.",
            "Kamera verileri; kurumların ve öğrencilerin güvenliğinin sağlanması, bina ve tesislere giriş çıkışların kontrol edilmesi amacıyla işlenir.",
            "Ziyaretçi verileri; güvenlik amacıyla ad-soyad, kimlik/pasaport/ehliyet numarası, giriş-çıkış saatleri olarak kaydedilir.",
            "Personel verileri; özlük dosyasının oluşturulması ve yasal yükümlülüklerin yerine getirilmesi amacıyla işlenir.",
            "Hizmet ve ticari iş ilişkisi kapsamında; sözleşme ve hizmet güvencesi amacıyla veriler işlenir.",
          ] },
          { heading: "E – Diğer Amaçlar", items: [
            "T.C. Milli Eğitim Bakanlığı mevzuatının gerekliliklerini yerine getirme",
            "Acil durumlarda bilgi verilmesi",
            "Toplantı, görüşme günleri ve etkinliklere ilişkin bilgilendirme",
            "İndirim, etkinlik, reklam ve tanıtım faaliyetleri",
            "Kamu kurum ve kuruluşları nezdindeki yasal yükümlülüklerin yerine getirilmesi",
            "Alerjili veya takip edilmesi gereken öğrenciler için personel ve sağlık kuruluşlarına bilgi verilmesi",
          ] },
          { heading: "F – Toplama, İşleme ve Aktarma", paragraphs: [
            "Veriler; kampüsler ve iş birimleri, internet sitesi ve sosyal medya hesapları, entegrasyon sistemleri ile tedarikçiler ve iş ortakları aracılığıyla toplanabilir.",
            "Veriler; öğretmenler ve eğitmenler, mali müşavir, alt yükleniciler ve tedarikçiler, yazılım şirketleri, kanunen yetkili kamu kurumları ile sınavı düzenleyen kuruluşlara aktarılabilir. Aktarılan tüm veriler için gizlilik sözleşmeleri yapılır.",
            "İş Kanunu, Vergi Kanunu ve Milli Eğitim Bakanlığı mevzuatı kapsamında saklanması gereken veriler ilgili mevzuattaki süreler boyunca saklanır.",
          ] },
          { heading: "G – İlgili Kişinin Hakları", paragraphs: ["6698 Sayılı Kanun'un 11. maddesi uyarınca herkes veri sorumlusuna başvurarak şu haklara sahiptir:"], items: [
            "Kişisel veri işlenip işlenmediğini öğrenme",
            "İşlenmişse buna ilişkin bilgi talep etme",
            "İşlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme",
            "Yurt içinde/yurt dışında aktarıldığı üçüncü kişileri bilme",
            "Eksik veya yanlış işlenmişse düzeltilmesini isteme",
            "Silinmesini veya yok edilmesini isteme",
            "Düzeltme/silme işlemlerinin aktarıldığı üçüncü kişilere bildirilmesini isteme",
            "Otomatik sistemlerle analiz sonucu aleyhe bir sonuç çıkmasına itiraz etme",
            "Kanuna aykırı işleme sebebiyle zarara uğranması hâlinde zararın giderilmesini talep etme",
          ] },
          { heading: "Talep Süreci", paragraphs: [
            "Talebiniz mümkün olan en kısa sürede ve en geç 30 (otuz) gün içerisinde ücretsiz olarak sonuçlandırılır. Başvurular; kimliğinizi tespit edici belgelerle yazılı ve imzalı dilekçe ile, noter kanalıyla veya iadeli taahhütlü mektupla yapılabilir.",
            "Gönderim Adresi: Maslak Mah. Büyükdere Cad. Spring Giz Plaza K:5 Sarıyer, İstanbul",
          ] },
        ],
      },
    ],
  },

  "kalite-sertifikalari": {
    group: "Kurumsal",
    eyebrow: "Kalite Sertifikaları",
    title: "Kalite bir hedef değil, bir taahhüt",
    subtitle: "Okulumuz, uluslararası geçerliliğe sahip ISO kalite sertifikaları ile düzenli olarak denetlenir ve belgelenir.",
    hero: N(31),
    accent: "var(--navy)",
    blocks: [
      {
        type: "prose",
        heading: "Mükemmeliyet, her alanda",
        paragraphs: [
          "BİS olarak eğitimde mükemmeliyetin yalnızca akademik başarıyla değil; güvenlik, kalite, sürdürülebilirlik ve veri koruma gibi alanlarda da en yüksek standartlara bağlılıkla mümkün olduğuna inanıyoruz.",
        ],
      },
      {
        type: "features",
        eyebrow: "ISO Sertifikaları",
        heading: "Uluslararası standartlarda belgelendirme",
        items: [
          { icon: "shield", title: "ISO 9001", text: "Kalite Yönetim Sistemi — eğitim ve yönetim süreçlerinin planlı, ölçülebilir ve sürekli geliştirilebilir olması." },
          { icon: "leaf", title: "ISO 14001", text: "Çevre Yönetim Sistemi — sürdürülebilir ve sorumlu okul anlayışı." },
          { icon: "sprout", title: "ISO 22000", text: "Gıda Güvenliği Yönetim Sistemi — okul mutfağı hijyen ve güvenlik standartları." },
          { icon: "info", title: "ISO 27001", text: "Bilgi Güvenliği Yönetim Sistemi — öğrenci ve veli veri gizliliği." },
          { icon: "heart", title: "ISO 45001", text: "İş Sağlığı ve Güvenliği Yönetim Sistemi — güvenli okul ortamı." },
        ],
      },
      {
        type: "callout",
        text: "BİS'te kalite bir hedef değil, sürekli sürdürülen bir taahhüttür.",
      },
    ],
  },

  // ============ AKADEMİK ============
  "uluslararasi-bakalorya": {
    group: "Akademik",
    eyebrow: "Uluslararası Bakalorya",
    title: "Dünyaya açılan bir eğitim felsefesi",
    subtitle: "IB Dünya Okulları, öğrencileri eleştirel düşünme, küresel farkındalık ve yaşam boyu öğrenme alanlarında geliştirir.",
    hero: N(25),
    accent: "var(--pine)",
    blocks: [
      {
        type: "prose",
        eyebrow: "IB Diploma Programı",
        heading: "Uluslararası standartlarda bir vizyon",
        paragraphs: [
          "Kurumumuz, Uluslararası Bakalorya (International Baccalaureate – IB) Diploma Programı için aday okul (Candidate School) statüsündedir ve IB Dünya Okulu olarak yetkilendirme sürecine aktif olarak devam etmektedir. Bu süreç, uluslararası eğitim standartlarını benimseme ve uygulama konusundaki kararlılığımızı yansıtır.",
          "IB Dünya Okulları, öğrencileri yalnızca akademik olarak değil; eleştirel düşünme, küresel farkındalık, araştırma becerileri ve yaşam boyu öğrenme gibi alanlarda da geliştirmeyi hedefleyen ortak bir eğitim felsefesini paylaşır. BİS olarak biz de bu yaklaşımın, öğrencilerimizi geleceğe en iyi şekilde hazırladığına inanıyoruz.",
        ],
        image: N(22),
        imageSide: "right",
      },
      {
        type: "features",
        eyebrow: "IB Programları",
        heading: "IBO tarafından yetkilendirilen programlar",
        text: "Uluslararası Bakalorya Organizasyonu (IBO) tarafından yetkilendirilmiş okullar, aşağıdaki programlardan birini veya birkaçını sunabilir.",
        items: [
          { icon: "sprout", title: "İlk Yıllar Programı (PYP)", text: "Erken çocukluktan itibaren merak ve keşfe dayalı öğrenme." },
          { icon: "book", title: "Orta Yıllar Programı (MYP)", text: "Disiplinler arası, kavramsal öğrenme çerçevesi." },
          { icon: "star", title: "Diploma Programı (DP)", text: "Üniversiteye ve global dünyaya hazırlayan akademik program." },
          { icon: "globe", title: "Kariyer Programı (CP)", text: "Kariyer odaklı öğrenmeyi akademik derinlikle birleştirir." },
        ],
      },
      {
        type: "callout",
        text: "Aday okul statüsü yetkilendirme garantisi anlamına gelmez; ancak bu süreç, IB standartlarına uyum, öğretmen eğitimi ve müfredat geliştirme açısından titizlikle yürütülür.",
      },
    ],
  },

  "ogrenme-destek": {
    group: "Akademik",
    eyebrow: "Öğrenme Destek Birimi",
    title: "Her çocuğun yanında, kendi ritminde",
    subtitle: "Öğrenme Destek Birimi, ihtiyaç doğduğunda öğrencilerimize okulumuzun felsefesi doğrultusunda destek sunar.",
    hero: N(20),
    accent: "var(--pine)",
    blocks: [
      {
        type: "prose",
        heading: "İhtiyaca göre, ortaklaşa bir destek",
        paragraphs: [
          "Öğrenme Destek Birimi, okulumuzun felsefesine ve hedeflerine yönelik olarak, ihtiyaç doğması durumunda öğrencilerimize destek verir. Bu birim, özel ihtiyaçları olan öğrencilere yönelik gerekli desteği vermek ve öğrencilerin bu süreçlerini gözlemlemekle sorumludur.",
          "Öğrenme Destek Birimi; sınıf öğretmenleri, veliler, yöneticiler, dil destek departmanı ve gerektiğinde üçüncü şahıs Eğitim Psikologları ve diğer profesyonellerle ortaklaşa çalışır.",
        ],
        image: N(30),
        imageSide: "left",
      },
      {
        type: "numbered",
        eyebrow: "Çalışmalarımız",
        heading: "Destek sürecinin adımları",
        items: [
          { title: "Öğrenci Oryantasyonu", text: "Çocuğun okula ve gruba uyumunu kolaylaştıran çalışmalar." },
          { title: "Sınıf İçi Etkinlikler", text: "Gelişimi destekleyen, gözleme dayalı sınıf içi etkinlikler." },
          { title: "Bireysel Görüşme ve Takip", text: "Her çocuğun gelişiminin bireysel olarak izlenmesi." },
          { title: "Grup Çalışmaları", text: "Sosyal ve duygusal becerileri güçlendiren grup etkinlikleri." },
          { title: "Öğretmenlerle Çalışmalar", text: "Öğretmenlerle düzenli iş birliği ve değerlendirme." },
          { title: "Velilerle Görüşmeler", text: "Bireysel veli görüşmeleri ve aylık veli seminerleri." },
        ],
      },
    ],
  },

  "rehberlik": {
    group: "Akademik",
    eyebrow: "Rehberlik ve Psikolojik Danışmanlık",
    title: "İyi olma hâlini merkeze alan bir yaklaşım",
    subtitle: "Rehberlik Birimimiz; karşılıklı güven, pozitif iletişim ve iş birliğine dayalı bir anlayış benimser.",
    hero: N(32),
    accent: "var(--pine)",
    blocks: [
      {
        type: "prose",
        heading: "Okul, aile ve çocuk; güçlü bir iş birliği",
        paragraphs: [
          "BİS Psikolojik Danışmanlık ve Rehberlik Birimi; veliler ve öğrencilerin gelişimine dayalı karşılıklı güven, pozitif iletişim ve iş birliğine dayalı bir anlayış benimser. Öğrencilerin iyi olma hâlini, sosyal ve duygusal gelişimini önemser.",
          "Okul, aile ve çocuk iş birliğinin; çocuğun iyi bir okul deneyimi kazanmasındaki üç önemli faktör olduğuna inanılır. Okul öncesi dönem, çocuk için ilk bağımsızlık kazanma dönemlerinden biridir. Bu dönemde öğrencilere psikolojik sağlamlık kazandırılması ve sağlıklı gelişim göstermeleri hedeflenir.",
        ],
      },
      {
        type: "numbered",
        eyebrow: "Nasıl Çalışıyoruz?",
        heading: "Yıl boyunca yanınızda",
        items: [
          { title: "Oryantasyon Etkinlikleri", text: "Ağustos ayının son haftasında tüm öğrenciler için oryantasyon; velilere bilgilendirme toplantıları düzenlenir." },
          { title: "Önleyici Rehberlik", text: "Gözlemler sonucunda veli, öğrenci ve öğretmen iş birliğiyle toplantılar planlanır." },
          { title: "Gelişimsel Rehberlik", text: "Özgüven, olumlu benlik algısı, etkin iletişim ve problem çözme becerilerinin gelişimi desteklenir." },
          { title: "Aylık Veli Seminerleri", text: "Çocukların sosyal, duygusal ve bireysel gelişimine yönelik düzenli veli seminerleri." },
          { title: "Öğretmen Toplantıları", text: "Ayda bir kez öğretmenlerle toplantılar yapılarak her çocuğun gelişimi takip edilir." },
          { title: "Aday Öğrenci Görüşmeleri", text: "Kayıt-kabul sürecinde aday öğrenci ve aile görüşmeleri Rehberlik Birimi tarafından yürütülür." },
        ],
      },
    ],
  },

  "yaratici-sanatlar": {
    group: "Akademik",
    eyebrow: "Yaratıcı Sanatlar",
    title: "Sanat, Müzik ve Drama",
    subtitle: "Çocukların ilham alabilecekleri ve özgüvenle yeni yetenekler geliştirebilecekleri bir ortam.",
    hero: N(21),
    accent: "var(--terra)",
    blocks: [
      {
        type: "prose",
        heading: "Özgüvene dayalı, keşif dolu bir atmosfer",
        paragraphs: [
          "Başarılı ve enerjik Yaratıcı Sanatlar ekibimizle her yıl heyecan verici gelişmeler elde ediyoruz. Amacımız; çocukların ilham alabilecekleri ve özgüvenle Müzik, Drama ve Sanat alanlarında yeni yetenekler geliştirebilecekleri bir ortam sağlamaktır.",
          "BİS olarak amacımız; kişiselleştirilmiş özgüvene dayalı, saygı, heves ve iş birliği duygularının bir araya geldiği bir atmosfer sunmaktır. Böylece çocuklarımız, gelişimlerini takiben sanatta da yeni deneyimler ve fırsatlar edinir, yaratıcı becerilerini geliştirir.",
        ],
        image: N(21),
        imageSide: "right",
      },
      {
        type: "features",
        eyebrow: "Alanlarımız",
        heading: "Kendini ifade etmenin birçok yolu",
        items: [
          { icon: "palette", title: "Sanat", text: "Resim, kolaj, kil ve serbest üretimle kendini ifade etme özgürlüğü." },
          { icon: "music", title: "Müzik", text: "Ritim, şarkı ve enstrümanlarla işitsel ve bedensel gelişim." },
          { icon: "users", title: "Drama", text: "Rol yapma ve sahne etkinlikleriyle özgüven ve iletişim." },
          { icon: "star", title: "Kulüpler & Gösteriler", text: "Koro, sahne gösterileri ve yaratıcı atölyelerle ilham veren deneyimler." },
        ],
      },
    ],
  },

  // ============ SSS ============
  "sss": {
    group: "Kurumsal",
    eyebrow: "Sık Sorulan Sorular",
    title: "Merak ettikleriniz",
    subtitle: "BİS Alkent ve BİS Schools eğitim anlayışına dair en çok merak edilenleri bir araya getirdik.",
    hero: N(30),
    accent: "var(--gold)",
    blocks: [
      {
        type: "faq",
        items: [
          { q: "BİS Okulları Türk vatandaşı öğrencileri kabul ediyor mu?", a: "Evet. BİS Okulları, Türkiye Cumhuriyeti vatandaşı öğrencilere hizmet vermek amacıyla kurulmuş ulusal okullarımızdır. Öğrencilerimiz, okulumuzun sunduğu yoğun İngilizce programı ve uluslararası eğitim standartlarından tam kapasiteyle yararlanabilir." },
          { q: "Müfredatınızın içeriği nedir?", a: "Okullarımızda Millî Eğitim Bakanlığı (MEB) müfredatı esas alınır. Ancak bu müfredat, The British School Istanbul'un kırk yıla yaklaşan birikimiyle harmanlanarak, anadili İngilizce olan öğretmenler eşliğinde yoğun bir dil programıyla zenginleştirilmiştir." },
          { q: "İngilizce dersleri hangi öğretmenler tarafından veriliyor?", a: "Çocuğunuzun dili en doğal ve doğru telaffuzla öğrenmesi önceliğimizdir. Bu nedenle İngilizce yürütülen tüm dersler, anadili İngilizce olan (native speaker), alanında uzman öğretmenler tarafından gerçekleştirilir." },
          { q: "Türk öğretmenlerinizin dil yeterliliği ne düzeyde?", a: "Türkçe yürütülen derslerdeki öğretmenlerimiz; kendi alanlarındaki uzmanlıklarının yanı sıra hem Türkçeyi hem İngilizceyi akıcı kullanabilen, çift dilli (bilingual) iletişim yetkinliğine sahip profesyoneller arasından titizlikle seçilir." },
          { q: "Uluslararası ortamın öğrenci profiline yansıması nasıl?", a: "Okulumuzda çok kültürlü bir yapı hedeflenir. Dengeli ve küresel bir öğrenme atmosferi oluşturmak için Türk, çift uyruklu ve yabancı uyruklu öğrencilerin bir arada eğitim aldığı bir ortam sunulur." },
          { q: "ESL (İkinci Dil Olarak İngilizce) programının avantajları neler?", a: "Uzun yıllardır başarıyla uygulanan ESL programımız, öğrencilerin İngilizceyi sadece bir ders olarak değil, akademik bir araç olarak kullanmalarını sağlar. Bu birikim sayesinde öğrenciler kısa sürede akıcı konuşma ve yazma yetkinliğine ulaşır." },
          { q: "Sizi diğer İngilizce eğitim veren okullardan ayıran nedir?", a: "Okulumuzda İngilizce sadece bir ders saati değil, kampüs içindeki temel iletişim dilidir. İngiliz eğitim felsefesini temel alan yaklaşımımız, çocukların dili doğal bir edinim süreciyle, sosyal ortamın içinde öğrenmelerine olanak tanır." },
          { q: "Hedefiniz öğrencileri yalnızca yurt dışına mı hazırlamak?", a: "Hayır. Temel amacımız \"dünya vatandaşı\" bireyler yetiştirmektir. Öğrencilerimize hem uluslararası hem de yurt içindeki seçkin kurumlar için güçlü bir akademik ve sosyal altyapı sunarız." },
          { q: "Öğretmen kadronuz uluslararası okulunuzla aynı kalitede mi?", a: "Kesinlikle. Tüm yerleşkelerimizde öğretmen seçimi tek ve ortak kalite standartları üzerinden yapılır. Çift dilli ve uzman eğitimci kadromuz, uluslararası standartlardaki profesyonel değerlendirme süreçlerinden geçerek göreve başlar." },
          { q: "Sosyal gelişim ve disiplin nasıl takip ediliyor?", a: "Sosyal gelişim ve disiplin, uluslararası akreditasyonlar kapsamında oluşturulmuş otuzu aşkın okul politikası ile yönetilir. Bu sistemli yaklaşım; öğrenci, veli ve okul yönetimi arasındaki ilişkileri net kurallara bağlayarak huzurlu bir eğitim ortamı sağlar." },
          { q: "Sosyal ve sportif gelişim için hangi imkânlar var?", a: "Çocuklarımızın çok yönlü gelişimi için sanat, spor, kulüp çalışmaları ve sosyal etkinlikler müfredatın ayrılmaz bir parçasıdır. Her çocuğun yeteneği sistemli olarak takip edilir ve gelişimi düzenli olarak paylaşılır." },
          { q: "Çocuğumun kendini güvende hissetmesi için hangi önlemler alınıyor?", a: "Kampüsümüz, çocuklar için güvenli ve izole bir eğitim alanı sunar. Tüm fiziksel alanlar ve sosyal süreçler, çocuk koruma politikalarımız çerçevesinde sürekli denetlenir." },
          { q: "Çift dilli (bilingual) eğitim tam olarak ne demek?", a: "Çift dilli eğitim; çocuğun hem Türk kültürüne ve müfredatına hâkim olmasını hem de İngilizceyi ana dil yetkinliğinde kullanabilmesini ifade eder. Ders içi ve ders dışı tüm süreçler bu iki dili dengeleyecek şekilde yapılandırılır." },
          { q: "Farklı kültürlerin bir arada olması çocuğuma ne kazandırır?", a: "Çok uluslu ortamımız sayesinde çocuklar; farklı kültür ve değerlere karşı hoşgörü ve saygı geliştirmeyi öğrenir. Bu ortam, empati yeteneklerini ve küresel bakış açılarını güçlendirir." },
          { q: "Kayıt ve tanışma için kampüs ziyareti yapabilir miyim?", a: "Ebeveynlerimizi ve aday öğrencilerimizi Büyükçekmece Alkent kampüsümüzde ağırlamaktan memnuniyet duyarız. Eğitim felsefemizi yerinde görmek ve kadromuzla tanışmak için bizimle iletişime geçerek randevu alabilirsiniz." },
        ],
      },
    ],
  },
};

// Menü / grup yapısı
export const MENU = {
  primary: [
    { to: "/", label: "Ana Sayfa" },
    { to: "/anaokulu", label: "Anaokulu" },
    { to: "/kampus", label: "Kampüs & Galeri" },
    { to: "/haberler", label: "Haberler" },
    { to: "/iletisim", label: "İletişim" },
  ],
  groups: [
    {
      title: "Kurumsal",
      items: [
        { to: "/hakkimizda", label: "Hakkımızda" },
        { to: "/kurumsal-yapi", label: "Kurumsal Yapı" },
        { to: "/bis-hakkinda", label: "BİS Hakkında" },
        { to: "/vizyon-misyon", label: "Vizyon ve Misyon" },
        { to: "/sss", label: "SSS" },
        { to: "/kampus", label: "Kampüslerimiz" },
        { to: "/saglik-guvenlik", label: "Sağlık ve Güvenlik" },
        { to: "/kvkk", label: "KVKK Aydınlatma Metni" },
        { href: "https://britishschool.istanbul/careers?lang=tr&source=bisi", label: "Kariyer" },
        { to: "/kalite-sertifikalari", label: "Kalite Sertifikaları" },
      ],
    },
    {
      title: "Akademik",
      items: [
        { to: "/anaokulu", label: "Okul Öncesi" },
        { to: "/yaklasim", label: "Eğitim Yaklaşımı" },
        { to: "/uluslararasi-bakalorya", label: "Uluslararası Bakalorya" },
        { to: "/ogrenme-destek", label: "Öğrenme Destek Birimi" },
        { to: "/rehberlik", label: "Rehberlik ve Psikolojik Danışmanlık" },
        { to: "/yaratici-sanatlar", label: "Yaratıcı Sanatlar" },
      ],
    },
  ],
};
