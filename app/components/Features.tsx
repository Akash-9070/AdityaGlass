'use client'

import { motion } from 'framer-motion'
import { Pencil, ShieldCheck, HeadsetIcon as HeadsetMic, Clock } from 'lucide-react'

const features = [
  { icon: Pencil, title: 'Custom Designs', description: 'Tailored glass solutions for your unique architectural needs.' },
  { icon: HeadsetMic, title: 'Expert Consultation', description: 'Professional advice to help you choose the perfect glass elements.' },
  { icon: ShieldCheck, title: 'Quality Materials', description: 'Premium glass and aluminium for durability and aesthetics.' },
  { icon: Clock, title: 'Efficient Installation', description: 'Swift and precise installation by our skilled team.' },
];

const Features = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Our Exceptional Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <feature.icon className="w-12 h-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features

