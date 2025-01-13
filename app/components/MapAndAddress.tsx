import { MapPin, Phone, Mail } from 'lucide-react'

const MapAndAddress = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Find Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps?q=26.90506344081488,75.72431355915595&output=embed"


              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
            ></iframe>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-indigo-600 mr-4 mt-1" />
                <p>
                  14 Vivek, Gandhipath West, Near 200ft. Bypass  <br />
                  Vaishali Nagar, Jaipur, Rajasthan 302021<br />
                  India
                </p>
              </div>
              <div className="flex items-center">
                <Phone className="w-6 h-6 text-indigo-600 mr-4" />
                <p>+91 9828788889</p>
              </div>
              <div className="flex items-center">
                <Mail className="w-6 h-6 text-indigo-600 mr-4" />
                <p>Adityaglassjaipur@gmail.com</p>
              </div>
            </div>
            <div className="mt-8">
              <h4 className="text-xl font-semibold mb-4">Business Hours</h4>
              <ul className="space-y-2">
                <li>Monday - Friday: 9:00 AM - 6:00 PM</li>
                <li>Saturday: 10:00 AM - 4:00 PM</li>
                <li>Sunday: Closed</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MapAndAddress

