export type OpenGraphResponse = {
  ogTitle: string | null
  ogDescription: string | null
  twitterCard: string | null
  ogImage: Array<{ url: string }> | null
  twitterImage: Array<{ url: string }> | null
  favicon: string | null
  charset: string | null
  requestUrl: string | null
  success: boolean
}

export type ApiResponse = {
  data?: OpenGraphResponse
  error?: string
}
