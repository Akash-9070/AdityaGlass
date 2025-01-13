'use client'

import Image from 'next/image'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

const projects = [
  { id: 1, title: 'Modern Office Building', image: '/office.jpg' },
  { id: 2, title: 'Luxury Residence', image: '/home.jpg' },
  { id: 3, title: 'Shopping Mall', image: '/buildings.jpg' },
  { id: 4, title: 'Hotel Facade', image: '/pexels-sevenstormphotography-443383.jpg' },
]

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Our Portfolio
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project) => (
            <motion.div 
              key={project.id} 
              className="relative group cursor-pointer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedProject(project.id)}
            >
              <Image
                src={project.image}
                alt={project.title}
                width={800}
                height={600}
                className="rounded-lg shadow-md transition duration-300 group-hover:opacity-75"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                <h3 className="text-white text-xl font-semibold text-center bg-black bg-opacity-50 p-4 rounded">
                  {project.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <AnimatePresence>
        {selectedProject !== null && (
          <motion.div 
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className="bg-white p-4 rounded-lg max-w-3xl w-full mx-4"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold">{projects[selectedProject - 1].title}</h3>
                <button onClick={() => setSelectedProject(null)} className="text-gray-500 hover:text-gray-700">
                  <X size={24} />
                </button>
              </div>
              <Image
                src={projects[selectedProject - 1].image}
                alt={projects[selectedProject - 1].title}
                width={1600}
                height={1200}
                className="rounded-lg"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Portfolio

