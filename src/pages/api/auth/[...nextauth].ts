import prisma from '@/utils/prisma'
import { type NextAuthOptions } from 'next-auth'
import NextAuth from 'next-auth/next'
import GoogleProvider from 'next-auth/providers/google'

export const nextAuthOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId:
        '729883301106-26e339aj5f9nj45g2jkoae1om63uauks.apps.googleusercontent.com',
      clientSecret: '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',
    }),
  ],
  secret: process.env.JWT_SECRET,
  callbacks: {
    async signIn({ user, profile }) {
      try {
        let targetUser = await prisma.user.findFirst({
          where: {
            id: user.id,
          },
        })

        if (!user.email || !user.name || !user.image) {
          console.error('User object missing email, name or image.')
          return false
        }

        if (!targetUser) {
          targetUser = await prisma.user.create({
            data: {
              id: user.id,
              email: user.email,
              name: user.name,
              image: user.image,
              settings: {
                create: {
                  displayRarity: ['Legendary', 'Epic', 'Rare'],
                  language:
                    (profile as { locale?: 'en' | 'pt' })?.locale ?? 'en',
                  showOwnedItems: false,
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
  },
}

export default NextAuth(nextAuthOptions)
