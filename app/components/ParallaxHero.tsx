'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ReactTyped } from 'react-typed'

const ParallaxHero = () => {
  const [windowHeight, setWindowHeight] = useState(0)
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, windowHeight], [0, windowHeight * 0.5])

  useEffect(() => {
    setWindowHeight(window.innerHeight)
  }, [])

  return (
    <div className="relative h-screen overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0">
        <Image
          src="/placeholder.svg"
          alt="Modern glass building"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </motion.div>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center">
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Aditya Glass & Aluminium
          </motion.h1>
          <ReactTyped
            strings={['Transforming spaces with premium glass solutions']}
            typeSpeed={40}
            backSpeed={50}
            loop
            className="text-xl sm:text-2xl md:text-3xl text-white mb-8 h-[40px] sm:h-[60px] md:h-[80px] flex items-center justify-center"
          />
          <motion.a
            href="#contact"
            className="bg-white text-gray-800 font-bold py-3 px-8 rounded-full text-lg hover:bg-gray-200 transition duration-300"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get a Quote
          </motion.a>
          <motion.p
            className="text-white text-lg mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: [0, 1, 1, 0],
              y: [20, 0, 0, -20]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "loop",
              times: [0, 0.1, 0.9, 1]
            }}
          >
            +91 9828788889
          </motion.p>
        </div>
      </div>
    </div>
  )
}

export default ParallaxHero

