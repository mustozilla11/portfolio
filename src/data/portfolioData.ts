export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: "mobile" | "ai" | "systems" | "fintech";
  categoryLabel: string;
  description: string;
  detailedOverview: string;
  architectureHighlights: string[];
  stack: string[];
  metrics?: { label: string; value: string }[];
  githubUrl?: string;
  liveUrl?: string;
  status: "Aktif Geliştirme" | "Tamamlandı" | "Akademik R&D";
  statusColor: string;
  featured: boolean;
  accentColor: string;
}

export interface SkillItem {
  name: string;
  badge?: string;
  highlight?: boolean;
}

export interface SkillCategory {
  id: string;
  title: string;
  subtitle: string;
  skills: SkillItem[];
  icon: string;
  badge: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  field: string;
  institution: string;
  period: string;
  status: "Devam Ediyor" | "Mezun";
  statusBadge: string;
  grade?: string;
  location: string;
  description: string;
  highlights: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  organization: string;
  programType: string;
  period: string;
  role: string;
  description: string;
  badge: string;
  skillsAcquired: string[];
  link?: string;
}

export interface BookItem {
  id: string;
  title: string;
  author: string;
  category: "reading" | "psychology" | "classics" | "systems";
  categoryLabel: string;
  note: string;
  keyTakeaway?: string;
  spineColor: string;
  badge: string;
  status: "Şu an Okunuyor" | "Tamamlandı";
}

export interface SpecCategory {
  title: string;
  icon: string;
  items: { label: string; value: string; detail: string; tag?: string }[];
}

export const PERSONAL_DATA = {
  name: "Mustafa Özlü",
  nameShort: "M. Özlü",
  title: "Full-Stack & Mobile Developer",
  subTitle: "MIS Senior Student & AI/LLM Researcher",
  statusBadge: {
    text: "Open to Opportunities & R&D Projects",
    available: true,
  },
  location: "Muğla / Adana, Türkiye",
  email: "mustafaozlu.dev@gmail.com",
  github: "https://github.com/mustozilla11",
  linkedin: "https://linkedin.com/in/mustafaozlu",
  bio: "Mobil uygulama geliştirme (Flutter, React Native), yüksek performanslı arka uç mimarileri (FastAPI, Python), sistem programlama (Rust) ve Büyük Dil Modelleri (LLM / RAG) entegrasyonu üzerine odaklanan yazılım mühendisliği odaklı geliştirici. CachyOS Linux ve Hyprland masaüstü tutkunu; yüksek verimlilik, modern tasarım ve güçlü algoritmalarla uçtan uca dijital ürünler inşa eder.",
  stats: [
    { label: "Klavye Hızı (WPM)", value: "115+", sub: "Adli Katip Standartı" },
    { label: "Geliştirilen Proje", value: "15+", sub: "Mobil & Backend & AI" },
    { label: "Kodlama Dili", value: "6+", sub: "Python, Dart, TS, Rust..." },
    { label: "Linux Deneyimi", value: "3+ Yıl", sub: "CachyOS / Hyprland" },
  ],
};

