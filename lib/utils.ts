export const BASE_URL = 'https://kismetcasa.xyz'
export const BANNER_URL = 'https://i.imgur.com/rSgXlNy.png'
export const ICON_URL = 'https://i.imgur.com/ICYULdD.jpg'

export const frame = {
  version: 'next',
  imageUrl: BANNER_URL,
  button: {
    title: 'View Site',
    action: {
      type: 'launch_frame',
      name: 'Kismet Casa',
      url: BASE_URL,
      splashImageUrl: ICON_URL,
      splashBackgroundColor: '#FFFFFF',
    },
  },
}
