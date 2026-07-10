import { createFileRoute, Link } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
  ArrowLeft,
  MessageCircle,
  Linkedin,
  Instagram,
  Clock,
} from "lucide-react";
import { PageHeader } from "@/components/page-header";

// Importação da logo utilizando o caminho relativo do projeto
import logoImg from "@/assets/senoengenharia.png";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — Insight Clínica" },
      {
        name: "description",
        content:
          "Solicite orçamento ou tire dúvidas com a equipe da Insight Clínica em Coronel Fabriciano/MG.",
      },
      { property: "og:title", content: "Fale com a Insight Clínica" },
      {
        property: "og:description",
        content: "Solicite orçamento ou tire dúvidas.",
      },
    ],
  }),
  component: Contato,
});

type FormValues = {
  nome: string;
  email: string;
  telefone: string;
  mensagem: string;
};

function Contato() {
  const { register, handleSubmit, reset, formState, getValues, trigger } = useForm<FormValues>();

  // Envio padrão por E-mail
  const onSubmitEmail = (data: FormValues) => {
    const body = encodeURIComponent(
      `Nome: ${data.nome}\nEmail: ${data.email}\nTelefone: ${data.telefone}\n\nMENSAGEM:\n${data.mensagem}`,
    );
    window.location.href = `mailto:contato@insightclinica.com.br?subject=Contato%20pelo%20site&body=${body}`;
    reset();
  };

  // Envio alternativo por WhatsApp
  const handleWhatsAppClick = async () => {
    // Dispara a validação do formulário nativamente antes de prosseguir
    const isValid = await trigger();

    // Se o formulário estiver válido, extrai os dados e envia para o WhatsApp
    if (isValid) {
      const data = getValues();
      const text = encodeURIComponent(
        `Olá! Gostaria de fazer um contato comercial.\n\n*Nome:* ${data.nome}\n*E-mail:* ${data.email}\n*Telefone:* ${data.telefone}\n\n*Mensagem:* ${data.mensagem}`,
      );
      window.open(`https://wa.me/5531984191612?text=${text}`, "_blank");
      reset();
    }
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

          {/* Logo fixa */}
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
        eyebrow="— 05 / Contato"
        title="Está buscando apoio psicológico? Vamos conversar."
        intro="Conte um pouco sobre o que você está vivendo. Respondemos em até dois dias úteis."
      />

      <section className="py-12 sm:py-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-12 gap-8 px-4 sm:px-6 lg:px-8">
          {/* Informações de Contato e Mapa */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="col-span-12 space-y-8 lg:col-span-5"
          >
            <div className="space-y-6">
              <a
                href="tel:+5531988191660"
                className="group flex items-start gap-4 border-b border-zinc-200 dark:border-zinc-800 pb-6 w-full"
              >
                <Phone
                  className="mt-1 h-5 w-5 shrink-0 text-orange-700 dark:text-orange-500"
                  strokeWidth={1.5}
                />
                <div className="min-w-0">
                  <div className="text-xs uppercase tracking-widest text-zinc-500 dark:text-zinc-400 font-semibold">
                    Telefone
                  </div>
                  <div className="mt-1 font-display text-lg sm:text-xl text-zinc-900 transition group-hover:text-orange-700 dark:text-zinc-200 dark:group-hover:text-orange-500 truncate">
                    (31) 3841-1290
                  </div>
                </div>
              </a>

              <a
                href="mailto:contato@insightclinica.com.br"
                className="group flex items-start gap-4 border-b border-zinc-200 dark:border-zinc-800 pb-6 w-full"
              >
                <Mail
                  className="mt-1 h-5 w-5 shrink-0 text-orange-700 dark:text-orange-500"
                  strokeWidth={1.5}
                />
                <div className="min-w-0">
                  <div className="text-xs uppercase tracking-widest text-zinc-500 dark:text-zinc-400 font-semibold">
                    E-mail
                  </div>
                  <div className="mt-1 font-display text-lg sm:text-xl text-zinc-900 transition group-hover:text-orange-700 dark:text-zinc-200 dark:group-hover:text-orange-500 break-all">
                    contato@senoengenharia.com.br
                  </div>
                </div>
              </a>

              {/* Bloco de Horário de Funcionamento */}
              <div className="flex items-start gap-4 border-b border-zinc-200 dark:border-zinc-800 pb-6 w-full">
                <Clock
                  className="mt-1 h-5 w-5 shrink-0 text-orange-700 dark:text-orange-500"
                  strokeWidth={1.5}
                />
                <div className="min-w-0">
                  <div className="text-xs uppercase tracking-widest text-zinc-500 dark:text-zinc-400 font-semibold">
                    Horário de Atendimento
                  </div>
                  <div className="mt-1 font-display text-base sm:text-lg text-zinc-900 dark:text-zinc-200 space-y-0.5">
                    <p>Segunda a Sexta: 08:00h às 17:00h</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 w-full">
                <MapPin
                  className="mt-1 h-5 w-5 shrink-0 text-orange-700 dark:text-orange-500"
                  strokeWidth={1.5}
                />
                <div className="min-w-0 wrap-break-word">
                  <div className="text-xs uppercase tracking-widest text-zinc-500 dark:text-zinc-400 font-semibold">
                    Endereço
                  </div>
                  <div className="mt-1 font-display text-lg sm:text-xl leading-snug text-zinc-900 dark:text-zinc-200">
                    Rua Benedito Onecimo Martins, 23
                    <br />
                    Vila Bom Jesus — Cel. Fabriciano
                    <br />
                    MG — CEP 35170-123
                  </div>
                  <div className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
                    CNPJ 20.853.842/0001-01
                  </div>
                </div>
              </div>
            </div>

            {/* Container do Mapa corrigido com link público funcional */}
            <div className="aspect-4/3 w-full overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900 rounded-sm">
              <iframe
                title="Localização Insight Clínica"
                src="https://maps.google.com/maps?q=Rua%20Benedito%20Onecimo%20Martins,%2023%20Vila%20Bom%20Jesus%20Coronel%20Fabriciano&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full border-0 dark:invert dark:grayscale dark:opacity-80 transition-all duration-300"
                allowFullScreen
              />
            </div>
          </motion.div>
          {/* Formulário */}
          <motion.form
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            onSubmit={handleSubmit(onSubmitEmail)}
            className="col-span-12 space-y-6 border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/40 p-6 sm:p-8 lg:col-span-7 lg:p-12 rounded-sm"
          >
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <Field label="Nome" error={formState.errors.nome?.message}>
                <input
                  type="text"
                  {...register("nome", { required: "Informe seu nome" })}
                  className="w-full rounded-sm border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-950 focus:border-orange-700 focus:outline-hidden dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100 dark:focus:border-orange-500"
                />
              </Field>
              <Field label="Telefone" error={formState.errors.telefone?.message}>
                <input
                  type="tel"
                  {...register("telefone", { required: "Informe um telefone" })}
                  className="w-full rounded-sm border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-950 focus:border-orange-700 focus:outline-hidden dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100 dark:focus:border-orange-500"
                />
              </Field>
            </div>

            <Field label="E-mail" error={formState.errors.email?.message}>
              <input
                type="email"
                {...register("email", {
                  required: "Informe seu e-mail",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "E-mail inválido",
                  },
                })}
                className="w-full rounded-sm border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-950 focus:border-orange-700 focus:outline-hidden dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100 dark:focus:border-orange-500"
              />
            </Field>

            <Field
              label="Conte um pouco sobre o que você está vivendo"
              error={formState.errors.mensagem?.message}
            >
              <textarea
                rows={6}
                {...register("mensagem", {
                  required: "Conte um pouco do que precisa",
                })}
                className="w-full rounded-sm border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-950 focus:border-orange-700 focus:outline-hidden resize-none dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100 dark:focus:border-orange-500"
              />
            </Field>

            {/* Grupo de Botões de Envio (E-mail e WhatsApp) */}
            <div className="space-y-3">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                {/* Botão Principal: Enviar por E-mail */}
                <button
                  type="submit"
                  className="group inline-flex w-full items-center justify-center gap-3 rounded-sm bg-zinc-900 dark:bg-zinc-100 px-6 py-4 text-sm font-medium text-white dark:text-zinc-950 transition-colors hover:bg-orange-700 dark:hover:bg-orange-500 dark:hover:text-white md:w-auto shadow-sm cursor-pointer"
                >
                  Enviar por e-mail
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>

                {/* Botão: Enviar via WhatsApp */}
                <button
                  type="button"
                  onClick={handleWhatsAppClick}
                  className="group inline-flex w-full items-center justify-center gap-3 rounded-sm border border-emerald-600/30 bg-emerald-50/50 hover:bg-emerald-600 dark:border-emerald-500/20 dark:bg-emerald-950/20 dark:hover:bg-emerald-600 px-6 py-4 text-sm font-medium text-emerald-700 dark:text-emerald-400 hover:text-white dark:hover:text-white transition-all md:w-auto shadow-xs cursor-pointer"
                >
                  <MessageCircle className="h-4 w-4 fill-current" />
                  Conversar no WhatsApp
                </button>
              </div>

              {/* Novos Botões de Redes Sociais */}
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center pt-2 border-t border-zinc-200 dark:border-zinc-800">
                {/* Botão: LinkedIn */}
                <a
                  href="https://linkedin.com/company/sua-clinica" /* Substitua com o link correto */
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex w-full items-center justify-center gap-3 rounded-sm border border-blue-600/30 bg-blue-50/50 hover:bg-blue-600 dark:border-blue-500/20 dark:bg-blue-950/20 dark:hover:bg-blue-600 px-6 py-3 text-sm font-medium text-blue-700 dark:text-blue-400 hover:text-white dark:hover:text-white transition-all md:w-auto cursor-pointer"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>

                {/* Botão: Instagram */}
                <a
                  href="https://instagram.com/psicologashirleyoficial" /* Substitua com o link correto */
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex w-full items-center justify-center gap-3 rounded-sm border border-pink-600/30 bg-pink-50/50 hover:bg-pink-600 dark:border-pink-500/20 dark:bg-pink-950/20 dark:hover:bg-pink-600 px-6 py-3 text-sm font-medium text-pink-700 dark:text-pink-400 hover:text-white dark:hover:text-white transition-all md:w-auto cursor-pointer"
                >
                  <Instagram className="h-4 w-4" />
                  Instagram
                </a>
              </div>
            </div>
          </motion.form>
        </div>
      </section>
    </div>
  );
}

interface FieldProps {
  label: string;
  error?: string;
  children: React.ReactNode;
}

function Field({ label, error, children }: FieldProps) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs uppercase tracking-widest text-zinc-500 dark:text-zinc-400 font-medium">
        {label}
      </span>
      {children}
      {error && <span className="mt-1 block text-xs text-red-600 dark:text-red-400">{error}</span>}
    </label>
  );
}
