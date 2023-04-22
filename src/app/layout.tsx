import '@/styles/globals.css';
import { cn } from '@/utils/classNames';
import { Noto_Sans_KR } from '@next/font/google';
import Image from 'next/image';

const notoSansKR = Noto_Sans_KR({
  style: 'normal',
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-notoSansKR',
  weight: ['100', '300', '400', '500', '700', '900'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={cn(notoSansKR.variable, 'antialiased')}>
      <body className='flex min-h-screen w-full bg-primary-900 font-ubuntu'>
        <div className='pointer-events-none fixed left-0 top-0 -z-10 flex h-screen w-full justify-center overflow-hidden'>
          <Image
            src={'/images/main-background.webp'}
            alt=''
            width={1946}
            height={829}
            className='pointer-events-none absolute top-0 min-w-[120rem] shrink-0 overflow-hidden object-contain opacity-20 blur-lg'
            quality={10}
            priority
          />
        </div>
        <div className='flex w-full [&>div]:flex [&>div]:w-full'>
          {children}
        </div>
      </body>
    </html>
  );
}
