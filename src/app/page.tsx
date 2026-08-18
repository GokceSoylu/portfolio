'use client';

import React, { useEffect, useState } from 'react';
import {
  Mail,
  BookOpen,
  Server,
  Database,
  Code2,
  Layers,
  Award,
  ArrowUpRight,
  ExternalLink,
  BookMarked,
  Sparkles,
  FileText,
  Play
} from 'lucide-react';

interface MediumPost {
  title: string;
  link: string;
  pubDate: string;
}

interface ProjectBook {
  id: string;
  title: string;
  tagline: string;
  spineColor: string;
  spineTextColor: string;
  pageBorder: string;
  overview: string;
  highlights: string[];
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  reportUrl?: string;
}

const PROJECTS: ProjectBook[] = [
  {
    id: '01',
    title: 'FinancialWallet API & Web UI',
    tagline: 'Kişisel Finans & Cüzdan Uygulaması',
    spineColor: 'bg-[#e8d5cb]',
    spineTextColor: 'text-stone-800',
    pageBorder: 'border-[#e8d5cb]',
    overview: 'Katmanlı mimari, EF Core, PostgreSQL ve JWT kimlik doğrulama ile tasarlanmış çoklu cüzdan altyapısı. Canlı web arayüzü üzerinden anlık transfer ve bakiye hareketleri test edilebilir.',
    highlights: ['Katmanlı Mimari (N-Tier)', 'JWT & Refresh Token Doğrulama', 'Repository & Unit of Work'],
    techStack: ['React', 'Vite', 'C#', '.NET 8', 'PostgreSQL', 'Docker'],
    githubUrl: 'https://github.com/GokceSoylu/FinancialWallet',
    liveUrl: 'https://financial-wallet-nine.vercel.app',
  },
  {
    id: '02',
    title: 'AI-Powered E-Commerce BI',
    tagline: 'Doğal Dil ile NL2SQL Hattı',
    spineColor: 'bg-[#d8e2dc]',
    spineTextColor: 'text-stone-800',
    pageBorder: 'border-[#d8e2dc]',
    overview: 'Doğal dil sorgularını anlık SQL sorgularına dönüştüren, Spring Boot ve FastAPI mikroservis mimarisiyle çalışan e-ticaret analitik ve dinamik veri görselleştirme platformu.',
    highlights: ['LangChain & LLM Pipeline', 'Spring Boot & FastAPI Servisleri', 'Dinamik Grafik & Raporlama'],
    techStack: ['React', 'Spring Boot', 'FastAPI', 'PostgreSQL', 'Docker'],
    githubUrl: 'https://github.com/GokceSoylu/nl2sql_tez',
    liveUrl: 'https://nl2sql-tez.vercel.app',
  },
  {
    id: '03',
    title: 'SmartBook Appointment API',
    tagline: 'Akıllı Randevu & Rezervasyon',
    spineColor: 'bg-[#f0efeb]',
    spineTextColor: 'text-stone-800',
    pageBorder: 'border-[#e2dfd2]',
    overview: 'Zaman çakışmalarını engelleyen akıllı doğrulama algoritmalarına sahip ölçeklenebilir randevu motoru.',
    highlights: ['Rol Tabanlı Erişim (RBAC)', 'Zaman Çakışma Önleyici Doğrulama', 'RESTful API Tasarımı'],
    techStack: ['Java', 'Spring Boot', 'RESTful API', 'PostgreSQL'],
    githubUrl: 'https://github.com/GokceSoylu',
  },
  {
    id: '04',
    title: 'Cloud Earthquake Analytics',
    tagline: 'AWS Serverless Veri Hattı',
    spineColor: 'bg-[#fae1dd]',
    spineTextColor: 'text-stone-800',
    pageBorder: 'border-[#fae1dd]',
    overview: 'AFAD, Kandilli ve USGS sismik verilerini AWS S3, Athena ve QuickSight ile işleyip görselleştiren bulut mimarisi.',
    highlights: ['AWS S3 Veri Gölü', 'Athena Serverless SQL', 'QuickSight BI Panelleri'],
    techStack: ['AWS S3', 'AWS Athena', 'QuickSight', 'Python', 'ETL'],
    githubUrl: 'https://github.com/GokceSoylu/CloudComputing',
    reportUrl: '/CC_report.pdf',
  }
];

