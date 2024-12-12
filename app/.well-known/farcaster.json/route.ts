import { BASE_URL, ICON_URL } from '../../../lib/utils'

export async function GET() {
  const config = {
    accountAssociation: {
      header:
        'eyJmaWQiOjYxNiwidHlwZSI6ImN1c3RvZHkiLCJrZXkiOiIweDVFNzlGNjkwY2NENDIwMDdENUEwYUQ2NzhDRDQ3NDc0MzM5NDAwRTMifQ',
      payload: 'eyJkb21haW4iOiJraXNtZXRjYXNhLnh5eiJ9',
      signature:
        'MHg5OTVhYjVhZjI3MjhlOWI5NmE2MjVhNWU3NWM0NDBiOTA3ZGM2YzhjZmM3ZTdhODIyM2YwMDZkZmYxMGJjN2IwNDg0NzkyNDg5NTNmY2Y1ZTMwNzBlYmE2ZWJiOTE4ZmRkNzAwYjgyYTQ2MWQ2NTIyNTFkNWE1ODUyYmZhZmMxZjFi',
    },
    frame: {
      version: '0.0.1',
      name: 'Kismet Casa',
      iconUrl: ICON_URL,
      splashImageUrl: ICON_URL,
      splashBackgroundColor: '#FFFFFF',
      homeUrl: BASE_URL,
    },
  }

  return Response.json(config)
}
