import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

// Fontes do Projeto
import "@fontsource/space-grotesk/400.css";
import "@fontsource/space-grotesk/500.css";
import "@fontsource/space-grotesk/600.css";
import "@fontsource/space-grotesk/700.css";
import "@fontsource-variable/inter/index.css";

/**
 * Fábrica do Roteador (Router Factory)
 * Cria uma nova instância limpa do roteador com o contexto injetado
 */
export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
  });

  return router;
};

/**
 * Registro de Tipos do TanStack Router
 * Vincula o retorno da função getRouter ao autocomplete e checagem de tipos global do TypeScript.
 * Isso resolve os erros de "Argument of type '...' is not assignable to parameter of type 'undefined'".
 */
declare module "@tanstack/react-router" {
  interface Register {
    router: ReturnType<typeof getRouter>;
  }
}
