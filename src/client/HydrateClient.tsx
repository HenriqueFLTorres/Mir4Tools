'use client'

import { createHydrateClient } from '@/@trpc/next-layout'
import superjson from 'superjson'

export const HydrateClient = createHydrateClient({
  transformer: superjson,
})
