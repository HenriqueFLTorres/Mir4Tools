import { cn } from '@/utils/classNames';

export default function Input({
  className,
  suffix,
  onChange,
  value,
  ...props
}: {
  suffix?: React.ReactNode;
  onChange: (value: string) => void;
  value?: string;
} & Omit<React.HTMLAttributes<HTMLInputElement>, 'onChange'>) {
  return (
    <label
      className={cn(
        'flex w-full flex-row items-center justify-center gap-1.5 bg-gradient-to-b from-neutral-400/5 to-neutral-400/10 px-3 py-2 font-bold text-white focus-within:bg-white/20 rounded-t-md motion-safe:transition-colors',
        className
      )}
    >
      <input
        className={
          'flex appearance-none items-center justify-center bg-transparent text-center outline-none selection:text-neutral-400/40 placeholder:text-neutral-400/70'
        }
        {...props}
        onChange={(e) => onChange(e.target.value)}
        value={value}
      />
      {suffix && suffix}
    </label>
  );
}