export default function Home() {
  const [posts, setPosts] = useState<MediumPost[]>([]);
  const [loadingPosts, setLoadingPosts] = useState(true);

  const MEDIUM_USERNAME = "gokcesoylu";

  useEffect(() => {
    fetch(`https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${MEDIUM_USERNAME}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.items) {
          setPosts(data.items.slice(0, 3));
        }
        setLoadingPosts(false);
      })
      .catch(() => setLoadingPosts(false));
  }, []);

  return (
    <div className="min-h-screen bg-[#faf8f5] text-stone-800 font-sans antialiased selection:bg-[#fae1dd] selection:text-stone-900">

      <main className="max-w-4xl mx-auto px-6 py-16 space-y-20">

        {/* HERO */}
        <section className="flex flex-col items-start gap-5 pt-8 border-b border-stone-200/80 pb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium bg-[#f0efeb] text-stone-700 border border-stone-300/60 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-stone-500" />
            .NET & Backend Developer
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-stone-900">
            Gökçe Soylu
          </h1>

          <p className="text-base sm:text-lg text-stone-600 max-w-2xl leading-relaxed">
            C#, ASP.NET Core, Clean Architecture ve mikroservis standartlarıyla ölçeklenebilir backend sistemleri geliştiriyorum. Projelerim, canlı uygulamalarım ve teknik yazılarım aşağıda yer alıyor.
          </p>

          {/* Butonlar */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="/GokceCV.pdf"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-stone-900 text-white font-semibold text-xs hover:bg-stone-800 transition shadow-xs"
            >
              <FileText className="w-3.5 h-3.5 text-rose-300" />
              Özgeçmiş / CV
            </a>

            <a href="https://github.com/GokceSoylu" target="_blank" rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-stone-200 text-stone-700 hover:border-stone-400 hover:text-stone-900 transition text-xs font-semibold shadow-xs">
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              GitHub
            </a>

            <a href="https://linkedin.com/in/gokcesoylu" target="_blank" rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-stone-200 text-stone-700 hover:border-stone-400 hover:text-stone-900 transition text-xs font-semibold shadow-xs">
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              LinkedIn
            </a>

            <a href={`https://medium.com/@${MEDIUM_USERNAME}`} target="_blank" rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-stone-200 text-stone-700 hover:border-stone-400 hover:text-stone-900 transition text-xs font-semibold shadow-xs">
              <BookOpen className="w-3.5 h-3.5 text-stone-600" />
              Medium
            </a>

            <a href="mailto:gokcesoylu24@gmail.com"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#f0efeb] text-stone-800 border border-stone-300 font-semibold text-xs hover:bg-[#e8e6e1] transition shadow-xs">
              <Mail className="w-3.5 h-3.5" />
              İletişim
            </a>
          </div>
        </section>

        {/* BEYAZ İSKANDİNAV KİTAPLIK RAFI */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <BookMarked className="w-5 h-5 text-stone-600" />
              <div>
                <h2 className="text-xl font-bold tracking-tight text-stone-900">Proje Kitaplığı</h2>
                <p className="text-xs text-stone-500">Kitabın üzerine gelerek detayları görebilir ve canlı uygulamaları ya da raporları inceleyebilirsiniz.</p>
              </div>
            </div>
          </div>

          <div className="bg-[#ffffff] rounded-2xl p-6 sm:p-8 border-4 border-stone-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {PROJECTS.map((book) => (
                <div
                  key={book.id}
                  className="group relative h-[230px] perspective-1000 cursor-pointer"
                >
                  <div className="relative w-full h-full duration-500 transition-all transform-gpu group-hover:-translate-y-2">

                    {/* İç Sayfa (Detay) */}
                    <div className="absolute inset-0 bg-[#fdfbf9] border border-stone-200 rounded-xl p-5 shadow-xs flex flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between gap-2 mb-1">
                          <h3 className="font-bold text-sm text-stone-900 leading-tight">
                            {book.title}
                          </h3>
                        </div>
                        <p className="text-[11px] text-stone-500 font-medium mb-1.5">{book.tagline}</p>
                        <p className="text-xs text-stone-600 leading-relaxed line-clamp-2">
                          {book.overview}
                        </p>
                      </div>

                      <div className="space-y-2.5">
                        <div className="flex flex-wrap gap-1">
                          {book.techStack.map((tech, idx) => (
                            <span key={idx} className="text-[10px] font-medium px-2 py-0.5 rounded bg-stone-100 text-stone-600 border border-stone-200">
                              {tech}
                            </span>
                          ))}
                        </div>

                        {/* Canlı Demo / Rapor & GitHub Butonları */}
                        <div className="flex items-center gap-2 pt-2 border-t border-stone-200/80">
                          {book.liveUrl && (
                            <a
                              href={book.liveUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-900 text-white text-[11px] font-semibold hover:bg-stone-800 transition"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <Play className="w-3 h-3 text-rose-300 fill-current" />
                              Canlı Uygulama
                            </a>
                          )}

                          {book.reportUrl && (
                            <a
                              href={book.reportUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-800 text-white text-[11px] font-semibold hover:bg-stone-700 transition"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <FileText className="w-3 h-3 text-amber-300" />
                              Proje Raporu
                            </a>
                          )}

                          <a
                            href={book.githubUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1 text-[11px] text-stone-600 hover:text-stone-900 font-medium transition ml-auto"
                            onClick={(e) => e.stopPropagation()}
                          >
                            GitHub Repo <ArrowUpRight className="w-3.5 h-3.5" />
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Ön Kapak */}
                    <div className={`absolute inset-0 ${book.spineColor} rounded-xl border border-stone-300/40 p-5 flex flex-col justify-between transition-opacity duration-300 group-hover:opacity-0 pointer-events-none shadow-xs`}>
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold tracking-widest uppercase text-stone-600">VOL // {book.id}</span>
                        <div className="w-2 h-2 rounded-full bg-stone-400/40" />
                      </div>

                      <div>
                        <h3 className={`text-base font-bold tracking-tight ${book.spineTextColor}`}>
                          {book.title}
                        </h3>
                        <p className="text-xs text-stone-600/80 mt-0.5">
                          {book.tagline}
                        </p>
                      </div>

                      <div className="flex items-center justify-between text-[11px] font-medium text-stone-600/70 border-t border-stone-400/20 pt-2">
                        <span>İncelemek için gelin</span>
                        <span>→</span>
                      </div>
                    </div>

                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 h-3 rounded bg-stone-200/80 border-t border-stone-300/60 shadow-inner" />
          </div>
        </section>

        {/* TEKNİK YETKİNLİKLER */}
        <section className="space-y-6">
          <div className="flex items-center gap-2.5">
            <Code2 className="w-5 h-5 text-stone-600" />
            <h2 className="text-xl font-bold tracking-tight text-stone-900">Teknik Yetkinlikler</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-xs">
              <Server className="w-5 h-5 text-stone-700 mb-3" />
              <h3 className="font-semibold text-sm text-stone-900 mb-1">Backend & .NET</h3>
              <p className="text-xs text-stone-500 leading-relaxed">
                C#, ASP.NET Core Web API, Entity Framework Core, LINQ, RESTful Mimariler, JWT Auth.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-xs">
              <Layers className="w-5 h-5 text-stone-700 mb-3" />
              <h3 className="font-semibold text-sm text-stone-900 mb-1">Mimari & Desenler</h3>
              <p className="text-xs text-stone-500 leading-relaxed">
                Clean Architecture, N-Tier, Repository & Unit of Work, SOLID, OOP İlkeleri.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-xs">
              <Database className="w-5 h-5 text-stone-700 mb-3" />
              <h3 className="font-semibold text-sm text-stone-900 mb-1">Veri & Araçlar</h3>
              <p className="text-xs text-stone-500 leading-relaxed">
                PostgreSQL, MS SQL Server, Docker, Git/GitHub, Postman, AWS Servisleri.
              </p>
            </div>
          </div>
        </section>

        {/* MEDIUM YAZILARI */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <BookOpen className="w-5 h-5 text-stone-600" />
              <h2 className="text-xl font-bold tracking-tight text-stone-900">Medium Makaleleri</h2>
            </div>
            <a
              href={`https://medium.com/@${MEDIUM_USERNAME}`}
              target="_blank"
              rel="noreferrer"
              className="text-xs text-stone-600 hover:text-stone-900 font-semibold flex items-center gap-1 transition"
            >
              Tüm Yazılar <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {loadingPosts ? (
            <div className="text-stone-400 text-xs">Yazılar yükleniyor...</div>
          ) : posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {posts.map((post, idx) => (
                <a
                  key={idx}
                  href={post.link}
                  target="_blank"
                  rel="noreferrer"
                  className="p-5 rounded-2xl bg-white border border-stone-200 hover:border-stone-400 transition flex flex-col justify-between group shadow-xs"
                >
                  <div>
                    <span className="text-[11px] font-medium text-stone-400">
                      {new Date(post.pubDate).toLocaleDateString('tr-TR', { day: 'numeric', month: 'short', year: 'numeric' })}
                    </span>
                    <h3 className="font-medium text-stone-900 group-hover:text-stone-600 transition mt-1.5 text-xs leading-snug line-clamp-2">
                      {post.title}
                    </h3>
                  </div>
                  <div className="mt-4 flex items-center text-[11px] font-semibold text-stone-600 gap-1">
                    Yazıyı Oku <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </a>
              ))}
            </div>
          ) : (
            <p className="text-xs text-stone-500">Henüz yayınlanmış bir makale bulunamadı.</p>
          )}
        </section>

        {/* DENEYİM */}
        <section className="space-y-6">
          <div className="flex items-center gap-2.5">
            <Award className="w-5 h-5 text-stone-600" />
            <h2 className="text-xl font-bold tracking-tight text-stone-900">Deneyim & Araştırma</h2>
          </div>

          <div className="border-l-2 border-stone-200 pl-6 space-y-6 text-xs">
            <div>
              <span className="text-stone-400 font-medium">Tem 2025 – Ağu 2025</span>
              <h3 className="text-sm font-semibold text-stone-900 mt-0.5">M8D6 – Backend Development Stajı</h3>
              <p className="text-stone-600 mt-0.5">ADF Engineering • C#, ASP.NET Core ve veritabanı mimarileri.</p>
            </div>

            <div>
              <span className="text-stone-400 font-medium">Ağu 2022 – Ağu 2024</span>
              <h3 className="text-sm font-semibold text-stone-900 mt-0.5">TÜBİTAK STAR Araştırmacı Bursiyeri</h3>
              <p className="text-stone-600 mt-0.5">SimurgAI Lab • Derin öğrenme ve medikal görüntü işleme araştırmaları.</p>
            </div>

            <div>
              <span className="text-stone-400 font-medium">Nis 2022 – Tem 2023</span>
              <h3 className="text-sm font-semibold text-stone-900 mt-0.5">Öğrenci Asistanı (C Programlama)</h3>
              <p className="text-stone-600 mt-0.5">Yapısal programlama, pointerlar ve veri yapıları laboratuvar desteği.</p>
            </div>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="border-t border-stone-200/80 py-8 text-center text-xs text-stone-400">
        © {new Date().getFullYear()} Gökçe Soylu.
      </footer>
    </div>
  );
}