import prisma from '@/utils/prisma'
import { type NextAuthOptions } from 'next-auth'
import NextAuth from 'next-auth/next'
import GoogleProvider from 'next-auth/providers/google'

const defaultSettings = {
  displayRarity: ['Legendary', 'Epic', 'Rare'],
  showOwnedItems: false,
}

export const nextAuthOptions: NextAuthOptions = {
  secret: process.env.secret,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async signIn({ user, profile }) {
      try {
        let targetUser = await prisma.user.findFirst({
          where: {
            id: user.id,
          },
        })

        if (!targetUser) {
          targetUser = await prisma.user.create({
            data: {
              id: user.id,
              settings: {
                create: {
                  ...defaultSettings,
                },
              },
            },
          })
        }

        return true
      } catch (error) {
        console.error(error)
        return false
      }
    },
    async session({ session }) {
      const userData = await prisma.user.findFirst({
        where: { id: session.user?.id },
        select: { settings: true },
      })

      if (!userData?.settings) {
        return {
          ...session,
          user: {
            ...session.user,
            settings: defaultSettings,
          },
        }
      }

      return {
        ...session,
        user: { ...session.user, settings: userData.settings },
      }
    },
  },
}

export default NextAuth(nextAuthOptions)
