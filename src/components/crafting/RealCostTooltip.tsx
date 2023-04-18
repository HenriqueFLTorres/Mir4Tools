import * as Tooltip from '@radix-ui/react-tooltip';

export default function RealCostTooltip({
  cost,
  children,
}: {
  cost: number;
  children: React.ReactNode;
}) {
  return (
    <Tooltip.Provider delayDuration={0}>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>{children}</Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            align='center'
            sideOffset={6}
            className='bg-primary-700 text-primary-400 font-medium font-ubuntu text-sm px-2 py-1 rounded-md will-change-[transform,opacity]'
          >
            {cost}
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}
