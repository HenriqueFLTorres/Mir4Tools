/* eslint-disable @typescript-eslint/no-unused-vars */
import { nextAuthOptions } from '@/pages/api/auth/[...nextauth]'
import { type getUser, type User } from '@/server-rsc/getUser'
import type * as trpc from '@trpc/server'
import type * as trpcNext from '@trpc/server/adapters/next'
import { getServerSession } from 'next-auth'

interface CreateContextOptions {
  user: User | null
  rsc: boolean
}

export async function createContextInner(opts: CreateContextOptions) {
  return {
    user: opts.user,
  }
}

export async function createContext(
  opts:
    | {
        type: 'rsc'
        getUser: typeof getUser
      }
    | (trpcNext.CreateNextContextOptions & { type: 'api' })
) {
  if (opts.type === 'rsc') {
    return {
      type: opts.type,
      user: await opts.getUser(),
    }
  }

  const session = await getServerSession(opts.req, opts.res, nextAuthOptions)
  return {
    type: opts.type,
    user: session?.user,
  }
}

export type Context = trpc.inferAsyncReturnType<typeof createContext>
