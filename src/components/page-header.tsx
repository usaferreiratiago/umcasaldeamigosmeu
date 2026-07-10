import { motion } from "framer-motion";

export function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <section className="border-b border-border pt-32 pb-16 lg:pt-40 lg:pb-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-6 text-xs uppercase tracking-[0.3em] text-terracotta">{eyebrow}</div>
          <h1 className="max-w-3xl font-display text-4xl font-medium leading-tight text-ink md:text-6xl">
            {title}
          </h1>
          {intro && (
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-foreground/70 md:text-lg">
              {intro}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}