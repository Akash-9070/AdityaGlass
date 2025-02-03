'use client'  // Add this at the top since we're using client-side features

import Link from 'next/link'
import { motion } from 'framer-motion'

const BillGenerator = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold mb-6">Bill Generator Tool</h2>
          <p className="text-gray-600 mb-8">
            Generate professional bills and invoices quickly and easily with our specialized tool.
          </p>
          <Link 
            href="/bill-generator"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Try Bill Generator
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default BillGenerator 