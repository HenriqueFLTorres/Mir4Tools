import { type SettingsObject } from '@/atoms/Settings'
import { z } from 'zod'
import { prisma } from '../prisma'
import { authenticatedProcedure, publicProcedure, router } from '../trpc'

export const SettingsSchema = z.object({
  displayRarity: z.array(
    z.enum(['Legendary', 'Epic', 'Rare', 'Uncommon', 'Common'])
  ),
  language: z.enum(['en', 'pt']),
  showOwndedItems: z.boolean(),
})

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
  saveSettings: authenticatedProcedure
    .input(SettingsSchema)
    .mutation(async ({ ctx, input }) => {
      await prisma.user.update({
        where: { email: ctx.user.email },
        data: {
          settings: {
            update: input,
          },
        },
      })
    }),
})

export type AppRouter = typeof appRouter
