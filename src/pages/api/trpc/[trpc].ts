import { createContext } from '@/server/context'
import { appRouter } from '@/server/routers/_app'
import { createNextApiHandler } from '@trpc/server/adapters/next'

export default createNextApiHandler({
  router: appRouter,
  async createContext(opts) {
    return await createContext({
      type: 'api',
      ...opts,
    })
  },
})
