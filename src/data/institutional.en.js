// English mirror of institutional.js — same slugs, images and block structure,
// only the wording differs.
const N = (n) => `/images/new/unnamed-${n}.jpg`;

export const PAGES = {
  // ============ INSTITUTIONAL ============
  "kurumsal-yapi": {
    group: "Institutional",
    eyebrow: "Our Structure",
    title: "The British School Istanbul family",
    subtitle: "BIS Alkent Preschool is the youngest member of a long-established education tradition and part of a strong institutional framework.",
    hero: N(24),
    accent: "var(--pine)",
    blocks: [
      {
        type: "prose",
        eyebrow: "Together, one vision",
        heading: "Part of a strong framework",
        paragraphs: [
          "Under The British School Istanbul umbrella sit schools for different age groups and needs, all run to shared quality standards. BIS Alkent Preschool is the family's new, early-years-focused member.",
          "Across every campus, teacher selection, curriculum and policy are governed by a single shared quality standard. Whichever campus a child joins, they are welcomed with the same care.",
        ],
        image: N(22),
        imageSide: "right",
      },
      {
        type: "cards",
        eyebrow: "Our Schools",
        heading: "Schools of the same family",
        items: [
          { title: "BIS Schools", tag: "National Schools", text: "Education within the Turkish national curriculum for Turkish and dual-national students across the Zekeriyaköy, Bahçeşehir and Çamlıca campuses." },
          { title: "BIS Alkent Preschool", tag: "Early Years · New", text: "Our new early-years campus for ages 3–5 in Büyükçekmece Alkent.", featured: true },
          { title: "British International School Istanbul", tag: "International", text: "Our school with international status at the Zekeriyaköy Forest Campus, for students holding foreign passports." },
          { title: "British International STEAM School", tag: "STEAM", text: "A science and technology focused approach at the Etiler STEAM Campus." },
        ],
      },
    ],
  },

  "bis-hakkinda": {
    group: "Institutional",
    eyebrow: "About BIS",
    title: "A second time; stronger still",
    subtitle: "BIS Schools reinforces the values children bring from home with knowledge, skill and experience at school.",
    hero: N(22),
    accent: "var(--pine)",
    blocks: [
      {
        type: "prose",
        eyebrow: "What Does BIS Mean?",
        heading: "Living something admired a second time, more strongly",
        paragraphs: [
          "In Turkish, according to the Turkish Language Association (TDK), \"bis\" means the repetition of something admired or applauded — an encore. At BIS Schools we place that meaning at the centre of our educational philosophy.",
          "For us, \"a second time\" means that education begins first in the family and the community, and that school takes on a complementary, reinforcing role built on that foundation. Our task at BIS is to reinforce the values children bring from home with knowledge, skill and experience at school.",
          "With more than thirty-nine years of educational experience and high quality standards, we are committed to sustaining the same strong approach across our schools.",
        ],
        image: N(24),
        imageSide: "left",
      },
      {
        type: "groupList",
        eyebrow: "Why BIS Schools?",
        heading: "Not only academic; a many-sided experience",
        text: "BIS Schools offers students a safe, supportive and many-sided school experience.",
        groups: [
          { icon: "leaf", title: "A Strong Learning Environment", items: ["A location close to nature, suited to outdoor education", "Libraries and spaces equipped with modern technology", "Science and discovery workshops", "Sports grounds for all weather", "Play and activity areas with safety flooring"] },
          { icon: "globe", title: "Inclusive and Multicultural", items: ["A multicultural setting where Turkish, international and dual-national students learn together", "A balanced student profile that strengthens natural cultural exchange"] },
          { icon: "users", title: "A Student-Centred Approach", items: ["A differentiated learning model", "Individual tracking that supports academic and social development"] },
          { icon: "heart", title: "Academic and Psychological Support", items: ["English Academic Support Programme", "Learning Support Unit provision", "Counselling and Guidance Unit"] },
          { icon: "star", title: "A Qualified Teaching Staff", items: ["Experienced teachers who are specialists in their field", "Teaching with native English-speaking staff", "Safe educational technology"] },
          { icon: "sprout", title: "Healthy Food and School Life", items: ["Meals prepared under the supervision of a food engineer", "Gluten-free and vegetarian menu options", "An active Parent-Teacher Association", "After-school clubs and activities"] },
        ],
      },
      {
        type: "callout",
        text: "BIS Schools takes an approach that prepares students not only for today, but for the future, for life and for the world.",
      },
    ],
  },

  "vizyon-misyon": {
    group: "Institutional",
    eyebrow: "Vision and Mission",
    title: "What do we believe?",
    subtitle: "We believe that international solidarity and collaboration create better learning environments.",
    hero: N(21),
    accent: "var(--pine)",
    blocks: [
      {
        type: "twoCards",
        items: [
          { kind: "vision", icon: "tree", title: "Our Vision", text: "To raise lifelong learners who appreciate cultural richness, are mindful of the international community, fully realise their academic and social potential, and take responsibility in a global society." },
          { kind: "mission", icon: "heart", title: "Our Mission", text: "To offer education of the highest standard in an inspiring environment; to nurture tolerance, respect, integrity and compassion; and to prepare balanced individuals who think and question." },
        ],
      },
      {
        type: "features",
        eyebrow: "Our Values",
        heading: "The compass behind every decision",
        items: [
          { icon: "shield", title: "Trust & Compassion", text: "Children grow in a setting where they feel safe and loved." },
          { icon: "globe", title: "Cultural Richness", text: "With an international outlook, we nurture respect and curiosity for difference." },
          { icon: "sprout", title: "Continuous Growth", text: "Both as children and as an institution, we aim to be better every day." },
          { icon: "users", title: "A Sense of Community", text: "Families, teachers and children — together we are one community." },
          { icon: "leaf", title: "Respect for Nature", text: "Environmental awareness and a bond with nature are part of daily life." },
          { icon: "star", title: "High Standards", text: "The highest pedagogical standards, in an inspiring setting." },
        ],
      },
    ],
  },

  "saglik-guvenlik": {
    group: "Institutional",
    eyebrow: "Health and Safety",
    title: "The child's safety and health come first",
    subtitle: "On our campus every detail is designed so that our children grow in a safe and healthy environment.",
    hero: N(23),
    accent: "var(--pine)",
    blocks: [
      {
        type: "prose",
        eyebrow: "Health",
        heading: "We follow health closely",
        paragraphs: [
          "In the first week of school, forms are sent out to gather information about each student's health. These collect details such as medication in use, medical history and any allergies.",
          "A school nurse is present on campus to answer your questions about your child's health. For allergies or conditions that need monitoring, we work together with the relevant staff and health institutions.",
        ],
      },
      {
        type: "features",
        eyebrow: "Safety",
        heading: "A campus kept safe around the clock",
        items: [
          { icon: "shield", title: "24/7 Cameras & Staff", text: "The campus is monitored by security cameras and security staff are on duty at all hours." },
          { icon: "users", title: "Photo ID", text: "Parents receive a photo school ID card; anyone without a card is asked for identification at the entrance." },
          { icon: "heart", title: "Collection Routine", text: "The school must always be informed when there is a change to a child's collection routine." },
          { icon: "phone", title: "Up-to-date Contacts", text: "If an unfamiliar person arrives, the parent is called — which is why contact numbers must be kept current." },
        ],
      },
    ],
  },

  "kvkk": {
    group: "Institutional",
    eyebrow: "Data Protection",
    title: "Information Notice on the Processing of Personal Data",
    subtitle: "Our disclosure obligation under Turkish Personal Data Protection Law No. 6698 (KVKK).",
    hero: N(27),
    accent: "var(--navy)",
    blocks: [
      {
        type: "legal",
        sections: [
          { paragraphs: ["This notice has been prepared in order to fulfil the disclosure obligation of BİSİ ULUSLARARASI ÖZEL EĞİTİM HİZMETLERİ TİCARET ANONİM ŞİRKETİ under Article 10 of Turkish Law No. 6698 on the Protection of Personal Data."] },
          { heading: "A – Identity of the Data Controller", table: [
            ["Company", "BİSİ ULUSLARARASI ÖZEL EĞİTİM HİZMETLERİ TİCARET ANONİM ŞİRKETİ"],
            ["MERSIS No", "0723012263500012"],
            ["Address", "Maslak Mah. Büyükdere Cad. Spring Giz Plaza K:5 Sarıyer, Istanbul"],
            ["Telephone", "0212 286 69 50"],
            ["Fax", "0212 286 69 80"],
            ["E-mail", "communications@bis.k12.tr"],
          ] },
          { heading: "B – Personal Data Processed", items: [
            "Identity data: name, surname, signature, national ID number, passport details",
            "Contact data: address, telephone, mobile, e-mail, fax",
            "Photographs and visual records: passport photographs, security camera footage",
            "Student data: student number, grades, projects, exam scores, academic attainment",
            "Health data: health information, allergies, conditions requiring monitoring",
            "Financial data: bank account details, payment receipts, payment information",
            "Other data: socio-economic status, occupation details, transfer scores",
          ] },
          { heading: "C – General Principles", items: [
            "Processing for current, specific, explicit and legitimate purposes",
            "Compliance with the law and the rules of good faith",
            "Being relevant, limited and proportionate to the purpose of processing",
            "Retention only for the period prescribed by the relevant legislation",
          ] },
          { heading: "D – Purposes of Processing", paragraphs: [
            "Student and legal guardian data are processed for enrolment, the provision of educational services and student follow-up.",
            "Camera data are processed to ensure the safety of the institution and its students and to control entry to and exit from buildings and facilities.",
            "Visitor data are recorded for security purposes as name, surname, ID/passport/driving licence number and times of entry and exit.",
            "Staff data are processed to create personnel files and to meet legal obligations.",
            "Within service and commercial relationships, data are processed for the purposes of contract and service assurance.",
          ] },
          { heading: "E – Other Purposes", items: [
            "Meeting the requirements of Turkish Ministry of National Education legislation",
            "Providing information in emergencies",
            "Informing families about meetings, parent days and events",
            "Discount, event, advertising and promotional activities",
            "Fulfilling legal obligations towards public institutions and bodies",
            "Informing staff and health institutions about students with allergies or conditions requiring monitoring",
          ] },
          { heading: "F – Collection, Processing and Transfer", paragraphs: [
            "Data may be collected through campuses and business units, the website and social media accounts, integration systems, and suppliers and business partners.",
            "Data may be transferred to teachers and instructors, financial advisers, subcontractors and suppliers, software companies, legally authorised public institutions and examination bodies. Confidentiality agreements are concluded for all transferred data.",
            "Data that must be retained under the Labour Law, Tax Law and Ministry of National Education legislation are kept for the periods set out in that legislation.",
          ] },
          { heading: "G – Rights of the Data Subject", paragraphs: ["Under Article 11 of Law No. 6698, everyone has the right to apply to the data controller and:"], items: [
            "Learn whether their personal data are processed",
            "Request information if their data have been processed",
            "Learn the purpose of processing and whether the data are used accordingly",
            "Know the third parties to whom data are transferred at home or abroad",
            "Request correction if the data are incomplete or incorrect",
            "Request erasure or destruction of the data",
            "Request that correction or erasure be notified to third parties to whom the data were transferred",
            "Object to a result reached to their detriment through automated analysis",
            "Claim compensation where they suffer loss due to unlawful processing",
          ] },
          { heading: "Request Procedure", paragraphs: [
            "Your request will be concluded free of charge as soon as possible and within 30 (thirty) days at the latest. Applications may be made by a written and signed petition together with documents establishing your identity, through a notary public, or by registered mail with return receipt.",
            "Postal address: Maslak Mah. Büyükdere Cad. Spring Giz Plaza K:5 Sarıyer, Istanbul",
          ] },
        ],
      },
    ],
  },

  "kalite-sertifikalari": {
    group: "Institutional",
    eyebrow: "Quality Certificates",
    title: "Quality is not a target but a commitment",
    subtitle: "Our school is audited and certified regularly under internationally recognised ISO quality standards.",
    hero: N(31),
    accent: "var(--navy)",
    blocks: [
      {
        type: "prose",
        heading: "Excellence, in every area",
        paragraphs: [
          "At BIS we believe that excellence in education comes not only from academic attainment, but from a commitment to the highest standards in areas such as safety, quality, sustainability and data protection.",
        ],
      },
      {
        type: "features",
        eyebrow: "ISO Certificates",
        heading: "Certification to international standards",
        items: [
          { icon: "shield", title: "ISO 9001", text: "Quality Management System — educational and administrative processes that are planned, measurable and continuously improved." },
          { icon: "leaf", title: "ISO 14001", text: "Environmental Management System — a sustainable and responsible approach to school life." },
          { icon: "sprout", title: "ISO 22000", text: "Food Safety Management System — hygiene and safety standards for the school kitchen." },
          { icon: "info", title: "ISO 27001", text: "Information Security Management System — privacy of student and parent data." },
          { icon: "heart", title: "ISO 45001", text: "Occupational Health and Safety Management System — a safe school environment." },
        ],
      },
      {
        type: "callout",
        text: "At BIS, quality is not a target but a commitment we sustain continuously.",
      },
    ],
  },

  // ============ ACADEMIC ============
  "uluslararasi-bakalorya": {
    group: "Academic",
    eyebrow: "International Baccalaureate",
    title: "An educational philosophy open to the world",
    subtitle: "IB World Schools develop students in critical thinking, global awareness and lifelong learning.",
    hero: N(25),
    accent: "var(--pine)",
    blocks: [
      {
        type: "prose",
        eyebrow: "IB Diploma Programme",
        heading: "A vision of international standards",
        paragraphs: [
          "Our institution holds Candidate School status for the International Baccalaureate (IB) Diploma Programme and is actively continuing the authorisation process to become an IB World School. This reflects our commitment to adopting and applying international standards in education.",
          "IB World Schools share a common educational philosophy that aims to develop students not only academically but also in critical thinking, global awareness, research skills and lifelong learning. At BIS we believe this approach prepares our students for the future in the best possible way.",
        ],
        image: N(22),
        imageSide: "right",
      },
      {
        type: "features",
        eyebrow: "IB Programmes",
        heading: "Programmes authorised by the IBO",
        text: "Schools authorised by the International Baccalaureate Organization (IBO) may offer one or more of the following programmes.",
        items: [
          { icon: "sprout", title: "Primary Years Programme (PYP)", text: "Learning rooted in curiosity and discovery from early childhood onwards." },
          { icon: "book", title: "Middle Years Programme (MYP)", text: "An interdisciplinary, concept-driven framework for learning." },
          { icon: "star", title: "Diploma Programme (DP)", text: "An academic programme that prepares students for university and the wider world." },
          { icon: "globe", title: "Career-related Programme (CP)", text: "Combines career-focused learning with academic depth." },
        ],
      },
      {
        type: "callout",
        text: "Candidate school status is not a guarantee of authorisation; the process is nevertheless pursued rigorously in terms of alignment with IB standards, teacher training and curriculum development.",
      },
    ],
  },

  "ogrenme-destek": {
    group: "Academic",
    eyebrow: "Learning Support Unit",
    title: "Beside every child, at their own pace",
    subtitle: "The Learning Support Unit supports our students in line with the school's philosophy whenever a need arises.",
    hero: N(20),
    accent: "var(--pine)",
    blocks: [
      {
        type: "prose",
        heading: "Support shaped by need, built together",
        paragraphs: [
          "The Learning Support Unit supports our students in line with the school's philosophy and goals whenever a need arises. The unit is responsible for providing the support required by students with particular needs and for observing their progress.",
          "The Learning Support Unit works together with class teachers, parents, school leaders, the language support department and, where required, third-party educational psychologists and other professionals.",
        ],
        image: N(30),
        imageSide: "left",
      },
      {
        type: "numbered",
        eyebrow: "What We Do",
        heading: "Steps in the support process",
        items: [
          { title: "Student Orientation", text: "Work that helps the child settle into the school and the group." },
          { title: "In-class Activities", text: "Observation-based classroom activities that support development." },
          { title: "Individual Meetings & Follow-up", text: "Monitoring each child's development individually." },
          { title: "Group Work", text: "Group activities that strengthen social and emotional skills." },
          { title: "Work With Teachers", text: "Regular collaboration and review with teachers." },
          { title: "Meetings With Parents", text: "Individual parent meetings and monthly parent seminars." },
        ],
      },
    ],
  },

  "rehberlik": {
    group: "Academic",
    eyebrow: "Guidance and Counselling",
    title: "An approach centred on wellbeing",
    subtitle: "Our Guidance Unit works on mutual trust, positive communication and collaboration.",
    hero: N(32),
    accent: "var(--pine)",
    blocks: [
      {
        type: "prose",
        heading: "School, family and child; a strong partnership",
        paragraphs: [
          "The BIS Counselling and Guidance Unit works on an understanding of mutual trust, positive communication and collaboration grounded in the development of students and parents. It gives weight to students' wellbeing and their social and emotional growth.",
          "We believe that the partnership of school, family and child is made up of the three factors most important to a child's good school experience. The preschool years are among a child's first experiences of independence. In this period our aim is to build resilience and support healthy development.",
        ],
      },
      {
        type: "numbered",
        eyebrow: "How We Work",
        heading: "With you throughout the year",
        items: [
          { title: "Orientation Activities", text: "Orientation for all students in the last week of August, with information meetings for parents." },
          { title: "Preventive Guidance", text: "Meetings planned from observations, in collaboration with parents, students and teachers." },
          { title: "Developmental Guidance", text: "Support for self-confidence, a positive sense of self, effective communication and problem solving." },
          { title: "Monthly Parent Seminars", text: "Regular parent seminars on children's social, emotional and individual development." },
          { title: "Teacher Meetings", text: "Monthly meetings with teachers to follow each child's development." },
          { title: "Prospective Student Meetings", text: "Meetings with prospective students and families during admissions, led by the Guidance Unit." },
        ],
      },
    ],
  },

  "yaratici-sanatlar": {
    group: "Academic",
    eyebrow: "Creative Arts",
    title: "Art, Music and Drama",
    subtitle: "A setting where children can find inspiration and develop new talents with confidence.",
    hero: N(21),
    accent: "var(--terra)",
    blocks: [
      {
        type: "prose",
        heading: "An atmosphere of confidence and discovery",
        paragraphs: [
          "With our accomplished and energetic Creative Arts team we see exciting progress every year. Our aim is to provide a setting where children can find inspiration and develop new talents in music, drama and art with confidence.",
          "At BIS our aim is to offer an atmosphere built on personalised confidence, where respect, enthusiasm and collaboration come together. In that way, as they grow, our children also gain new experiences and opportunities in the arts and develop their creative skills.",
        ],
        image: N(21),
        imageSide: "right",
      },
      {
        type: "features",
        eyebrow: "Our Areas",
        heading: "Many ways to express yourself",
        items: [
          { icon: "palette", title: "Art", text: "The freedom to express oneself through painting, collage, clay and free making." },
          { icon: "music", title: "Music", text: "Aural and physical development through rhythm, song and instruments." },
          { icon: "users", title: "Drama", text: "Confidence and communication through role play and stage work." },
          { icon: "star", title: "Clubs & Performances", text: "Inspiring experiences through choir, stage performances and creative workshops." },
        ],
      },
    ],
  },

  // ============ FAQ ============
  "sss": {
    group: "Institutional",
    eyebrow: "Frequently Asked Questions",
    title: "What you may be wondering",
    subtitle: "We have gathered the questions most often asked about the BIS Alkent and BIS Schools approach to education.",
    hero: N(30),
    accent: "var(--gold)",
    blocks: [
      {
        type: "faq",
        items: [
          { q: "Do BIS Schools accept Turkish citizens?", a: "Yes. BIS Schools are our national schools, established to serve students who are citizens of the Republic of Türkiye. Our students benefit fully from the intensive English programme and the international education standards the school offers." },
          { q: "What does your curriculum cover?", a: "Our schools follow the curriculum of the Turkish Ministry of National Education (MEB). That curriculum is enriched by nearly forty years of experience at The British School Istanbul and by an intensive language programme taught alongside native English-speaking teachers." },
          { q: "Which teachers deliver the English lessons?", a: "Our priority is that your child learns the language with the most natural and accurate pronunciation. For that reason all lessons delivered in English are taught by native-speaker teachers who are specialists in their field." },
          { q: "What is the language proficiency of your Turkish teachers?", a: "Our teachers for lessons delivered in Turkish are selected carefully from professionals who, alongside expertise in their own subject, are fluent in both Turkish and English and communicate with full bilingual competence." },
          { q: "How is the international setting reflected in the student profile?", a: "Our school aims for a multicultural structure. To create a balanced, global learning atmosphere we offer a setting where Turkish, dual-national and international students learn side by side." },
          { q: "What are the advantages of the ESL (English as a Second Language) programme?", a: "Our ESL programme, delivered successfully for many years, allows students to use English not merely as a subject but as an academic tool. Thanks to this grounding, students reach fluency in speaking and writing in a short time." },
          { q: "What sets you apart from other schools teaching in English?", a: "At our school English is not a single lesson on the timetable but the main language of communication across the campus. Our approach, grounded in the British educational philosophy, lets children acquire the language naturally, within a social setting." },
          { q: "Is your goal only to prepare students for study abroad?", a: "No. Our core aim is to raise \"global citizens\". We give our students a strong academic and social foundation for distinguished institutions both internationally and in Türkiye." },
          { q: "Are your teaching staff of the same quality as at your international school?", a: "Absolutely. Teacher selection across all our campuses follows a single shared quality standard. Our bilingual, specialist teaching staff take up their posts after professional assessment processes that meet international standards." },
          { q: "How are social development and behaviour managed?", a: "Social development and behaviour are governed by more than thirty school policies developed within our international accreditations. This systematic approach sets clear rules for relationships between students, parents and school leadership, creating a settled learning environment." },
          { q: "What is available for social and sporting development?", a: "Art, sport, club activities and social events are an inseparable part of the curriculum, supporting our children's all-round development. Each child's talents are followed systematically and their progress shared regularly." },
          { q: "What measures help my child feel safe?", a: "Our campus provides a safe, self-contained learning space for children. All physical areas and social processes are monitored continuously within our child protection policies." },
          { q: "What exactly does bilingual education mean?", a: "Bilingual education means that a child both masters Turkish culture and curriculum and can use English with the competence of a first language. All processes, inside and outside lessons, are structured to balance the two languages." },
          { q: "What will my child gain from a mix of cultures?", a: "Thanks to our multinational setting, children learn to develop tolerance and respect for different cultures and values. This environment strengthens their empathy and their global perspective." },
          { q: "Can I visit the campus to enrol or to meet you?", a: "We would be delighted to welcome parents and prospective students at our Büyükçekmece Alkent campus. Get in touch to arrange an appointment, see our educational philosophy at first hand and meet our staff." },
        ],
      },
    ],
  },
};

