import { useRef, useState } from 'react';
import useSound from 'use-sound';

const INITIAL_COUNT = 300;

export default function Timer() {
  const [play] = useSound('/audio/timer.mp3', { volume: 0.2 });
  const [timerState, setTimerState] = useState({
    isActive: false,
    count: INITIAL_COUNT,
  });
  const countRef = useRef<any>(null);

  const handleStart = () => {
    setTimerState((prev) => ({ ...prev, isActive: true }));
    countRef.current = setInterval(() => {
      setTimerState((prev) => {
        if (prev.count === 1) {
          play();
          clearInterval(countRef.current);
          return { isActive: false, count: INITIAL_COUNT };
        } else return { ...prev, count: prev.count - 1 };
      });
    }, 1000);
  };

  const handleReset = () => {
    clearInterval(countRef.current);
    setTimerState({ isActive: false, count: INITIAL_COUNT });
  };

  const minutes = Math.floor(timerState.count / 60);
  const seconds = Number(timerState.count % 60).toLocaleString('en', {
    minimumIntegerDigits: 2,
  });

  return (
    <>
      <div className='mb-5 flex h-32 w-32 items-center justify-center rounded-full border-4 border-secondary-300 bg-black/20 p-4'>
        <p className='text-lg font-bold text-primary-200'>
          {minutes} : {seconds}
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
