import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight, ArrowLeft } from "lucide-react";
import { useState, useEffect } from "react";
import { PageHeader } from "@/components/page-header";

// Importação da logo utilizando o caminho relativo do projeto
import logoImg from "@/assets/senoengenharia.png";

// IMPORTS DAS FOTOS ORGANIZADAS POR PASTA DE OBRA
// Obra 1
import p1_f1 from "@/assets/obras/projeto-1/foto-1.jpg";
import p1_f2 from "@/assets/obras/projeto-1/foto-2.jpg";
import p1_f3 from "@/assets/obras/projeto-1/foto-3.jpg";
import p1_f4 from "@/assets/obras/projeto-1/foto-4.jpg";

// Obra 2
import p2_f1 from "@/assets/obras/projeto-2/foto-1.jpg";
import p2_f2 from "@/assets/obras/projeto-2/foto-2.jpg";
import p2_f3 from "@/assets/obras/projeto-2/foto-3.jpg";
import p2_f4 from "@/assets/obras/projeto-2/foto-4.jpg";

// Obra 3
import p3_f1 from "@/assets/obras/projeto-3/foto-1.jpg";
import p3_f2 from "@/assets/obras/projeto-3/foto-2.jpg";
import p3_f3 from "@/assets/obras/projeto-3/foto-3.jpg";
import p3_f4 from "@/assets/obras/projeto-3/foto-4.jpg";

// Rota adicionada explicitamente para resolver o erro do TS
export const Route = createFileRoute("/obras")({
  head: () => ({
    meta: [
      { title: "Obras — Seno Engenharia" },
      {
        name: "description",
        content:
          "Portfólio de obras residenciais, comerciais e industriais entregues pela Seno Engenharia no Vale do Aço.",
      },
      { property: "og:title", content: "Obras — Seno Engenharia" },
      {
        property: "og:description",
        content: "Portfólio que se mede em metros quadrados e décadas.",
      },
    ],
  }),
  component: Obras,
});

// Mock utilizando os arrays de imagens específicos de cada pasta
const allProjects = [
  {
    images: [p1_f1, p1_f2, p1_f3, p1_f4],
    title: "Residencial Jardim das Acácias 1",
    type: "Residencial · Coronel Fabriciano",
    year: "2026",
  },
  {
    images: [p2_f1, p2_f2, p2_f3, p2_f4],
    title: "Edifício Comercial Centro",
    type: "Comercial · Ipatinga",
    year: "2026",
  },
  {
    images: [p3_f1, p3_f2, p3_f3, p3_f4],
    title: "Galpão Industrial Vale do Aço",
    type: "Industrial · Timóteo",
    year: "2025",
  },
  {
    images: [p1_f1, p1_f2, p1_f3, p1_f4],
    title: "Residencial Horto Classic",
    type: "Residencial · Ipatinga",
    year: "2025",
  },
  {
    images: [p2_f1, p2_f2, p2_f3, p2_f4],
    title: "Centro Logístico Norte",
    type: "Industrial · Santana do Paraíso",
    year: "2025",
  },
  {
    images: [p3_f1, p3_f2, p3_f3, p3_f4],
    title: "Edifício Prime Offices",
    type: "Comercial · Coronel Fabriciano",
    year: "2025",
  },
  {
    images: [p1_f1, p1_f2, p1_f3, p1_f4],
    title: "Condomínio Alphaville Vale",
    type: "Residencial · Timóteo",
    year: "2024",
  },
  {
    images: [p2_f1, p2_f2, p2_f3, p2_f4],
    title: "Clínica Integrada Ipatinga",
    type: "Comercial · Ipatinga",
    year: "2024",
  },
  {
    images: [p3_f1, p3_f2, p3_f3, p3_f4],
    title: "Expansão Industrial Aperam",
    type: "Industrial · Timóteo",
    year: "2024",
  },
  {
    images: [p1_f1, p1_f2, p1_f3, p1_f4],
    title: "Vivendas do Lago",
    type: "Residencial · Coronel Fabriciano",
    year: "2024",
  },
];

const ITEMS_PER_PAGE = 5;