// Menu / group structure — slugs are identical in both languages
export const MENU = {
  primary: [
    { to: "/", label: "Home" },
    { to: "/anaokulu", label: "Preschool" },
    { to: "/kampus", label: "Campus & Gallery" },
    { to: "/haberler", label: "News" },
    { to: "/iletisim", label: "Contact" },
  ],
  groups: [
    {
      title: "Institutional",
      items: [
        { to: "/hakkimizda", label: "About Us" },
        { to: "/kurumsal-yapi", label: "Our Structure" },
        { to: "/bis-hakkinda", label: "About BIS" },
        { to: "/vizyon-misyon", label: "Vision and Mission" },
        { to: "/sss", label: "FAQ" },
        { to: "/kampus", label: "Our Campuses" },
        { to: "/saglik-guvenlik", label: "Health and Safety" },
        { to: "/kvkk", label: "Data Protection Notice" },
        { href: "https://britishschool.istanbul/careers?lang=en&source=bisi", label: "Careers" },
        { to: "/kalite-sertifikalari", label: "Quality Certificates" },
      ],
    },
    {
      title: "Academic",
      items: [
        { to: "/anaokulu", label: "Early Years" },
        { to: "/yaklasim", label: "Our Approach" },
        { to: "/uluslararasi-bakalorya", label: "International Baccalaureate" },
        { to: "/ogrenme-destek", label: "Learning Support Unit" },
        { to: "/rehberlik", label: "Guidance and Counselling" },
        { to: "/yaratici-sanatlar", label: "Creative Arts" },
      ],
    },
  ],
};
