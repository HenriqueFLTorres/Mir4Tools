import MainBackground from '@/components/global/MainBackground'
import GlobalNavbar from '@/components/global/Navbar'
import { RouteMetadata } from '../DefaultMetadata'

export const metadata = RouteMetadata.Conquests

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen w-full flex-col bg-black font-main">
      <MainBackground />
      <GlobalNavbar />
      {children}
    </div>
  )
}
