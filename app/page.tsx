import { Inter } from 'next/font/google'
import { Footer, ZoraNFTViewer, KismetLogo } from '@/components'
import { XIcon } from '@/assets/socialMediaIcons'
import Image from 'next/image'
import rainbowkit from '@/public/rainbowkit-logo.png'
import warpcast from '@/public/warpcast-logo.png'
import { nfts } from '@/utils/nfts'

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
          <h3 className="pb-6">Kismet Casa</h3>
          <div className="max-w-[75%] md:max-w-[65%] mx-auto pb-3">
            <p className="text-lg pb-1 font-semibold">What?</p>
            <p>
              Kismet is a Community of individuals who forge their fate
              together. Kismet Casa is a collective effort to accommodate
              talented individuals who need support to attend crypto native
              hackathons and art exhibitions.
            </p>
          </div>
          <div className="max-w-[75%] md:max-w-[65%] mx-auto text-center pb-3">
            <p className="text-lg pb-1 font-semibold">How?</p>
            <p>
              We currently run both hacker and creator houses. We work with
              sponsors to accommodate their stay, their food, and anything else
              we can. We support our hackers by helping them find the right team
              members, hosting workshops, and providing the resources they need.
              We support our creators by helping them meet and collaborate with
              new artists, gain exposure, and by providing special access to
              events.
            </p>
          </div>
          <div className="max-w-[75%] md:max-w-[65%] mx-auto pb-3">
            <p className="text-lg pb-1 font-semibold">Why?</p>
            <p>
              Luciano found it was difficult to find efficient accommodations
              when attempting to attend Ethereum Hackathons throughout high
              school and college. There weren’t many opportunities for those who
              couldn’t afford a hotel or Airbnb. In an effort to change that for
              hackers, we created Kismet Casa. Lea then asked, “Why can’t we do
              this for artists and creators” so we did. Our goal for Kismet Casa
              is to create more opportunities for hackers and creators who could
              benefit from our support.
            </p>
          </div>
          <div className="max-w-[75%] md:max-w-[65%] mx-auto">
            <p className="text-lg pb-1 font-semibold">Who?</p>
            <p>Kismet Casa is run by Luciano DeAngelo and Lea Olmos.</p>
          </div>
        </section>
        <section className="flex flex-col gap-2">
          <h3>Past Events</h3>
          <a
            href="https://twitter.com/KismetCasa/status/1694392087452545122"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-800"
          >
            <p>
              Kismet Casa at Ethereum Argentina -{' '}
              <span className="font-light text-sm">Aug 2023</span>
            </p>
          </a>
          <a
            href="https://twitter.com/KismetCasa/status/1722344034369224728"
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
          <h3>Creator House 2023 Collection</h3>
          <div className="flex flex-wrap gap-4 justify-center items-center">
            {nfts.map((nft) => (
              <ZoraNFTViewer key={`zora-nft-${nfts.indexOf(nft)}`} nft={nft} />
            ))}
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
              <p className="group-hover:text-blue-800 m-0">Kismet Casa</p>
            </a>
            <a
              href="https://twitter.com/lucianodeangeIo"
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
            <a
              href="https://warpcast.com/luciano"
              target="_blank"
              rel="noreferrer"
              className="transition flex gap-2 w-fit items-center group"
            >
              <Image
                width={24}
                height={24}
                src={warpcast}
                alt="warpcast-logo"
                className="filter grayscale"
              />
              <p className="group-hover:text-blue-800 m-0">Luciano</p>
            </a>
            <a
              href="https://warpcast.com/lea-olmos"
              target="_blank"
              rel="noreferrer"
              className="transition flex gap-2 w-fit items-center group"
            >
              <Image
                width={24}
                height={24}
                src={warpcast}
                alt="warpcast-logo"
                className="filter grayscale"
              />
              <p className="group-hover:text-blue-800 m-0">Lea</p>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
