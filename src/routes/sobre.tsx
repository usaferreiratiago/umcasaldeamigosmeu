import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Check, ArrowLeft } from "lucide-react";
import aboutImg from "@/assets/about-blueprint.jpg";
import { PageHeader } from "@/components/page-header";

// Importação da logo utilizando o caminho relativo do projeto
import logoImg from "@/assets/senoengenharia.png";

// Rota adicionada explicitamente para resolver o erro do TS
export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre — Seno Engenharia" },
      {
        name: "description",
        content:
          "Há +40 anos a Seno Engenharia projeta e constrói no Vale do Aço, em Coronel Fabriciano/MG.",
      },
      { property: "og:title", content: "Sobre a Seno Engenharia" },
      { property: "og:description", content: "+40 anos de engenharia honesta no Vale do Aço." },
    ],
  }),
  component: Sobre,
});

function Sobre() {
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
        eyebrow="— 01 / Sobre"
        title="Engenharia construída por quem sabe o peso de cada viga."
        intro="Fundada em 1986 em Coronel Fabriciano, atendemos famílias, indústrias e comércios do Vale do Aço com o mesmo critério técnico do primeiro dia."
      />

      {/* Seção com suporte completo a cores adaptáveis */}
      <section className="bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 py-12 sm:py-20 lg:py-28 transition-colors duration-300">
        <div className="mx-auto grid max-w-7xl grid-cols-12 gap-6 sm:gap-10 px-4 sm:px-6 lg:px-8">
          {/* Bloco da Imagem - Responsivo para Mobile, Tablet e Desktop */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="col-span-12 lg:col-span-6 w-full"
          >
            <img
              src={aboutImg}
              alt="Equipe Seno revisando projetos"
              loading="lazy"
              className="aspect-4/3 w-full object-cover rounded-sm shadow-sm dark:opacity-90"
            />
          </motion.div>

          {/* Bloco de Conteúdo de Texto */}
          <div className="col-span-12 space-y-6 lg:col-span-6 flex flex-col justify-center">
            <p className="text-base leading-relaxed text-zinc-700 dark:text-zinc-300 md:text-lg">
              A{" "}
              <strong className="text-zinc-900 font-semibold dark:text-zinc-50">
                Seno Engenharia
              </strong>{" "}
              nasceu em 1986 com uma convicção simples: obra boa é a que atravessa gerações. Desde
              então, construímos relações tão duradouras quanto nossas estruturas.
            </p>
            <p className="text-base leading-relaxed text-zinc-600 dark:text-zinc-400 font-medium dark:font-normal">
              Nossa equipe técnica acompanha cada etapa — do estudo preliminar à entrega das chaves
              — com o rigor de quem entende que cada decisão de projeto reverbera por décadas.
            </p>

            {/* Grid de Benefícios/Tags */}
            <ul className="grid grid-cols-1 gap-3 pt-4 sm:grid-cols-2 target-list">
              {[
                "CNPJ 20.853.842/0001-01",
                "Sede em Coronel Fabriciano/MG",
                "Equipe técnica própria",
                "Acompanhamento total da obra",
                "Atuação em todo Vale do Aço",
                "Mais de 200 obras entregues",
              ].map((i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-sm text-zinc-700 dark:text-zinc-300 font-medium wrap-break-word"
                >
                  {/* Ícone de check usando a cor terracota/laranja consistente com as outras páginas */}
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-orange-700 dark:text-orange-500" />
                  <span>{i}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
