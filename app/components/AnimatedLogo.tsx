'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const AnimatedLogo = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.1, rotate: 5 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <Image
        src="/logo.svg" // Make sure to add your logo file
        alt="Aditya Glass & Aluminium Logo"
        width={100}
        height={100}
      />
    </motion.div>
  )
}

export default AnimatedLogo

