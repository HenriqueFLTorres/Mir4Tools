import Input from '@/components/Input';
import {
  formatForExperience,
  getReadableNumber,
  getValidNumber,
} from '@/utils/index';
import { SetStateAction } from 'react';

export default function PercentageDifference({
  percentages,
  setPercentages,
  invalidInput,
  setIsInvalid,
  xpPerMinute,
  setXPperMinute,
  initialPercentage,
  onChangeInitial,
}: PercentageProps) {
  const handleInvalid = () => {
    setXPperMinute(undefined);
    onChangeInitial(undefined);
    if (
      percentages.initial &&
      percentages.final &&
      Number(percentages.initial) >= Number(percentages.final)
    ) {
      setIsInvalid(true);
    } else setIsInvalid(false);
  };

  const resetPercentages = () =>
    setPercentages({ initial: undefined, final: undefined });

  return (
    <div className='flex flex-col gap-3'>
      <div className={'mt-8 flex'}>
        <Input
          placeholder='Start'
          label='Before Timer'
          onChange={(value) =>
            setPercentages((prev) => ({
              ...prev,
              initial: formatForExperience(value),
            }))
          }
          value={percentages.initial ?? ''}
          suffix='%'
          onBlur={handleInvalid}
          error={!!invalidInput}
          className='max-w-[10rem] [&>div]:rounded-r-none [&>div]:border-r-2 [&>div]:border-r-primary-500'
        />
        <Input
          suffix='%'
          placeholder='End'
          label='After Timer'
          onChange={(value) =>
            setPercentages((prev) => ({
              ...prev,
              final: formatForExperience(value),
            }))
          }
          value={percentages.final ?? ''}
          onBlur={handleInvalid}
          error={!!invalidInput}
          className='max-w-[10rem] [&>div]:rounded-l-none'
        />
      </div>

      <div className='flex items-center gap-3 px-8'>
        <span className='h-[2px] w-full rounded-full bg-primary-100' />
        <p className='text-2xl font-bold text-primary-100'>OR</p>
        <span className='h-[2px] w-full rounded-full bg-primary-100' />
      </div>

      <div className={'mb-2 flex'}>
        <Input
          suffix='XP'
          label='XP Per Minute'
          onChange={(value) => setXPperMinute(getValidNumber(value, 0))}
          value={getReadableNumber(xpPerMinute ?? 0)}
          onBlur={resetPercentages}
          className='max-w-[10rem] [&>div]:rounded-r-none [&>div]:border-r-2 [&>div]:border-r-primary-500'
        />
        <Input
          suffix='%'
          placeholder='0.0000'
          label='Current Percentage
          '
          onChange={(value) => onChangeInitial(formatForExperience(value))}
          value={initialPercentage ?? ''}
          onBlur={resetPercentages}
          className='max-w-[10rem] [&>div]:rounded-l-none'
        />
      </div>
    </div>
  );
}

type PercentageProps = {
  percentages: PercentageState;
  setPercentages: React.Dispatch<SetStateAction<PercentageState>>;
  invalidInput: boolean;
  setIsInvalid: React.Dispatch<SetStateAction<boolean>>;
  xpPerMinute?: number;
  setXPperMinute: React.Dispatch<SetStateAction<number | undefined>>;
  initialPercentage?: string;
  onChangeInitial: (value: string | undefined) => void;
};
