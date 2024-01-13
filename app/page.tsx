import { Inter } from 'next/font/google'
import { Footer, ZoraNFTViewer, KismetLogo } from '@/components'
import { XIcon } from '@/assets/socialMediaIcons'
import Image from 'next/image'
import rainbowkit from '@/public/rainbowkit-logo.png'
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
          <h3>Kismet Casa</h3>
          <span className="max-w-[75%] md:max-w-[65%] mx-auto">
            <b className="text-lg">What?</b>
            <p>
              Kismet is a Community of individuals who forge their fate,
              together.
            </p>
          </span>
          <span className="max-w-[75%] md:max-w-[65%] mx-auto">
            <b className="text-lg">Why?</b>
            <p>Kismet Casa&apos;s purpose is to support those who need it.</p>
          </span>
          <span className="text-center">
            <b className="text-lg">How?</b>
            <p className="mx-auto max-w-[75%] md:max-w-[65%]">
              We currently create opportunities for builders to attend Ethereum
              events and hackatons by hosting hacker houses where we accommodate
              their stay, their food, and anything else we can. We also support
              their projects by helping them find the right team members,
              hosting workshops, and providing the resources they need.
            </p>
            <p className="mx-auto max-w-[75%] md:max-w-[65%]">
              We do the same for creators during IRL art experiences. Helping
              them meet new artists, gain exposure, and getting them special
              access to events.
            </p>
          </span>
          <span className="max-w-[75%] md:max-w-[65%] mx-auto">
            <b className="text-lg">Who?</b>
            <p>
              Kismet was founded in the depths of the 2018 bear market by
              Luciano DeAngelo.
            </p>
            <p>Kismet Casa is run by Luciano DeAngelo and Lea Olmos.</p>
          </span>
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
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
