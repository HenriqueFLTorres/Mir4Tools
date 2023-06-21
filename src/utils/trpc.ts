import { httpBatchLink } from '@trpc/client'
import { createTRPCNext } from '@trpc/next'
import type { AppRouter } from '../server/routers/_app'
import SuperJSON from '@/utils/SuperJSON'

function getBaseUrl() {
  if (typeof window !== 'undefined') {
    return ''
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`
  }
  if (process.env.RENDER_INTERNAL_HOSTNAME && process.env.PORT) {
    return `http://${process.env.RENDER_INTERNAL_HOSTNAME}:${process.env.PORT}`
  }
  return `http://localhost:${process.env.PORT ?? 3000}`
}
export const trpc = createTRPCNext<AppRouter>({
  config() {
    return {
      transformer: SuperJSON,
      links: [
        httpBatchLink({
          url: `${getBaseUrl()}/api/trpc`,
          async headers() {
            return {
              // authorization: getAuthCookie(),
            }
          },
        }),
      ],
    }
  },
  ssr: false,
})
