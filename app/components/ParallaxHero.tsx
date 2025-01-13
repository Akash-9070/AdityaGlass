'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ReactTyped } from 'react-typed'
import { Mic, Brain, Volume2, Repeat } from 'lucide-react'

const words = ['Elegance', 'Innovation', 'Quality', 'Durability'];

const ParallaxHero = () => {
  const [windowHeight, setWindowHeight] = useState(0)
  const [wordIndex, setWordIndex] = useState(0)

  useEffect(() => {
    setWindowHeight(window.innerHeight)
    const interval = setInterval(() => {
      setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [])

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-blue-100 to-indigo-100">
      <div className="absolute inset-0">
        <Image
          src="/placeholder.svg"
          alt="Modern glass building"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="opacity-20"
        />
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center px-4">
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-black mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Aditya Glass and Aluminium
          </motion.h1>
          <motion.p
            className="text-2xl sm:text-3xl md:text-4xl text-gray-800 mb-2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Transforming Spaces with
          </motion.p>
          <div className="h-20 mb-6">
            <AnimatePresence mode="wait">
              <motion.span
                key={wordIndex}
                className="text-4xl sm:text-5xl md:text-6xl font-bold text-indigo-600 block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                {words[wordIndex]}
              </motion.span>
            </AnimatePresence>
          </div>
          <motion.a
            href="#contact"
            className="bg-indigo-600 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-indigo-700 transition duration-300 inline-block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get a Quote
          </motion.a>
          <motion.p
            className="text-gray-600 text-lg mt-4"
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

