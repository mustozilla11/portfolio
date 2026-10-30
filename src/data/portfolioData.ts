export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: "mobile" | "ai" | "systems" | "fintech";
  categoryLabel: string;
  description: string;
  problemAndSolution: string;
  architectureHighlights: string[];
  stack: string[];
  metrics?: { label: string; value: string }[];
  githubUrl?: string;
  liveUrl?: string;
  status: "Geliştiriliyor" | "Tamamlandı" | "Tez Projesi";
}

export interface SkillCategory {
  id: string;
  title: string;
  subtitle: string;
  skills: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  field: string;
  institution: string;
  period: string;
  statusBadge: string;
  description: string;
  topics: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  organization: string;
  period: string;
  role: string;
  description: string;
  skills: string[];
}

export interface BookItem {
  id: string;
  title: string;
  author: string;
  category: "reading" | "psychology" | "classics" | "systems";
  categoryLabel: string;
  note: string;
  status: "Okunuyor" | "Okundu";
}

export interface SpecCategory {
  title: string;
  items: { label: string; value: string; detail: string }[];
}

export const PERSONAL_DATA = {
  name: "Mustafa Özlü",
  statusBadge: {
    text: "Yeni Fırsatlara & Projelere Açık",
    available: true,
  },
  email: "mustafaozlu.dev@gmail.com",
  github: "https://github.com/mustozilla11",
  linkedin: "https://linkedin.com/in/mustafaozlu",
  stats: [
    { label: "Klavye Hızı", value: "115+ WPM", sub: "10 Parmak (Net)" },
    { label: "Geliştirme", value: "Flutter & RN", sub: "iOS & Android" },
    { label: "Backend", value: "FastAPI / Rust", sub: "Async & High Perf" },
    { label: "Sistem", value: "CachyOS Linux", sub: "Hyprland Tiling" },
  ],
};

