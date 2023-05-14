import '@/styles/globals.css';
import { cn } from '@/utils/classNames';
import { Noto_Sans_KR } from '@next/font/google';
import Providers from './Providers';

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
      <head />
      <Providers>{children}</Providers>
    </html>
  );
}
