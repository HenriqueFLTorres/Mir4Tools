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
          .subtract({ seconds: 5 })
          .as('milliseconds');
        const timeDifference = moment(prev.start).diff(targetTime);

        if (timeDifference <= 0) {
          play();
          handleReset()
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
      .add({ seconds: 5 })
      .asSeconds()
  );

  const minutes = Math.floor(differenceDate / 60);
  const seconds = Number(differenceDate % 60).toLocaleString('en', {
    minimumIntegerDigits: 2,
  });

  const showStopwatch = !!timerState.start && differenceDate > 0;

  return (
    <>
      <title>
        {showStopwatch ? `[${minutes}:${seconds}] Timer` : 'XP Calculator'}
      </title>

      <div className='mb-5 flex h-32 w-32 items-center justify-center rounded-full border-8 border-white/10 bg-black/10 p-4'>
        <p className='text-lg font-bold text-white'>
          {minutes} : {seconds}
        </p>
      </div>

      <div className='flex flex-row gap-2'>
        <button
          onClick={handleStart}
          className='w-36 rounded-md bg-[#368D6E] py-2 text-sm font-bold text-white disabled:opacity-50'
          disabled={timerState.isActive}
        >
          Start
        </button>

        <button
          onClick={handleReset}
          className='w-36 rounded-md bg-white/20 py-2 text-sm font-bold text-white disabled:opacity-50'
          disabled={!timerState.isActive}
        >
          Reset
        </button>
      </div>
    </>
  );
}

type TimerState = { start?: number; now?: number; isActive: boolean };
