import { type AsyncLocalStorage } from 'async_hooks'
import { getToken } from 'next-auth/jwt'
import { cookies } from 'next/headers'

interface LocalStorageContext {
  // eslint-disable-next-line @typescript-eslint/ban-types
  trpc: {}
}
const asyncStorage: AsyncLocalStorage<LocalStorageContext> =
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  require('next/dist/client/components/request-async-storage').requestAsyncStorage

asyncStorage.getStore()
export interface User {
  id: string
  email: string
  name: string
}
export async function getUser(): Promise<User | null> {
  const newCookies = cookies()
    .getAll()
    .reduce<Record<string, string>>((cookiesObj, cookie) => {
      cookiesObj[cookie.name] = cookie.value
      return cookiesObj
    }, {})

  const token = await getToken({
    req: {
      cookies: newCookies,
      headers: {},
    } as any,
  })
  if (!token?.name || !token.email || !token.sub) {
    return null
  }
  return {
    id: token.sub,
    name: token.name,
    email: token.email,
  }
}
