/* eslint-disable @next/next/no-img-element */
'use client'

import React from 'react'
import { type ZoraNFT } from '../../lib/types'
import { FrameLink } from '../../components/FrameLink'

function ZoraNFTViewer({ nft }: { nft: ZoraNFT }) {
  return (
    <div className="relative pt-1 max-w-[320px]">
      <div className="relative">
        <div className="w-[300px] h-[200px] relative rounded-md overflow-hidden">
          <img
            src={nft.imageUrl}
            alt={`OG Image for ${nft.title}`}
            className="object-cover"
            sizes="(max-width: 320px)"
          />
        </div>
        <div className="flex items-center justify-between">
          <p className="text-lg mt-2.5">{nft.title}</p>
          <FrameLink identifier={nft.url} type="url">
            <div className="bg-black text-white p-1.5 rounded-md text-xs hover:bg-grey_dark transition">
              Mint
            </div>
          </FrameLink>
        </div>
      </div>
    </div>
  )
}

export { ZoraNFTViewer };