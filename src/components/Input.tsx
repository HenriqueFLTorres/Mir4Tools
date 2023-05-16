import { cn } from '@/utils/classNames';

export default function Input({
  label,
  className,
  suffix,
  onChange,
  value,
  error,
  ...props
}: {
  label?: string
  suffix?: React.ReactNode;
  onChange: (value: string) => void;
  value?: string;
  error?: React.ReactNode;
} & Omit<React.HTMLAttributes<HTMLInputElement>, 'onChange'>) {
  return (
    <label
      className={cn(
        'flex w-full flex-col items-center gap-1 text-sm font-medium text-primary-100',
        className
      )}
    >
      {label}
      <div
        className={cn(
          'flex w-full items-center justify-center gap-1.5 rounded-md bg-primary-600 px-3 py-2 font-bold text-white motion-safe:transition-colors',
          { ['!border-red-400 bg-red-400/10']: error }
        )}
      >
        <input
          className={cn(
            'flex appearance-none w-full items-center justify-center bg-transparent text-center text-base font-normal outline-none selection:bg-primary-800 placeholder:text-neutral-200/70 motion-safe:transition-colors',
            {
              ['text-red-200']: error,
            }
          )}
          {...props}
          onChange={(e) => onChange(e.target.value)}
          value={value}
        />
        {suffix && <div className='text-white shrink-0 font-bold text-base'>{suffix}</div>}
      </div>
    </label>
  );
}
