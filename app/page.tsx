import { Inter } from 'next/font/google'
import { Footer, ZoraNFTViewer, KismetLogo } from '@/components'
import { XIcon } from '@/assets/socialMediaIcons'
import Image from 'next/image'
import rainbowkit from '@/public/rainbowkit-logo.png'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <header className="flex justify-center">
        <KismetLogo />
      </header>
      <main
        className={`text-center flex flex-col gap-16 justify-center items-center mx-4 md:mx-8 min-h-screen max-w-6xl ${inter.className}`}
      >
        <section>
          <h3>Kismet Casa</h3>
          <p className="max-w-3xl mx-auto">
            Was founded in 2018 by Luciano DeAngelo to unite like-minded
            individuals during the challenging times of the bear market. We
            partner with value-aligned organizations to subsidize housing and
            travel costs for our hackers. Lea Olmos joined Kismet in 2020 after
            being introduced to Luciano through a mutual friend. Lea has played
            an integral role in creating and maintaining Kismet Casa by
            spearheading our operations.
          </p>
        </section>
        <section className="flex flex-col gap-2">
          <h3>Events</h3>
          <a
            href="https://nouns.build/dao/zora/0x32297b7416294b1acf404b6148a3c58107ba8afd/vote/5"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-800"
          >
            <p>
              Kismet Casa at BRT Moments -{' '}
              <span className="font-light text-sm">Nov 2023</span>
            </p>
          </a>
        </section>
        <section className="flex flex-col gap-2">
          <h3>NFTs</h3>
          <div className="flex flex-wrap gap-4 justify-center items-center">
            <ZoraNFTViewer zoraURL="https://zora.co/collect/zora:0x8e4a7d53e12cea8f21646ef303fed39162e5df49/1" />
            <ZoraNFTViewer zoraURL="https://zora.co/collect/zora:0x8e4a7d53e12cea8f21646ef303fed39162e5df49/2" />
            <ZoraNFTViewer zoraURL="https://zora.co/collect/zora:0x8e4a7d53e12cea8f21646ef303fed39162e5df49/3" />
          </div>
        </section>
        <section className="flex flex-col gap-2">
          <h3>Contact</h3>
          <div className="flex flex-col gap-2 rounded-md border border-grey_light px-6 py-4">
            <a
              href="https://rainbow.me/kismetcasa.eth"
              target="_blank"
              rel="noreferrer"
              className="transition flex gap-2 w-fit items-center group"
            >
              <Image
                width={24}
                height={24}
                src={rainbowkit}
                alt="rainbowkit-logo"
                className="filter grayscale"
              />
              <p className="group-hover:text-blue-800 m-0">Kismetcasa.eth</p>
            </a>
            <a
              href="https://twitter.com/kismetcasa"
              target="_blank"
              rel="noreferrer"
              className="transition flex gap-2 w-fit items-center group"
            >
              <XIcon className="h-6 w-6 fill-current" />
              <p className="group-hover:text-blue-800 m-0">Kismet Twitter</p>
            </a>
            <a
              href="https://twitter.com/lucianodeangelo"
              target="_blank"
              rel="noreferrer"
              className="transition flex gap-2 w-fit items-center group"
            >
              <XIcon className="h-6 w-6 fill-current" />
              <p className="group-hover:text-blue-800 m-0">Luciano</p>
            </a>
            <a
              href="https://twitter.com/leaolmos"
              target="_blank"
              rel="noreferrer"
              className="transition flex gap-2 w-fit items-center group"
            >
              <XIcon className="h-6 w-6 fill-current " />
              <p className="group-hover:text-blue-800 m-0">Lea</p>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
