const Banner = () => {
  return (
    <main className="pt-16 bg-gradient-to-r from-yellow-100 via-yellow-300 to-yellow-300">
        
        
        <section className="container mx-auto px-4 py-12 md:py-24">
            <div className="flex flex-col md:flex-row items-center justify-between">
                
                <div className="w-full md:w-1/2 mb-8 md:mb-0">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Welcome to AL Ashraf Lights</h1>
                    <p className="text-xl text-gray-600 mb-6">
                        We're redefining spaces with stylish, energy-efficient fancy lights. Quality, innovation, and seamless service—because your space deserves the best.
                    </p>
                </div>

                
                <div className="w-full md:w-1/2">
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why Choose Us?</h2>
                        <ul className="space-y-2 mb-6">
                            <li className="flex items-center">
                                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                                Premium Quality & Unique Designs 
                            </li>
                            <li className="flex items-center">
                                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                                Energy-Efficient & Long-Lasting
                            </li>
                            <li className="flex items-center">
                                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                                Fast Delivery & Excellent Support
                            </li>
                        </ul>
                        <div className="space-y-4">
                            <a href="#" className="block text-center bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300">Get Started</a>
                            <a href="#" className="block text-center border border-blue-600 text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-blue-50 transition duration-300">Contact Sales</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        
    </main>
  );
}

export default Banner;