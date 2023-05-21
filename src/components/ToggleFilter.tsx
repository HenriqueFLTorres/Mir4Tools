import { type HTMLAttributes } from 'react'

export default function ToggleFilter({
  children,
  value,
  ...props
}: {
  children: React.ReactNode
  value: boolean
} & HTMLAttributes<HTMLButtonElement>) {
  return (
    <button data-active={value} {...props}>
      {children}
    </button>
  )
}
