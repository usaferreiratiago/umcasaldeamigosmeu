/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

import { Route as rootRouteImport } from './routes/__root'
import { Route as IndexImport } from './routes/index'
import { Route as ClientesImport } from './routes/clientes'
import { Route as ContatoImport } from './routes/contato'
import { Route as FuncionariosImport } from './routes/funcionarios'
import { Route as VideosImport } from './routes/videos'
import { Route as ConteudoImport } from './routes/conteudo'
import { Route as SobreImport } from './routes/sobre'

const rootRoute = rootRouteImport

const IndexRoute = IndexImport.update({ path: '/', getParentRoute: () => rootRoute } as any)
const ClientesRoute = ClientesImport.update({ path: '/clientes', getParentRoute: () => rootRoute } as any)
const ContatoRoute = ContatoImport.update({ path: '/contato', getParentRoute: () => rootRoute } as any)
const FuncionariosRoute = FuncionariosImport.update({ path: '/funcionarios', getParentRoute: () => rootRoute } as any) // ADICIONADO
const VideosRoute = VideosImport.update({ path: '/videos', getParentRoute: () => rootRoute } as any)
const ConteudoRoute = ConteudoImport.update({ path: '/conteudo', getParentRoute: () => rootRoute } as any)
const SobreRoute = SobreImport.update({ path: '/sobre', getParentRoute: () => rootRoute } as any)

export const routeTree = rootRoute._addFileChildren({
  '/': IndexRoute,
  '/clientes': ClientesRoute,
  '/contato': ContatoRoute,
  '/funcionarios': FuncionariosRoute,
  '/videos': VideosRoute,
  '/conteudo': ConteudoRoute,
  '/sobre': SobreRoute,
})