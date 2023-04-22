import Input from '@/components/Input';
import { formatForExperience } from '@/utils/index';
import { SetStateAction } from 'jotai';

export default function PercentageDifference({
  percentages,
  setPercentages,
}: {
  percentages: PercentageState;
  setPercentages: React.Dispatch<SetStateAction<PercentageState>>;
}) {
  return (
    <div className='my-16 flex w-full max-w-xs flex-col'>
      <Input
        placeholder='Initial percentage'
        onChange={(value) =>
          setPercentages((prev) => ({
            ...prev,
            initial: formatForExperience(value),
          }))
        }
        value={percentages.initial}
        suffix='%'
      />
      <Input
        className='border-t-2 border-primary-400 bg-transparent bg-input-top-to-bottom'
        suffix='%'
        placeholder='Percentage after the timer'
        onChange={(value) =>
          setPercentages((prev) => ({
            ...prev,
            final: formatForExperience(value),
          }))
        }
        value={percentages.final}
      />
    </div>
  );
}
