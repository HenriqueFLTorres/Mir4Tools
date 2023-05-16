import Input from '@/components/Input';
import { formatForExperience } from '@/utils/index';
import { SetStateAction } from 'jotai';

export default function PercentageDifference({
  percentages,
  setPercentages,
  invalidInput,
  setIsInvalid,
}: {
  percentages: PercentageState;
  setPercentages: React.Dispatch<SetStateAction<PercentageState>>;
  invalidInput: boolean;
  setIsInvalid: React.Dispatch<SetStateAction<boolean>>;
}) {
  const handleInvalid = () => {
    if (
      percentages.initial &&
      percentages.final &&
      Number(percentages.initial) >= Number(percentages.final)
    ) {
      setIsInvalid(true);
    } else setIsInvalid(false);
  };

  return (
    <div className={'mt-8 mb-2 flex'}>
      <Input
        placeholder='Start'
        label='Before Timer'
        onChange={(value) =>
          setPercentages((prev) => ({
            ...prev,
            initial: formatForExperience(value),
          }))
        }
        value={percentages.initial}
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
        value={percentages.final}
        onBlur={handleInvalid}
        error={!!invalidInput}
        className='max-w-[10rem] [&>div]:rounded-l-none'
      />
    </div>
  );
}
