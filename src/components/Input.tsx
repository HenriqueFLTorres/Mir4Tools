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
        'flex w-full flex-row items-center justify-center gap-1.5 bg-input-bottom-to-top px-3 py-2 font-bold text-primary-400 focus-within:bg-primary-700 motion-safe:transition-colors',
        className
      )}
    >
      <input
        className={
          'flex appearance-none items-center justify-center bg-transparent text-center outline-none selection:bg-primary-200/40 placeholder:text-primary-200/50'
        }
        {...props}
        onChange={(e) => onChange(e.target.value)}
        value={value}
      />
      {suffix && suffix}
    </label>
  );
}
