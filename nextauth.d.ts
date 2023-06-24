// nextauth.d.ts
import { type SettingsObject } from '@/atoms/Settings'
import { type DefaultUser } from 'next-auth'

interface IUser extends DefaultUser {
  settings: SettingsObject
}

declare module 'next-auth' {
  interface User extends IUser {}
  interface Session {
    user?: User
  }
}
declare module 'next-auth/jwt' {
  interface JWT extends IUser {}
}
