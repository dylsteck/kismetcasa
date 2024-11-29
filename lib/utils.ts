export const BASE_URL = 'https://kismetcasa.xyz'
export const FRAME_BANNER_URL = 'https://i.imgur.com/BJVjNJp.png'
export const OG_BANNER_URL = 'https://i.imgur.com/rSgXlNy.png'
export const ICON_URL = 'https://i.imgur.com/hLeqSWS.png'

export const frame = {
  version: 'next',
  imageUrl: FRAME_BANNER_URL,
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
