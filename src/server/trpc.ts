import SuperJSON from '@/utils/SuperJSON'
import { initTRPC, TRPCError } from '@trpc/server'
import { ZodError } from 'zod'
import { type Context } from './context'

const t = initTRPC.context<Context>().create({
  transformer: SuperJSON,
  errorFormatter({ shape, error }) {
    return {
      ...shape,
      data: {
        ...shape.data,
        zod:
          error.cause instanceof ZodError
            ? error.cause.flatten().fieldErrors
            : null,
      },
    }
  },
})

export const router = t.router

export const publicProcedure = t.procedure

// eslint-disable-next-line @typescript-eslint/promise-function-async
export const authenticatedProcedure = t.procedure.use((opts) => {
  if (!opts.ctx.user) {
    throw new TRPCError({
      code: 'UNAUTHORIZED',
      message: 'You have to be logged in to do this',
    })
  }
  return opts.next({
    ctx: {
      user: opts.ctx.user,
    },
  })
})
