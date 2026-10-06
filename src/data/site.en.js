// BIS Alkent Preschool — English content.
// Mirrors every export of site.js; slugs, images, icons and colours stay the
// same so only the wording differs between languages.

export const CONTACT = {
  phone: "+90 542 520 55 30",
  phoneHref: "tel:+905425205530",
  email: "admissions@bisalkent.com",
  address: "Karaağaç, Sırtköy Bulvarı No:27, Büyükçekmece / Istanbul",
  addressShort: "Sırtköy Bulvarı No:27, Büyükçekmece",
  mapQuery: "Sırtköy Bulvarı No:27 Büyükçekmece İstanbul",
  instagram: "https://instagram.com/bisalkent",
  instagramHandle: "@bisalkent",
};

export const QUOTE = "Highest education standards";

export const CONTACT_FOR = [
  { icon: "edit", title: "Admissions", text: "Ask about enrolment requirements, places available and the application calendar." },
  { icon: "info", title: "Procedures", text: "For questions about paperwork, fees and every step of the process." },
  { icon: "pin", title: "Campus Visit", text: "Explore our campus, meet our teachers and walk through the classrooms with us." },
];

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/hakkimizda", label: "About Us" },
  { to: "/anaokulu", label: "Preschool" },
  { to: "/yaklasim", label: "Our Approach" },
  { to: "/kampus", label: "Campus & Gallery" },
  { to: "/haberler", label: "News" },
  { to: "/iletisim", label: "Contact" },
];

const N = (n) => `/images/new/unnamed-${n}.jpg`;

export const HERO_SLIDES = [
  { img: N(24), eyebrow: "Alkent Preschool Campus", title: "A world designed for light and curiosity" },
  { img: N(28), eyebrow: "Sport & Movement", title: "Generous play and sports areas" },
  { img: N(21), eyebrow: "Creativity", title: "Corners that feed the imagination" },
  { img: N(22), eyebrow: "Modern Architecture", title: "Warm spaces built to a child's scale" },
  { img: N(32), eyebrow: "Library", title: "Spaces that make learning a joy" },
];

export const GALLERY_PHOTOS = [
  { img: N(24), cap: "Light-filled entrance atrium", tall: true },
  { img: N(20), cap: "Our nature classroom" },
  { img: N(21), cap: "Bird-themed reading corner" },
  { img: N(28), cap: "Sports and play hall", tall: true },
  { img: N(26), cap: "Climbing and movement" },
  { img: N(22), cap: "Arched corridors" },
  { img: N(32), cap: "Library corner" },
  { img: N(25), cap: "Amphitheatre and gathering area", tall: true },
  { img: N(31), cap: "Creative classrooms" },
  { img: N(30), cap: "Our classrooms" },
  { img: N(29), cap: "Movement studio" },
  { img: N(27), cap: "Colourful corridors" },
];

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
    age: "Ages 3 - 4",
    img: N(20),
    campuses: "Alkent | Zekeriyaköy | Bahçeşehir | Çamlıca",
    title: "Discovery Begins",
    color: "var(--bis-green)",
    tint: "#eef2f0",
    desc: "First steps. Through sensory play, secure attachment and gentle routines, children come to love school and learn how to explore.",
    points: ["Sensory and intuitive learning", "Self-care skills", "First contact with English through play"],
  },
  {
    code: "EYFS1",
    age: "Ages 4 - 5",
    img: N(31),
    campuses: "Alkent | Zekeriyaköy | Bahçeşehir | Çamlıca",
    title: "The Age of Curiosity",
    color: "var(--bis-blue)",
    tint: "#eceef4",
    desc: "The questions multiply. Project-based activities, early literacy and number sense deepen how children think.",
    points: ["Project-based discovery", "Early literacy & mathematics", "Social and emotional growth"],
  },
  {
    code: "EYFS2",
    age: "Ages 5 - 6",
    img: N(30),
    campuses: "Alkent | Zekeriyaköy | Bahçeşehir | Çamlıca",
    title: "Ready for Primary",
    color: "var(--bis-cream-h)",
    tint: "#f5f1e9",
    desc: "Confident learners. Literacy, problem solving and self-regulation make for a steady transition into primary school.",
    points: ["Foundations of reading and writing", "Critical thinking", "Independence & responsibility"],
  },
];

