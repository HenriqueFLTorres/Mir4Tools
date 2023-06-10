'use client'

import Modal from '@/components/shared/Modal'
import EXP from '@/icons/EXP'
import Forge from '@/icons/Forge'
import Heart from '@/icons/Heart'
import Image from 'next/image'
import Link from 'next/link'
import ProfileSection from './ProfileSection'

export default function GlobalNavbar({
  children,
}: {
  children?: React.ReactNode | React.ReactNode[]
}) {
  return (
    <header className="relative z-[40] flex w-full items-center justify-between border-b border-white/10 bg-primary-400/5 px-3 py-2 drop-shadow-md backdrop-blur-xl">
      <ProfileSection />
      <nav className="absolute left-1/2 flex w-max shrink-0 -translate-x-1/2 gap-4">
        {links.map(({ href, label, Icon }) => (
          <Link
            href={href}
            key={label}
            className="flex shrink-0 items-center gap-4 rounded p-3 text-base font-medium text-white hover:bg-white/10 motion-safe:transition-colors"
          >
            <Icon className="h-6 w-6 fill-white" />
            {label}
          </Link>
        ))}
        <Modal.Wrapper>
          <Modal.Trigger className="flex shrink-0 items-center gap-4 rounded p-3 text-base font-medium text-white hover:bg-white/10 motion-safe:transition-colors">
            <Heart className="h-6 w-6 fill-white" />
            Support Us!
          </Modal.Trigger>
          <Modal.Content className="items-center gap-6 pb-6">
            <header className="flex w-full items-center justify-between">
              <Modal.Title>Support Us</Modal.Title>
              <Modal.Close />
            </header>
            <p className="text-base font-light text-white">
              We are a small team of players dedicated to developing
              high-quality tools for mir4. Even costing us money for
              maintenance, development, and domain retention, we make it
              available for free. If you like our work and can support to keep
              us in thriving, any amount is welcome.
            </p>

            <Link
              href="https://www.paypal.com/donate/?hosted_button_id=RGMFCLYG4BKMY"
              className="flex w-full items-center justify-center rounded-md bg-black/10 px-4 py-3 font-medium text-white hover:bg-black/30 motion-safe:transition-colors"
              target="_blank"
            >
              Paypal
            </Link>

            <div className="flex w-full items-center gap-3 px-4">
              <div className="h-[2px] w-full rounded-full bg-white" />
              <p className="text-lg font-bold text-white">OR</p>
              <div className="h-[2px] w-full rounded-full bg-white" />
            </div>

            <h3 className="text-xl font-bold text-white">Binance Pay</h3>

            <p className="text-sm font-light text-white">
              Pay ID: <b className="font-medium">262205359</b>
            </p>

            <Image
              src={'/images/binance-pay.webp'}
              alt="Binance pay QR code"
              width={200}
              height={200}
            />
          </Modal.Content>
        </Modal.Wrapper>
      </nav>
      {children}
    </header>
  )
}

const links = [
  {
    href: '/xp',
    label: 'Experience Calculator',
    Icon: EXP,
  },
  {
    href: '/',
    label: 'Crafting Calculator',
    Icon: Forge,
  },
]
