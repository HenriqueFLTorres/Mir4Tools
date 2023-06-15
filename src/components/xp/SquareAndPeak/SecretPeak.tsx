import Image from 'next/image'
import InnerSecretPeak from './InnerSecretPeak'

export default function SecretPeak() {
  return (
    <>
      <div className="flex items-center gap-2.5">
        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-primary-500 bg-primary-600">
          <Image
            src="/items/peak_ticket.webp"
            alt="Secret Peak Ticket"
            width={32}
            height={32}
          />
        </div>
        <h2 className="text-2xl font-bold text-white">Secret Peak</h2>
      </div>

      <InnerSecretPeak />
    </>
  )
}
