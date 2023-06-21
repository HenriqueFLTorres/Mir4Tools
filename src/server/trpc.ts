import { initTRPC, TRPCError } from '@trpc/server'
import superjson from 'superjson'
import { ZodError } from 'zod'
import { type TRPCContext } from './context'

const t = initTRPC.context<TRPCContext>().create({
  transformer: superjson,
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

export const autheticatedProcedure = t.procedure.use(async (opts) => {
  if (!opts.ctx.session.user.email) {
    throw new TRPCError({
      code: 'UNAUTHORIZED',
      message: 'You have to be logged in to do this',
    })
  }

  return await opts.next({
    ctx: {
      user: opts.ctx.session.user,
    },
  })
})
