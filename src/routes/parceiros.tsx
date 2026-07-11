import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight, ArrowLeft } from "lucide-react";
import { useState, useEffect } from "react";
import { PageHeader } from "@/components/page-header";

// Importação da logo utilizando o caminho relativo do projeto
import logoImg from "@/assets/flagspain.jpg";

// Rota adicionada para resolver o erro do TS
export const Route = createFileRoute("/parceiros")({
  head: () => ({
    meta: [
      { title: "Comunidade — Um Casal de Amigos Meu" },
      {
        name: "description",
        content:
          "Veja o que os inscritos e seguidores dizem sobre o canal Um Casal de Amigos Meu e acompanhe histórias compartilhadas pela nossa comunidade.",
      },
      {
        property: "og:title",
        content: "Comunidade — Um Casal de Amigos Meu",
      },
      {
        property: "og:description",
        content:
          "Depoimentos de inscritos e seguidores que acompanham nossas viagens, passeios e aventuras.",
      },
    ],
  }),
  component: Parceiros,
});

// Mock configurado com os IDs dos vídeos (os títulos servem como fallback inicial)
const allProjects = [
  {
    youtubeId: "v8NRZ5YlPac",
    title: "Viagem • Madrid, Espanha",
    type: "Viagem • Madrid, Espanha",
    year: "2026",
    url: "https://www.youtube.com/watch?v=v8NRZ5YlPac",
  },
  {
    youtubeId: "VT1KRDQYKgc",
    title: "Viagem • Madrid, Espanha",
    type: "Viagem • Madrid, Espanha",
    year: "2026",
    url: "https://www.youtube.com/watch?v=VT1KRDQYKgc",
  },
  {
    youtubeId: "sFwVYvpM6ac",
    title: "Viagem • Madrid, Espanha",
    type: "Viagem • Madrid, Espanha",
    year: "2025",
    url: "https://www.youtube.com/watch?v=sFwVYvpM6ac",
  },
  {
    youtubeId: "yG9eYr6PgHc",
    title: "Viagem • Madrid, Espanha",
    type: "Viagem • Madrid, Espanha",
    year: "2025",
    url: "https://www.youtube.com/watch?v=yG9eYr6PgHc",
  },
];

const ITEMS_PER_PAGE = 5;

// Subcomponente isolado para gerenciar a requisição e o estado do título de cada vídeo
interface VideoProject {
  youtubeId: string;
  title: string;
  type: string;
  year: string;
  url: string;
}

