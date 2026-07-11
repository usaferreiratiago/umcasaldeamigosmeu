// import { createFileRoute, Link } from "@tanstack/react-router";
// import { motion } from "framer-motion";
// import { ArrowUpRight } from "lucide-react";
// import heroImg from "@/assets/main_picture/channels4_profile.jpg";

// // Rota adicionada explicitamente para resolver o erro do TS
// export const Route = createFileRoute("/")({
//   head: () => ({
//     meta: [
//       { title: "Um Casal de Amigos Meu — Histórias, viagens e momentos inesquecíveis" },
//       {
//         name: "description",
//         content:
//           "Acompanhe o canal Um Casal de Amigos Meu e descubra viagens, passeios, aventuras e momentos especiais compartilhados com a comunidade.",
//       },
//       {
//         property: "og:title",
//         content: "Um Casal de Amigos Meu",
//       },
//       {
//         property: "og:description",
//         content: "Viagens, passeios, experiências e histórias vividas por um casal de amigos.",
//       },
//       { property: "og:image", content: heroImg },
//     ],
//     links: [{ rel: "canonical", href: "/" }],
//     scripts: [
//       {
//         type: "application/ld+json",
//         children: JSON.stringify({
//           "@context": "https://schema.org",
//           "@type": "Person",
//           name: "Um Casal de Amigos Meu",
//           jobTitle: "Criadores de Conteúdo",
//           sameAs: ["https://www.youtube.com/@umcasaldeamigosmeu"],
//           foundingDate: "1986",
//           address: {
//             "@type": "PostalAddress",
//             addressLocality: "Madrid",
//             addressCountry: "ES",
//           },
//           areaServed: "Vale do Aço, Minas Gerais",
//         }),
//       },
//     ],
//   }),
//   component: Home,
// });

// const fadeUp = {
//   initial: { opacity: 0, y: 24 },
//   whileInView: { opacity: 1, y: 0 },
//   viewport: { once: true, margin: "-80px" },
//   transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
// };

// function Home() {
//   return (
//     <>
//       {/* Seção Hero */}
//       <section className="relative min-h-screen overflow-hidden pt-16 bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50">
//         <div className="absolute inset-0">
//           <img
//             src={heroImg}
//             alt=""
//             width={1920}
//             height={1080}
//             className="h-full w-full object-cover"
//           />
//           {/* Alterado para vazio para evitar o flash de texto no celular */}
//           {/* Gradiente ajustado para dar contraste ao texto tanto no light quanto no dark */}
//           <div className="absolute inset-0 bg-linear-to-b from-white/60 via-white/40 to-white dark:from-zinc-950/60 dark:via-zinc-950/40 dark:to-zinc-950" />
//         </div>
//         <div className="relative mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-7xl items-end px-5 py-16 sm:px-8 sm:py-20 lg:grid lg:grid-cols-12 lg:gap-6 lg:px-10 lg:pb-16 lg:pt-24">
//           <div className="w-full lg:col-span-9 lg:flex lg:flex-col lg:justify-end">
//             <motion.div
//               {...fadeUp}
//               className="mb-6 inline-flex flex-wrap items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.25em] text-zinc-600 dark:text-zinc-400 sm:text-xs"
//             >
//               <span className="h-px w-8 bg-orange-700 dark:bg-orange-600 sm:w-10" />
//               Desde 2016 · Madrid, Espanha
//             </motion.div>

//             <motion.h1
//               {...fadeUp}
//               transition={{
//                 duration: 0.9,
//                 delay: 0.05,
//                 ease: [0.22, 1, 0.36, 1],
//               }}
//               className="font-display text-[clamp(2.3rem,8vw,7rem)] font-medium leading-[0.95] tracking-tight text-zinc-900 dark:text-zinc-50"
//             >
//               Vivendo cada
//               <br />
//               <span className="italic font-light text-orange-700 dark:text-orange-500">
//                 momento
//               </span>{" "}
//               &amp; juntos.
//             </motion.h1>

//             <motion.p
//               {...fadeUp}
//               transition={{ duration: 0.8, delay: 0.15 }}
//               className="mt-6 max-w-2xl text-sm leading-relaxed text-zinc-700 dark:text-zinc-300 sm:mt-8 sm:text-base md:text-lg"
//             >
//               Compartilhamos viagens, passeios, experiências e momentos especiais para inspirar
//               pessoas que gostam de descobrir novos lugares e viver boas histórias ao lado de quem
//               amam.
//             </motion.p>

//             <motion.div
//               {...fadeUp}
//               transition={{ duration: 0.8, delay: 0.25 }}
//               className="mt-8 flex flex-col gap-4 sm:mt-10 sm:flex-row sm:flex-wrap"
//             >
//               <Link
//                 to="https://www.youtube.com/@umcasaldeamigosmeu"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="group inline-flex w-full items-center justify-center gap-3 rounded-sm border border-red-600/30 bg-red-50/50 px-6 py-3.5 text-sm font-medium text-red-700 transition-all hover:bg-red-600 hover:text-white dark:border-red-500/20 dark:bg-red-950/20 dark:text-red-400 dark:hover:bg-red-600 dark:hover:text-white sm:w-auto shadow-md"
//               >
//                 Assistir aos vídeos
//               </Link>
//             </motion.div>
//           </div>
//         </div>

