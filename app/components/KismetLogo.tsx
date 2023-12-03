'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import kismetCreatorHouse from '../../public/kismetCreatorHouse.png'

export default function KismetLogo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <Image
        src={kismetCreatorHouse}
        alt="Kismet creator house image"
        width="500"
        height="500"
        objectFit="contain"
      />
    </motion.div>
  )
}
