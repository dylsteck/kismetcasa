'use client'

import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import { OpenGraphResponse } from '../utils/types'

export function ZoraNFTViewer({ zoraURL }: { zoraURL: string }) {
  const [ogData, setOgData] = useState<OpenGraphResponse | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchOGData() {
      try {
        setLoading(true)
        const response = await fetch(
          `/api/getZoraNFTInfo?url=${encodeURIComponent(zoraURL)}`,
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          }
        )

        if (!response.ok) {
          throw new Error(`Error: ${response.status}`)
        }

        const data = await response.json()
        setOgData(data)
      } catch (err) {
        setError(
          err instanceof Error ? err.message : 'An unknown error occurred'
        )
      } finally {
        setLoading(false)
      }
    }

    if (zoraURL) {
      fetchOGData()
    }
  }, [zoraURL])

  if (loading)
    return <div className="flex justify-center items-center">Loading...</div>
  if (error) return <div className="text-red-500">{error}</div>

  return (
    <div className="relative pt-1 max-w-[320px]">
      {ogData?.ogImage && ogData.ogImage[0] && (
        <div className="relative">
          <div className="w-[300px] h-[200px] relative rounded-md overflow-hidden">
            <Image
              src={ogData.ogImage[0].url}
              alt={`OG Image for ${ogData.ogTitle}`}
              fill
              className="object-cover"
              sizes="(max-width: 320px)"
            />
          </div>
          <div className="flex items-center justify-between">
            <p className="text-lg mt-2.5">{ogData?.ogTitle}</p>
            <button
              type="button"
              onClick={() => window.open(zoraURL, '_blank')}
              className="bg-black text-white p-1.5 rounded-md text-xs hover:bg-grey_dark transition"
            >
              Mint
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
