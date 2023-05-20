import { XPCalculatorAtom, XPExtension } from '@/atoms/XPCalculator';
import Input from '@/components/Input';
import XPPerLevel from '@/data/XPPerLevel';
import Info from '@/icons/Info';
import { useAtom } from 'jotai';
import millify from 'millify';

export default function Vigor() {
  const [{ levels, xpPerMinute = 0, manualCalculation }] =
    useAtom(XPCalculatorAtom);
  const [{ vigor }, setExtension] = useAtom(XPExtension);

  const XPPerMinute = xpPerMinute
    ? xpPerMinute
    : manualCalculation.xpPerMinute ?? 0;

  const acquiredXPWithVigor = XPPerMinute * 60 * vigor;
  const acquiredPercentage = levels.initial
    ? ((acquiredXPWithVigor / XPPerLevel[`${levels.initial}`]) * 100).toFixed(4)
    : 0;

  return (
    <section className='flex w-80 flex-col gap-4 rounded-lg border border-white/10 bg-primary-400/5 p-4 backdrop-blur-lg'>
      <header className='flex justify-between'>
        <h2 className='text-2xl font-bold text-white'>Vigor</h2>
        <button className='p-1'>
          <Info className='h-6 w-6' />
        </button>
      </header>

      <div className='flex items-center gap-2'>
        <Input
          className={'max-w-[5rem] shrink-0 [&>div]:py-1'}
          suffix='h'
          placeholder='duration'
          onChange={(value) =>
            setExtension((prev) => ({
              ...prev,
              vigor:
                Number.isInteger(Number(value)) && Number(value) < 1000
                  ? Number(value)
                  : prev.vigor,
            }))
          }
          value={String(vigor)}
        />

        <div className='flex w-full items-baseline justify-end gap-3 truncate rounded-md bg-primary-600 px-3 py-1 text-base text-white'>
          <span className='inline-flex gap-2'>
            <p className='truncate'>{millify(acquiredXPWithVigor)} </p>
            <b className='shrink-0 font-bold'>XP</b>
          </span>
          <span className='inline-flex gap-2'>
            <p className='truncate'>{acquiredPercentage}</p>
            <b className='shrink-0 font-bold'>%</b>
          </span>
        </div>
      </div>
    </section>
  );
}