export const PILLARS = [
  {
    icon: "play",
    title: "Learning Through Play",
    text: "Our children learn by playing, exploring and experiencing. Natural curiosity is the engine of every day.",
  },
  {
    icon: "globe",
    title: "An International Outlook",
    text: "With 40 years of BIS experience, children grow into global citizens who understand cultural richness.",
  },
  {
    icon: "leaf",
    title: "A Bond With Nature",
    text: "The garden, nature and outdoor activities are an inseparable part of the daily programme.",
  },
  {
    icon: "heart",
    title: "Social & Emotional Balance",
    text: "Cognitive, social, emotional, physical and communication skills are supported in balance.",
  },
];

export const APPROACH = [
  {
    no: "01",
    title: "An Environment That Sparks Curiosity",
    text: "Our classrooms are an invitation; they make room for children to ask their own questions, to try and to discover.",
  },
  {
    no: "02",
    title: "Play-Based Pedagogy",
    text: "Structured play and free exploration are held in balance, so learning always stays meaningful for the child.",
  },
  {
    no: "03",
    title: "The Richness of Two Languages",
    text: "English is a natural part of daily life — absorbed through songs, games and stories.",
  },
  {
    no: "04",
    title: "Individual Observation",
    text: "Every child's development is observed regularly, in transparent and continuous partnership with the family.",
  },
];

export const DAY_FLOW = [
  { time: "08:30", title: "A Joyful Welcome", text: "We start the day with songs and morning circle." },
  { time: "09:15", title: "Discovery Workshops", text: "Art, science and sensory stations." },
  { time: "10:30", title: "Garden & Nature", text: "Time to move and explore outdoors." },
  { time: "11:30", title: "Story & Language", text: "Stories and drama in English and Turkish." },
  { time: "12:15", title: "Lunch & Rest", text: "Healthy food and a calm break." },
  { time: "14:00", title: "Project Time", text: "Creative projects around the theme of the week." },
  { time: "15:30", title: "Music & Movement", text: "Rhythm, dance and group games." },
  { time: "16:00", title: "Goodbye", text: "We end the day sharing stories and smiling." },
];

export const STATS = [
  { value: "40", suffix: "years", label: "of BIS education experience" },
  { value: "3–5", suffix: "age", label: "The preschool years" },
  { value: "4", suffix: "campuses", label: "Across Türkiye" },
  { value: "1", suffix: "family", label: "A warm community" },
];

export const CAMPUSES = [
  { name: "Alkent", addr: "Karaağaç, Sırtköy Bulvarı No:27, Büyükçekmece", tag: "Preschool", featured: true },
  { name: "Zekeriyaköy", addr: "Uskumruköy, 8. Cd. No:7, Sarıyer", tag: "Primary · Middle · High School" },
  { name: "Bahçeşehir", addr: "Pazartürk Cd. No:12, Başakşehir", tag: "Campus" },
  { name: "Çamlıca", addr: "Turistik Çamlıca Cd. No:54, Üsküdar", tag: "Campus" },
];

