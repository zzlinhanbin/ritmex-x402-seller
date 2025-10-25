export default function ProtectedPage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Header */}
      <header className="border-b border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-linear-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">X</span>
              </div>
              <h1 className="text-xl font-bold text-gray-900 dark:text-white">Ritmex Seller</h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-sm font-medium rounded-full">
                ✓ Payment Verified
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 mb-6">
              🔒 Protected Content Access
            </span>
            <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Welcome to the
              <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Premium Zone</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              You&apos;ve successfully paid $0.01 to access this exclusive content. This demonstrates the power of X402 micropayments for content monetization.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-linear-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105">
              Explore Features
            </button>
            <button className="px-8 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              What You Get Access To
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Premium features unlocked with your micropayment
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Analytics Dashboard
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Real-time insights and performance metrics for your content monetization strategy.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Instant Payments
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Lightning-fast micropayments powered by X402 protocol for seamless user experience.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🔐</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Secure Access
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Blockchain-verified access control ensuring only paying users can view premium content.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Details */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-linear-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">Payment Successful!</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-sm opacity-90 mb-1">Amount Paid</div>
                  <div className="text-2xl font-bold">$0.01</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-sm opacity-90 mb-1">Network</div>
                  <div className="text-2xl font-bold">Base Sepolia</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-sm opacity-90 mb-1">Status</div>
                  <div className="text-2xl font-bold text-green-300">✓ Verified</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Premium Content Preview
          </h2>
          
          <div className="bg-white dark:bg-gray-700 rounded-xl p-8 shadow-lg">
            <div className="prose dark:prose-invert max-w-none">
              <h3 className="text-2xl font-semibold mb-4">X402 Micropayments: The Future of Content Monetization</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                The X402 protocol represents a revolutionary approach to content monetization, enabling creators to charge tiny amounts for premium content without the friction of traditional payment systems.
              </p>
              
              <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 mb-6">
                <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Key Benefits:</h4>
                <ul className="list-disc list-inside text-blue-800 dark:text-blue-200 space-y-1">
                  <li>Instant settlement with minimal fees</li>
                  <li>No subscription fatigue for users</li>
                  <li>Blockchain-verified access control</li>
                  <li>Global accessibility without traditional banking</li>
                </ul>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300">
                This protected page demonstrates how seamlessly X402 integrates with modern web applications, providing a smooth user experience while ensuring creators are fairly compensated for their content.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-linear-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">X</span>
              </div>
              <h3 className="text-xl font-bold">Ritmex Seller</h3>
            </div>
            <p className="text-gray-400 mb-6">
              Powered by X402 Protocol • Built with Next.js
            </p>
            <div className="flex justify-center space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Documentation</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