function VideoRow({
  project,
  formattedIndex,
}: {
  project: VideoProject;
  formattedIndex: string | number;
}) {
  const [displayTitle, setDisplayTitle] = useState(project.title);

  useEffect(() => {
    let isMounted = true;

    const fetchAutomaticTitle = async () => {
      try {
        // Faz a chamada para o oEmbed do YouTube sem problemas de CORS no navegador
        const response = await fetch(
          `https://noembed.com/embed?url=https://www.youtube.com/watch?v=${project.youtubeId}`,
        );
        const data = await response.json();

        if (isMounted && data && data.title) {
          setDisplayTitle(data.title);
        }
      } catch (error) {
        console.error(`Erro ao buscar o título para o ID ${project.youtubeId}:`, error);
        // Em caso de erro, mantém o título estático definido no array (fallback)
      }
    };

    fetchAutomaticTitle();

    return () => {
      isMounted = false;
    };
  }, [project.youtubeId]);

  return (
    <div className="grid grid-cols-12 items-center gap-4 sm:gap-6 bg-white dark:bg-zinc-950 py-6 sm:py-8 border-b border-zinc-100 dark:border-zinc-900 last:border-0">
      {/* Coluna do Player do YouTube Responsivo (16:9) */}
      <div className="col-span-12 md:col-span-5">
        <div className="w-full aspect-video rounded-sm overflow-hidden bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xs">
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${project.youtubeId}`}
            title={displayTitle}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full h-full border-0"
          />
        </div>
      </div>

      {/* Coluna do Número */}
      <div className="col-span-3 md:col-span-1 order-1 md:order-0 mt-2 md:mt-0">
        <div className="text-xs tabular-nums tracking-widest text-zinc-400 dark:text-zinc-500 font-mono font-semibold">
          {formattedIndex}
        </div>
      </div>

      {/* Coluna do Título e Tipo */}
      <div className="col-span-12 md:col-span-4 mt-2 md:mt-0">
        <h3 className="font-display text-xl sm:text-2xl font-semibold text-zinc-900 dark:text-zinc-100 md:text-3xl tracking-tight">
          {displayTitle}
        </h3>
        <div className="mt-1 sm:mt-2 text-sm text-zinc-500 dark:text-zinc-400 font-medium dark:font-normal">
          {project.type}
        </div>
      </div>

      {/* Coluna do Ano e Link */}
      <div className="col-span-9 md:col-span-2 flex items-center justify-between gap-4 order-2 md:order-0 mt-2 md:mt-0 justify-self-end md:justify-self-auto w-full md:w-auto">
        <div className="font-display text-xl sm:text-2xl font-medium text-zinc-400 dark:text-zinc-500 font-mono">
          {project.year}
        </div>
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Assistir ao vídeo no YouTube"
          className="p-2 -mr-2"
        >
          <ArrowUpRight className="h-6 w-6 text-zinc-800 dark:text-zinc-200 transition hover:text-orange-700 dark:hover:text-orange-500 hover:translate-x-0.5 hover:-translate-y-0.5 transform duration-200" />
        </a>
      </div>
    </div>
  );
}

function Parceiros() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(allProjects.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentProjects = allProjects.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  return (
    <div className="relative min-h-screen bg-white dark:bg-zinc-950 transition-colors duration-300 w-full overflow-x-hidden">
      {/* Barra superior de ações (Voltar + Logo Responsiva) */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8">
        <div className="flex flex-col-reverse gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-zinc-100 dark:border-zinc-900 pb-6">
          <Link
            to="/"
            className="group inline-flex items-center justify-center sm:justify-start gap-2 text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors py-2 sm:py-0"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
            Voltar para o início
          </Link>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center sm:justify-end w-full sm:w-auto"
          >
            <img
              src={logoImg}
              alt="Um Casal de Amigos Meu Logo"
              className="w-full max-w-40 sm:max-w-50 md:max-w-60 h-auto object-contain transition-all duration-300 dark:brightness-110 dark:contrast-105"
            />
          </motion.div>
        </div>
      </div>

      <PageHeader
        eyebrow="— 07 / Parceiros"
        title="Conheça nossos parceiros e colaboradores."
        intro="Descubra as empresas e indivíduos que nos ajudam a criar conteúdo incrível e experiências memoráveis para nossa comunidade."
      />

      <section className="py-12 sm:py-16 lg:py-24 bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 transition-colors duration-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-px bg-zinc-100 dark:bg-zinc-900">
            {currentProjects.map((p, i) => {
              const globalIndex = startIndex + i + 1;
              const formattedIndex = globalIndex < 10 ? `0${globalIndex}` : globalIndex;

              return (
                <motion.div
                  key={`${p.youtubeId}-${globalIndex}`} // Chave alterada para youtubeId visto que o título é dinâmico
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                >
                  <VideoRow project={p} formattedIndex={formattedIndex} />
                </motion.div>
              );
            })}
          </div>

          {/* Paginação */}
          <div className="mt-12 sm:mt-16 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between border-t border-zinc-200 dark:border-zinc-800 pt-6">
            <div className="text-sm text-zinc-500 dark:text-zinc-400 font-medium text-center sm:text-left">
              Mostrando{" "}
              <span className="font-semibold text-zinc-900 dark:text-zinc-100">
                {startIndex + 1}
              </span>{" "}
              a{" "}
              <span className="font-semibold text-zinc-900 dark:text-zinc-100">
                {Math.min(startIndex + ITEMS_PER_PAGE, allProjects.length)}
              </span>{" "}
              de{" "}
              <span className="font-semibold text-zinc-900 dark:text-zinc-100">
                {allProjects.length}
              </span>{" "}
              Vídeos
            </div>

            <div className="flex items-center justify-center gap-2 self-center sm:self-auto overflow-x-auto max-w-full py-1">
              <button
                onClick={prevPage}
                disabled={currentPage === 1}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-zinc-300 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 transition hover:bg-zinc-50 dark:hover:bg-zinc-900 disabled:opacity-30 disabled:hover:bg-transparent cursor-pointer disabled:cursor-not-allowed"
                aria-label="Página anterior"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <div className="flex gap-1 overflow-x-auto dynamic-scrollbar">
                {Array.from({ length: totalPages }, (_, index) => (
                  <button
                    key={index + 1}
                    onClick={() => setCurrentPage(index + 1)}
                    className={`h-10 w-10 shrink-0 text-sm font-semibold rounded-md transition cursor-pointer ${
                      currentPage === index + 1
                        ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-950"
                        : "border border-zinc-300 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-900"
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>

              <button
                onClick={nextPage}
                disabled={currentPage === totalPages}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-zinc-300 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 transition hover:bg-zinc-50 dark:hover:bg-zinc-900 disabled:opacity-30 disabled:hover:bg-transparent cursor-pointer disabled:cursor-not-allowed"
                aria-label="Próxima página"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