export const PROJECTS_DATA: Project[] = [
  {
    id: "oneiro",
    title: "Oneiro",
    subtitle: "AI-Powered Dream Interpretation & Psychological Analytics",
    category: "mobile",
    categoryLabel: "Mobil & AI / LLM",
    description:
      "Yapay zeka destekli mobil rüya tabiri ve sembol analiz uygulaması. Klasik İslami ve ezoterik rüya tabiri kaynaklarını modern derin psikoloji (Freud & Jung arketipleri) ve çağdaş LLM mimarisiyle sentezler.",
    detailedOverview:
      "Oneiro; rüya metnini anlamsal parçalara ayırır, bilinçdışı sembolleri tespit eder ve çok katmanlı yönlendirme (prompt orchestration) ile kişiselleştirilmiş derinlikli analizler sunar. DeepSeek ve modern açık kaynak modelleri üzerinden hibrit bir akış mimarisi kurulmuştur.",
    architectureHighlights: [
      "Çoklu Kaynak Sentezi: İbn Şirin & Nablusi klasik külliyatı + Jungiyen bilinçdışı arketip haritalaması",
      "Asenkron Akış (Streaming Responses): FastAPI üzerinde Server-Sent Events ile düşük gecikmeli yanıt üretimi",
      "Kişiselleştirilmiş Rüya Günlüğü: Yerel SQLite ve şifreli bulut senkronizasyonu",
      "Flutter & Material 3 / Glassmorphic UI: Akıcı mikro-etkileşimler ve AMOLED karanlık mod teması",
    ],
    stack: ["Flutter", "Dart", "FastAPI", "Python", "DeepSeek API", "SQLite", "Docker"],
    metrics: [
      { label: "Gecikme Süresi", value: "<1.2s" },
      { label: "Sembol Veritabanı", value: "3.500+" },
      { label: "Mimari", value: "Async Microservice" },
    ],
    githubUrl: "https://github.com/mustozilla11/oneiro_app",
    liveUrl: "#",
    status: "Aktif Geliştirme",
    statusColor: "emerald",
    featured: true,
    accentColor: "from-blue-600/30 to-indigo-600/10",
  },
  {
    id: "ciftciden",
    title: "Çiftçiden",
    subtitle: "Tarımsal E-Ticaret & Doğrudan Üretici Ağı",
    category: "mobile",
    categoryLabel: "Mobil Pazaryeri",
    description:
      "Tarımsal üreticilerle doğrudan tüketicileri aracısız buluşturan, coğrafi konum destekli çapraz platform mobil pazar yeri uygulaması.",
    detailedOverview:
      "Aracı zincirlerini ortadan kaldırarak çiftçinin emeğinin gerçek karşılığını almasını, tüketicinin ise taze ve izlenebilir gıdaya ilk elden ulaşmasını amaçlayan modern bir tarım ekosistemi. Gerçek zamanlı ilan yönetimi, coğrafi filtreleme ve çiftçi-tüketici mesajlaşmasını barındırır.",
    architectureHighlights: [
      "Çapraz Platform Performansı: React Native + Expo ile yüksek kare hızında native hissiyat",
      "Reaktif Veri Katmanı: Firebase Firestore ile anlık ilan durumu, sipariş bildirimleri ve fiyat güncellemeleri",
      "Lokasyon Tabanlı Arama: Çiftçilerin tarladan teslimat ve kargo bölgelerine göre anlık jeo-filtreleme",
      "Modern Tailwind Arayüzü: NativeWind ile optimize edilmiş, erişilebilir ve mobil dostu arayüz",
    ],
    stack: ["React Native", "Expo", "TypeScript", "Tailwind CSS", "Firebase", "Node.js"],
    metrics: [
      { label: "Platform", value: "iOS & Android" },
      { label: "Yenileme Hızı", value: "60 FPS Native" },
      { label: "Veri Modeli", value: "NoSQL Realtime" },
    ],
    githubUrl: "https://github.com/mustozilla11/ciftciden",
    liveUrl: "#",
    status: "Tamamlandı",
    statusColor: "blue",
    featured: true,
    accentColor: "from-emerald-600/30 to-teal-600/10",
  },
  {
    id: "sayzek-llm-dss",
    title: "LLM Karar Destek Sistemi",
    subtitle: "SAYZEK Akademik Tez Projesi / Açık Kaynak Metin Madenciliği",
    category: "ai",
    categoryLabel: "AI / LLM & RAG",
    description:
      "Büyük Dil Modelleri ile Açık Kaynak Metin Verisinden Karar Destek Brifingi Üretilmesi. Projede Teknik Lider (Tech Lead) olarak LLM API entegrasyonu, vektör veritabanı mimarisi ve karar destek arayüzü süreçlerini yönetiyorum.",
    detailedOverview:
      "Stratejik karar alıcılar için heterojen açık kaynak metin yığınlarını (haberler, raporlar, mevzuat) toplayan, vektör indeksleme (RAG) ile anlamsal olarak filtreleyen ve sentezlenmiş özet brifingler sunan kurumsal düzeyde karar destek mimarisi.",
    architectureHighlights: [
      "Teknik Liderlik & Mimari Tasarım: Ekip koordinasyonu, API sözleşmeleri, LLM yönlendirme boru hattı",
      "Retrieval-Augmented Generation (RAG): Vektör veritabanı üzerinde yüksek kesinlikli bağlamsal bilgi alımı",
      "Hallucination Guardrails: Brifing çıktılarını kaynak metin referanslarıyla çapraz doğrulayan kontrol katmanı",
      "Yönetici Dashboard Arayüzü: Gerçek zamanlı duyarlılık, risk haritaları ve karar matrisleri görselleştirmesi",
    ],
    stack: ["Python", "FastAPI", "Vector DB (Chroma/FAISS)", "LLM APIs", "RAG Pipeline", "TypeScript", "React"],
    metrics: [
      { label: "Rolüm", value: "Teknik Lider" },
      { label: "RAG Kesinliği", value: "%94+" },
      { label: "Veri Kaynağı", value: "Multi-Source" },
    ],
    githubUrl: "https://github.com/mustozilla11/sayzek-decision-support",
    liveUrl: "#",
    status: "Akademik R&D",
    statusColor: "purple",
    featured: true,
    accentColor: "from-purple-600/30 to-pink-600/10",
  },
  {
    id: "terminal-trading-bot",
    title: "Terminal-Based Trading Bot",
    subtitle: "Algoritmik Ticaret & Sayısal Finans Terminali",
    category: "fintech",
    categoryLabel: "Fintech & Algoritmik Ticaret",
    description:
      "Teknik indikatörler, haber duygu analizi (sentiment analysis) ve simüle edilmiş short/long pozisyon mekanikleri içeren açık kaynaklı, terminal tabanlı algoritmik ticaret botu.",
    detailedOverview:
      "Düşük gecikmeli emir defteri analizi, dinamik risk yönetimi (Trailing Stop, ATR bazlı pozisyon büyüklüğü) ve terminal içi ASCII/grafik panelleriyle çalışan sayısal ticaret motoru. Kripto varlık piyasaları için optimize edilmiştir.",
    architectureHighlights: [
      "Kantitatif İndikatör Motoru: RSI, EMA kesişimleri, MACD ve Bollinger Bantları ile çoklu zaman dilimi doğrulaması",
      "NLP Duygu Analizi: Piyasa haber akışından ve metin akışlarından gerçek zamanlı duyarlılık skorlaması",
      "Simüle Risk & Emir Yönetimi: Slippage ve borsa komisyonlarını hesaba katan gerçeğe yakın backtesting altyapısı",
      "Terminal CLI UI: Zengin ASCII konsol arayüzü ile gerçek zamanlı kâr/zarar, emir geçmişi ve piyasa derinliği",
    ],
    stack: ["Python", "Rich / Textual CLI", "Pandas", "NumPy", "CCXT / Binance API", "Quantitative Analysis"],
    metrics: [
      { label: "İndikatörler", value: "12+ Aktif" },
      { label: "Arayüz", value: "TUI / Terminal" },
      { label: "Backtest", value: "Vektörel Motor" },
    ],
    githubUrl: "https://github.com/mustozilla11/binance_quant_bot",
    liveUrl: "#",
    status: "Aktif Geliştirme",
    statusColor: "emerald",
    featured: true,
    accentColor: "from-amber-600/30 to-orange-600/10",
  },
];