// Componente isolado com autoplay para o carrossel de fotos
function ProjectCarousel({ images, title }: { images: string[]; title: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Efeito para transição de slides automática (Autoplay)
  useEffect(() => {
    if (isHovered) return; // Pausa o autoplay quando o mouse está por cima

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000); // Passa a imagem a cada 5 segundos

    return () => clearInterval(interval);
  }, [images.length, isHovered]);

  const nextSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div
      className="relative overflow-hidden rounded-sm bg-zinc-100 dark:bg-zinc-900 aspect-4/3 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Imagem com Animação */}
      <div className="w-full h-full relative">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            alt={`${title} - Foto ${currentIndex + 1}`}
            initial={{ opacity: 0.8 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0.8 }}
            transition={{ duration: 0.3 }}
            loading="lazy"
            className="w-full h-full object-cover transition duration-500 transform group-hover:scale-[1.02]"
          />
        </AnimatePresence>
      </div>

      {/* Setas de navegação (Visíveis ao passar o mouse) */}
      <div className="absolute inset-0 flex items-center justify-between p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <button
          onClick={prevSlide}
          className="p-1.5 rounded-full bg-white/80 dark:bg-zinc-950/80 text-zinc-800 dark:text-zinc-200 hover:bg-white dark:hover:bg-zinc-950 transition shadow-sm pointer-events-auto cursor-pointer"
          aria-label="Foto anterior"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={nextSlide}
          className="p-1.5 rounded-full bg-white/80 dark:bg-zinc-950/80 text-zinc-800 dark:text-zinc-200 hover:bg-white dark:hover:bg-zinc-950 transition shadow-sm pointer-events-auto cursor-pointer"
          aria-label="Próxima foto"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {/* Indicadores de bolinha (Dots) */}
      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-1.5 bg-black/20 dark:bg-white/10 backdrop-blur-xs px-2 py-1 rounded-full">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={(e) => {
              e.stopPropagation();
              setCurrentIndex(index);
            }}
            className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
              currentIndex === index ? "w-3 bg-white" : "w-1.5 bg-white/50"
            }`}
            aria-label={`Ir para foto ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

function Obras() {
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
      {/* Barra superior de ações (Voltar + Logo) */}
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
            className="flex justify-center sm:justify-start"
          >
            <img
              src={logoImg}
              alt="Seno Engenharia Logo"
              className="h-10 sm:h-12 w-auto object-contain transition-all duration-300 dark:brightness-110 dark:contrast-105"
            />
          </motion.div>
        </div>
      </div>

      <PageHeader
        eyebrow="— 03 / Obras"
        title="Um portfólio que se mede em metros quadrados e décadas."
        intro="Uma seleção de nossa história recente. Cada obra carrega o mesmo cuidado técnico, do projeto à última vistoria."
      />

      <section className="py-12 sm:py-16 lg:py-24 bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 transition-colors duration-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-px bg-zinc-100 dark:bg-zinc-900">
            {currentProjects.map((p, i) => {
              const globalIndex = startIndex + i + 1;
              const formattedIndex = globalIndex < 10 ? `0${globalIndex}` : globalIndex;

              return (
                <motion.div
                  key={`${p.title}-${globalIndex}`}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="grid grid-cols-12 items-center gap-4 sm:gap-6 bg-white dark:bg-zinc-950 py-6 sm:py-8 border-b border-zinc-100 dark:border-zinc-900 last:border-0"
                >
                  {/* Coluna da Imagem com o Carrossel e Autoplay */}
                  <div className="col-span-12 md:col-span-5">
                    <ProjectCarousel images={p.images} title={p.title} />
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
                      {p.title}
                    </h3>
                    <div className="mt-1 sm:mt-2 text-sm text-zinc-500 dark:text-zinc-400 font-medium dark:font-normal">
                      {p.type}
                    </div>
                  </div>

                  {/* Coluna do Ano e Link */}
                  <div className="col-span-9 md:col-span-2 flex items-center justify-between gap-4 order-2 md:order-0 mt-2 md:mt-0 justify-self-end md:justify-self-auto w-full md:w-auto">
                    <div className="font-display text-xl sm:text-2xl font-medium text-zinc-400 dark:text-zinc-500 font-mono">
                      {p.year}
                    </div>
                    <Link to="/contato" aria-label="Falar sobre obra similar" className="p-2 -mr-2">
                      <ArrowUpRight className="h-6 w-6 text-zinc-800 dark:text-zinc-200 transition hover:text-orange-700 dark:hover:text-orange-500 hover:translate-x-0.5 hover:-translate-y-0.5 transform duration-200" />
                    </Link>
                  </div>
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
              obras
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