export const PROJECTS_DATA: Project[] = [
  {
    id: "sayzek-llm-dss",
    title: "LLM Karar Destek Sistemi",
    subtitle: "SAYZEK Tez Projesi — Açık Kaynak Metin Madenciliği",
    category: "ai",
    categoryLabel: "AI / LLM & RAG",
    description:
      "Açık kaynak metin yığınlarından (haber, rapor, mevzuat) stratejik karar alıcılar için otomatik brifing ve analiz üreten karar destek sistemi.",
    problemAndSolution:
      "Dağınık metin kaynaklarını anlamsal olarak indeksleyip halüsinasyon riskini en aza indiren bir RAG boru hattı kurdum. Projede teknik lider olarak mimari kararları, API sözleşmelerini ve arayüz entegrasyonunu yönetiyorum.",
    architectureHighlights: [
      "Retrieval-Augmented Generation (RAG): Vektör veritabanı (FAISS/Chroma) ile bağlamsal veri alımı",
      "Doğrulama Katmanı: Çıktıların kaynak metin referanslarıyla çapraz kontrolü",
      "Yönetici Arayüzü: Duyarlılık ve risk haritalarını gösteren sade analitik paneli",
    ],
    stack: ["Python", "FastAPI", "Vector DB", "RAG Pipeline", "TypeScript", "React"],
    metrics: [
      { label: "Rol", value: "Teknik Lider" },
      { label: "RAG Kesinliği", value: "%94+" },
      { label: "Veri", value: "Heterojen Metin" },
    ],
    githubUrl: "https://github.com/mustozilla11/sayzek-decision-support",
    status: "Tez Projesi",
  },
  {
    id: "oneiro",
    title: "Oneiro",
    subtitle: "Yapay Zeka Destekli Mobil Rüya Analizi",
    category: "mobile",
    categoryLabel: "Mobil & LLM",
    description:
      "Klasik Doğu metinleri (İbn Şirin, Nablusi) ile modern Jungiyen psikanaliz arketiplerini hibrit bir prompt zinciriyle birleştiren mobil uygulama.",
    problemAndSolution:
      "Kullanıcının girdiği rüyayı sembollerine ayırıp asenkron SSE (Server-Sent Events) ile düşük gecikmeyle analiz eden bir mimari kurdum. Veriler yerelde SQLite üzerinde tutuluyor.",
    architectureHighlights: [
      "Hibrit Çözümleme: Klasik külliyat + Jungiyen bilinçdışı sembol haritalaması",
      "Asenkron Akış: FastAPI üzerinde Server-Sent Events (SSE) ile anlık yanıt akışı",
      "Yerel Öncelikli Veri: SQLite ile çevrimdışı rüya günlüğü desteği",
    ],
    stack: ["Flutter", "Dart", "FastAPI", "Python", "DeepSeek API", "SQLite"],
    metrics: [
      { label: "Yanıt Gecikmesi", value: "<1.2s" },
      { label: "Sembol Kaydı", value: "3.500+" },
      { label: "Mimari", value: "Async Microservice" },
    ],
    githubUrl: "https://github.com/mustozilla11/oneiro_app",
    status: "Geliştiriliyor",
  },
  {
    id: "ciftciden",
    title: "Çiftçiden",
    subtitle: "Tarımsal Üretici ve Tüketici Mobil Pazaryeri",
    category: "mobile",
    categoryLabel: "Mobil Pazaryeri",
    description:
      "Tarımsal üreticilerle tüketicileri doğrudan buluşturan, aracı zincirlerini kaldıran konum destekli mobil uygulama.",
    problemAndSolution:
      "Çiftçilerin tarladan ürün ilanı verebildiği, tüketicilerin ise yakınındaki üreticileri filtreleyip mesajlaşabildiği bir pazar yeri prototipi. Expo ve Firebase altyapısıyla reaktif olarak çalışıyor.",
    architectureHighlights: [
      "Çapraz Platform: React Native ve Expo ile iOS/Android desteği",
      "Gerçek Zamanlı Veri: Firestore ile anlık bildirim ve ilan senkronizasyonu",
      "Coğrafi Filtreleme: Lokasyona göre üretici ve teslimat bölgesi listeleme",
    ],
    stack: ["React Native", "Expo", "TypeScript", "Tailwind CSS", "Firebase"],
    metrics: [
      { label: "Platform", value: "iOS & Android" },
      { label: "Arayüz", value: "NativeWind" },
      { label: "Veri", value: "Firestore Realtime" },
    ],
    githubUrl: "https://github.com/mustozilla11/ciftciden",
    status: "Tamamlandı",
  },
  {
    id: "binance-quant-bot",
    title: "Terminal-Based Trading Bot",
    subtitle: "Kantitatif Göstergeler & Konsol Arayüzü",
    category: "fintech",
    categoryLabel: "Sayısal Finans & CLI",
    description:
      "Teknik analiz indikatörleri ve haber duygu skorlamasıyla çalışan, terminal tabanlı simüle algoritmik ticaret aracı.",
    problemAndSolution:
      "Grafik arayüz yükü olmadan, doğrudan terminal üzerinden emir defteri analizi, dinamik risk yönetimi (Trailing Stop, ATR) ve backtesting imkanı sunan bir CLI uygulaması.",
    architectureHighlights: [
      "Teknik Motor: RSI, EMA kesişimleri ve Bollinger Bantları ile çoklu zaman dilimi doğrulaması",
      "Duygu Analizi: Haber akışlarından metin madenciliği ile duyarlılık puanlaması",
      "Terminal Arayüzü: Python Rich ile gerçek zamanlı konsol dashboard'u",
    ],
    stack: ["Python", "Rich CLI", "Pandas", "NumPy", "CCXT"],
    metrics: [
      { label: "İndikatör", value: "12+ Aktif" },
      { label: "Arayüz", value: "TUI / Terminal" },
      { label: "Motor", value: "Pandas & CCXT" },
    ],
    githubUrl: "https://github.com/mustozilla11/binance_quant_bot",
    status: "Geliştiriliyor",
  },
];