export const TECH_STACK_CATEGORIES: SkillCategory[] = [
  {
    id: "mobile-frontend",
    title: "Mobile & Frontend",
    subtitle: "Kullanıcı deneyimi ve mobil platform mühendisliği",
    icon: "Smartphone",
    badge: "Core Stack",
    skills: [
      { name: "Flutter", highlight: true, badge: "Advanced" },
      { name: "Dart", highlight: true },
      { name: "React Native", highlight: true, badge: "Advanced" },
      { name: "Expo" },
      { name: "TypeScript", highlight: true },
      { name: "Tailwind CSS", highlight: true },
      { name: "Next.js" },
      { name: "State Management (Bloc, Zustand)" },
    ],
  },
  {
    id: "backend-systems",
    title: "Backend & Systems",
    subtitle: "Düşük gecikmeli sunucular ve sistem seviyesi kodlama",
    icon: "Server",
    badge: "High Performance",
    skills: [
      { name: "Python", highlight: true, badge: "Primary" },
      { name: "FastAPI", highlight: true, badge: "Primary" },
      { name: "Rust", highlight: true, badge: "Systems" },
      { name: "Firebase" },
      { name: "PostgreSQL & SQLite" },
      { name: "RESTful Architecture" },
      { name: "AsyncIO & Multithreading" },
      { name: "Pydantic & SQLAlchemy" },
    ],
  },
  {
    id: "ai-data",
    title: "AI, LLM & Data",
    subtitle: "Büyük dil modelleri, RAG ve veri madenciliği",
    icon: "BrainCircuit",
    badge: "Academic R&D",
    skills: [
      { name: "LLM API Integration", highlight: true, badge: "DeepSeek / OpenAI" },
      { name: "RAG & Vector DBs", highlight: true, badge: "FAISS / Chroma" },
      { name: "Prompt Engineering", highlight: true },
      { name: "Open-Source Text Mining" },
      { name: "Decision Support Systems (DSS)" },
      { name: "Pandas & Data Wrangling" },
      { name: "Sentiment Analysis" },
    ],
  },
  {
    id: "devops-os",
    title: "DevOps, OS & Tooling",
    subtitle: "Linux gücü, konteynerizasyon ve dağıtık mimariler",
    icon: "Terminal",
    badge: "Environment",
    skills: [
      { name: "CachyOS Linux", highlight: true, badge: "Daily Driver" },
      { name: "Hyprland / Wayland", highlight: true },
      { name: "Bash & Fish Shell" },
      { name: "Docker & Compose", highlight: true },
      { name: "Git & GitHub CI" },
      { name: "Oracle Cloud (ARM)" },
      { name: "Cloudflare Tunnels" },
      { name: "Kitty Terminal / Neovim" },
    ],
  },
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: "msku-mis",
    degree: "Lisans Derecesi (Bachelor's)",
    field: "Yönetim Bilişim Sistemleri (MIS)",
    institution: "Muğla Sıtkı Koçman Üniversitesi",
    period: "2023 – Devam Ediyor",
    status: "Devam Ediyor",
    statusBadge: "4. Sınıf / Senior",
    location: "Muğla, Türkiye",
    description:
      "İşletme süreçlerinin yazılım ve bilişim sistemleriyle entegrasyonu, karar destek sistemleri, kurumsal veri tabanı yönetimi, yazılım proje yönetimi ve stratejik bilgi teknolojileri mimarisi odaklı eğitim.",
    highlights: [
      "Karar Destek Sistemleri (DSS) ve Veri Ambarı Mimarileri",
      "Kurumsal Yazılım Mühendisliği & Sistem Analizi ve Tasarımı",
      "SAYZEK LLM Araştırma Tezi Proje Yürütücülüğü & Teknik Liderlik",
      "Bilişim Hukuku, Veri Güvenliği ve Proje Yaşam Döngüsü (SDLC)",
    ],
  },
  {
    id: "cukurova-prog",
    degree: "Önlisans Derecesi (Associate's)",
    field: "Bilgisayar Programcılığı",
    institution: "Çukurova Üniversitesi (Adana MYO)",
    period: "2021 – 2026",
    status: "Mezun",
    statusBadge: "Mezuniyet: Temmuz 2026",
    location: "Adana, Türkiye",
    description:
      "Temel bilgisayar bilimleri, algoritmik düşünce, nesne yönelimli programlama, ilişkisel veritabanları ve modern web/mobil uygulama geliştirme prensipleri.",
    highlights: [
      "Veri Yapıları ve İleri Algoritmalar",
      "Nesne Yönelimli Programlama (OOP) İlkeleri",
      "İlişkisel Veritabanı Tasarımı (SQL / Normalizasyon)",
      "Ağ Temelleri, Donanım Mimarisi ve İşletim Sistemleri",
    ],
  },
];