export const NEWS = [
  {
    cat: "duyuru",
    tag: "Announcement",
    date: "September 2026",
    title: "A new beginning in Alkent",
    excerpt: "The joyful beginning of lifelong learning is coming to Büyükçekmece. Early enrolment places are now open.",
    color: "var(--bis-green)",
  },
  {
    cat: "etkinlik",
    tag: "Event",
    date: "August 2026",
    title: "Open Days",
    excerpt: "Explore our campus, meet our teachers and walk through the classrooms with us.",
    color: "var(--bis-cream-h)",
  },
  {
    cat: "pedagoji",
    tag: "Pedagogy",
    date: "July 2026",
    title: "On the power of play",
    excerpt: "Why is play the most powerful learning tool in the early years? Through the eyes of our teachers.",
    color: "var(--bis-blue)",
  },
  {
    cat: "pedagoji",
    tag: "Pedagogy",
    date: "June 2026",
    title: "The benefits of learning outdoors",
    excerpt: "How do outdoor activities strengthen children's attention, resilience and curiosity?",
    color: "var(--bis-blue)",
  },
  {
    cat: "etkinlik",
    tag: "Event",
    date: "May 2026",
    title: "Family workshop: making things together",
    excerpt: "Parents and children side by side for a day full of art, music and play.",
    color: "var(--bis-cream-h)",
  },
  {
    cat: "duyuru",
    tag: "Announcement",
    date: "April 2026",
    title: "Our admissions calendar has been updated",
    excerpt: "Application steps and key dates for the 2026–2027 year are now published.",
    color: "var(--bis-green)",
  },
];

export const NEWS_CATS = [
  { key: "all", label: "All" },
  { key: "duyuru", label: "Announcement" },
  { key: "etkinlik", label: "Event" },
  { key: "pedagoji", label: "Pedagogy" },
];

export const NEWS_FEATURED_BODY =
  "The joyful beginning of lifelong learning is coming to Büyükçekmece. During our early enrolment period, with a limited number of places, you can get in touch to reserve a place for your child and to come and see the campus.";

export const FAQ = [
  {
    q: "Which age groups do you accept?",
    a: "Our preschool programme covers EYFS Junior (ages 3-4), EYFS1 (ages 4-5) and EYFS2 (ages 5-6).",
  },
  {
    q: "What is the language of instruction?",
    a: "We offer a rich bilingual setting built on Turkish, with English woven naturally into daily life.",
  },
  {
    q: "How does the admissions process work?",
    a: "Fill in the contact form to reach us, then we can arrange a campus visit and start the process together.",
  },
  {
    q: "Are you part of the BIS Schools family?",
    a: "Yes. Alkent Preschool is a member of the BIS Schools family, with 40 years of international education experience.",
  },
];

export const TOPBAR_LINKS = [
  { label: "BIS Schools", to: "/kurumsal-yapi" },
  { label: "Our Campuses", to: "/kampus" },
  { label: "Contact", to: "/iletisim" },
];

export const BIS_FAMILY = [
  { name: "BIS Schools", note: "National Schools", href: "https://www.bisi.k12.tr/tr-TR/" },
  { name: "BISS", note: "British International School Istanbul", href: "https://www.bis.k12.tr" },
  { name: "BIS STEAM", note: "Etiler STEAM Campus", href: "https://www.bis.k12.tr" },
];

export const TOUR = {
  img: N(25),
  eyebrow: "Campus Tour",
  title: "Discover the Alkent campus",
  text: "A light-filled atrium, a nature classroom, a library and a sports hall — every corner designed to a child's scale.",
  to: "/kampus",
};

// NOTE: these are currently statements from the school's own pedagogy team.
// On the sibling BIS sites this section carries real parent testimonials and
// should be replaced with those before going live.
export const TESTIMONIALS = [
  {
    text: "Every child learns at their own pace. Our job is to notice that pace, make room for it and ask the right question at the right moment.",
    name: "BIS Alkent Pedagogy Team",
    role: "Early Years Coordination",
  },
  {
    text: "In the early years, play is not a break from learning; it is learning itself. We design our classrooms around that belief.",
    name: "BIS Alkent Pedagogy Team",
    role: "EYFS Programme",
  },
  {
    text: "English is not a timetabled lesson but a natural part of the day, absorbed through songs, stories and play.",
    name: "BIS Alkent Pedagogy Team",
    role: "Bilingual Education",
  },
  {
    text: "A transparent partnership with families is the strongest support a child's development can have. Our door is always open.",
    name: "BIS Alkent Pedagogy Team",
    role: "Guidance & Family Communication",
  },
  {
    text: "40 years of BIS experience means one shared quality standard — from teacher selection to the lunch menu, from safeguarding to the curriculum.",
    name: "BIS Alkent Pedagogy Team",
    role: "Institutional Quality",
  },
  {
    text: "Nature is our fourth teacher. The garden and outdoor activities are an inseparable part of the daily programme.",
    name: "BIS Alkent Pedagogy Team",
    role: "Outdoor Education",
  },
];