export const TECH_STACK_CATEGORIES: SkillCategory[] = [
  {
    id: "mobile-frontend",
    title: "Mobile & Frontend",
    subtitle: "Kullanıcı deneyimi ve mobil platform geliştirme",
    skills: ["Flutter", "Dart", "React Native", "Expo", "TypeScript", "Tailwind CSS", "Next.js"],
  },
  {
    id: "backend-systems",
    title: "Backend & Systems",
    subtitle: "Düşük gecikmeli API'ler ve sistem mimarisi",
    skills: ["Python", "FastAPI", "Rust", "PostgreSQL", "SQLite", "Firebase", "AsyncIO"],
  },
  {
    id: "ai-data",
    title: "AI & Data",
    subtitle: "Büyük dil modelleri, vektör indeksleme ve metin madenciliği",
    skills: ["LLM Entegrasyonu", "RAG & Vector DBs (FAISS)", "Prompt Tasarımı", "Metin Madenciliği", "Pandas"],
  },
  {
    id: "devops-os",
    title: "Linux & Tooling",
    subtitle: "Günlük iş istasyonu, konteynerler ve geliştirme araçları",
    skills: ["CachyOS Linux", "Hyprland / Wayland", "Fish Shell", "Docker", "Git", "Kitty Terminal", "Neovim"],
  },
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: "msku-mis",
    degree: "Lisans",
    field: "Yönetim Bilişim Sistemleri (MIS)",
    institution: "Muğla Sıtkı Koçman Üniversitesi",
    period: "2023 – Devam Ediyor",
    statusBadge: "4. Sınıf / Senior",
    description:
      "Karar destek sistemleri, kurumsal veri tabanı yönetimi, yazılım proje yaşam döngüsü ve bilgi sistemleri mimarisi odaklı eğitim.",
    topics: [
      "Karar Destek Sistemleri (DSS)",
      "Veritabanı Sistemleri & SQL",
      "Sistem Analizi ve Tasarımı",
      "SAYZEK Araştırma Projesi Teknik Liderliği",
    ],
  },
  {
    id: "cukurova-prog",
    degree: "Önlisans",
    field: "Bilgisayar Programcılığı",
    institution: "Çukurova Üniversitesi (MYO)",
    period: "2021 – 2026",
    statusBadge: "Mezuniyet: Temmuz 2026",
    description:
      "Temel bilgisayar bilimleri, algoritmik düşünce, nesne yönelimli programlama ve veri yapıları temeli.",
    topics: [
      "Veri Yapıları ve Algoritmalar",
      "Nesne Yönelimli Programlama",
      "İlişkisel Veritabanları",
      "Ağ ve İşletim Sistemi Temelleri",
    ],
  },
];

export const CERTIFICATIONS_DATA: CertificationItem[] = [
  {
    id: "sayzek",
    title: "SAYZEK Akademik Tez Programı",
    organization: "SAYZEK",
    period: "2024 – 2025",
    role: "Teknik Lider / Araştırmacı",
    description:
      "Büyük dil modelleriyle açık kaynak metin verilerinden otomatik karar destek brifingi üretilmesi projesinde teknik liderlik ve RAG boru hattı mimarisi.",
    skills: ["RAG Architecture", "Prompt Engineering", "Team Leadership"],
  },
  {
    id: "siber-vatan",
    title: "Siber Vatan Eğitim Programı",
    organization: "Kalkınma Ajansları & Sanayi ve Teknoloji Bakanlığı",
    period: "2023 – 2024",
    role: "Eğitim Bursiyeri",
    description:
      "Ağ temelleri, Linux sistem güvenliği, güvenli kodlama pratikleri ve siber güvenlik odaklı teknik eğitim kampı.",
    skills: ["Linux Hardening", "Network Fundamentals", "Secure Coding"],
  },
  {
    id: "yok-dijital",
    title: "Makine Öğrenmesi & Modern Yazılım",
    organization: "YÖK Dijital Üniversite Platformu",
    period: "2023",
    role: "Program Katılımcısı",
    description:
      "Denetimli/denetimsiz makine öğrenmesi algoritmaları, veri önişleme ve modern mikroservis mimarileri tamamlama sertifikaları.",
    skills: ["Machine Learning", "Python", "Data Processing"],
  },
];

