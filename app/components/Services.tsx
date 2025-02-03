'use client'

import { motion } from 'framer-motion'

const services = [
  {
    title: 'Glass Facades',
    description: 'Modern glass facades for commercial buildings and skyscrapers.',
    icon: '🏢',
  },
  {
    title: 'Residential Windows',
    description: 'Energy-efficient and stylish windows for modern homes.',
    icon: '🏠',
  },
  {
    title: 'Interior Glass',
    description: 'Elegant glass partitions and doors for office spaces.',
    icon: '🚪',
  },
  {
    title: 'Custom Solutions',
    description: 'Bespoke glass designs for unique architectural requirements.',
    icon: '✨',
  },
]

const Services = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Our Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
              }}
              className="service-card bg-white rounded-xl p-6 shadow-lg transition-all duration-300 hover:shadow-2xl cursor-pointer border border-gray-100"
            >
              <div className="text-4xl mb-4 transform transition-transform hover:scale-110">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

