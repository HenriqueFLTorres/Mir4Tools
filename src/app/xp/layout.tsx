import '@/styles/globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='relative flex w-full [&>div]:mx-auto [&>div]:flex [&>div]:h-full [&>div]:w-full [&>div]:max-w-3xl [&>div]:flex-col [&>div]:items-center [&>div]:p-12'>
      {children}
    </div>
  );
}
