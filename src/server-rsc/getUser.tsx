import { getSSRSession } from '@/utils/getSSRSession'
import { type Session } from 'next-auth'

export async function getUser(): Promise<Session['user'] | null> {
  const session = await getSSRSession()

  return session?.user
    ? { ...session?.user, id: (session?.user.settings as any).userId }
    : null
}
