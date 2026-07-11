import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Camera, Map, Video, Plane, Heart, Users, ArrowLeft } from "lucide-react";
import { PageHeader } from "@/components/page-header";

import logoImg from "@/assets/flagspain.jpg";

export const Route = createFileRoute("/conteudo")({
  head: () => ({
    meta: [
      { title: "Conteúdo — Um Casal de Amigos Meu" },
      {
        name: "description",
        content:
          "Conheça os conteúdos do canal Um Casal de Amigos Meu: viagens, passeios, gastronomia, curiosidades, cultura e experiências compartilhadas diretamente de Madrid e de outros destinos.",
      },
      {
        property: "og:title",
        content: "Conteúdo — Um Casal de Amigos Meu",
      },
      {
        property: "og:description",
        content:
          "Viagens, passeios, descobertas e momentos especiais compartilhados com nossa comunidade.",
      },
    ],
  }),
  component: conteudo,
});

const services = [
  {
    icon: Map,
    title: "Passeios e Turismo",
    desc: "Descobrimos lugares incríveis, mostramos atrações, bairros, parques e pontos turísticos para inspirar sua próxima viagem.",
  },
  {
    icon: Plane,
    title: "Viagens",
    desc: "Acompanhamos nossas aventuras por diferentes cidades e países, compartilhando experiências reais do começo ao fim.",
  },
  {
    icon: Camera,
    title: "Vlogs do Dia a Dia",
    desc: "Momentos espontâneos, rotina, curiosidades e histórias que fazem parte da nossa vida em Madrid.",
  },
  {
    icon: Video,
    title: "Vídeos Semanais",
    desc: "Conteúdo novo publicado regularmente para que você acompanhe nossas descobertas e aventuras.",
  },
  {
    icon: Heart,
    title: "Experiências Reais",
    desc: "Mostramos cada destino de forma simples, sincera e descontraída, compartilhando aquilo que realmente vivemos.",
  },
  {
    icon: Users,
    title: "Comunidade",
    desc: "Valorizamos cada inscrito, respondemos comentários e construímos uma comunidade apaixonada por viagens e boas histórias.",
  },
];

function conteudo() {
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
              alt="Um Casal de Amigos Meu"
              className="h-10 sm:h-12 w-auto object-contain transition-all duration-300 dark:brightness-110 dark:contrast-105"
            />
          </motion.div>
        </div>
      </div>

      <PageHeader
        eyebrow="— 02 / Conteúdo"
        title="Histórias, viagens e experiências compartilhadas."
        intro="No canal Um Casal de Amigos Meu você encontra passeios, viagens, gastronomia, curiosidades, cultura e momentos especiais registrados de forma leve e autêntica."
      />

      <section className="bg-zinc-50 dark:bg-zinc-900/40 py-12 sm:py-20 text-zinc-900 dark:text-zinc-50 lg:py-28 transition-colors duration-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-px overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-200 dark:bg-zinc-800 md:grid-cols-2 lg:grid-cols-3 rounded-sm">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group relative bg-white dark:bg-zinc-900 p-6 sm:p-8 transition-all duration-300 hover:shadow-md dark:hover:shadow-zinc-950/50 hover:z-10 lg:p-10 flex flex-col justify-between"
              >
                <div>
                  <service.icon
                    className="h-8 w-8 text-blue-700 dark:text-blue-500 transition-transform duration-300 group-hover:scale-110"
                    strokeWidth={1.4}
                  />

                  <h3 className="mt-6 sm:mt-8 font-display text-lg sm:text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 font-medium dark:font-normal">
                    {service.desc}
                  </p>
                </div>

                <div className="mt-6 sm:mt-8 text-xs tabular-nums tracking-widest text-zinc-400 dark:text-zinc-500 font-mono font-semibold">
                  {String(index + 1).padStart(2, "0")}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