//         {/* Grid de Métricas */}
//         <div className="relative border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
//           <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-zinc-200 dark:divide-zinc-800 md:grid-cols-4">
//             {[
//               { k: "+10", l: "anos de histórias" },
//               { k: "+550", l: "vídeos publicados" },
//               { k: "Madrid", l: "Espanha" },
//               { k: "100%", l: "momentos reais" },
//             ].map((s) => (
//               <div key={s.l} className="px-6 py-8 lg:px-10">
//                 <div className="font-display text-3xl font-medium text-zinc-900 dark:text-zinc-50 md:text-4xl">
//                   {s.k}
//                 </div>
//                 <div className="mt-1 text-xs uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400 font-medium">
//                   {s.l}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Seção de Navegação Interna */}
//       <section className="bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 border-b border-zinc-200 dark:border-zinc-800 py-24 lg:py-32">
//         <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 md:grid-cols-2 lg:px-10">
//           {[
//             {
//               to: "/sobre",
//               n: "01",
//               t: "Sobre",
//               d: "Conheça a história do canal e como essa jornada começou.",
//             },
//             {
//               to: "/conteudo",
//               n: "02",
//               t: "Conteúdo",
//               d: "Conheça os temas, aventuras e experiências compartilhadas no canal.",
//             },
//             {
//               to: "/videos",
//               n: "03",
//               t: "Vídeos",
//               d: "Explore nossas viagens, passeios e momentos marcantes.",
//             },
//             {
//               to: "/comunidades",
//               n: "04",
//               t: "Comunidade",
//               d: "Veja o que os inscritos dizem sobre o canal.",
//             },
//             {
//               to: "/funcionarios",
//               n: "05",
//               t: "Quem Somos",
//               d: "Conheça quem está por trás das câmeras e das histórias.",
//             },
//             {
//               to: "/contato",
//               n: "06",
//               t: "Contato",
//               d: "Entre em contato para parcerias, sugestões ou para falar conosco.",
//             },
//           ].map((c) => (
//             <Link
//               key={c.to}
//               to={c.to}
//               className="group flex items-start justify-between gap-6 border-t border-zinc-200 dark:border-zinc-800 pt-8 transition hover:border-zinc-900 dark:hover:border-zinc-50"
//             >
//               <div>
//                 <div className="text-xs tabular-nums tracking-widest text-zinc-500 dark:text-zinc-400">
//                   — {c.n}
//                 </div>
//                 <h2 className="mt-3 font-display text-3xl font-medium text-zinc-900 dark:text-zinc-50">
//                   {c.t}
//                 </h2>
//                 <p className="mt-2 max-w-md text-sm text-zinc-600 dark:text-zinc-400">{c.d}</p>
//               </div>
//               <ArrowUpRight className="h-6 w-6 shrink-0 text-zinc-900 dark:text-zinc-50 transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-orange-700 dark:group-hover:text-orange-500" />
//             </Link>
//           ))}
//         </div>
//       </section>
//     </>
//   );
// }

import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import heroImg from "@/assets/main_picture/channels4_profile.jpg";

// Rota adicionada explicitamente para resolver o erro do TS
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Um Casal de Amigos Meu — Histórias, viagens e momentos inesquecíveis" },
      {
        name: "description",
        content:
          "Acompanhe o canal Um Casal de Amigos Meu e descubra viagens, passeios, aventuras e momentos especiais compartilhados com a comunidade.",
      },
      {
        property: "og:title",
        content: "Um Casal de Amigos Meu",
      },
      {
        property: "og:description",
        content: "Viagens, passeios, experiências e histórias vividas por um casal de amigos.",
      },
      { property: "og:image", content: heroImg },
    ],
    links: [
      { rel: "canonical", href: "/" },
      // Estratégia 1: Força o navegador a pré-carregar e cachear a imagem principal imediatamente
      { rel: "preload", as: "image", href: heroImg },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Um Casal de Amigos Meu",
          jobTitle: "Criadores de Conteúdo",
          sameAs: ["https://www.youtube.com/@umcasaldeamigosmeu"],
          foundingDate: "1986",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Madrid",
            addressCountry: "ES",
          },
          areaServed: "Vale do Aço, Minas Gerais",
        }),
      },
    ],
  }),
  component: Home,
});

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

