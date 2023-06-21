import { TRPCError } from '@trpc/server'
import type { CreateNextContextOptions } from '@trpc/server/adapters/next'
import { getServerSession } from 'next-auth'
import { prisma } from './prisma'
import Settings from '@/icons/Settings'
import { SettingsFallback } from '@/atoms/Settings'

export const createTRPCContext = async (opts: CreateNextContextOptions) => {
  const { req, res } = opts

  const session = await getServerSession(req)

  const settings = session?.user?.email ? await prisma.user.findFirst({
    where: {
      email: session?.user?.email,
    },
    select: {
      settings: true,
    },
  }) : SettingsFallback

  return { session: { ...session, user: { ...session?.user, settings } }, req, res }
}

export type TRPCContext = typeof createTRPCContext