// ---------------------------------------------------------------------------
// Page-level list content
// ---------------------------------------------------------------------------

export const ABOUT_VALUES = [
  { icon: "shield", title: "Trust & Compassion", text: "Our children grow in a setting where they feel safe and loved." },
  { icon: "globe", title: "Cultural Richness", text: "With an international outlook, we nurture respect and curiosity for difference." },
  { icon: "sprout", title: "Continuous Growth", text: "Both as children and as an institution, we aim to be better every day." },
  { icon: "users", title: "A Sense of Community", text: "Families, teachers and children — together we are one community." },
  { icon: "leaf", title: "Respect for Nature", text: "Environmental awareness and a bond with nature are part of daily life." },
  { icon: "star", title: "High Standards", text: "The highest academic and pedagogical standards, in an inspiring setting." },
];

export const ABOUT_CHIPS = [
  { icon: "star", label: "40 years of experience" },
  { icon: "globe", label: "An international outlook" },
  { icon: "users", label: "4 campuses" },
];

export const APPROACH_PRINCIPLES = [
  { icon: "play", title: "Play is serious work", text: "Play is how a child makes sense of the world, experiments and learns. It sits at the heart of our programme." },
  { icon: "sun", title: "Curiosity leads", text: "A child's question can set the course of the day. The teacher is a guide; the environment is the third teacher." },
  { icon: "users", title: "We grow together", text: "Learning is social. Collaboration, sharing and empathy are a natural part of every activity." },
  { icon: "globe", title: "Richness in two languages", text: "English is not a lesson but a life; it is woven into the day through songs, games and stories." },
];

export const APPROACH_COMPARE = [
  "Understanding instead of memorising",
  "Growth instead of grades",
  "Discovery instead of sitting in rows",
  "Collaboration instead of competition",
  "Curiosity instead of silence",
  "Individuality instead of uniformity",
];

export const APPROACH_PARTNER = [
  { icon: "users", title: "Regular meetings", text: "Development is shared openly" },
  { icon: "heart", title: "Warm communication", text: "An open door for every question" },
  { icon: "palette", title: "Family activities", text: "Time to make things together" },
];

export const CAMPUS_FEATURES = [
  { icon: "sun", title: "Bright Classrooms", text: "Learning spaces full of natural light, designed to a child's scale." },
  { icon: "leaf", title: "Outdoors & Garden", text: "Safe outdoor spaces for discovery, movement and nature activities." },
  { icon: "palette", title: "Workshop Corners", text: "Art, science and sensory play stations inside every classroom." },
  { icon: "shield", title: "A Safe Setting", text: "A controlled campus designed with child safety as the first priority." },
];

export const CURRICULUM = [
  { icon: "book", title: "Language & Literacy", text: "Turkish and English, naturally, through stories, songs and drama." },
  { icon: "sprout", title: "Mathematics & Logic", text: "Number sense, patterns and problem solving with concrete materials." },
  { icon: "palette", title: "Art & Creativity", text: "Painting, collage, clay and free making — the freedom to express oneself." },
  { icon: "leaf", title: "Science & Nature", text: "Discovery and curiosity through experiments, the garden and nature observation." },
  { icon: "music", title: "Music & Movement", text: "Physical and aural development through rhythm, dance and group games." },
  { icon: "heart", title: "Social & Emotional", text: "Recognising feelings, empathy and friendship; self-regulation skills." },
];

export const AGE_OPTIONS = [
  "Ages 3-4 (EYFS Junior)",
  "Ages 4-5 (EYFS1)",
  "Ages 5-6 (EYFS2)",
];
