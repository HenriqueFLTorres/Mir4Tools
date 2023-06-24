import { nextAuthOptions } from '@/pages/api/auth/[...nextauth]'
import { getServerSession } from 'next-auth'
import { cookies, headers } from 'next/headers'

export const getSSRSession = async () => {
  const req = {
    headers: Object.fromEntries(headers() as Headers),
    cookies: Object.fromEntries(
      cookies()
        .getAll()
        .map((c) => [c.name, c.value])
    ),
  }
  const res = { getHeader() {}, setCookie() {}, setHeader() {} }

  // @ts-expect-error - The type used in next-auth for the req object doesn't match, but it still works
  const session = await getServerSession(req, res, nextAuthOptions)
  return session
}
