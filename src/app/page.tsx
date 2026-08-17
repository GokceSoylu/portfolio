'use client';

import React, { useEffect, useState } from 'react';
import {
  Mail,
  BookOpen,
  Server,
  Database,
  Code2,
  ExternalLink,
  Layers,
  Award
} from 'lucide-react';

interface MediumPost {
  title: string;
  link: string;
  pubDate: string;
  thumbnail: string;
}

export default function Home() {
  const [posts, setPosts] = useState<MediumPost[]>([]);
  const [loadingPosts, setLoadingPosts] = useState(true);

  // Kendi Medium kullanıcı adınızı buraya yazın (Örn: "gokcesoylu")
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
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased selection:bg-indigo-500 selection:text-white">
      <div className="fixed inset-0 z-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.15),rgba(255,255,255,0))]" />

      <main className="relative z-10 max-w-5xl mx-auto px-6 py-16 space-y-24">

        {/* HERO */}
        <section className="flex flex-col items-start gap-6 pt-12 border-b border-slate-800/80 pb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
            <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
            Backend Geliştirici
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white">
            Gökçe Soylu
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">
            <strong className="text-slate-200">.NET & Backend Developer</strong>. C#, ASP.NET Core,
            Clean Architecture ve modern RESTful API mimarileriyle ölçeklenebilir
            sistemler tasarlıyorum.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a href="https://github.com/kullaniciadiniz" target="_blank" rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 transition">
              <svg className="w-4 h-4 fill-current text-indigo-400" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              <span className="text-sm font-medium">GitHub</span>
            </a>
            <a href="https://linkedin.com/in/kullaniciadiniz" target="_blank" rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 transition">
              <svg className="w-4 h-4 fill-current text-indigo-400" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              <span className="text-sm font-medium">LinkedIn</span>
            </a>
            <a href={`https://medium.com/@${MEDIUM_USERNAME}`} target="_blank" rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 transition">
              <BookOpen className="w-4 h-4 text-indigo-400" />
              <span className="text-sm font-medium">Medium</span>
            </a>
            <a href="mailto:gokcesoylu24@gmail.com"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-500 transition font-medium text-sm">
              <Mail className="w-4 h-4" />
              İletişime Geç
            </a>
          </div>
        </section>

        {/* TEKNİK YETKİNLİKLER */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <Code2 className="w-6 h-6 text-indigo-400" />
            <h2 className="text-2xl font-bold tracking-tight">Teknik Uzmanlık</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800">
              <Server className="w-6 h-6 text-indigo-400 mb-4" />
              <h3 className="font-semibold text-lg text-white mb-2">Backend & .NET</h3>
              <p className="text-sm text-slate-400">
                C#, ASP.NET Core Web API, Entity Framework Core, LINQ, RESTful API Tasarımı, JWT Authentication.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800">
              <Layers className="w-6 h-6 text-indigo-400 mb-4" />
              <h3 className="font-semibold text-lg text-white mb-2">Mimari & Desenler</h3>
              <p className="text-sm text-slate-400">
                Clean Architecture, N-Tier Architecture, Repository & Unit of Work, SOLID Prensipleri, OOP.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800">
              <Database className="w-6 h-6 text-indigo-400 mb-4" />
              <h3 className="font-semibold text-lg text-white mb-2">Veri & Araçlar</h3>
              <p className="text-sm text-slate-400">
                PostgreSQL, MS SQL Server, Docker, Git / GitHub, Postman, AWS Servisleri.
              </p>
            </div>
          </div>
        </section>

        {/* PROJE VİTRİNİ */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <Server className="w-6 h-6 text-indigo-400" />
            <h2 className="text-2xl font-bold tracking-tight">Öne Çıkan Projeler</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-lg text-white">FinancialWallet API</h3>
                  <ExternalLink className="w-4 h-4 text-slate-500" />
                </div>
                <p className="text-sm text-slate-400 mb-4">
                  Kişisel finans ve dijital cüzdan yönetim API’si. Katmanlı mimari, EF Core, PostgreSQL ve JWT kimlik doğrulama altyapısı.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-2.5 py-1 rounded bg-slate-800 text-indigo-300">C# / .NET Core</span>
                <span className="text-xs px-2.5 py-1 rounded bg-slate-800 text-indigo-300">PostgreSQL</span>
                <span className="text-xs px-2.5 py-1 rounded bg-slate-800 text-indigo-300">JWT</span>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-lg text-white">AI-Powered BI Platform (NL2SQL)</h3>
                  <ExternalLink className="w-4 h-4 text-slate-500" />
                </div>
                <p className="text-sm text-slate-400 mb-4">
                  Doğal dil sorgularını SQL&apos;e çeviren LLM destekli e-ticaret analitik platformu. LangChain ve GPT tabanlı pipeline.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-2.5 py-1 rounded bg-slate-800 text-indigo-300">Python / FastAPI</span>
                <span className="text-xs px-2.5 py-1 rounded bg-slate-800 text-indigo-300">Spring Boot</span>
                <span className="text-xs px-2.5 py-1 rounded bg-slate-800 text-indigo-300">LangChain</span>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-lg text-white">SmartBook Appointment API</h3>
                  <ExternalLink className="w-4 h-4 text-slate-500" />
                </div>
                <p className="text-sm text-slate-400 mb-4">
                  Çakışma önleyici zaman doğrulaması yapan ve rol tabanlı erişim kontrolü (RBAC) barındıran ölçeklenebilir randevu sistemi.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-2.5 py-1 rounded bg-slate-800 text-indigo-300">Java</span>
                <span className="text-xs px-2.5 py-1 rounded bg-slate-800 text-indigo-300">Spring Boot</span>
                <span className="text-xs px-2.5 py-1 rounded bg-slate-800 text-indigo-300">REST API</span>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-lg text-white">Cloud Earthquake Analytics</h3>
                  <ExternalLink className="w-4 h-4 text-slate-500" />
                </div>
                <p className="text-sm text-slate-400 mb-4">
                  Deprem verilerini gerçek zamanlı işleyip görselleştiren bulut tabanlı veri analitiği mimarisi.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-2.5 py-1 rounded bg-slate-800 text-indigo-300">AWS Lambda</span>
                <span className="text-xs px-2.5 py-1 rounded bg-slate-800 text-indigo-300">S3 / QuickSight</span>
              </div>
            </div>
          </div>
        </section>

        {/* MEDIUM YAZILARI */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <BookOpen className="w-6 h-6 text-indigo-400" />
              <h2 className="text-2xl font-bold tracking-tight">Medium Makaleleri</h2>
            </div>
            <a
              href={`https://medium.com/@${MEDIUM_USERNAME}`}
              target="_blank"
              rel="noreferrer"
              className="text-xs font-medium text-indigo-400 hover:text-indigo-300 flex items-center gap-1"
            >
              Tümünü Gör <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {loadingPosts ? (
            <div className="text-slate-500 text-sm">Yazılar yükleniyor...</div>
          ) : posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {posts.map((post, idx) => (
                <a
                  key={idx}
                  href={post.link}
                  target="_blank"
                  rel="noreferrer"
                  className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-indigo-500/40 transition flex flex-col justify-between group"
                >
                  <div>
                    <span className="text-xs text-slate-500">
                      {new Date(post.pubDate).toLocaleDateString('tr-TR', { day: 'numeric', month: 'short', year: 'numeric' })}
                    </span>
                    <h3 className="font-semibold text-white group-hover:text-indigo-400 transition mt-2 line-clamp-2">
                      {post.title}
                    </h3>
                  </div>
                  <div className="mt-4 flex items-center text-xs text-indigo-400 gap-1">
                    Okumaya Git <ExternalLink className="w-3 h-3" />
                  </div>
                </a>
              ))}
            </div>
          ) : (
            <p className="text-sm text-slate-500">Henüz yayınlanmış bir yazı bulunamadı veya kullanıcı adı güncellenmeli.</p>
          )}
        </section>

        {/* DENEYİM */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <Award className="w-6 h-6 text-indigo-400" />
            <h2 className="text-2xl font-bold tracking-tight">Deneyim & Araştırma</h2>
          </div>
          <div className="border-l border-slate-800 pl-6 space-y-8">
            <div>
              <span className="text-xs text-indigo-400 font-medium">Tem 2025 – Ağu 2025</span>
              <h3 className="text-lg font-bold text-white">M8D6 – Backend Development Stajı</h3>
              <p className="text-sm text-slate-400 mt-1">ADF Engineering • C#, ASP.NET Core ve veritabanı mimarileri.</p>
            </div>
            <div>
              <span className="text-xs text-indigo-400 font-medium">Ağu 2022 – Ağu 2024</span>
              <h3 className="text-lg font-bold text-white">TÜBİTAK STAR Araştırmacı Bursiyeri</h3>
              <p className="text-sm text-slate-400 mt-1">SimurgAI Lab • Derin öğrenme ve medikal görüntü işleme araştırmaları.</p>
            </div>
            <div>
              <span className="text-xs text-indigo-400 font-medium">Nis 2022 – Tem 2023</span>
              <h3 className="text-lg font-bold text-white">Öğrenci Asistanı (C Programlama)</h3>
              <p className="text-sm text-slate-400 mt-1">Yapısal programlama, pointerlar ve veri yapıları laboratuvar desteği.</p>
            </div>
          </div>
        </section>

      </main>

      <footer className="border-t border-slate-900 py-8 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Gökçe Soylu.
      </footer>
    </div>
  );
}