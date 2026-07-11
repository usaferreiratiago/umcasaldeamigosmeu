/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

import { Route as rootRouteImport } from './routes/__root'
import { Route as IndexImport } from './routes/index'
import { Route as ComunidadesImport } from './routes/comunidades'
import { Route as ContatoImport } from './routes/contato'
import { Route as FuncionariosImport } from './routes/funcionarios'
import { Route as VideosImport } from './routes/videos'
import { Route as ParceirosImport } from './routes/parceiros'
import { Route as DicasImport } from './routes/dicas'
import { Route as ConteudoImport } from './routes/conteudo'
import { Route as SobreImport } from './routes/sobre'

const rootRoute = rootRouteImport

const IndexRoute = IndexImport.update({ path: '/', getParentRoute: () => rootRoute } as any)
const ComunidadesRoute = ComunidadesImport.update({ path: '/comunidades', getParentRoute: () => rootRoute } as any)
const ContatoRoute = ContatoImport.update({ path: '/contato', getParentRoute: () => rootRoute } as any)
const FuncionariosRoute = FuncionariosImport.update({ path: '/funcionarios', getParentRoute: () => rootRoute } as any) // ADICIONADO
const VideosRoute = VideosImport.update({ path: '/videos', getParentRoute: () => rootRoute } as any)
const ParceirosRoute = ParceirosImport.update({ path: '/parceiros', getParentRoute: () => rootRoute } as any)
const DicasRoute = DicasImport.update({ path: '/dicas', getParentRoute: () => rootRoute } as any)
const ConteudoRoute = ConteudoImport.update({ path: '/conteudo', getParentRoute: () => rootRoute } as any)
const SobreRoute = SobreImport.update({ path: '/sobre', getParentRoute: () => rootRoute } as any)

export const routeTree = rootRoute._addFileChildren({
  '/': IndexRoute,
  '/comunidades': ComunidadesRoute,
  '/contato': ContatoRoute,
  '/funcionarios': FuncionariosRoute,
  '/videos': VideosRoute,
  '/parceiros': ParceirosRoute,
  '/dicas': DicasRoute,
  '/conteudo': ConteudoRoute,
  '/sobre': SobreRoute,
})