import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

// Reaproveitando os assets de imagem padrão do seu projeto
import f1 from "@/assets/f1.jpg";
import f2 from "@/assets/f2.jpg";
import f3 from "@/assets/f3.jpg";
import f4 from "@/assets/f4.jpg";
import f5 from "@/assets/f5.jpg";
import { PageHeader } from "@/components/page-header";

// Importação da logo utilizando o caminho relativo do projeto
import logoImg from "@/assets/senoengenharia.png";

// Rota adicionada explicitamente para resolver o erro do TS
export const Route = createFileRoute("/equipe")({
  head: () => ({
    meta: [
      { title: "Equipe — Seno Engenharia" },
      {
        name: "description",
        content:
          "Conheça o corpo técnico e os diretores responsáveis pela excelência operacional da Seno Engenharia no Vale do Aço.",
      },
      { property: "og:title", content: "Equipe técnica — Seno Engenharia" },
      {
        property: "og:description",
        content: "Profissionais experientes construindo o futuro da região.",
      },
    ],
  }),
  component: Funcionarios,
});

// Mock com a lista de funcionários
const allStaff = [
  {
    img: f1,
    name: "Gerson",
    role: "Diretor(a) Executivo",
    info: "CEO & Fundador(a) · Especialista em Estruturas",
    year: "1986",
  },
  {
    img: f2,
    name: "Cláudio Almeida",
    role: "Diretor(a) de Engenharia",
    info: "Gerenciamento de Obras Industriais",
    year: "1998",
  },
  {
    img: f3,
    name: "Mariana Souza",
    role: "Coordenador(a) de Projetos",
    info: "Arquitetura & Design Executivo",
    year: "2015",
  },
  {
    img: f4,
    name: "Rodrigo Costa",
    role: "Engenheiro(a) de Campo",
    info: "Fiscalização e Controle de Qualidade",
    year: "2018",
  },
  {
    img: f5,
    name: "Ana Beatriz Lima",
    role: "Gestor(a) Administrativa",
    info: "Planejamento e Controladoria Geral",
    year: "2012",
  },
  {
    img: f3,
    name: "Marta Souza",
    role: "Técnico(a) em Edificações",
    info: "Desenho Técnico e Levantamentos",
    year: "2021",
  },
];

const ITEMS_PER_PAGE = 5;

function Funcionarios() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(allStaff.length / ITEMS_PER_PAGE);

  // Calcula quais funcionários exibir na página atual
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentStaff = allStaff.slice(startIndex, startIndex + ITEMS_PER_PAGE);

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
          {/* Botão Voltar para Tela Inicial */}
          <Link
            to="/"
            className="group inline-flex items-center justify-center sm:justify-start gap-2 text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors py-2 sm:py-0"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
            Voltar para o início
          </Link>

          {/* Logo fixa colorida */}
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
        eyebrow="— Nossa Equipe"
        title="O capital humano por trás de cada m² construído."
        intro="Profissionais de engenharia, arquitetura e gerenciamento focados em transformar riscos no papel em estruturas definitivas."
      />

      <section className="py-12 sm:py-16 lg:py-24 bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 transition-colors duration-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-px bg-zinc-100 dark:bg-zinc-900">
            {currentStaff.map((f, i) => {
              const globalIndex = startIndex + i + 1;
              const formattedIndex = globalIndex < 10 ? `0${globalIndex}` : globalIndex;

              return (
                <motion.div
                  key={`${f.name}-${globalIndex}`}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="grid grid-cols-12 items-center gap-4 sm:gap-6 bg-white dark:bg-zinc-950 py-6 sm:py-8 border-b border-zinc-100 dark:border-zinc-900 last:border-0"
                >
                  {/* Imagem do Colaborador */}
                  <div className="col-span-12 md:col-span-5">
                    <div className="overflow-hidden rounded-sm bg-zinc-100 dark:bg-zinc-900">
                      <img
                        src={f.img}
                        alt={`Foto de ${f.name}`}
                        loading="lazy"
                        className="aspect-4/3 w-full object-cover transition duration-500 transform hover:scale-[1.03]"
                      />
                    </div>
                  </div>

                  {/* Número de Índice */}
                  <div className="col-span-3 md:col-span-1 order-1 md:order-0 mt-2 md:mt-0">
                    <div className="text-xs tabular-nums tracking-widest text-zinc-400 dark:text-zinc-500 font-mono font-semibold">
                      {formattedIndex}
                    </div>
                  </div>

                  {/* Informações do Cargo / Nome */}
                  <div className="col-span-12 md:col-span-4 mt-2 md:mt-0">
                    <h3 className="font-display text-xl sm:text-2xl font-semibold text-zinc-900 dark:text-zinc-100 md:text-3xl tracking-tight">
                      {f.name}
                    </h3>
                    <div className="mt-1 text-sm text-orange-700 dark:text-orange-500 font-medium">
                      {f.role}
                    </div>
                    <div className="mt-1 text-xs text-zinc-500 dark:text-zinc-400 font-medium dark:font-normal">
                      {f.info}
                    </div>
                  </div>

                  {/* Ano de Entrada */}
                  <div className="col-span-9 md:col-span-2 flex items-center justify-end md:justify-start order-2 md:order-0 mt-2 md:mt-0 w-full md:w-auto">
                    <div className="font-display text-xl sm:text-2xl font-medium text-zinc-400 dark:text-zinc-500 font-mono">
                      {f.year}
                    </div>
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
                {Math.min(startIndex + ITEMS_PER_PAGE, allStaff.length)}
              </span>{" "}
              de{" "}
              <span className="font-semibold text-zinc-900 dark:text-zinc-100">
                {allStaff.length}
              </span>{" "}
              colaboradores
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
