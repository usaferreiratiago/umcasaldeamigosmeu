import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Quote, ArrowLeft } from "lucide-react";
import { PageHeader } from "@/components/page-header";

import logoImg from "@/assets/flagspain.jpg";

export const Route = createFileRoute("/comunidades")({
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
  component: Comunidade,
});

const testimonials = [
  {
    q: "Cada vídeo transmite alegria e simplicidade. Parece que estamos viajando junto com vocês em cada novo destino.",
    a: "Mariana Oliveira",
    r: "Inscrita do canal",
  },
  {
    q: "Descobri o canal procurando vídeos sobre Madrid e hoje acompanho todos os conteúdos. É impossível não gostar da energia de vocês.",
    a: "Carlos Henrique",
    r: "Seguidor desde 2023",
  },
  {
    q: "Os vídeos são leves, divertidos e mostram lugares incríveis de uma forma muito natural. Continuem compartilhando essas experiências.",
    a: "Fernanda Souza",
    r: "Membro da comunidade",
  },
];

function Comunidade() {
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
        eyebrow="— 04 / Comunidade"
        title="O que nossa comunidade diz."
        intro="Cada comentário, mensagem e inscrição fortalece essa jornada. Estes são alguns depoimentos de pessoas que acompanham o canal Um Casal de Amigos Meu."
      />

      <section className="bg-zinc-50 dark:bg-zinc-900/40 py-12 sm:py-16 lg:py-28 text-zinc-900 dark:text-zinc-50 transition-colors duration-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-px bg-zinc-200 dark:bg-zinc-800 md:grid-cols-3 rounded-sm overflow-hidden">
            {testimonials.map((t, i) => (
              <motion.figure
                key={t.a}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="flex flex-col justify-between bg-white dark:bg-zinc-900 p-6 sm:p-8 lg:p-10 transition-colors duration-300 min-w-0"
              >
                <div>
                  <Quote
                    className="h-8 w-8 text-red-600 dark:text-red-500 shrink-0"
                    strokeWidth={1.2}
                  />

                  <blockquote className="mt-6 sm:mt-8 text-base sm:text-lg leading-relaxed text-zinc-700 dark:text-zinc-300 wrap-break-word">
                    "{t.q}"
                  </blockquote>
                </div>

                <figcaption className="mt-8 sm:mt-10 border-t border-zinc-100 dark:border-zinc-800 pt-5">
                  <div className="font-heading text-base font-medium text-zinc-900 dark:text-zinc-50 truncate">
                    {t.a}
                  </div>

                  <div className="mt-1 text-xs uppercase tracking-widest text-zinc-500 dark:text-zinc-400 wrap-break-word">
                    {t.r}
                  </div>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
