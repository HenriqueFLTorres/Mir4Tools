import { type Metadata } from 'next'

export const DefaultMetadata: Metadata = {
  applicationName: 'Mir4 Tools',
  referrer: 'origin-when-cross-origin',
  keywords: ['Mir4'],
  themeColor: '#473E65',
  openGraph: {
    url: 'https://www.mir4tools.com/',
    siteName: 'Mir4 Tools',
    images: [
      {
        url: '/seo/crafting-calculator.webp',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
  icons: {
    icon: '/favicon.ico',
  },
  other: {
    'msapplication-TileColor': '#473E65',
    'msapplication-TileImage': '/favicon.ico',
    accessibilityFeature: [
      'largePrint/CSSEnabled',
      'highContrast/CSSEnabled',
      'resizeText/CSSEnabled',
      'displayTransformability',
      'longDescription',
      'alternativeText',
    ],
    accessibilityControl: ['fullKeyboardControl', 'fullMouseControl'],
    accessibilityHazard: ['noFlashingHazard', 'noMotionSimulationHazard'],
    accessibilityAPI: ['ARIA'],
  },
}

export const RouteMetadata = {
  CraftingCalculator: getSeo({
    title: 'Crafting Calculator',
    description:
      'A crafting tool to help players calculate their craft with precision and speed that includes advanced features such as an inventory system and a large variety of customization.',
    image: '/seo/crafting-calculator.webp',
  }),
  ExperienceCalculator: getSeo({
    title: 'Experience Calculator',
    description:
      'An experience-level calculator to help players measure and calculate their progress through the game with time and item cost predictions.',
    image: '/seo/experience-calculator.webp',
  }),
}

export function getSeo({
  title,
  description,
  image,
}: {
  title: string
  description: string
  image: string
}): Metadata {
  return {
    title,
    description,
    ...DefaultMetadata,
    openGraph: {
      ...DefaultMetadata.openGraph,
      title,
      description,
      images: image
        ? { url: image, secureUrl: image }
        : DefaultMetadata.openGraph?.images,
    },
    twitter: {
      title,
      description,
      images: [image],
    },
  }
}
