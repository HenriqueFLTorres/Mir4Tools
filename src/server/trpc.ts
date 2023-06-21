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

export const authenticatedProcedure = t.procedure.use(async (opts) => {
  if (!opts.ctx.user) {
    throw new TRPCError({
      code: 'UNAUTHORIZED',
      message: 'You have to be logged in to do this',
    })
  }
  return await opts.next({
    ctx: {
      user: opts.ctx.user,
    },
  })
})
