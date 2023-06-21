import { createTRPCNextLayout } from '@/@trpc/next-layout'
import { createContext } from '@/server/context'
import { appRouter } from '@/server/routers/_app'
import SuperJSON from '@/utils/SuperJSON'
import { getUser } from './getUser'

export const rsc = createTRPCNextLayout({
  router: appRouter,
  transformer: SuperJSON,
  async createContext() {
    return await createContext({
      type: 'rsc',
      getUser,
    })
  },
})
