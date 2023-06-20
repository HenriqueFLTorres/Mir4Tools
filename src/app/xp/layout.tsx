import MainBackground from '@/components/global/MainBackground'
import GlobalNavbar from '@/components/global/Navbar'
import { RouteMetadata } from '../DefaultMetadata'

export const metadata = RouteMetadata.ExperienceCalculator

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen w-full flex-col bg-black font-ubuntu">
      <MainBackground />
      {/* @ts-expect-error Server Component */}
      <GlobalNavbar />
      <div className="relative py-8 flex w-full flex-col items-center selection:bg-primary-800 [&>div]:mx-auto [&>div]:flex [&>div]:h-full [&>div]:w-full [&>div]:max-w-4xl [&>div]:flex-col [&>div]:items-center [&>div]:p-12">
        {children}
      </div>
    </div>
  )
}
