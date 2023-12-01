import Image from 'next/image'
import { Inter } from 'next/font/google'
import kismetCreatorHouse from '../public/kismetCreatorHouse.png';
import Link from 'next/link';
import ZoraNFTViewer from './components/ZoraNFTViewer';
import KismetLogo from './components/KismetLogo';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 pb-0 pt-0 ${inter.className}`}
    >
      <KismetLogo />
      <div className="flex flex-col float-left gap-6">
        <p><span className="text-xl font-medium">Kismet</span> was founded in 2018 by Luciano DeAngelo to unite like-minded individuals during the challenging times of the bear market. We partner with value-aligned organizations to subsidize housing and travel costs for our hackers. Lea Olmos joined Kismet in 2020 after being introduced to Luciano through a mutual friend. Lea has played an integral role in creating and maintaining Kismet Casa by spearheading our operations.</p>
        
        <div className="flex flex-col gap-2">
          <p className="text-xl font-medium pb-1">
            Events
          </p>
          <Link href="https://nouns.build/dao/zora/0x32297b7416294b1acf404b6148a3c58107ba8afd/vote/5">
            <p>Kismet Casa at BRT Moments - <span className="font-light text-sm">Nov 2023</span></p>
          </Link>
        </div>
        <div className="flex flex-col gap-2">
          <div>
            <p className="text-xl font-medium pb-1">
              NFTs
            </p>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="md:self-end">
                <ZoraNFTViewer zoraURL='https://zora.co/collect/zora:0x8e4a7d53e12cea8f21646ef303fed39162e5df49/1' />
              </div>
              <ZoraNFTViewer zoraURL='https://zora.co/collect/zora:0x8e4a7d53e12cea8f21646ef303fed39162e5df49/2' />
              <ZoraNFTViewer zoraURL='https://zora.co/collect/zora:0x8e4a7d53e12cea8f21646ef303fed39162e5df49/3' />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 pb-[2.5vh]">
          <div>
            <p className="text-xl font-medium pb-1">
              Contact
            </p>
            <p>Twitter - <span className="font-light text-sm"><Link href="https://twitter.com/kismetcasa">@kismetcasa</Link></span></p>
            <p>Onchain - <span className="font-light text-sm"><Link href="https://rainbow.me/kismetcasa.eth">kismetcasa.eth</Link></span></p>
            <p>Luciano - <span className="font-light text-sm"><Link href="https://twitter.com/lucianodeangelo">@lucianodeangelo</Link></span></p>
            <p>Lea - <span className="font-light text-sm"><Link href="https://twitter.com/leaolmos">@leaolmos</Link></span></p>
          </div>
        </div>
      </div>
      <div className="w-[100%] pt-[5vh] pb-[2.5vh]">
          <p className="text-sm font-light">
            Kismet Casa 2023 |  
            <Link href="https://github.com/dylsteck/kismetcasa" className="pl-[0.5vw]">
               View code
            </Link>
          </p>
        </div>
    </main>
  )
}