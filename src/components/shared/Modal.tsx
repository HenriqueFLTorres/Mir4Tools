import Close from '@/icons/Close'
import { cn } from '@/utils/classNames'
import * as Dialog from '@radix-ui/react-dialog'

function Wrapper({ children }: { children: React.ReactNode }) {
  return <Dialog.Root>{children}</Dialog.Root>
}

function Trigger({
  children,
  ...props
}: { children: React.ReactNode } & Dialog.DialogTriggerProps) {
  return <Dialog.Trigger {...props}>{children}</Dialog.Trigger>
}

function Content({
  children,
  className,
  ...props
}: { children: React.ReactNode } & Dialog.DialogContentProps) {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 z-50 bg-black/40 data-[state=closed]:animate-contentHide data-[state=open]:animate-contentShow" />
      <Dialog.Content
        className={cn(
          'fixed left-[50%] overflow-auto top-[50%] z-50 flex h-max max-h-[85vh] w-full max-w-xl translate-x-[-50%] translate-y-[-50%] flex-col rounded-lg border border-white/10 bg-primary-400/20 px-4 py-3 backdrop-blur-xl focus:outline-none data-[state=closed]:animate-contentHide data-[state=open]:animate-contentShow',
          className
        )}
        {...props}
      >
        {children}
      </Dialog.Content>
    </Dialog.Portal>
  )
}

function CloseButton({ className, ...props }: Dialog.DialogCloseProps) {
  return (
    <Dialog.Close
      className={cn(
        'grid place-items-center rounded p-2 hover:bg-black/40 motion-safe:transition-colors',
        className
      )}
      {...props}
    >
      <Close className="h-4 w-4 fill-white" />
    </Dialog.Close>
  )
}

function Title({
  children,
  className,
  ...props
}: { children: React.ReactNode } & Dialog.DialogTitleProps) {
  return (
    <Dialog.Title
      className={cn('text-2xl font-medium text-white', className)}
      {...props}
    >
      {children}
    </Dialog.Title>
  )
}

const Modal = {
  Wrapper,
  Content,
  Trigger,
  Close: CloseButton,
  Title,
}

export default Modal
