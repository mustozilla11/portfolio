export interface ProjectDocSection {
  id: string;
  title: string;
  content: string;
  bulletPoints?: string[];
}

export interface ProjectDocumentation {
  overview: string;
  motivation: string;
  systemArchitecture: string;
  architectureFlow?: string[];
  sections: ProjectDocSection[];
  apiEndpoints?: { method: string; path: string; desc: string; samplePayload?: string }[];
  setupSteps?: string[];
  futureRoadmap?: string[];
}

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
  documentation?: ProjectDocumentation;
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
  badge?: string;
  description: string;
  skills: string[];
  credentialId?: string;
  type?: "ai" | "security" | "mobile" | "backend" | "systems";
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
    documentation: {
      overview:
        "Açık kaynak metin yığınlarından karar vericiler için anlık stratejik analiz ve durum brifingi üreten kurumsal Karar Destek Sistemi.",
      motivation:
        "Büyük hacimli heterojen veri kaynaklarından kritik sinyalleri ayıklamak ve doğrulanabilir analizler üretmek.",
      systemArchitecture:
        "Asenkron mikroservis mimarisi, vektörel indeksleme katmanı ve analitik yönetim arayüzü.",
      architectureFlow: [
        "Veri Alımı: Açık kaynak metinlerin toplanması ve ön temizleme adımları.",
        "Anlamsal İndeksleme: Metin parçalarının vektör uzayında indekslenmesi.",
        "Sorgu & Çıkarım: Karar destek sorgularının doğrulanmış bağlamla eşleştirilmesi.",
        "Raporlama & Görselleştirme: Yönetici paneline analiz çıktılarının aktarılması.",
      ],
      sections: [
        {
          id: "rag-pipeline",
          title: "Boru Hattı Mimarisi & Doğrulama",
          content:
            "Sistem, metin kaynakları ile model çıkarımları arasında doğrulama mekanizmaları barındırmaktadır. Teknik şartname detayları tez teslimi sürecinde güncellenecektir.",
          bulletPoints: [
            "Bağlamsal metin indeksleme ve anlamsal eşleme",
            "Kaynak referanslı çapraz kontrol yaklaşımı",
            "Asenkron servis altyapısı ve düşük gecikme",
          ],
        },
        {
          id: "tech-lead-decisions",
          title: "Sistem Tasarımı & Standartlar",
          content:
            "Mikroservis sözleşmeleri, veri katmanı modülerliği ve ölçeklenebilirlik prensipleri gözetilerek yapılandırılmıştır.",
          bulletPoints: [
            "Modüler servis mimarisi",
            "Yapısal loglama ve performans metrikleri",
          ],
        },
      ],
      apiEndpoints: [
        {
          method: "POST",
          path: "/api/v1/query",
          desc: "Karar alıcı sorgusunu alır ve bağlamsal analiz brifingi döner.",
        },
        {
          method: "GET",
          path: "/api/v1/health",
          desc: "Servis sağlık ve indeks durumu kontrolü.",
        },
      ],
      setupSteps: [
        "Depoyu klonlayın: git clone <repo-url>",
        "Gerekli ortam değişkenlerini (.env) yapılandırın",
        "Bağımlılıkları yükleyin ve yerel geliştirme sunucusunu başlatın",
      ],
      futureRoadmap: [
        "Çoklu veri kaynağı entegrasyonu",
        "Performans ve indeksleme optimizasyonları",
      ],
    },
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
    documentation: {
      overview:
        "Doğu hermeneutiği ile analitik psikoloji sembolizmini birleştiren hibrit rüya analitiği ve bilinçaltı günlüğü mobil uygulaması.",
      motivation:
        "Rüyaları rastgele yorumlar yerine sembolik ve kavramsal referanslar ışığında çözümleyen modern bir mobil deneyim sunmak.",
      systemArchitecture:
        "Flutter ile geliştirilen istemci katmanı, asenkron backend servisleri ve çevrimdışı öncelikli yerel veri tabanı.",
      architectureFlow: [
        "Rüya Girişi: Kullanıcının metin veya ses ile rüyasını kaydetmesi.",
        "Sembol Ayrıştırma: Metindeki kavramsal sembollerin tespiti.",
        "Çözümleme & Akış: Asenkron akış ile kullanıcının ekranına canlı aktarım.",
        "Günlük & İstatistik: Yerel şifreli günlükte tematik geçmişin saklanması.",
      ],
      sections: [
        {
          id: "hermeneutics-psychology",
          title: "Kavramsal Çerçeve & Sembol Kütüphanesi",
          content:
            "Klasik metin külliyatı ile psikolojik arketip haritalaması temel alınarak kurgulanmıştır. Ayrıntılı sembol ağacı dokümantasyonu eklenecektir.",
          bulletPoints: [
            "3.500+ kavramsal sembol eşleştirmesi",
            "Döngüsel rüya temaları analizi",
          ],
        },
        {
          id: "flutter-clean-arch",
          title: "Mobil İstemci Mimarisi",
          content:
            "Clean Architecture prensipleriyle katmanlara ayrılmış, durum yönetimi BLoC deseniyle izole edilmiş mobil uygulama mimarisi.",
          bulletPoints: [
            "Offline-first yerel veri tabanı desteği",
            "Asenkron canlı akış tüketimi",
          ],
        },
      ],
      apiEndpoints: [
        {
          method: "POST",
          path: "/api/v1/analyze",
          desc: "Rüya metnini alır ve analiz çıktısını asenkron olarak iletir.",
        },
      ],
      setupSteps: [
        "Mobil istemci klasörüne girin: cd oneiro_app",
        "Paketleri yükleyin: flutter pub get",
        "Uygulamayı çalıştırın: flutter run",
      ],
      futureRoadmap: [
        "Gelişmiş rüya trend grafikleri",
        "Sesli rüya kayıt modülü",
      ],
    },
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
    documentation: {
      overview:
        "Tarımsal üreticiler ile alıcıları doğrudan buluşturan konum tabanlı mobil pazar yeri uygulaması.",
      motivation:
        "Üretici ve tüketici arasındaki aracı zincirlerini azaltarak doğrudan iletişimi ve şeffaf fiyatlandırmayı desteklemek.",
      systemArchitecture:
        "React Native & Expo tabanlı çapraz platform mobil arayüz ve gerçek zamanlı bulut veri tabanı altyapısı.",
      architectureFlow: [
        "İlan Girişi: Üreticinin ürün, hasat ve fiyat bilgilerini paylaşması.",
        "Konum Eşleştirme: Çevredeki alıcıların harita ve liste üzerinde filtrelenmesi.",
        "Doğrudan İletişim: Alıcı ile üretici arasında anlık mesajlaşma.",
        "Teslimat: Aracısız lojistik ve ürün teslim koordinasyonu.",
      ],
      sections: [
        {
          id: "react-native-expo",
          title: "Mobil Arayüz & Reaktif Veri",
          content:
            "Expo ve React Native kullanılarak geliştirilmiş, gerçek zamanlı veri akışı ve düşük veri tüketimi odaklı mobil mimari.",
          bulletPoints: [
            "Çapraz platform (iOS & Android) desteği",
            "Anlık ilan ve mesaj senkronizasyonu",
          ],
        },
      ],
      setupSteps: [
        "Bağımlılıkları yükleyin: npm install",
        "Expo geliştirme sunucusunu başlatın: npx expo start",
      ],
      futureRoadmap: [
        "Toplu taşıma ve kooperatif entegrasyonu",
        "Ürün kalite sertifikasyonu modülü",
      ],
    },
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
    documentation: {
      overview:
        "Teknik göstergeler ve haber duygu analiziyle çalışan terminal tabanlı kantitatif işlem ve strateji test aracı.",
      motivation:
        "Grafik arayüz yükü olmadan, doğrudan konsol üzerinden düşük gecikmeli piyasa takibi ve disiplinli risk yönetimi sağlamak.",
      systemArchitecture:
        "Borsa API bağlantısı, vektörize gösterge hesaplama motoru ve Python Rich kütüphanesiyle canlı TUI konsol paneli.",
      architectureFlow: [
        "Veri Akışı: Mum ve emir defteri verilerinin çekilmesi.",
        "İndikatör Motoru: Teknik analiz göstergelerinin hesaplanması.",
        "Risk Kontrolü: Dinamik stop seviyeleri ve pozisyon yönetimi.",
        "Konsol Renderı: Canlı metriklerin terminal paneline basılması.",
      ],
      sections: [
        {
          id: "quant-engine",
          title: "Kantitatif Kurallar & Risk Disiplini",
          content:
            "Matematiksel sinyal doğrulaması ve katı risk yönetimi kurallarıyla çalışan CLI aracı. İleri seviye parametreler yakında belgelenecektir.",
          bulletPoints: [
            "Çoklu zaman dilimi doğrulaması",
            "Volatiliteye göre dinamik stop mekanizması",
          ],
        },
      ],
      setupSteps: [
        "Bağımlılıkları yükleyin: pip install -r requirements.txt",
        "Konsol arayüzünü başlatın: python main.py",
      ],
      futureRoadmap: [
        "Rust ile WebSocket motoru optimizasyonu",
        "Gelişmiş strateji simülasyonları",
      ],
    },
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
    title: "SAYZEK Akademik Tez & Araştırma Programı",
    organization: "SAYZEK & Savunma Sanayii / Akademik Yapay Zeka",
    period: "2024 – 2025",
    role: "Teknik Lider / Araştırmacı",
    badge: "Tez & Araştırma",
    type: "ai",
    credentialId: "SAYZEK-2024-RAG-LEAD",
    description:
      "Büyük dil modelleri (LLM) ile açık kaynak metin verilerinden otomatik stratejik karar destek brifingi üretilmesi projesinde teknik liderlik, RAG boru hattı mimarisi ve FAISS vektör indeksleme yönetimi.",
    skills: ["RAG Architecture", "Prompt Engineering", "FAISS / Vector Search", "FastAPI", "Team Leadership"],
  },
  {
    id: "siber-vatan",
    title: "Siber Vatan Yetkinlik & Eğitim Programı",
    organization: "Sanayi ve Teknoloji Bakanlığı & Kalkınma Ajansları",
    period: "2023 – 2024",
    role: "Teknik Eğitim Bursiyeri",
    badge: "Siber Güvenlik & Sistem",
    type: "security",
    credentialId: "SV-BAKA-2023-CERT",
    description:
      "Linux çekirdek güvenliği, ağ mimarisi (TCP/IP), tersine mühendislik temelleri, sızma testi pratikleri ve güvenli yazılım geliştirme metodolojileri üzerine yoğun uygulamalı teknik kamp.",
    skills: ["Linux Hardening", "Network Security", "Secure Coding", "Bash Scripting", "Reverse Engineering"],
  },
  {
    id: "yok-dijital",
    title: "YÖK Dijital Üniversite: Makine Öğrenmesi & Veri Bilimi",
    organization: "Yükseköğretim Kurulu (YÖK) & Dijital Dönüşüm Platformu",
    period: "2023",
    role: "Program Mezunu",
    badge: "Yapay Zeka & Veri",
    type: "ai",
    credentialId: "YOK-DU-ML-2023",
    description:
      "Denetimli/denetimsiz makine öğrenmesi algoritmaları, özellik mühendisliği (feature engineering), veri temizleme ve üretim ortamında ML modelleri dağıtımı.",
    skills: ["Machine Learning", "Python Scikit-Learn", "Data Preprocessing", "Statistical Modeling", "Pandas & NumPy"],
  },
  {
    id: "flutter-crossplatform",
    title: "Modern Mobil Mimari & Flutter Uzmanlığı",
    organization: "Cross-Platform Mobil Mühendisliği Programı",
    period: "2023 – 2024",
    role: "Sertifikalı Mobil Geliştirici",
    badge: "Mobil Mühendislik",
    type: "mobile",
    credentialId: "FLT-ARCH-2024",
    description:
      "Flutter & Dart ile reaktif durum yönetimi (Bloc/Riverpod), Clean Architecture katmanlı yazılım tasarımı, SQLite/Isar çevrimdışı öncelikli mimari ve yerel platform köprüleri.",
    skills: ["Flutter & Dart", "Clean Architecture", "Bloc & Riverpod", "Offline-First SQLite", "Native Bridge"],
  },
  {
    id: "fastapi-systems",
    title: "Yüksek Performanslı Asenkron API & Sistem Mimarisi",
    organization: "Backend Software Engineering & Performance Systems",
    period: "2024",
    role: "Arka Uç Geliştirici",
    badge: "Backend & Systems",
    type: "backend",
    credentialId: "FAST-ASYNC-2024",
    description:
      "FastAPI, AsyncIO ve PyDantic ile yüksek eşzamanlılıklı (high-concurrency) mikroservis mimarileri, PostgreSQL havuz yönetimi ve konteynerizasyon pratikleri.",
    skills: ["FastAPI", "AsyncIO", "PostgreSQL Pool", "Docker Containerization", "API Performance"],
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
