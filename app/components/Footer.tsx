const Footer = () => {
              return (
                <footer className="bg-gray-800 text-white py-8">
                  <div className="container mx-auto px-4">
                    <div className="flex flex-wrap justify-between items-center">
                      <div className="w-full md:w-1/3 text-center md:text-left mb-4 md:mb-0">
                        <h3 className="text-2xl font-bold">Aditya Glass & Aluminium</h3>
                        <p className="mt-2">Transforming spaces with premium glass solutions</p>
                      </div>
                      <div className="w-full md:w-1/3 text-center mb-4 md:mb-0">
                        <h4 className="text-lg font-semibold mb-2">Contact</h4>
                        <p>Email: AdityaGlass@gmail.com</p>
                        <p>Phone: +91 9828788889</p>
                      </div>
                      <div className="w-full md:w-1/3 text-center md:text-right">
                        <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
                        <div className="flex justify-center md:justify-end space-x-4">
                          <a href="#" className="hover:text-gray-400 transition duration-300">Facebook</a>
                          <a href="#" className="hover:text-gray-400 transition duration-300">Twitter</a>
                          <a href="#" className="hover:text-gray-400 transition duration-300">Instagram</a>
                        </div>
                      </div>
                    </div>
                    <div className="mt-8 text-center">
                      <p>&copy; 2023 Aditya Glass & Aluminium. All rights reserved.</p>
                    </div>
                  </div>
                </footer>
              )
            }
            
export default Footer; // Ensure this line is present
