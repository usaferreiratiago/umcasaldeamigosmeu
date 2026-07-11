import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Check, ArrowLeft } from "lucide-react";
import aboutImg from "@/assets/about-blueprint.jpg";
import { PageHeader } from "@/components/page-header";

import logoImg from "@/assets/flagspain.jpg";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre — Um Casal de Amigos Meu" },
      {
        name: "description",
        content:
          "Conheça a história do canal Um Casal de Amigos Meu e acompanhe nossas viagens, passeios e momentos especiais vividos em Madrid e por onde passarmos.",
      },
      {
        property: "og:title",
        content: "Sobre — Um Casal de Amigos Meu",
      },
      {
        property: "og:description",
        content:
          "Um casal, muitas histórias, viagens, passeios e experiências compartilhadas com você.",
      },
    ],
  }),
  component: Sobre,
});

function Sobre() {
  return (
    <div className="relative min-h-screen bg-white dark:bg-zinc-950 transition-colors duration-300 w-full overflow-x-hidden">
      {/* Barra superior */}
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
              alt="Bandeira da Espanha"
              className="h-10 sm:h-12 w-auto object-contain transition-all duration-300 dark:brightness-110 dark:contrast-105"
            />
          </motion.div>
        </div>
      </div>

      <PageHeader
        eyebrow="— 01 / Sobre"
        title="Compartilhando experiências, viagens e bons momentos."
        intro="O canal Um Casal de Amigos Meu nasceu para mostrar o lado simples da vida: conhecer novos lugares, viver experiências autênticas e dividir tudo isso com quem acompanha nossa jornada."
      />

      <section className="bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 py-12 sm:py-20 lg:py-28 transition-colors duration-300">
        <div className="mx-auto grid max-w-7xl grid-cols-12 gap-6 sm:gap-10 px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="col-span-12 lg:col-span-6 w-full"
          >
            <img
              src={aboutImg}
              alt="Um Casal de Amigos Meu"
              loading="lazy"
              className="aspect-4/3 w-full object-cover rounded-sm shadow-sm dark:opacity-90"
            />
          </motion.div>

          <div className="col-span-12 space-y-6 lg:col-span-6 flex flex-col justify-center">
            <p className="text-base leading-relaxed text-zinc-700 dark:text-zinc-300 md:text-lg">
              O{" "}
              <strong className="text-zinc-900 font-semibold dark:text-zinc-50">
                Um Casal de Amigos Meu
              </strong>{" "}
              é um espaço criado para compartilhar viagens, passeios, descobertas e momentos que
              fazem parte do nosso dia a dia. Cada vídeo é um convite para conhecer novos lugares e
              viver experiências conosco.
            </p>

            <p className="text-base leading-relaxed text-zinc-600 dark:text-zinc-400 font-medium dark:font-normal">
              Acreditamos que as melhores histórias surgem de momentos simples. Por isso,
              registramos nossas aventuras de forma espontânea, mostrando curiosidades, cultura,
              gastronomia e paisagens que encontramos pelo caminho.
            </p>

            <ul className="grid grid-cols-1 gap-3 pt-4 sm:grid-cols-2 target-list">
              {[
                "Canal no YouTube",
                "Viagens e passeios",
                "Madrid • Espanha",
                "Experiências reais",
                "Conteúdo para toda a família",
                "Novos vídeos regularmente",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-zinc-700 dark:text-zinc-300 font-medium wrap-break-word"
                >
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-blue-700 dark:text-blue-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