export const CERTIFICATIONS_DATA: CertificationItem[] = [
  {
    id: "sayzek",
    title: "SAYZEK Akademik Tez Programı",
    organization: "SAYZEK (Savunma & Siber Araştırma Merkezi)",
    programType: "Akademik R&D & Tez Projesi",
    period: "2024 – 2025",
    role: "Büyük Dil Modelleri ve Karar Destek Sistemleri Araştırmacısı / Teknik Lider",
    description:
      "Açık kaynak metin yığınlarından karar destek brifinglerinin LLM ve RAG teknikleriyle otomatik üretilmesi projesinde teknik liderlik, sistem mimarisi ve vektör arama entegrasyonu.",
    badge: "Teknik Lider",
    skillsAcquired: ["RAG Architecture", "Prompt Engineering", "Team Leadership", "Decision Support"],
    link: "#",
  },
  {
    id: "siber-vatan",
    title: "Siber Vatan Eğitim Programı",
    organization: "Sanayi ve Teknoloji Bakanlığı & Kalkınma Ajansları",
    programType: "Ulusal Yetkinlik Programı",
    period: "2023 – 2024",
    role: "Yapay Zeka ve Siber Güvenlik Teknik Eğitimi Bursiyeri",
    description:
      "Ağ güvenliği, penetrasyon testi temelleri, güvenli yazılım geliştirme prensipleri ve yapay zeka odaklı güvenlik mekanizmaları üzerine kapsamlı teknik eğitim kampı.",
    badge: "Sertifikalı",
    skillsAcquired: ["Cyber Security", "Network Forensics", "Secure Coding", "Linux Hardening"],
    link: "#",
  },
  {
    id: "yok-dijital",
    title: "YÖK Dijital Üniversite Platformu",
    organization: "Yükseköğretim Kurulu (YÖK)",
    programType: "Uzmanlık Sertifikasyonları",
    period: "2023",
    role: "Makine Öğrenmesi ve Modern Yazılım Geliştirme",
    description:
      "Makine öğrenmesi modelleri, denetimli/denetimsiz öğrenme, Python veri bilimi kütüphaneleri ve modern backend mikroservis mimarileri tamamlama sertifikaları.",
    badge: "Onaylı",
    skillsAcquired: ["Machine Learning", "Data Science", "Python", "Modern Software Arch"],
    link: "#",
  },
  {
    id: "flutter-advanced",
    title: "Cross-Platform Mobile Architecture with Flutter",
    organization: "Profesyonel Mobil Geliştirme Programı",
    programType: "Mobil Uzmanlık",
    period: "2023",
    role: "Mobil Mühendislik",
    description:
      "Clean Architecture, BLoC / Riverpod State Management, Native Entegrasyonlar ve Test Otomasyonu.",
    badge: "Mobil Uzmanlık",
    skillsAcquired: ["Flutter", "Dart", "Clean Architecture", "Reactive UI"],
    link: "#",
  },
];

