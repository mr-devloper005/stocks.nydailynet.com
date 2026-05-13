export const siteTaskDefinitions = [
  {
    key: 'mediaDistribution',
    label: 'Press Wire',
    route: '/news',
    description: 'Official announcements, filings, and media-ready stories.',
    contentType: 'mediaDistribution',
    enabled: true,
  },
] as const

export const siteTaskViews = {
  mediaDistribution: '/news',
} as const
