export interface ProjectDocSection {
  id: string;
  title: string;
  content: string;
  bulletPoints?: string[];
  codeSnippet?: {
    language: string;
    code: string;
    caption?: string;
  };
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
        "SAYZEK (Savunma Sanayii Yapay Zeka Yetenek Kümelenmesi) Akademik Tez Programı kapsamında geliştirdiğim bu proje; haber bültenleri, teknik raporlar, resmi mevzuat ve akademik makaleler gibi devasa açık kaynak metin yığınlarından karar vericiler için anlık stratejik analiz ve durum brifingi üreten bir Karar Destek Sistemi'dir (Decision Support System).",
      motivation:
        "Stratejik karar alma süreçlerinde bilginin aşırı dağınıklığı ve zaman kısıtı en büyük darboğazdır. Karar alıcıların yüzlerce sayfalık metni okuyup kritik risk veya fırsat sinyallerini ayıklaması saatler sürer. Standart genel amaçlı LLM'ler ise güncel veriye doğrudan erişemez ve güvenilmez halüsinasyonlar üretebilir. Bu projede, RAG (Retrieval-Augmented Generation) mimarisi ve çok katmanlı kaynak atıf doğrulaması ile halüsinasyon riskini en aza indiren, şeffaf ve kurumsal güvenilirlikte bir sistem inşa edilmiştir.",
      systemArchitecture:
        "Sistem üç ana katmandan oluşur: 1) Asenkron Veri Toplama & Temizleme Boru Hattı, 2) Vektörel İndeksleme ve Re-Ranking Motoru (FAISS / HuggingFace), 3) FastAPI tabanlı RESTful API ve React/TypeScript Yönetici Arayüzü.",
      architectureFlow: [
        "Veri Girişi & Ön İşleme: Web kazıyıcılar ve belge ayrıştırıcılar (PDF, DOCX, HTML) metinleri temizler ve anlamsal paragraflara böler.",
        "Chunking & Vektörleştirme: Metinler 512 tokenlık örtüşmeli (overlap) pencereler halinde dil modelleriyle vektör uzayına izdüşürülür.",
        "Semantik İndeksleme: FAISS vektör veritabanında saklanan indeksler üzerinde kosinüs benzerliğiyle en alakalı bağlamlar saniyeler içinde çekilir.",
        "Cross-Encoder Re-Ranking: İlk aşamada getirilen aday metin parçaları, sorguyla anlamsal örtüşme derecesine göre yeniden sıralanır.",
        "Doğrulamalı Üretim: LLM'e sadece seçilmiş bağlam sunulur; model yanıt verirken her iddia için metin içi kaynak atfı [Kaynak #1, Sayfa 12] ekler.",
        "Duyarlılık ve Risk Sentezi: Üretilen analiz metni, duyarlılık motorundan geçirilerek yönetici özet paneline risk skoruyla aktarılır.",
      ],
      sections: [
        {
          id: "rag-pipeline",
          title: "RAG Boru Hattı ve Halüsinasyon Önleme",
          content:
            "Halüsinasyon riskini yok etmek amacıyla sistem 'Kapalı Alan Üretimi' (Closed-Domain Generation) kuralına göre yapılandırılmıştır. Model, dış dünyadaki önceden eğitilmiş genel bilgisinden ziyade yalnızca bağlam penceresine enjekte edilen doğrulanmış metin parçalarını kullanmaya zorlanır.",
          bulletPoints: [
            "Örtüşmeli Parçalama (Chunking): 512 token uzunluk ve 64 token örtüşme ile metin bağlam kaybı engellenir.",
            "Kosinüs Benzerliği Araması: FAISS HNSW indeksi ile milyonlarca doküman saniyenin onda biri sürede taranır.",
            "Doğrulama Filtresi: Çıktıda yer alan iddialar, kaynak metin cümleleriyle çapraz kontrole tabi tutulur (%94+ kesinlik skoru).",
          ],
          codeSnippet: {
            language: "python",
            caption: "FastAPI RAG Sorgu ve Kaynak Doğrulama Boru Hattı",
            code: `@router.post("/query", response_model=BriefingResponse)
async def generate_decision_briefing(request: QueryRequest):
    # 1. Semantik Arama ve Re-Ranking
    raw_contexts = await vector_service.search_faiss(
        query=request.query, 
        top_k=8
    )
    ranked_contexts = reranker.rank(
        query=request.query, 
        documents=raw_contexts, 
        top_n=4
    )
    
    # 2. Doğrulamalı Prompt Zinciri Oluşturma
    prompt = build_grounded_prompt(
        system_instruction=STRICT_EVIDENCE_PROMPT,
        context=ranked_contexts,
        question=request.query
    )
    
    # 3. Asenkron LLM Yanıtı ve Atıf Haritası
    llm_output = await llm_engine.generate(prompt)
    verified_citations = citation_validator.extract_and_verify(
        output=llm_output, 
        sources=ranked_contexts
    )
    
    return BriefingResponse(
        briefing=llm_output.text,
        citations=verified_citations,
        risk_score=llm_output.risk_metric,
        latency_ms=llm_output.latency
    )`,
          },
        },
        {
          id: "tech-lead-decisions",
          title: "Teknik Liderlik & Mimari Kararlar",
          content:
            "Projede teknik lider olarak; veri modellerinin standardizasyonu, mikroservis API sözleşmelerinin belirlenmesi ve makine öğrenmesi boru hattının üretim seviyesinde kararlılıkla çalışmasını koordine ettim.",
          bulletPoints: [
            "Asenkron Mimari: Yoğun metin işleme işlemlerinde FastAPI ve asyncio kullanarak I/O blokajı ortadan kaldırıldı.",
            "Modüler Veri Katmanı: İleride farklı vektör veritabanlarına (Chroma, Qdrant, Milvus) geçişi kolaylaştıran Repository Pattern uygulandı.",
            "Ölçülebilirlik & Loglama: Her sorgunun gecikme süresi, token tüketimi ve kaynak benzerlik skorları yapısal JSON formatında loglandı.",
          ],
        },
      ],
      apiEndpoints: [
        {
          method: "POST",
          path: "/api/v1/dss/query",
          desc: "Karar alıcı sorgusunu alır; RAG boru hattı üzerinden kaynak atıflı özet brifing üretir.",
        },
        {
          method: "POST",
          path: "/api/v1/dss/documents/index",
          desc: "Ham PDF/HTML metin belgesini vektörize edip FAISS indeksine ekler.",
        },
        {
          method: "GET",
          path: "/api/v1/dss/trends",
          desc: "Metin madenciliği çıktılarından zaman serili risk ve duyarlılık trend verilerini döner.",
        },
      ],
      setupSteps: [
        "Depoyu klonlayın: git clone https://github.com/mustozilla11/sayzek-decision-support.git",
        "Sanal ortamı oluşturup etkinleştirin: python -m venv venv && source venv/bin/activate",
        "Gerekli bağımlılıkları yükleyin: pip install -r requirements.txt",
        "Geliştirme sunucusunu başlatın: uvicorn app.main:app --host 0.0.0.0 --port 8000 --reload",
      ],
      futureRoadmap: [
        "Dağıtık vektör arama için Qdrant kümeleme mimarisine geçiş",
        "Çok modlu (Multimodal) metin + infografik grafik analiz desteği",
        "Kurumsal LDAP / SSO yetkilendirme entegrasyonu",
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
        "Oneiro, klasik Doğu metinlerinin (İbn Şirin, Nablusi) bin yıllık rüya hermeneutiği ile modern Batı derinlik psikolojisini (Carl Gustav Jung, arketipler ve gölge teorisi) sentezleyen, Flutter ile geliştirilmiş hibrit bir rüya analitiği ve bilinçaltı günlüğü mobil uygulamasıdır.",
      motivation:
        "Popüler rüya uygulamaları ya rastgele fal mantığıyla çalışmakta ya da yüzeysel genelgeçer metinler sunmaktadır. Oneiro ise rüyaları bilinçdışı zihnin evrensel sembolleri olarak ele alır. Kullanıcının girdiği rüyayı kavramsal sembollerine parçalayarak hem klasik kültürel tabir metinleri hem de analitik psikoloji prizmasından geçirir.",
      systemArchitecture:
        "İstemci tarafında Flutter (Dart) ve Clean Architecture ilkeleriyle inşa edilmiş bir mobil uygulama; sunucu tarafında ise FastAPI ile yönetilen asenkron mikroservis ve yerel SQLite veri tabanı yer almaktadır.",
      architectureFlow: [
        "Rüya Girişi & Yerel Şifreleme: Kullanıcı rüyasını kaydeder; metin yerel SQLite veritabanına kaydedilir.",
        "Sembol Ayrıştırma (NER): Metindeki ana nesneler, duygular ve eylemler LLM destekli sembol ayrıştırıcı tarafından tespit edilir.",
        "Hibrit Bilgi Bankası Sorgusu: 3.500'den fazla sembol kaydını barındıan yerel veri tabanından klasik ve arketipsel karşılıklar çekilir.",
        "FastAPI SSE Akışı: Sunucu, analiz çıktısını Server-Sent Events (SSE) ile token token mobil arayüze anlık aktarır.",
        "Duygu & Tema Haritası: Kullanıcının zaman içindeki rüya temaları (su, düşüş, kovalama, kapı) istatistiksel olarak görselleştirilir.",
      ],
      sections: [
        {
          id: "hermeneutics-psychology",
          title: "Kavramsal Temel: İbn Şirin'den Carl Jung'a",
          content:
            "Uygulamanın kalbinde iki farklı entelektüel gelenek yatar: İbn Şirin ve Abdülgani en-Nablusi'nin semantik nesne sınıflandırması ve Carl Gustav Jung'un arketipleri (Gölge, Persona, Anima/Animus, Bilge İhtiyar). Model, bu iki perspektifi çelişmeden, zenginleştirici iki ayrı gözlem katmanı olarak sunar.",
          bulletPoints: [
            "Sembol Dağarcığı: 3.500+ doğrulanmış klasik sembol ve psikolojik arketip eşleştirmesi.",
            "Kişiselleştirilmiş Bağlam: Kullanıcının önceki rüyalarındaki semboller hafızada tutularak döngüsel temalar tespit edilir.",
          ],
        },
        {
          id: "flutter-clean-arch",
          title: "Mobil İstemci Mimarisi (Clean Architecture)",
          content:
            "Flutter mimarisi Data, Domain ve Presentation katmanlarına ayrılmıştır. Durum yönetimi için BLoC/Cubit deseni tercih edilmiş olup UI katmanı iş mantığından tamamen soyutlanmıştır.",
          bulletPoints: [
            "Offline-First: İnternet bağlantısı olmasa dahi kullanıcı rüya yazabilir; cihazdaki SQLite veri tabanına yazılır.",
            "SSE Stream Tüketimi: Analiz başladığında kullanıcı beklemez; kelimeler akıcı bir daktilo efektiyle anında belirir.",
          ],
          codeSnippet: {
            language: "dart",
            caption: "Flutter BLoC Asenkron Analiz Akışı Dinleyicisi",
            code: `class DreamAnalysisBloc extends Bloc<DreamEvent, DreamState> {
  final DreamRepository repository;

  DreamAnalysisBloc({required this.repository}) : super(DreamInitial()) {
    on<AnalyzeDreamEvent>((event, emit) async {
      emit(DreamAnalyzing(accumulatedText: ""));
      
      try {
        final stream = repository.streamAnalysis(event.dreamText);
        await emit.forEach<String>(
          stream,
          onData: (chunk) {
            final current = (state is DreamAnalyzing) 
                ? (state as DreamAnalyzing).accumulatedText 
                : "";
            return DreamAnalyzing(accumulatedText: current + chunk);
          },
          onError: (error, stack) => DreamError(error.toString()),
        );
      } catch (e) {
        emit(DreamError(e.toString()));
      }
    });
  }
}`,
          },
        },
      ],
      apiEndpoints: [
        {
          method: "POST",
          path: "/api/v1/dreams/stream-analyze",
          desc: "Rüya metnini alır ve Server-Sent Events (SSE) ile gerçek zamanlı analiz akışı başlatır.",
        },
        {
          method: "GET",
          path: "/api/v1/symbols/lookup?symbol={name}",
          desc: "Sembol kütüphanesinden klasik ve psikolojik referans verilerini getirir.",
        },
      ],
      setupSteps: [
        "Depoyu klonlayın: git clone https://github.com/mustozilla11/oneiro_app.git",
        "Mobil istemci klasörüne girin: cd oneiro_app",
        "Flutter paketlerini alın: flutter pub get",
        "Uygulamayı emülatörde çalıştırın: flutter run",
      ],
      futureRoadmap: [
        "Kullanıcıya özel rüya döngüsü grafikleri ve frekans analiz paneli",
        "Sesli rüya kaydı için yerel Whisper ses tanıma entegrasyonu",
        "Biyometrik kilit ve uçtan uca şifreli bulut senkronizasyonu",
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
        "Çiftçiden, tarımsal üreticiler ile nihai tüketicileri ve yerel toptancıları doğrudan buluşturan, coğrafi konum tabanlı reaktif bir pazar yeri mobil uygulamasıdır. React Native ve Expo altyapısı üzerine inşa edilmiştir.",
      motivation:
        "Geleneksel tarım tedarik zincirinde tarladan sofraya kadar geçen aşamalarda 4-5 aracı komisyoncu devreye girmekte; bu da üreticinin maliyetinin altında satış yapmasına, tüketicinin ise fahiş fiyatlar ödemesine yol açmaktadır. Çiftçiden, üreticiye doğrudan dijital tezgah açma ve konum bazlı yerel alıcılarla doğrudan temas kurma gücü verir.",
      systemArchitecture:
        "React Native, TypeScript ve NativeWind (Tailwind CSS) ile geliştirilmiş çapraz platform mobil istemci; Firebase Cloud Firestore, Firebase Storage ve Auth altyapısı ile yönetilen gerçek zamanlı sunucusuz arka uç.",
      architectureFlow: [
        "Üretici İlanı Oluşturma: Çiftçi tarladaki mahsulün türünü, hasat tarihini, minimum alım miktarını ve fiyatını girer.",
        "Coğrafi Eşleştirme: Cihaz GPS koordinatları ile Firestore üzerinde coğrafi sorgu çalıştırılır ve en yakın ilanlar listelenir.",
        "Reaktif Sohbet & Pazarlık: Alıcı ve satıcı, aracı olmadan uygulama içi anlık mesajlaşma üzerinden fiyat ve lojistiği konuşur.",
        "Doğrudan Teslimat / Kargo: Mahsul aracısız şekilde doğrudan üreticiden alıcıya sevk edilir.",
      ],
      sections: [
        {
          id: "react-native-expo",
          title: "Mobil Mimari & Performans",
          content:
            "Uygulama tek kod tabanından hem iOS hem Android için derlenecek şekilde Expo ve React Native ile geliştirilmiştir. NativeWind kütüphanesi sayesinde performans kaybı yaşanmadan modern arayüz tasarımı sağlanmıştır.",
          bulletPoints: [
            "Reaktif Veri Akışı: Firestore Snapshot dinleyicileri ile yeni ilanlar ve mesajlar sayfa yenilemeden ekrana düşer.",
            "Düşük Veri Tüketimi: Çiftçilerin kırsal alanlardaki zayıf internet bağlantıları düşünülerek görsel sıkıştırma ve agresif önbellekleme (caching) uygulandı.",
          ],
          codeSnippet: {
            language: "typescript",
            caption: "React Native Gerçek Zamanlı Konum Tabanlı İlan Kancası (Hook)",
            code: `export const useNearbyListings = (userCoordinates: { lat: number; lng: number }, radiusKm: number) => {
  const [listings, setListings] = useState<Listing[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Coğrafi yarıçap sınırları hesaplanır
    const bounds = getGeohashRange(userCoordinates.lat, userCoordinates.lng, radiusKm);
    
    const unsubscribe = firestore()
      .collection('listings')
      .where('geohash', '>=', bounds.lower)
      .where('geohash', '<=', bounds.upper)
      .where('status', '==', 'ACTIVE')
      .orderBy('geohash')
      .onSnapshot((snapshot) => {
        const items = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Listing));
        setListings(items);
        setLoading(false);
      });

    return () => unsubscribe();
  }, [userCoordinates, radiusKm]);

  return { listings, loading };
};`,
          },
        },
      ],
      setupSteps: [
        "Depoyu klonlayın: git clone https://github.com/mustozilla11/ciftciden.git",
        "Bağımlılıkları yükleyin: cd ciftciden && npm install",
        "Expo geliştirme sunucusunu başlatın: npx expo start",
        "Telefonunuzdan Expo Go ile QR kodu okutun",
      ],
      futureRoadmap: [
        "Kooperatifler için toplu satış ve nakliye paylaşım modülü",
        "Ziraat mühendisleri için online danışmanlık ve hastalık tespit asistanı",
        "Entegre güvenli ödeme havuz sistemi (Escrow)",
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
        "Terminal-Based Algorithmic Trading Bot, teknik analiz göstergeleri (RSI, EMA Ribbon, Bollinger Bantları, ATR) ile finansal haber akışlarından üretilen duygu analizini (Sentiment Analysis) birleştiren, Python tabanlı bir kantitatif işlem ve strateji test motorudur.",
      motivation:
        "Klasik grafik arayüzlü işlem yazılımları aşırı sistem kaynağı tüketir, dikkat dağıtıcı görsel gürültü içerir ve otomatik kurallara sıkı sıkıya bağlı kalmayı zorlaştırır. Bu bot, bir Linux terminal iş istasyonu üzerinde tamamen klavye odaklı, düşük gecikmeli ve önceden tanımlanmış katı risk yönetimi kurallarıyla çalışır.",
      systemArchitecture:
        "CCXT kütüphanesi üzerinden borsa bağlantısı; Pandas ve NumPy ile vektörize teknik gösterge hesaplama; Python Rich kütüphanesi ile geliştirilmiş canlı TUI (Terminal User Interface) konsol arayüzü.",
      architectureFlow: [
        "Piyasa Verisi Toplama: CCXT ile mum (OHLCV) ve anlık emir defteri verileri çekilir.",
        "Vektörize Gösterge Motoru: Pandas üzerinde döngüsüz matris operasyonlarıyla RSI, EMA 20/50/200, Bollinger Bantları hesaplanır.",
        "Duygu Skorlama Katmanı: Finansal haber başlıkları metin madenciliğiyle taranarak piyasa duyarlılık katsayısı (-1.0 ile +1.0) çıkarılır.",
        "Risk Yönetimi ve Emir Kararı: Dinamik Trailing Stop, ATR bazlı pozisyon boyutlandırma ve risk/ödül oranı doğrulanır.",
        "Rich Konsol Gösterimi: Canlı fiyat tabloları, gösterge osilatörleri ve işlem logları estetik bir konsol paneline basılır.",
      ],
      sections: [
        {
          id: "quant-engine",
          title: "Kantitatif Gösterge & Risk Yönetim Kuralları",
          content:
            "Strateji motoru tek bir göstergeye güvenmek yerine çoklu zaman dilimi (MTF) doğrulaması kullanır. Trend yönü 4 saatlik grafikte EMA 200 ile belirlenirken, giriş sinyalleri 15 dakikalık grafikte RSI ve Bollinger sıkışmalarıyla tespit edilir.",
          bulletPoints: [
            "ATR Bazlı Pozisyon Boyutlandırma: Her işlemde toplam portföyün maksimum %1.5'i riske atılır.",
            "Dinamik Trailing Stop: Fiyat kâra geçtikçe stop seviyesi kârı koruyacak şekilde yukarı çekilir.",
            "Sıfır Duygu Prensibi: İşlem kararları önceden tanımlanmış matematiksel sinyal matrisine göre otonom verilir.",
          ],
          codeSnippet: {
            language: "python",
            caption: "Pandas ile Vektörize Çoklu Gösterge Sinyal Üretimi",
            code: `def calculate_trading_signals(df: pd.DataFrame) -> pd.DataFrame:
    # 1. EMA Ribbon Hesaplaması
    df['ema_fast'] = df['close'].ewm(span=20, adjust=False).mean()
    df['ema_slow'] = df['close'].ewm(span=50, adjust=False).mean()
    df['ema_trend'] = df['close'].ewm(span=200, adjust=False).mean()
    
    # 2. RSI (Relative Strength Index)
    delta = df['close'].diff()
    gain = (delta.where(delta > 0, 0)).rolling(window=14).mean()
    loss = (-delta.where(delta < 0, 0)).rolling(window=14).mean()
    rs = gain / loss
    df['rsi'] = 100 - (100 / (1 + rs))
    
    # 3. ATR (Average True Range) ile Volatilite
    df['tr'] = np.maximum(
        df['high'] - df['low'],
        np.maximum(abs(df['high'] - df['close'].shift()), abs(df['low'] - df['close'].shift()))
    )
    df['atr'] = df['tr'].rolling(window=14).mean()
    
    # 4. Giriş Kararı: Trend Yönünde Sinyal Doğrulama
    df['signal'] = np.where(
        (df['close'] > df['ema_trend']) & 
        (df['ema_fast'] > df['ema_slow']) & 
        (df['rsi'] < 45), 
        'LONG', 
        'NEUTRAL'
    )
    return df`,
          },
        },
      ],
      setupSteps: [
        "Depoyu klonlayın: git clone https://github.com/mustozilla11/binance_quant_bot.git",
        "Bağımlılıkları yükleyin: pip install -r requirements.txt",
        "Botu TUI modunda çalıştırın: python main.py --symbol BTC/USDT --timeframe 15m --live",
      ],
      futureRoadmap: [
        "Rust ile yeniden yazılmış ultra düşük gecikmeli WebSocket emir motoru",
        "Derin Takviyeli Öğrenme (Reinforcement Learning) tabanlı strateji optimizasyonu",
        "Webhooks üzerinden Telegram acil durum ve işlem bildirimleri",
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
