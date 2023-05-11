import moment from 'moment';
import { useRef, useState } from 'react';
import useSound from 'use-sound';

export default function Timer() {
  const [play] = useSound('/audio/timer.mp3', { volume: 0.2 });
  const [timerState, setTimerState] = useState<TimerState>({
    start: undefined,
    now: moment.now(),
    isActive: false,
  });
  const countRef = useRef<any>(null);

  const handleStart = () => {
    setTimerState((prev) => ({ ...prev, isActive: true, start: moment.now() }));

    countRef.current = setInterval(() => {
      setTimerState((prev) => {
        const targetTime = moment
          .duration(moment.now())
          .subtract({ minutes: 5 })
          .as('milliseconds');
        const timeDifference = moment(prev.start).diff(targetTime);

        if (timeDifference <= 0) {
          play();
          clearInterval(countRef.current);
        }

        return { ...prev, now: moment.now() };
      });
    }, 1000);
  };

  const handleReset = () => {
    clearInterval(countRef.current);
    setTimerState((prev) => ({ ...prev, isActive: false, start: undefined }));
  };

  const differenceDate = Math.round(
    moment
      .duration(moment(timerState.start).diff(moment.now()))
      .add({ minutes: 5 })
      .asSeconds()
  );

  const minutes = Math.floor(differenceDate / 60);
  const seconds = Number(differenceDate % 60).toLocaleString('en', {
    minimumIntegerDigits: 2,
  });

  return (
    <>
      <div className='mb-5 flex h-32 w-32 items-center justify-center rounded-full border-4 border-secondary-300 bg-black/20 p-4'>
        <p className='text-lg font-bold text-primary-200'>
          {minutes} : {seconds ? seconds : 0}
        </p>
      </div>

      <div className='flex flex-row gap-2'>
        <button
          onClick={handleStart}
          className='w-36 rounded-md bg-[#368D6E] py-2 text-sm font-bold text-primary-200 disabled:opacity-50'
          disabled={timerState.isActive}
        >
          Start
        </button>

        <button
          onClick={handleReset}
          className='w-36 rounded-md bg-[#77757E] py-2 text-sm font-bold text-primary-200 disabled:opacity-50'
          disabled={!timerState.isActive}
        >
          Reset
        </button>
      </div>
    </>
  );
}

type TimerState = { start?: number; now?: number; isActive: boolean };
