import SettingsFallback from '@/utils/SettingsFallback'
import { z } from 'zod'
import { prisma } from '../prisma'
import { authenticatedProcedure, publicProcedure, router } from '../trpc'

export const SettingsSchema = z.object({
  displayRarity: z.array(
    z.enum(['Legendary', 'Epic', 'Rare', 'Uncommon', 'Common'])
  ),
  language: z.enum(['en', 'pt']),
  showOwnedItems: z.boolean(),
})

export const appRouter = router({
  getSettings: publicProcedure.query(async ({ ctx }) => {
    if (!ctx.user?.id && !ctx.user?.email) return SettingsFallback

    const userData = await prisma.user.findFirst({
      where: { id: ctx.user?.id },
      select: {
        settings: {
          select: {
            displayRarity: true,
            showOwnedItems: true,
          },
        },
      },
    })

    if (!userData?.settings) return SettingsFallback

    return userData.settings
  }),
  saveSettings: authenticatedProcedure.input(SettingsSchema).mutation(
    async ({ ctx, input }) =>
      await prisma.user.update({
        where: { id: ctx.user.id },
        data: {
          settings: {
            update: {
              ...input,
            },
          },
        },
      })
  ),
})

export type AppRouter = typeof appRouter