function Home() {
  return (
    <>
      {/* Seção Hero */}
      <section className="relative min-h-screen overflow-hidden pt-16 bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt=""
            width={1920}
            height={1080}
            className="h-full w-full object-cover"
          />
          {/* Gradiente ajustado para dar contraste ao texto tanto no light quanto no dark */}
          <div className="absolute inset-0 bg-linear-to-b from-white/60 via-white/40 to-white dark:from-zinc-950/60 dark:via-zinc-950/40 dark:to-zinc-950" />
        </div>
        <div className="relative mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-7xl items-end px-5 py-16 sm:px-8 sm:py-20 lg:grid lg:grid-cols-12 lg:gap-6 lg:px-10 lg:pb-16 lg:pt-24">
          <div className="w-full lg:col-span-9 lg:flex lg:flex-col lg:justify-end">
            <motion.div
              {...fadeUp}
              className="mb-6 inline-flex flex-wrap items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.25em] text-zinc-600 dark:text-zinc-400 sm:text-xs"
            >
              <span className="h-px w-8 bg-orange-700 dark:bg-orange-600 sm:w-10" />
              Desde 2016 · Madrid, Espanha
            </motion.div>

            <motion.h1
              {...fadeUp}
              transition={{
                duration: 0.9,
                delay: 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="font-display text-[clamp(2.3rem,8vw,7rem)] font-medium leading-[0.95] tracking-tight text-zinc-900 dark:text-zinc-50"
            >
              Vivendo cada
              <br />
              <span className="italic font-light text-orange-700 dark:text-orange-500">
                momento
              </span>{" "}
              &amp; juntos.
            </motion.h1>

            <motion.p
              {...fadeUp}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="mt-6 max-w-2xl text-sm leading-relaxed text-zinc-700 dark:text-zinc-300 sm:mt-8 sm:text-base md:text-lg"
            >
              Compartilhamos viagens, passeios, experiências e momentos especiais para inspirar
              pessoas que gostam de descobrir novos lugares e viver boas histórias ao lado de quem
              amam.
            </motion.p>

            <motion.div
              {...fadeUp}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="mt-8 flex flex-col gap-4 sm:mt-10 sm:flex-row sm:flex-wrap"
            >
              <Link
                to="https://www.youtube.com/@umcasaldeamigosmeu"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex w-full items-center justify-center gap-3 rounded-sm border border-red-600/30 bg-red-50/50 px-6 py-3.5 text-sm font-medium text-red-700 transition-all hover:bg-red-600 hover:text-white dark:border-red-500/20 dark:bg-red-950/20 dark:text-red-400 dark:hover:bg-red-600 dark:hover:text-white sm:w-auto shadow-md"
              >
                Assistir aos vídeos
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Grid de Métricas */}
        <div className="relative border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
          <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-zinc-200 dark:divide-zinc-800 md:grid-cols-4">
            {[
              { k: "+10", l: "anos de histórias" },
              { k: "+550", l: "vídeos publicados" },
              { k: "Madrid", l: "Espanha" },
              { k: "100%", l: "momentos reais" },
            ].map((s) => (
              <div key={s.l} className="px-6 py-8 lg:px-10">
                <div className="font-display text-3xl font-medium text-zinc-900 dark:text-zinc-50 md:text-4xl">
                  {s.k}
                </div>
                <div className="mt-1 text-xs uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400 font-medium">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção de Navegação Interna */}
      <section className="bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 border-b border-zinc-200 dark:border-zinc-800 py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 md:grid-cols-2 lg:px-10">
          {[
            {
              to: "/sobre",
              n: "01",
              t: "Sobre",
              d: "Conheça a história do canal e como essa jornada começou.",
            },
            {
              to: "/conteudo",
              n: "02",
              t: "Conteúdo",
              d: "Conheça os temas, aventuras e experiências compartilhadas no canal.",
            },
            {
              to: "/videos",
              n: "03",
              t: "Vídeos",
              d: "Explore nossas viagens, passeios e momentos marcantes.",
            },
            {
              to: "/comunidades",
              n: "04",
              t: "Comunidade",
              d: "Veja o que os inscritos dizem sobre o canal.",
            },
            {
              to: "/funcionarios",
              n: "05",
              t: "Quem Somos",
              d: "Conheça quem está por trás das câmeras e das histórias.",
            },
            {
              to: "/contato",
              n: "06",
              t: "Contato",
              d: "Entre em contato para parcerias, sugestões ou para falar conosco.",
            },
          ].map((c) => (
            <Link
              key={c.to}
              to={c.to}
              preload="intent" // Estratégia 2: Cacheia a página alvo na memória no momento do "toque/hover" do usuário
              className="group flex items-start justify-between gap-6 border-t border-zinc-200 dark:border-zinc-800 pt-8 transition hover:border-zinc-900 dark:hover:border-zinc-50"
            >
              <div>
                <div className="text-xs tabular-nums tracking-widest text-zinc-500 dark:text-zinc-400">
                  — {c.n}
                </div>
                <h2 className="mt-3 font-display text-3xl font-medium text-zinc-900 dark:text-zinc-50">
                  {c.t}
                </h2>
                <p className="mt-2 max-w-md text-sm text-zinc-600 dark:text-zinc-400">{c.d}</p>
              </div>
              <ArrowUpRight className="h-6 w-6 shrink-0 text-zinc-900 dark:text-zinc-50 transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-orange-700 dark:group-hover:text-orange-500" />
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