export const BOOKS_DATA: BookItem[] = [
  {
    id: "1984",
    title: "1984",
    author: "George Orwell",
    category: "classics",
    categoryLabel: "Klasikler & Distopya",
    note: "Gözetim toplumu, dilin daraltılması yoluyla düşüncenin kontrolü (Newspeak) ve totaliter bilgi manipülasyonunun nihai analizi.",
    keyTakeaway: "Dil ve bilginin mimarisi, zihinsel sınırları belirler.",
    spineColor: "border-red-900/40 bg-gradient-to-b from-red-950/30 to-zinc-950",
    badge: "Distopya",
    status: "Tamamlandı",
  },
  {
    id: "freud-jung",
    title: "Psikanaliz ve Rüya Yorumları",
    author: "Sigmund Freud & Carl G. Jung",
    category: "psychology",
    categoryLabel: "Psikoloji & Bilinçaltı",
    note: "Bilinçdışı sembolizm, rüyalardaki yer değiştirme/yoğunlaşma mekanizmaları ve kolektif bilinçdışının evrensel arketipleri.",
    keyTakeaway: "Oneiro projesinin sembol haritalama algoritmasına esin kaynağı olan psikanalitik temel.",
    spineColor: "border-indigo-900/40 bg-gradient-to-b from-indigo-950/30 to-zinc-950",
    badge: "Psikanaliz",
    status: "Tamamlandı",
  },
  {
    id: "ruya-kulliyati",
    title: "Klasik Rüya Tabirleri Külliyatı",
    author: "İbn Şirin, Abdülgani en-Nablusi & Artemidorus",
    category: "psychology",
    categoryLabel: "Psikoloji & Bilinçaltı",
    note: "Oneiro projesi için incelenen tarihsel, kültürel ve sembolik metinler. Doğu ve Batı antik rüya hermeneutiğinin mukayesesi.",
    keyTakeaway: "Tarihsel sembol dizgeleri, modern doğal dil işleme için zengin bir anlamsal veri kaynağı sunar.",
    spineColor: "border-amber-900/40 bg-gradient-to-b from-amber-950/30 to-zinc-950",
    badge: "Hermeneutik",
    status: "Tamamlandı",
  },
  {
    id: "brave-new-world",
    title: "Cesur Yeni Dünya (Brave New World)",
    author: "Aldous Huxley",
    category: "classics",
    categoryLabel: "Klasikler & Distopya",
    note: "Baskı yerine konfor ve yapay hazla sağlanan itaat; teknolojik koşullanmanın ve bireysellik kaybının soğuk anatomisi.",
    keyTakeaway: "Kişinin dikkat ve iradesini koruması, dijital çağın en radikal direnişidir.",
    spineColor: "border-emerald-900/40 bg-gradient-to-b from-emerald-950/30 to-zinc-950",
    badge: "Distopya",
    status: "Tamamlandı",
  },
  {
    id: "clean-code",
    title: "Clean Code: A Handbook of Agile Software Craftsmanship",
    author: "Robert C. Martin (Uncle Bob)",
    category: "systems",
    categoryLabel: "Yazılım & Sistem",
    note: "Sürdürülebilir yazılım mimarisi, kodun kendini belgelemesi prensibi, fonksiyonel atomisite ve teknik borçla mücadele rehberi.",
    keyTakeaway: "Okunabilir kod yazmak, gelecekteki ekip arkadaşlarına ve kendine duyulan saygının ifadesidir.",
    spineColor: "border-blue-900/40 bg-gradient-to-b from-blue-950/30 to-zinc-950",
    badge: "Mimari",
    status: "Tamamlandı",
  },
  {
    id: "the-rust-book",
    title: "The Rust Programming Language",
    author: "Steve Klabnik & Carol Nichols",
    category: "reading",
    categoryLabel: "Şu an Okuduklarım",
    note: "Bellek güvenliği, çöp toplayıcısız (zero-cost abstractions) sahiplik modeli (ownership & borrowing) ve eşzamanlılık disiplini.",
    keyTakeaway: "Derleyiciyi bir engel değil, kusursuz sistemler inşa eden titiz bir ortak kılmak.",
    spineColor: "border-orange-900/40 bg-gradient-to-b from-orange-950/30 to-zinc-950",
    badge: "Sistem",
    status: "Şu an Okunuyor",
  },
  {
    id: "designing-data-intensive",
    title: "Designing Data-Intensive Applications",
    author: "Martin Kleppmann",
    category: "reading",
    categoryLabel: "Şu an Okuduklarım",
    note: "Güvenilirlik, ölçeklenebilirlik, veri modelleri, replikasyon, konsensüs algoritmaları ve modern dağıtık sistemler anatomisi.",
    keyTakeaway: "Her mimari karar, gecikme ile tutarlılık arasında bilinçli bir takastır.",
    spineColor: "border-cyan-900/40 bg-gradient-to-b from-cyan-950/30 to-zinc-950",
    badge: "Dağıtık Sistemler",
    status: "Şu an Okunuyor",
  },
];

