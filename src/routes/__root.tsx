import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet, Link, createRootRouteWithContext, useRouter } from "@tanstack/react-router";
import { useEffect } from "react";

/**
 * 404 - Página não encontrada
 */
function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold font-display text-ink">404</h1>
        <p className="mt-2 text-sm text-foreground/70">Página não encontrada</p>
        <Link
          to="."
          className="mt-6 inline-block text-sm font-medium text-terracotta underline hover:text-terracotta-deep"
        >
          Voltar para o início
        </Link>
      </div>
    </div>
  );
}

/**
 * Error Boundary - Fallback de erros catastróficos
 */
function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();

  useEffect(() => {
    console.error("Erro capturado no Root:", error);
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="text-center">
        <h1 className="text-2xl font-medium text-ink font-display">Erro inesperado</h1>
        <p className="mt-2 text-sm text-foreground/70 mb-6">
          Ocorreu um problema ao carregar este trecho da aplicação.
        </p>
        <button
          className="rounded-sm bg-terracotta px-4 py-2 text-sm font-medium text-white transition hover:bg-terracotta-deep"
          onClick={() => {
            router.invalidate();
            reset();
          }}
        >
          Tentar novamente
        </button>
      </div>
    </div>
  );
}

/**
 * Route Context Configuration
 */
export const Route = createRootRouteWithContext<{
  queryClient: QueryClient;
}>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Seno Engenharia" },
      { name: "description", content: "Engenharia e construção no Vale do Aço" },
    ],
  }),
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

/**
 * App Root Component
 */
function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* O Outlet serve de container para as páginas (index, contato, etc.) */}
      <Outlet />
    </QueryClientProvider>
  );
}
