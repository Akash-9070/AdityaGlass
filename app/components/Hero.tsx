'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useState } from 'react'

const Hero = () => {
  const [imageError, setImageError] = useState<string | null>(null)

  return (
    <div className="relative h-screen border-2 border-red-500">
      {imageError && (
        <div className="absolute top-0 left-0 bg-red-500 text-white p-2 z-50">
          Error loading image: {imageError}
        </div>
      )}
      <Image
        src="/dark_1.jpg"
        alt="Modern glass building"
        fill
        style={{ objectFit: 'cover' }}
        quality={100}
        priority
        className="z-0"
        onError={(e) => {
          console.error('Image failed to load:', e)
          setImageError('Failed to load image. Check console for details.')
        }}
        onLoad={() => console.log('Image loaded successfully')}
      />
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
          <motion.p 
            className="text-xl sm:text-2xl md:text-3xl text-white mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Transforming spaces with premium glass solutions
          </motion.p>
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
        </div>
      </div>
    </div>
  )
}

export default Hero

