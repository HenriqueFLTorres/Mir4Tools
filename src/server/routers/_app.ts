import { type SettingsObject } from '@/atoms/Settings'
import { prisma } from '../prisma'
import { publicProcedure, router } from '../trpc'

const SettingsFallback = {
  displayRarity: ['Legendary', 'Epic', 'Rare'],
  showOwnedItems: false,
  language: 'en',
} satisfies SettingsObject

export const appRouter = router({
  getSettings: publicProcedure.query(async ({ ctx }) => {
    if (!ctx.user?.email) return SettingsFallback

    const settings = await prisma.user.findFirst({
      where: { email: ctx.user?.email },
      select: {
        settings: true,
      },
    })

    if (!settings?.settings) return SettingsFallback

    return settings?.settings
  }),
})

export type AppRouter = typeof appRouter
