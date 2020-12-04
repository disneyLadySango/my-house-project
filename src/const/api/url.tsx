// eslint-disable-next-line no-template-curly-in-string
export const SEND = 'https://api.nature.global/1/signals/${param}/send' as const
export const LIST = {
  url: 'https://api.nature.global/1/appliances',
  method: 'GET'
} as const
