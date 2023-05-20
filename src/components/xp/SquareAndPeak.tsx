import { XPExtension } from '@/atoms/XPCalculator';
import Info from '@/icons/Info';
import { getReadableNumber, getValidNumber } from '@/utils/index';
import humanizeDuration from 'humanize-duration';
import { useAtom } from 'jotai';
import moment from 'moment';
import Image from 'next/image';
import Input from '../Input';

export default function SquareAndPeak({
  XPPerHour,
  currentXP,
  totalXP,
}: {
  XPPerHour: number;
  currentXP: number;
  totalXP: number;
}) {
  const [{ magicSquare, secretPeak }, setExtension] = useAtom(XPExtension);

  const combinedValues =
    magicSquare.xpPerRun * magicSquare.tickets +
    secretPeak.xpPerRun * secretPeak.tickets +
    currentXP;
  const result =
    (totalXP - combinedValues) / XPPerHour / 24 +
    (0.5 * magicSquare.tickets + 0.5 * secretPeak.tickets) / 24;

  return (
    <section className='flex w-80 flex-col gap-4 rounded-lg border border-white/10 bg-primary-400/5 p-4 backdrop-blur-lg'>
      <div className='flex items-center gap-2.5'>
        <div className='flex h-12 w-12 items-center justify-center rounded-full border border-primary-500 bg-primary-600'>
          <Image
            src='/items/square_ticket.png'
            alt='Magic Square Ticket'
            width={32}
            height={32}
          />
        </div>
        <h2 className='text-2xl font-bold text-white'>Magic Square</h2>
        <button className='ml-auto p-1'>
          <Info className='h-6 w-6' />
        </button>
      </div>

      <div className='flex'>
        <Input
          label='Tickets'
          className='w-16 text-xs text-white [&>div]:rounded-r-none [&>div]:py-1'
          onChange={(value) =>
            setExtension((prev) => ({
              ...prev,
              magicSquare: {
                ...prev.magicSquare,
                tickets: getValidNumber(value, prev.magicSquare.tickets),
              },
            }))
          }
          value={String(magicSquare.tickets)}
        />
        <Input
          label='XP per run'
          className='w-full text-xs text-white [&>div]:rounded-l-none [&>div]:border-l-2 [&>div]:border-l-primary-500 [&>div]:py-1'
          onChange={(value) =>
            setExtension((prev) => ({
              ...prev,
              magicSquare: {
                ...prev.magicSquare,
                xpPerRun: getValidNumber(value, prev.magicSquare.xpPerRun),
              },
            }))
          }
          value={getReadableNumber(magicSquare.xpPerRun)}
          suffix='XP'
        />
      </div>

      <div className='flex items-center gap-2.5'>
        <div className='flex h-12 w-12 items-center justify-center rounded-full border border-primary-500 bg-primary-600'>
          <Image
            src='/items/peak_ticket.png'
            alt='Secret Peak Ticket'
            width={32}
            height={32}
          />
        </div>
        <h2 className='text-2xl font-bold text-white'>Secret Peak</h2>
      </div>

      <div className='flex'>
        <Input
          label='Tickets'
          className='w-16 text-xs text-white [&>div]:rounded-r-none [&>div]:py-1'
          onChange={(value) =>
            setExtension((prev) => ({
              ...prev,
              secretPeak: {
                ...prev.secretPeak,
                tickets: getValidNumber(value, prev.secretPeak.tickets),
              },
            }))
          }
          value={String(secretPeak.tickets)}
        />
        <Input
          label='XP per run'
          className='w-full text-xs text-white [&>div]:rounded-l-none [&>div]:border-l-2 [&>div]:border-l-primary-500 [&>div]:py-1'
          onChange={(value) =>
            setExtension((prev) => ({
              ...prev,
              secretPeak: {
                ...prev.secretPeak,
                xpPerRun: getValidNumber(value, prev.secretPeak.xpPerRun),
              },
            }))
          }
          value={getReadableNumber(secretPeak.xpPerRun)}
          suffix='XP'
        />
      </div>

      <p className='rounded-md bg-primary-600 px-4 py-2 text-sm text-white'>
        {humanizeDuration(moment.duration(result, 'day').asMilliseconds(), {
          round: true,
        })}
      </p>
    </section>
  );
}
