# BİS Alkent Anaokulu — Web Sitesi

BİS Okulları'nın Büyükçekmece Alkent şubesi (anaokulu) için premium, çok sayfalı React sitesi.
Marka renkleri ve tasarım dili, BİS logosundan (koyu yeşil `#055745` + lacivert `#1B355E`) ve
kurumsal sitelerden (bisi.k12.tr) türetilmiştir.

## Teknoloji
- **Vite + React 18** — hızlı geliştirme ve üretim derlemesi
- **React Router 6** — çok sayfalı yönlendirme
- **Framer Motion** — sayfa geçişleri ve scroll-reveal animasyonları
- **Fraunces** (başlık) + **Mulish** (metin) — Google Fonts
- Harici bağımlılığı olmayan, elle yazılmış SVG ikon seti ve dekoratif ağaç motifi

## Sayfalar
| Yol | Sayfa |
|-----|-------|
| `/` | Ana Sayfa (tam ekran hero slider, program, yaklaşım, galeri, haberler, CTA) |
| `/hakkimizda` | Hakkımızda · Vizyon & Misyon · Değerler |
| `/anaokulu` | Anaokulu Programı · Yaş grupları · Müfredat · Günlük akış · SSS |
| `/yaklasim` | Eğitim Yaklaşımı · İlkeler · Yöntem · Aile iş birliği |
| `/kampus` | Kampüs & Galeri · Konum haritası · Diğer kampüsler |
| `/haberler` | Haberler & Blog (kategori filtreli) |
| `/iletisim` | İletişim & Ön Kayıt formu · Harita |

### Kurumsal & Akademik (bisi.k12.tr içeriklerinden uyarlanmış)
| Yol | Sayfa |
|-----|-------|
| `/kurumsal-yapi` | Kurumsal Yapı — BİS Schools ailesi |
| `/bis-hakkinda` | BİS Hakkında — BİS ne anlama gelir, neden BİS |
| `/vizyon-misyon` | Vizyon ve Misyon · Değerler |
| `/sss` | Sık Sorulan Sorular |
| `/saglik-guvenlik` | Sağlık ve Güvenlik |
| `/kvkk` | KVKK Aydınlatma Metni |
| `/kalite-sertifikalari` | Kalite Sertifikaları (ISO) |
| `/uluslararasi-bakalorya` | Uluslararası Bakalorya (IB) |
| `/ogrenme-destek` | Öğrenme Destek Birimi |
| `/rehberlik` | Rehberlik ve Psikolojik Danışmanlık |
| `/yaratici-sanatlar` | Yaratıcı Sanatlar |

Bu sayfalar `src/data/institutional.js` içindeki içerikten, blok tabanlı
`src/pages/ContentPage.jsx` bileşeniyle üretilir. Menü ve footer grupları da
(Kurumsal / Akademik) aynı dosyadan beslenir. `Kariyer` menü öğesi harici bağlantıdır.
İlkokul/Ortaokul/Lise ve LGS Bursları içerikleri anaokulu odağı gereği eklenmemiştir.

## Komutlar
```bash
npm install      # bağımlılıkları kur
npm run dev      # geliştirme sunucusu (http://localhost:5173)
npm run build    # üretim derlemesi -> dist/
npm run preview  # üretim derlemesini önizle
```

## İçerik / İletişim
- Adres: Karaağaç, Sırtköy Bulvarı No:27, Büyükçekmece / İstanbul
- Telefon: +90 542 520 55 30 · E-posta: admissions@bisalkent.com · Instagram: @bisalkent
- Yaş grupları: EYFS Junior (3), EYFS (4), Reception (5)

Tüm metin ve iletişim bilgileri tek yerden yönetilir: [`src/data/site.js`](src/data/site.js).
Görseller `public/images/` altında (Unsplash stok). Logo: `public/bis-logo.png`.

## Notlar
- Ön Kayıt formu, gönderimde kullanıcının e-posta uygulamasında hazır bir taslak açar
  (`mailto:`). Gerçek bir sunucu/servis entegrasyonu için `src/pages/Contact.jsx`
  içindeki `submit` fonksiyonu değiştirilebilir.
- Harita, Google Maps embed iframe'i ile gösterilir.
