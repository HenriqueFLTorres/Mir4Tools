import NextAuth from 'next-auth/next'
import GoogleProvider from 'next-auth/providers/google'

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId:
        '729883301106-26e339aj5f9nj45g2jkoae1om63uauks.apps.googleusercontent.com',
      clientSecret: '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'
    })
  ],
  secret: process.env.JWT_SECRET
})
