import * as CPopover from '@radix-ui/react-popover';
import { HTMLAttributes } from 'react';

function Wrapper({ children }: { children: React.ReactNode }) {
  return <CPopover.Root>{children}</CPopover.Root>;
}

function Trigger({
  children,
  ...props
}: { children: React.ReactNode } & HTMLAttributes<HTMLButtonElement>) {
  return <CPopover.Trigger {...props}>{children}</CPopover.Trigger>;
}

function Content({
  children,
  ...props
}: { children: React.ReactNode } & CPopover.PopoverContentProps) {
  return (
    <CPopover.Portal>
      <CPopover.Content {...props}>{children}</CPopover.Content>
    </CPopover.Portal>
  );
}

const Popover = {
  Wrapper,
  Content,
  Trigger,
};

export default Popover;
