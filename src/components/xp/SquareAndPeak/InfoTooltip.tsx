'use client'
import Tooltip from '@/components/ToolTip'
import Info from '@/icons/Info'

export default function InfoTooltip({ content }: { content: string }) {
  return (
    <Tooltip.Wrapper>
      <Tooltip.Trigger
        asChild={false}
        aria-label="More info"
        className="ml-auto p-1"
      >
        <Info className="h-6 w-6" />
      </Tooltip.Trigger>
      <Tooltip.Content
        collisionPadding={16}
        sideOffset={8}
        className="z-50 max-w-sm rounded-lg border border-primary-500 bg-primary-600 px-3 py-2 text-sm"
      >
        {content}
      </Tooltip.Content>
    </Tooltip.Wrapper>
  )
}
