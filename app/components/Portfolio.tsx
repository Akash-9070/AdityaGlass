'use client'

import Image from 'next/image'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

const projects = [
  { id: 1, title: 'Modern Office Building', image: '/pexels-pixabay-53212.jpg' },
  { id: 2, title: 'Luxury Residence', image: '/pexels-sevenstormphotography-443383.jpg' },
  { id: 3, title: 'Shopping Mall', image: '/pexels-riciardus-243076.jpg' },
  { id: 4, title: 'Hotel Facade', image: '/pexels-pixabay-258154.jpg' },
  { id: 5, title: 'Corporate Headquarters', image: '/buildings.jpg' },
  { id: 6, title: 'Residential Complex', image: '/home.jpg' },
  { id: 7, title: 'Airport Terminal', image: '/pexels-tanathip-rattanatum-1050216-2026324.jpg' },
  { id: 8, title: 'Museum of Modern Art', image: '/pexels-ena-marinkovic-1814213-3697742.jpg' },
  { id: 9, title: 'University Campus', image: '/office.jpg' },
  { id: 10, title: 'Sports Stadium', image: '/pexels-tomfisk-3441726.jpg' },
  { id: 11, title: 'Public Library', image: '/pexels-polina-zimmerman-3747505.jpg' },
  { id: 12, title: 'Beachfront Resort', image: '/pexels-kelvinernandi-3075763.jpg' },
];

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
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {projects.map((project) => (
            <motion.div 
              key={project.id} 
              className="relative group cursor-pointer overflow-hidden rounded-lg"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
              }}
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedProject(project.id)}
            >
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={300}
                className="transition duration-300 group-hover:scale-110 object-cover w-full h-64"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                <h3 className="text-white text-xl font-semibold text-center p-4">
                  {project.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
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