export const USES_AND_SPECS: SpecCategory[] = [
  {
    title: "İşletim Sistemi & Terminal",
    icon: "Cpu",
    items: [
      {
        label: "Primary OS",
        value: "CachyOS Linux",
        detail: "Arch Linux tabanlı, x86-64-v3/v4 çekirdek optimizasyonlu performans dağıtımı.",
        tag: "Daily Driver",
      },
      {
        label: "Window Manager",
        value: "Hyprland / Wayland",
        detail: "Dinamik döşemeli (dynamic tiling), ultra akıcı animasyonlar ve minimalist iş istasyonu.",
        tag: "Tiling WM",
      },
      {
        label: "Terminal & Shell",
        value: "Kitty + Fish Shell",
        detail: "GPU hızlandırmalı terminal emülatörü, starship prompt ve zengin bash/fish script otomasyonu.",
        tag: "GPU Accelerated",
      },
      {
        label: "IDE & Editörler",
        value: "VS Code, Cursor & Neovim",
        detail: "AI-native kod üretimi için Cursor, hızlı sistem müdahaleleri için özelleştirilmiş Neovim.",
        tag: "AI Integrated",
      },
    ],
  },
  {
    title: "Disiplin & Bilişsel Beceriler",
    icon: "Zap",
    items: [
      {
        label: "10 Parmak Klavye Hızı",
        value: "115+ WPM (Net)",
        detail: "Adli Zabıt Katibi standartlarının üzerinde hız ve %98+ doğruluk. Düşünce hızında kodlama ve metin üretimi.",
        tag: "Master Speed",
      },
      {
        label: "Diksiyon & Hitabet",
        value: "İleri Düzey İfade",
        detail: "Net artikülasyon, akademik tez sunumları, ikna kabiliyeti ve teknik kavramları yalınlaştırma yetisi.",
        tag: "Etkili İletişim",
      },
      {
        label: "Yabancı Dil",
        value: "İngilizce (B2/C1)",
        detail: "Teknik literatür takibi, RFC dokümantasyonu, uluslararası açık kaynak toplulukları ile akıcı iletişim.",
        tag: "Technical English",
      },
      {
        label: "Çalışma Disiplini",
        value: "Deep Work Odaklı",
        detail: "Pomodoro & kesintisiz blok odaklanma seansları. Titiz not alma ve 'Second Brain' dokümantasyon disiplini.",
        tag: "Focus",
      },
    ],
  },
];
