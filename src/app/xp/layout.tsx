import MainBackground from '@/components/global/MainBackground'
import Sidebar from '@/components/global/Sidebar'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen w-full bg-black font-ubuntu">
      <MainBackground />
      <Sidebar />
      <div className="relative flex w-full selection:bg-primary-800 [&>div]:mx-auto [&>div]:flex [&>div]:h-full [&>div]:w-full [&>div]:max-w-4xl [&>div]:flex-col [&>div]:items-center [&>div]:p-12">
        {children}
      </div>
    </div>
  )
}
