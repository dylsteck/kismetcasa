import { NextRequest, NextResponse } from 'next/server'
import ogs from 'open-graph-scraper'

export async function GET(req: NextRequest) {
  const zoraURL = req.nextUrl.searchParams.get('url')

  if (!zoraURL) {
    return new NextResponse(
      JSON.stringify({ error: 'URL parameter is missing' }),
      {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      }
    )
  }

  try {
    const options = { url: zoraURL }
    const { result } = await ogs(options)

    if (result.success) {
      // Constructing the response object
      const response = {
        ogTitle: result.ogTitle || '',
        ogDescription: result.ogDescription || '',
        twitterCard: result.twitterCard || '',
        ogImage: result.ogImage
          ? result.ogImage.map((img) => ({ url: img.url }))
          : [],
        twitterImage: result.twitterImage
          ? result.twitterImage.map((img) => ({ url: img.url }))
          : [],
        favicon: result.favicon || '',
        charset: result.charset || '',
        requestUrl: result.requestUrl || '',
        success: result.success,
      }

      return NextResponse.json(response)
    }
    return new NextResponse(
      JSON.stringify({ error: 'Failed to retrieve OG data' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    )
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error fetching OG data: ', error)
    return new NextResponse(
      JSON.stringify({ error: 'An error occurred during fetching OG data' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    )
  }
}