export const BOOKS_DATA: BookItem[] = [
  {
    id: "1984",
    title: "1984",
    author: "George Orwell",
    category: "classics",
    categoryLabel: "Distopya",
    note: "Dilin daraltılması yoluyla düşüncenin sınırlandırılması (Newspeak) ve bilgi manipülasyonu üzerine en berrak çözümleme.",
    status: "Okundu",
  },
  {
    id: "freud-jung",
    title: "Psikanaliz ve Rüya Yorumları",
    author: "Sigmund Freud & Carl G. Jung",
    category: "psychology",
    categoryLabel: "Psikoloji",
    note: "Bilinçdışı sembolizmi ve evrensel arketipler. Oneiro projesindeki sembol sınıflandırmasına ilham veren kaynak.",
    status: "Okundu",
  },
  {
    id: "ruya-kulliyati",
    title: "Klasik Rüya Tabirleri Külliyatı",
    author: "İbn Şirin, Nablusi & Artemidorus",
    category: "psychology",
    categoryLabel: "Hermeneutik",
    note: "Geleneksel sembol dizgelerini inceleyip günümüz NLP modelleri için kavramsal bağlam oluşturmak adına okuduğum metinler.",
    status: "Okundu",
  },
  {
    id: "the-rust-book",
    title: "The Rust Programming Language",
    author: "Steve Klabnik & Carol Nichols",
    category: "reading",
    categoryLabel: "Sistem",
    note: "Sahiplik (ownership) ve ödünç alma (borrowing) kurallarını, çöp toplayıcısız bellek güvenliğini kavramak için başucu kaynağım.",
    status: "Okunuyor",
  },
  {
    id: "designing-data-intensive",
    title: "Designing Data-Intensive Applications",
    author: "Martin Kleppmann",
    category: "reading",
    categoryLabel: "Dağıtık Sistemler",
    note: "Veri modelleri, replikasyon ve tutarlılık takaslarını gerçek sistem senaryolarıyla anlatan en iyi dağıtık sistemler kitabı.",
    status: "Okunuyor",
  },
  {
    id: "clean-code",
    title: "Clean Code",
    author: "Robert C. Martin",
    category: "systems",
    categoryLabel: "Yazılım",
    note: "Kodun bir kere yazılıp defalarca okunduğu gerçeği; okunabilirlik ve teknik borç yönetimi ilkeleri.",
    status: "Okundu",
  },
];

export const USES_AND_SPECS: SpecCategory[] = [
  {
    title: "İş İstasyonu & Sistem",
    items: [
      {
        label: "İşletim Sistemi",
        value: "CachyOS Linux (x86_64-v3)",
        detail: "Arch tabanlı, optimize çekirdekli günlük geliştirme ortamım.",
      },
      {
        label: "Pencere Yöneticisi",
        value: "Hyprland (Wayland)",
        detail: "Klavye odaklı dinamik döşemeli (tiling) pencere yönetimi.",
      },
      {
        label: "Terminal & Kabuk",
        value: "Kitty + Fish Shell",
        detail: "GPU hızlandırmalı terminal, starship prompt ve özel fonksiyonlar.",
      },
      {
        label: "Editörler",
        value: "VS Code, Cursor, Neovim",
        detail: "Hızlı düzenlemeler için Neovim, projeler için VS Code / Cursor.",
      },
    ],
  },
  {
    title: "Beceriler & Diller",
    items: [
      {
        label: "10 Parmak Hızı",
        value: "115+ WPM (Net)",
        detail: "Düşünce hızında kodlama ve dokümantasyon, yüksek doğruluk oranı.",
      },
      {
        label: "Diksiyon & Sunum",
        value: "Teknik Hitabet",
        detail: "Akademik proje sunumları ve karmaşık teknik konuları sade aktarabilme.",
      },
      {
        label: "İngilizce",
        value: "B2 / C1 (Teknik)",
        detail: "Teknik literatür, RFC takibi ve uluslararası dokümantasyon okuma.",
      },
    ],
  },
];
