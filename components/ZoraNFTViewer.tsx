'use client'

import Image from 'next/image'
import React from 'react'
import { type ZoraNFT } from '../utils/types'

export function ZoraNFTViewer({ nft }: { nft: ZoraNFT }) {
  return (
    <div className="relative pt-1 max-w-[320px]">
      <div className="relative">
        <div className="w-[300px] h-[200px] relative rounded-md overflow-hidden">
          <Image
            src={nft.imageUrl}
            alt={`OG Image for ${nft.title}`}
            fill
            className="object-cover"
            sizes="(max-width: 320px)"
          />
        </div>
        <div className="flex items-center justify-between">
          <p className="text-lg mt-2.5">{nft.title}</p>
          <button
            type="button"
            onClick={() => window.open(nft.url, '_blank')}
            className="bg-black text-white p-1.5 rounded-md text-xs hover:bg-grey_dark transition"
          >
            Mint
          </button>
        </div>
      </div>
    </div>
  )
}
