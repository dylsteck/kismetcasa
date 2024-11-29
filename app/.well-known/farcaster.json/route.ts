import { BASE_URL, ICON_URL } from '../../../lib/utils'

export async function GET() {
  const config = {
    accountAssociation: {
      header:
        'eyJmaWQiOjYxNiwidHlwZSI6ImN1c3RvZHkiLCJrZXkiOiIweDVFNzlGNjkwY2NENDIwMDdENUEwYUQ2NzhDRDQ3NDc0MzM5NDAwRTMifQ',
      payload: 'eyJkb21haW4iOiJ3d3cua2lzbWV0Y2FzYS54eXoifQ',
      signature:
        'MHg0OWVkOGM5ZDE5YzRkOWNlOWU4NmM4MzkyNGExNjg1ZThmMmE1ZTE0YmMxNjcyM2UzOGIwNDBlNzZmMDM4MTA2MjFlZTRhOGIyOGRkMWQwMDM0NmU3MGIxNTQwOWFkNmQwNWZkOGQzMzgzZTBjMDdkMjNjNTU2MzBhNzUyNTMzZjFj',
    },
    frame: {
      version: '0.0.0',
      name: 'Kismet Casa',
      iconUrl: ICON_URL,
      splashImageUrl: ICON_URL,
      splashBackgroundColor: '#FFFFFF',
      homeUrl: BASE_URL,
    },
  }

  return Response.json(config)
}
