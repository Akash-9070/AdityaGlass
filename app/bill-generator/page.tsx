export default function BillGeneratorPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Bill Generator Tool</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="specifications">
          <h2 className="text-2xl font-semibold mb-4">Specifications</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Easy-to-use interface</li>
            <li>Customizable templates</li>
            <li>Export to PDF format</li>
            <li>Auto-calculation features</li>
          </ul>
        </div>
        
        <div className="guidelines">
          <h2 className="text-2xl font-semibold mb-4">Guidelines</h2>
          <ol className="list-decimal pl-5 space-y-2">
            <li>Enter your business details</li>
            <li>Add customer information</li>
            <li>Input items and prices</li>
            <li>Preview and download your bill</li>
          </ol>
        </div>
      </div>

      <div className="bg-gray-50 rounded-xl p-8 mb-12">
        <h2 className="text-2xl font-semibold mb-4">How to Use</h2>
        <div className="space-y-4">
          <div className="flex items-start">
            <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3">1</span>
            <p className="pt-1">Download and unzip the file to your preferred location</p>
          </div>
          <div className="flex items-start">
            <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3">2</span>
            <p className="pt-1">Navigate to the 'dist' folder in the extracted files</p>
          </div>
          <div className="flex items-start">
            <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3">3</span>
            <p className="pt-1">Locate the 'glass_calculator.exe' file - this is your main application</p>
          </div>
          <div className="flex items-start">
            <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3">4</span>
            <p className="pt-1">Double-click the 'glass_calculator.exe' file to launch the application</p>
          </div>
        </div>
        
        <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <p className="text-yellow-800">
            <span className="font-semibold">Note:</span> You can move the executable file to any location on your computer and create a shortcut for easy access.
          </p>
        </div>
      </div>

      <div className="text-center">
        <a 
          href="/glass_calculator.zip" 
          download
          className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Download Tool
        </a>
      </div>
    </div>
  )
} 